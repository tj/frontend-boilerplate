const path = require('path')

module.exports = {
  appBuild: path.join(__dirname, '..', 'client'),
  appPublic: path.join(__dirname, '..', 'client'),
  outputPath: path.join(__dirname, '..', 'static'),
  outputName: 'bundle.js',
}
