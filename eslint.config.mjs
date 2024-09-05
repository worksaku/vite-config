import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    rules: {
      'react/react-in-jsx-scope': 'off',
      eqeqeq: 'error',
      'no-irregular-whitespace': 'error',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
];
