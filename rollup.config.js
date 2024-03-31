import importAssertions from "rollup-plugin-import-assertions";

export default {
  input: "app.mjs",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [importAssertions()],
};
