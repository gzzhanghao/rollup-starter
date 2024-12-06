import nodeResolve from '@rollup/plugin-node-resolve';
import swc from '@rollup/plugin-swc';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'es',
    },
    {
      file: './dist/index.cjs',
      format: 'commonjs',
    },
  ],
  plugins: [
    swc(),
    nodeResolve({
      extensions: ['.mts', '.ts', '.mjs', '.js', '.json', '.node'],
    }),
  ],
});
