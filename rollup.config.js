import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const packageJson = require("./package.json");
const extensions = [".js", ".jsx"];
const external = ["react","react-dom","prop-types","styled-components"];

process.env.BABEL_ENV = "production";

export default {
    input: "src/index.js",
    output:[
        {
            file: packageJson.main,
            format:"cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins:[
        peerDepsExternal(),
        resolve({extensions}),
        babel({
            extensions,
            include:['src/**/*'],
            exclude: /node_moudles/,
            babelHelpers: 'runtime',
            skipPreflightCheck: true
        }),
        commonjs({
            include: /node_moudles/
        }),
        image(),
    ],
    external
}