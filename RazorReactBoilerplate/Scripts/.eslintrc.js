// @ts-check

const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "import", "unused-imports"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "unused-imports/no-unused-imports": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});
