import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import path from "path";

export default {
  input: path.resolve(__dirname, "src", "index.ts"),
  output: [
    {
      dir: path.resolve(__dirname, "lib"),
      format: "es",
    },
  ],
  plugins: [
    typescript(),
    babel({
      babelHelpers: "bundled",
    }),
    terser(),
  ],
};
