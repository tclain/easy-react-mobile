module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    web: {
      plugins: [
        [
          "module-resolver",
          {
            alias: {
              "^react-native$": "react-native-web"
            }
          }
        ]
      ]
    }
  };
};
