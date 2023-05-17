import baseConfig from "./rollup.config.base.js";

const config = Object.assign({}, baseConfig, {
  output: {
    file: "dist/index.browser.js",
    format: "iife",
    name: "VueObserverVisibility",
    exports: "named",
  },
});

export default config;
