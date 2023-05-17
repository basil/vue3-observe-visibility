import baseConfig from './rollup.config.base.js';

const config = Object.assign({}, baseConfig, {
    output: {
        file: 'dist/index.es.js',
        format: 'es',
    },
});

export default config;
