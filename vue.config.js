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
  chainWebpack: (config) => {
    config.plugin('copy').tap((options) => {
      options[0][0].ignore.push('public/demo.gif');
      return options;
    });
  },
};
