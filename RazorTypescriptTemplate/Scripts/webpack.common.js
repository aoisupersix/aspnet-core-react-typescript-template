const path = require("path");
const glob = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const wwwrootPath = path.resolve(__dirname, "..", "wwwroot");
const jsPath = path.resolve(wwwrootPath, "js");
const getEntryName = (entryPath) =>
  entryPath.replace(/\.[^/.]+$/, "").replace(/\.\/src\//, "");

const entries = {};
glob.sync("./src/**/*.{ts,tsx}").map((file) => {
  entries[getEntryName(file)] = file;
});

module.exports = {
  entry: entries,
  output: {
    path: jsPath,
    filename: "[name].js",
    publicPath: "/",
    devtoolModuleFilenameTemplate: (info) => {
      const destPath = path.resolve(
        jsPath,
        getEntryName(info.resourcePath) + ".js"
      );
      const destDirPath = path.dirname(destPath);
      const sourceRelativePath = path.relative(
        destDirPath,
        info.absoluteResourcePath
      );
      return sourceRelativePath.split(path.sep).join(path.posix.sep);
    },
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial",
    },
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      dangerouslyAllowCleanPatternsOutsideProject: true,
      cleanOnceBeforeBuildPatterns: ["**/*", "../css/**/*"],
    }),
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
  ],
  infrastructureLogging: {
    level: "log",
  },
};
