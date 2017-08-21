// 清酒稻香
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssProperties = '?modules&importLoaders=1&localIdentName=[hash:base64:10]__[local]'
const cssGlobalsProperties = ''
const cssGlobals = [/node_modules/, /webapp[\/\\]style/]

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

const distPath = path.resolve(__dirname, 'dist')

let webpackConfig = {
  devServer: {
    compress: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    historyApiFallback: {
      rewrites: [{
        from: /^\/.*$/,
        to: '/index.html',
      }]
    },
    proxy: {
      '/api': {
        target: 'https://pinber.veryeast.cn',
        changeOrigin: true,
        secure: false,
      },
    },
    contentBase: distPath,
    host: "0.0.0.0",
    disableHostCheck: true,
  },

  entry: {
    main: ['./webapp/client.js'],
  },
  output: {
    path: distPath,
    publicPath: '/',
    filename: `[name]-[${process.argv.indexOf('--hot') > 0 ? 'hash' : 'chunkHash'}].js`,
  },
  resolve: {
    extensions: ['.web.js', '.js', '.json'],
    alias: {
      '@helper': path.resolve(__dirname, 'webapp', 'helper'),
      '@actions': path.resolve(__dirname, 'webapp', 'actions'),
      '@static': path.resolve(__dirname, 'webapp', 'static'),
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/i,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.jsx?$/i,
      use: 'eslint-loader',
      exclude: [/node_modules/, /__generated__/],
    }, {
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
    }, {
      test: /\.svg$/i,
      use: 'svg-sprite-loader',
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      use: ['url-loader?limit=8192', {
        loader: 'img-loader',
        options: {
          enabled: process.env.NODE_ENV === 'production',
          gifsicle: {
            interlaced: false
          },
          mozjpeg: {
            progressive: true,
            arithmetic: false
          },
          optipng: false, // disabled
          pngquant: {
            floyd: 0.5,
            speed: 2
          },
          // svgo: {
          //   plugins: [
          //     { removeTitle: true },
          //     { convertPathData: false }
          //   ]
          // },
        },
      }],
    }]
  },
  plugins: [
    new SpriteLoaderPlugin(),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.DllReferencePlugin({
      manifest: require('./dist/libs_manifest.json'), // eslint-disable-line
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),

    new ExtractTextPlugin({
      filename: '[Name]_[chunkHash].css',
    }),

    new ManifestPlugin(),

    new HtmlWebpackPlugin({
      template: 'webapp/index.ejs',
      libsName: require('./dist/libs_manifest.json').name,
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
      },
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