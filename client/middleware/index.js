
import logger from './logger'
import thunk from 'redux-thunk'

const middlewares = [logger, thunk]

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger')
  const logger = createLogger()

  middlewares.push(logger)
}

export default middlewares
