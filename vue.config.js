module.exports = {
    lintOnSave: false,
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:4000",
          secure: false,
        },
      },
    },
  };
  