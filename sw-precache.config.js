const swPrecache = {
	staticFileGlobs: [
		'https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic',
		'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css',
		'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css',
		'https://browser.sentry-cdn.com/5.5.0/bundle.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js',
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
