module.exports = {
  plugins: [
    'postcss-normalize',
    [
      'postcss-preset-env',
      {
        autoprefixer: true,
      },
    ],
  ],
}
