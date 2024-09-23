import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            "indent": [
                "error",
                4,
                {
                    "SwitchCase": 1
                }
            ],
            "linebreak-style": ["error", "unix"],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "no-multiple-empty-lines": [
                "error",
                {
                    "max": 1
                }
            ],
            "no-multi-spaces": [
                "error",
                {
                    "ignoreEOLComments": false
                }
            ],
            "arrow-spacing": "error",
            "space-infix-ops": "error",
            "no-duplicate-imports": "error",
            "@typescript-eslint/no-unused-vars": "error",
            "no-unused-vars": "off",
            "no-console": "error",
            "arrow-body-style": ["error", "always"],
            "eqeqeq": ["error", "always"],
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
        },
    },
)
