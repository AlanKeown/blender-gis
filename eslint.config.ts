import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';

// One configuration for every workspace (ADR 0007). Prettier owns formatting, so the
// Prettier configs come after the rule sets and switch off any conflicting rules.
export default defineConfig(
  globalIgnores([
    'vendor/',
    '**/build/',
    '**/dist/',
    '**/.svelte-kit/',
    '**/.wrangler/'
  ]),
  js.configs.recommended,
  ts.configs.recommended,
  svelte.configs.recommended,
  prettier,
  svelte.configs.prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      // TypeScript already reports undefined names, and better.
      'no-undef': 'off'
    }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser
      }
    }
  }
);
