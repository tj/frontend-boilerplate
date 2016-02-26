
const config = {
  development: {
    base: '/'
  },

  production: {
    base: '/'
  }
}

export default config[process.env.NODE_ENV || 'development']
