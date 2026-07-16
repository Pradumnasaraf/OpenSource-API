import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["test/**", "config/**", "node_modules/**", "public/**"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
