// @ts-check

const path = require("path");
const glob = require("glob");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const wwwrootPath = path.resolve(__dirname, "..", "wwwroot");
const jsPath = path.resolve(wwwrootPath, "js");
const getEntryName = (entryPath) =>
  entryPath.replace(/\.[^/.]+$/, "").replace(/\.\/src\//, "");

// Add all files under ./src to the entry.
// Excluded files under ./src are specified in `ignore`
const entries = {};
glob
  .sync("./src/**/*.{ts,tsx}", {
    ignore: ["./src/generated/**/*"],
  })
  .map((file) => {
    entries[getEntryName(file)] = file;
  });

/** @type {import('webpack').Configuration} */
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
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
  ],
};
