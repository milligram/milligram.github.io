(() => {
	'use strict'

	function getEnvironment (hostname) {
		window.environment = hostname.indexOf('localhost') !== -1
			? 'development'
			: hostname.indexOf('staging') !== -1
				? 'staging'
				: 'production'

		return window.environment
	}

	const dsn = 'https://dae18034fa014d1eb5a5ac9d8f0659da@sentry.io/1518770'
	const environment = getEnvironment(window.location.hostname)

	if (typeof Sentry !== 'undefined') {
		Sentry.init({ dsn, environment })
	}
	
})()
