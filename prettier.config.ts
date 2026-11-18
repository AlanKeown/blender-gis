import type { Config } from 'prettier';

// One configuration for every workspace (ADR 0007).
const config: Config = {
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-svelte'],
  overrides: [
    { files: '*.svelte', options: { parser: 'svelte' } },
    // Keep the authors' line breaks in prose; don't rewrap paragraphs.
    { files: '*.md', options: { proseWrap: 'preserve' } }
  ]
};

export default config;
