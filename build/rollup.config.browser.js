import baseConfig from "./rollup.config.base.js";

const config = Object.assign({}, baseConfig, {
  output: {
    file: "dist/index.browser.js",
    format: "iife",
    name: "VueObserverVisibility",
    globals: {
      vue: "Vue",
    },
    exports: "named",
  },
});

export default config;
