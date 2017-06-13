require('babel-register')();

const { JSDOM } = require('jsdom');

const exposedProperties = ['window', 'navigator', 'document'];

const dom = new JSDOM('');

global.document = dom.window.document;
global.window = dom.window;

Object.keys(dom.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = dom.window[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

documentRef = document; // eslint-disable-line
