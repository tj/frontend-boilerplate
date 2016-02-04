
const config = {
  development: {
    base: '/'
  },

  production: {
    base: '/test/static/'
  }
}

export default config[process.env.NODE_ENV || 'development']
