// 清酒稻香
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssProperties = '?modules&importLoaders=1&localIdentName=[hash:base64]__[local]'
const cssGlobalsProperties = ''
const cssGlobals = [/node_modules/, /webapp[\/\\]style/]

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

let webpackConfig = {
  entry: {
    libs: [
      'react',
      'react-dom',
      'react-router-dom',
      'prop-types',
      'rc-form',
      'rc-trigger',
      'redux',
      'react-redux',
      'redux-thunk',
      'react-router-redux',
      'lodash',
      'whatwg-fetch',
      'moment',
      'piexifjs',

      'ansi-html',
      'ansi-regex',
      'events',
      'html-entities',
      'querystring-es3',
      'strip-ansi',
      'url',
      'url/util',

      'normalize.css',
      './webapp/style/theme.less',

      // 'headportrait',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[chunkHash].dll.js',
    library: '[name]_[chunkHash]',
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ExtractTextPlugin.extract([`css-loader${cssGlobalsProperties}`, 'postcss-loader']),
      include: cssGlobals,
    }, {
      test: /\.less$/i,
      use: ExtractTextPlugin.extract([`css-loader${cssGlobalsProperties}`, 'postcss-loader', `less-loader?{"modifyVars":${JSON.stringify(require('./webapp/theme'))}}`]),
      include: cssGlobals,
    }, {
      test: /\.css$/i,
      use: ExtractTextPlugin.extract([`css-loader${cssProperties}`, 'postcss-loader']),
      exclude: cssGlobals,
    }, {
      test: /\.less$/i,
      use: ExtractTextPlugin.extract([`css-loader${cssProperties}`, 'postcss-loader', `less-loader?{"modifyVars":${JSON.stringify(require('./webapp/theme'))}}`]),
      exclude: cssGlobals,
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: '[Name]_[chunkHash].css',
    }),

    new webpack.DllPlugin({
      name: '[name]_[chunkHash]',
      path: path.resolve(__dirname, 'dist', '[name]_manifest.json'),
    }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins = [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.*\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
  ].concat(webpackConfig.plugins)
}

module.exports = webpackConfig
