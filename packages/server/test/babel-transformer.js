/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('@asktris/babel');

const { createTransformer } = require('babel-jest');

module.exports = createTransformer({
  ...config,
});
