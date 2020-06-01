const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  const result = require('dotenv').config({
    path: isDev ? '.env.development' : '.env.production',
  })

  return {
    devIndicators: { autoPrerender: false },
    env: { ...result.parsed },
  }
}
