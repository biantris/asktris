/* eslint-disable @typescript-eslint/no-var-requires */
const babelJest = require('babel-jest').default;
const entriaBabel = require('@asktris/babel');

module.exports = babelJest.createTransformer(entriaBabel);
