const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: [
      path.resolve(__dirname, 'src/public/index.ts'),
    ],
  },

  output: {
    filename: 'static/js/[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  // DEVSERVER SETTINGS (webpack-dev-server)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    overlay: true,
    port: 3001,
    stats: 'normal',
    open: true,
  },

  devtool: 'inline-source-map',

  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules')],
  },

  module: {
    rules: [
    // Type Script
    {
      test: /\.tsx?$/, // ts || tsx
      exclude: /node_modules/,
      use: [
      { loader: 'babel-loader' },
      { loader: 'ts-loader',
        options: {
          transpileOnly: true, // type checking done by ForkTsCheckerWebpackPlugin
          happyPackMode: true
        }
      },
      { loader: 'thread-loader' }
    ]
    },

      // Babel Loader
      {
        test: /\.jsx?$/, // js || jsx
        exclude: /node_modules/,
        use: ['babel-loader', 'thread-loader'],
      },

      // File Loader

      // Normal images within project
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        exclude: /node_modules\/fontawesome/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/images/[name].[ext]',
            },
          },
        ],
      },

      // Fonts that are part of the project.
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/fonts/[name].[ext]',
            },
          },
        ],
      },


      // HTML Loader
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      'mono': path.resolve(__dirname, '../../../'),
      '@proto': path.resolve(__dirname, 'src/external/projects/grpc-web/proto/'),
      '@app': path.resolve(__dirname, '.'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    symlinks: false,
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/public/index.html'),
      filename: 'index.html',
    }),
  ]
};
