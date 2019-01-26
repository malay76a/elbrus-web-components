import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export const config: Config = {
  plugins: [
    builtins(),
    globals(),
    sass({
      injectGlobalPaths: [
        'src/globals/variables.scss',
        'src/globals/mixins.scss'
      ]
    }),
    postcss({
      plugins: [autoprefixer({
        grid: true,
        browsers: ['ie >= 11', 'last 4 version']
      })]
    })
  ],
  namespace: 'elbrusui',
  globalStyle: 'src/globals/app.scss',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
