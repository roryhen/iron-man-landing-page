let postCssConfig = {
  plugins: [
    'postcss-normalize',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: true,
        importFrom: ['src/global.css'],
        features: {
          'custom-media-queries': true,
          'nesting-rules': true,
        },
      },
    ],
  ],
}

module.exports = postCssConfig
