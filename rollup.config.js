import resolve from "rollup-plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.js",
  output: {
    file: "lib/bundle.umd.js",
    format: "umd",
    exports: "named",
    name: "google-maps-icons",
    sourcemap: true
  },
  onwarn,
  plugins: [
    resolve({ extensions: [".mjs", ".js", ".json"] }),
    sourcemaps(),
    copy({
      targets: [
        { src: "README.md", dest: "lib" },
        { src: "src/index.js", dest: "lib" }
      ]
    })
  ]
};

function onwarn(message) {
  const suppressed = ["UNRESOLVED_IMPORT", "THIS_IS_UNDEFINED"];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
