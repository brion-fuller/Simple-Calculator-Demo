const cssnext = require('postcss-cssnext');
const cssimport = require('postcss-import');
const resolve = require('path').resolve;

module.exports = {
  plugins: [
    cssimport({
      path: resolve('./src'),
    }),
    cssnext({}),
  ],
};
