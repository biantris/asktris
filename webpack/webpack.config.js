import path from 'path';

import nodeExternals from 'webpack-node-externals';

const cwd = process.cwd();

export const outputPath = path.join(cwd, '.webpack');
export const outputFilename = 'bundle.js';

export default {
  context: cwd,
  mode: 'development',
  devtool: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.mjs'],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: outputPath,
    filename: outputFilename,
  },
  target: 'node',
  externals: [
    nodeExternals({
      allowlist: [/@asktris/],
    }),
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../node_modules'),
      allowlist: [/@asktris/],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
        exclude: [/node_modules/, path.resolve(__dirname, '.serverless'), path.resolve(__dirname, '.webpack')],
      },
      {
        test: /\.(pem|p12)?$/,
        use: {
          loader: 'raw-loader',
        },
      },
    ],
  },
  plugins: [],
  node: {
    __dirname: false,
    __filename: false,
  },
};
