import { initialize, pageview, set } from 'react-ga'

export default {
  initialize: (
    key: string = process.env.TRACKING_KEY || '',
    page: string = window.location.pathname,
  ): void => {
    if (!key) return

    // @ts-ignore
    if (!window.GA_INITIALIZED) {
      initialize(key)
      // @ts-ignore
      window.GA_INITIALIZED = true
    }
    set({ page })
    pageview(page)
  },
}
