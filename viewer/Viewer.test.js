'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../core/Theme/index');

var _index2 = _interopRequireDefault(_index);

var _ThemeProvider = require('../providers/ThemeProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /* eslint-env browser */
var theme = {
  theme: new _index2.default({})
};

it('renders without crashing and using the Theme Provider', function () {
  var div = document.createElement('div');
  _reactDom2.default.render(_react2.default.createElement(
    _ThemeProvider.ThemeContext.Provider,
    { value: theme },
    _react2.default.createElement(
      'div',
      null,
      'Hello world'
    )
  ), div);
  _reactDom2.default.unmountComponentAtNode(div);
});