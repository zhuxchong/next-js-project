const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}
module.exports = withCss(
  {}
  //   {
  //   cssModules: true,
  //   cssLoaderOptions: {
  //     importLoaders: 1,
  //     localIdentName: "[local]___[hash:base64:5]"
  //   }
  // }
);
