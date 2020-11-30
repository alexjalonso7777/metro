/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

const babelJest = require('babel-jest');

const BABEL_CONFIG_PATH = require.resolve('../babel.config.js');

// $FlowFixME
const transformer /*: any */ = babelJest.createTransformer({
  configFile: BABEL_CONFIG_PATH,
});

module.exports = transformer;
