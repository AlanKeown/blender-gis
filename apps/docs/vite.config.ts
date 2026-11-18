import adapter from '@sveltejs/adapter-static';
import { defaultTheme } from '@sveltepress/theme-default';
import { sveltepress } from '@sveltepress/vite';
import { defineConfig } from 'vite';
import { navbar, sidebar } from './navigation.ts';

// SvelteKit 3 reads no svelte.config.js: Kit options go in `svelteKitOptions`.
// Don't add a separate sveltekit() plugin alongside sveltepress().
export default defineConfig({
  plugins: [
    sveltepress({
      siteConfig: {
        title: 'Blender for GIS',
        description:
          'A showcase of what Blender can usefully do with geospatial data.'
      },
      svelteKitOptions: {
        // 404.html lets Cloudflare show a themed page for unknown paths (wrangler.jsonc).
        adapter: adapter({ fallback: '404.html' })
      },
      theme: defaultTheme({
        highlighter: {
          languages: [
            'sh',
            'bash',
            'powershell',
            'python',
            'toml',
            'ini',
            'yaml',
            'json',
            'jsonc',
            'ts',
            'js',
            'svelte',
            'html',
            'css',
            'md'
          ]
        },
        navbar,
        sidebar,
        github: 'https://github.com/AlanKeown/blender-gis',
        // Hex values mirror the cii-design-system docs site (ADR 0008).
        themeColor: {
          light: '#F5F7FB',
          dark: '#0A121C',
          primary: '#7955BD',
          primaryDeep: '#58358C',
          hover: '#6A46AC',
          gradient: { start: '#122B4D', end: '#7955BD' }
        }
      })
    })
  ]
});
