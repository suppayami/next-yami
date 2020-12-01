module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        "browser": true,
        "jest": true,
        "es6": true,
        "node": true,
    },
    extends: [
        'react-app',
        "plugin:jsx-a11y/recommended",
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier', 'import', 'jsx-a11y', 'react-hooks'],
    rules: {
        "prettier/prettier": ["error", {}, {
            "usePrettierrc": true
        }],
        "array-bracket-spacing": ["warn", "never"],
        "object-curly-spacing": ["warn", "always"],
        "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/func-call-spacing": ["error"],
        "@typescript-eslint/member-ordering": ["warn"],
        "@typescript-eslint/no-require-imports": ["error"],
        "@typescript-eslint/no-empty-interface": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-unused-vars": ["error", {
            "argsIgnorePattern": "^_",
            "ignoreRestSiblings": true
        }],
        "@typescript-eslint/no-non-null-assertion": ["off"],
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/no-use-before-define": ["off"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "semi": "off",
        "import/no-unresolved": "off",
        "import/newline-after-import": ["error"],
        "import/no-default-export": ["error"],
        "import/no-named-as-default": ["off"],
        "import/order": ["error", {
            "newlines-between": "always",
            "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
            "pathGroups": [
                {
                    "pattern": "@/**",
                    "group": "internal"
                }
            ],
            "pathGroupsExcludedImportTypes": ["builtin"]
        }],
    },
}
