import js from "@eslint/js"
import globals from "globals"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import astro from "eslint-plugin-astro"

export default [
  {
    ignores: [".astro/", ".vscode/", "dist/", "node_modules/", "public/", "src/env.d.ts"],
  },
  js.configs.recommended,
  ...tsPlugin.configs["flat/recommended"],
  ...astro.configs["flat/recommended"],
  {
    files: ["test/**/*.{mjs,ts}"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      semi: ["error", "never"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
    },
  },
]
