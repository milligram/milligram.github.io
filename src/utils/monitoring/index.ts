import { init } from '@sentry/browser'

const browser = {
  initialize: (
    dsn: string = process.env.MONITORING_APP_KEY || '',
    environment: string = process.env.ENVIRONMENT || '',
  ): void => {
    if (environment !== 'production') return
    init({ dsn, environment })
  },
}

export default {
  browser,
}
