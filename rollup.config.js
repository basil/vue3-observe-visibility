import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.es.js",
        format: "es",
      },
      {
        file: "dist/index.browser.js",
        format: "iife",
        name: "VueObserverVisibility",
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "VueObserverVisibility",
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    ],
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
      }),
    ],
    external: ["vue"],
    watch: {
      include: "src/**",
    },
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];

export default config;
