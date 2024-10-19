import js from "@eslint/js"; // ESLint's recommended config
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  {
    ignores: ["node_modules", "dist"], // Add any folders to ignore
    files: ["**/*.{js,jsx,ts,tsx}"], // Specify the file types to lint
    languageOptions: {
      parser: tsParser, // TypeScript parser
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    extends: [
      js.configs.recommended, // ESLint's recommended rules
      "plugin:@typescript-eslint/recommended", // TypeScript rules
      "next/core-web-vitals", // Next.js core web vitals
      "turbo", // Turbo rules
      "plugin:tailwindcss/recommended", // Tailwind CSS rules
      "prettier", // Prettier configuration
    ],
    plugins: {
      "@typescript-eslint": tsPlugin,
      tailwindcss: tailwindcss,
    },
    rules: {
      "no-unused-vars": "error", // unused vars error
      "@typescript-eslint/no-unused-vars": "error", // Enable TypeScript rule
      "@typescript-eslint/no-explicit-any": "error", // Disallow 'any' type
      "tailwindcss/classnames-order": "off", // Tailwind classnames order rule
      "@next/next/no-html-link-for-pages": "off", // Allow HTML links in Next.js
      "tailwindcss/no-custom-classname": "off", // Allow custom classnames in Tailwind
      "turbo/no-undeclared-env-vars": "off", // Allow undeclared environment variables
      eqeqeq: "error", // Require === and !==
      "no-console": "warn", // Warn on console statements
      curly: "error", // Require curly braces for all control statements
      "no-eval": "error", // Disallow use of eval()
      "no-implied-eval": "error", // Disallow implied eval
      "no-redeclare": "error", // Disallow variable redeclaration
      quotes: ["error", "double"], // Enforce double quotes
      semi: ["error", "always"], // Require semicolons
    },
  },
];
