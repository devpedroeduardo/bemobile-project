module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-react-loader',
              options: {
                svgo: {
                  plugins: [
                    {
                      removeViewBox: false,
                    },
                  ],
                },
                exportAsDefault: true, // <--- Add this option
              },
            },
          ],
        },
      ],
    },
  };