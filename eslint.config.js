import js from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import eslintImport from "eslint-plugin-import";
import jsxA11ly from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

import bestPractices from "./.eslint_rules/best-practices.js";
import errors from "./.eslint_rules/errors.js";
import es6 from "./.eslint_rules/es6.js";
import imports from "./.eslint_rules/imports.js";
import reactA11y from "./.eslint_rules/react-a11y.js";
import variables from "./.eslint_rules/variables.js";

export default tseslint.config(
  { ignores: ["dist", "vite.config.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: eslintImport,
      "jsx-a11y": jsxA11ly,
      ...pluginQuery.configs["flat/recommended"],
    },
    settings: {
      ...imports.settings,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-hooks/exhaustive-deps": ["error"],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...bestPractices.rules,
      ...errors.rules,
      ...es6.rules,
      ...imports.rules,
      ...variables.rules,
      ...reactA11y.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
);
