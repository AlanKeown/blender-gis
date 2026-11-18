/// <reference types="node" />
// Adds a Content-Security-Policy <meta> tag to every prerendered page in build/, allowing
// each inline script on that page by its SHA-256 hash.
//
// SvelteKit's own `csp` option only hashes the scripts SvelteKit generates. The theme also
// emits an inline dark-mode script (via {@html}), so the hashes are computed here from
// the final HTML instead, which covers every inline script and can't go stale.
//
// Headers that a <meta> CSP can't carry (frame-ancestors and the like) are in
// static/_headers.
import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const buildDir = fileURLToPath(new URL('../build/', import.meta.url));

function policy(scriptHashes: string[]): string {
  return [
    "default-src 'self'",
    // Pagefind search compiles WebAssembly.
    `script-src 'self' 'wasm-unsafe-eval' ${scriptHashes.join(' ')}`,
    "style-src 'self'",
    // Code highlighting and Svelte components set style="" attributes.
    "style-src-attr 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "worker-src 'self'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'"
  ].join('; ');
}

const inlineScript = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/g;
const charsetMeta = '<meta charset="utf-8" />';

async function htmlFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.html'))
    .map((e) => join(e.parentPath, e.name));
}

let pages = 0;
let scripts = 0;

for (const file of await htmlFiles(buildDir)) {
  const html = await readFile(file, 'utf8');
  if (html.includes('http-equiv="content-security-policy"')) {
    throw new Error(`${file} already has a CSP <meta> tag`);
  }
  if (!html.includes(charsetMeta)) {
    throw new Error(`${file} has no ${charsetMeta} to insert the CSP after`);
  }

  const hashes = new Set<string>();
  for (const [, attrs = '', body] of html.matchAll(inlineScript)) {
    if (/\ssrc=/.test(attrs) || body.length === 0) continue;
    const digest = createHash('sha256').update(body, 'utf8').digest('base64');
    hashes.add(`'sha256-${digest}'`);
  }

  const meta = `<meta http-equiv="content-security-policy" content="${policy([...hashes])}" />`;
  await writeFile(
    file,
    html.replace(charsetMeta, `${charsetMeta}\n    ${meta}`)
  );
  pages++;
  scripts += hashes.size;
}

if (pages === 0) throw new Error(`No HTML files found in ${buildDir}`);
console.log(`CSP added to ${pages} pages (${scripts} inline script hashes)`);
