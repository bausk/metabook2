'use strict'
process.env.NODE_ENV = 'development'
process.env.REACT_WEBPACK_ENV = 'dev'

const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.base')
const FriendlyErrors = require('friendly-errors-webpack-plugin')

base.devtool = 'source-map'
base.module.loaders.push({
    test: /\.pcss$/,
    loaders: ['style-loader', 'css-loader?modules&importLoaders=1', 'postcss-loader'],
    include: path.join(__dirname, './../common')
},
    {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader', 'resolve-url-loader'],
    exclude: path.join(__dirname, './../common')
},
    {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
})
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrors()
)

module.exports = base
