import baseConfig from "./rollup.config.base.js";

const config = Object.assign({}, baseConfig, {
  output: {
    file: "dist/index.umd.js",
    format: "umd",
    name: "VueObserverVisibility",
    exports: "named",
  },
});

export default config;
