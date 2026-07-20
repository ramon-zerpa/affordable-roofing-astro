import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: [
      ".astro/**",
      "dist/**",
      "node_modules/**",
      "coverage/**",
      "fidelity-audit/**",
      "psi-audit/**",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "astro/no-set-html-directive": "error",
    },
  },
);
