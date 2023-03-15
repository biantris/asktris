/* eslint-disable @typescript-eslint/no-var-requires */
const { createTransformer } = require('babel-jest');

const config = require('../babel.config');

module.exports = createTransformer({
  ...config,
});
