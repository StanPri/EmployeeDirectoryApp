import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const build_type = process.argv[2] === '--prod' ? 'P': 'T';
const dist_path = build_type === 'P' ? 'prod' : 'test';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.VERSION' : JSON.stringify(`${build_type}.${new Date().toISOString("en-US").substring(0,10).replace(/-/g, '.')}`),
  'process.env.API_URL' : JSON.stringify(build_type === 'P' ? 'http://EDAPI/employees' : 'http://testEDAPI/employees')
};

export default {
  debug: true,
  devtool: 'cheap-module-source-map',
  noInfo: false,
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, `dist/${dist_path}`), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, `dist/${dist_path}`)
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.less)$/, loaders: ['style', 'css', 'less']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
      {test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/png"}
    ]
  }
};
