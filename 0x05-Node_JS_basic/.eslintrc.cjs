module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false, // Allows ESLint to work without a Babel config file
    babelOptions: {
      presets: ["@babel/preset-env"],
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2020, // ECMAScript version 2020
    sourceType: "module", // Let ESLint know you are using ES Modules
  },
  rules: {
    // Define any specific ESLint rules here
  },
};
