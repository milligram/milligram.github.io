const swPrecache = {
  staticFileGlobs: [
    'https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css',
    'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css',
    'https://browser.sentry-cdn.com/5.5.0/bundle.min.js',
    'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js',
    'dist/**.html',
    'dist/**/*.css',
    'dist/**/*.js',
    'dist/**.json',
    'dist/**.txt',
    'dist/images/*',
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  directoryIndex: 'index.html',
  navigateFallback: 'index.html',
  runtimeCaching: [],
}

module.exports = swPrecache
