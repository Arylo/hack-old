import typescript from 'rollup-plugin-typescript';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'lib/vue/index.ts',
    output: {
        format: 'esm',
        file: 'dist/vue/index.js',
        sourcemap: true
    },
    plugins: [
        typescript({
            tsconfig: 'tsconfig.prod.json'
        }),
        commonjs(),
        vue()
    ]
};
