module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {}, // Add this line
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "import",
    "unused-imports",
    "@typescript-eslint",
    "react",
    "react-hooks",
  ],
  rules: {
    // General JavaScript/TypeScript rules
    "prefer-const": "off",
    "no-useless-escape": "off",
    "no-empty": "off",
    "no-case-declarations": "off",
    // TypeScript-specific rules
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // Other specific rules
    "import/no-unresolved": ["error"],
    "unused-imports/no-unused-imports": "error",
    "no-unsafe-optional-chaining": "off",
    "react/no-unknown-property": [2, { ignore: ["jsx", "global"] }],
  },
};
