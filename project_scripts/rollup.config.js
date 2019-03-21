import typescript from 'rollup-plugin-typescript';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'lib/vue/NoticeDialog/index.vue',
    output: {
        format: 'esm',
        file: 'lib/vue/NoticeDialog/index.js'
    },
    external: ['vue', 'element-ui'],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.prod.json'
        }),
        commonjs(),
        vue()
    ]
};
