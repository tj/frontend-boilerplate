/* eslint-disable import/no-extraneous-dependencies */
const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const { JSDOM } = require('jsdom')

const { StyleSheetTestUtils } = require('aphrodite')
const { StyleSheetTestUtils: StyleSheetTestUtilsNoImportant } = require('aphrodite/no-important')

StyleSheetTestUtils.suppressStyleInjection()
StyleSheetTestUtilsNoImportant.suppressStyleInjection()

enzyme.configure({ adapter: new Adapter() })

// -----------------------------------------------------------------------------

const exposedProperties = ['window', 'navigator', 'document']

const dom = new JSDOM('')

global.document = dom.window.document
global.window = dom.window

Object.keys(dom.window).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = dom.window[property]
  }
})

global.navigator = {
  userAgent: 'node.js',
}
