import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const config = {
  input: "src/index.ts",
  plugins: [
    // nodeResolve(),
    typescript({
      tsconfig: "tsconfig.json",
    }),
  ],
  watch: {
    include: "src/**",
  },
};

export default config;
