const swPrecache = {
	staticFileGlobs: [
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
