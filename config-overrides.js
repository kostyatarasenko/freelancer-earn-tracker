// eslint-disable-next-line
const { override, addWebpackAlias, disableEsLint } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@domains': path.resolve(__dirname, 'src/domains'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@features': path.resolve(__dirname, 'src/features'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
  }),
  disableEsLint(),
)
