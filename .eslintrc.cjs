module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "xo",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "naming-convention": "off",
      },
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      plugins: ["astro"],
      extends: ["plugin:astro/recommended"],
    },
  ],
  ignorePatterns: ["/*.js", "/*.cjs"],

  parser: "@typescript-eslint/parser",
  plugins: ["jsx-a11y"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "naming-convention": "off",
    "no-console": "error",
    "no-duplicate-imports": "error",
    "no-unused-vars": "warn",
  },
};
