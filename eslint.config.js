// eslint.config.js
import js from '@eslint/js';
import parserTS from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import eslintImport from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules', '.expo', '.expo-shared', 'build', 'dist'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: parserTS,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        it: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-native': reactNative,
      import: eslintImport,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/ignore': ['node_modules/react-native'],
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: '.', // looks at tsconfig.json
        },
      },
    },
    rules: {
      // Base recommended rules
      ...js.configs.recommended.rules,

      // TypeScript
      ...tseslint.configs.recommended.rules,

      // React
      ...react.configs.recommended.rules,

      // React Native
      ...reactNative.configs.all.rules,

      // Import plugin
      ...eslintImport.configs.recommended.rules,

      // Prettier override
      ...prettier.rules,

      // Custom overrides
      'react/react-in-jsx-scope': 'off',
      'react-native/no-inline-styles': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off', // Handled by TypeScript
      'react-native/sort-styles': 'off',
      'react-native/no-color-literals': 'off',
      'react-native/no-raw-text': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
];

