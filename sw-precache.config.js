const swPrecache = {
	staticFileGlobs: [
		'//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic',
		'//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css',
		'//cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css',
		'//browser.sentry-cdn.com/5.5.0/bundle.min.js',
		'//cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js',
		'//cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js',
		'dist/**.html',
		'dist/**/*.css',
		'dist/**/*.js',
		'dist/**.json',
		'dist/**.txt',
		'dist/images/*'
	],
	root: 'dist',
	stripPrefix: 'dist/',
	directoryIndex: 'index.html',
	navigateFallback: 'index.html',
	runtimeCaching: []
}

module.exports = swPrecache
