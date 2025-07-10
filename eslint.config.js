// eslint.config.js
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactNative from "eslint-plugin-react-native";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginTS from "@typescript-eslint/eslint-plugin";
import parserTS from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: parserTS,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    ignores: ["node_modules", ".expo", ".expo-shared", "build", "dist"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-native/all",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "prettier",
    ],
    plugins: {
      react: eslintPluginReact,
      "react-native": eslintPluginReactNative,
      import: eslintPluginImport,
      "@typescript-eslint": eslintPluginTS,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-native/no-inline-styles": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
