'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _MdCodeBlock = require('../../viewer/components/ViewerContainer/MdCodeBlock');

var _MdCodeBlock2 = _interopRequireDefault(_MdCodeBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readme = require('./README.md');

function ThemeProviderDoc() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'h2',
      null,
      _react2.default.createElement(
        'a',
        { href: '#theme', className: 'anchor', id: 'theme' },
        'ThemeProvider'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactMarkdown2.default, {
        source: readme,
        escapeHtml: false,
        renderers: { code: _MdCodeBlock2.default }
      })
    )
  );
}

exports.default = ThemeProviderDoc;