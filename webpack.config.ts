import { Configuration } from 'webpack';
import * as path from 'path';

const config: Configuration = {
  mode: 'development',
  entry: path.resolve('src', 'index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

export default config;
