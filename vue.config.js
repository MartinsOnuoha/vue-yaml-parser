module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          type: 'json',
          use: 'yaml-loader',
        },
      ],
    },
  },
};
