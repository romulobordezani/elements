'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

require('./ViewerContainer.css');

var _MdCodeBlock = require('./MdCodeBlock');

var _MdCodeBlock2 = _interopRequireDefault(_MdCodeBlock);

var _documents = require('../../../providers/Typography/documents');

var _documents2 = _interopRequireDefault(_documents);

var _documents3 = require('../../../elements/Button/documents');

var _documents4 = _interopRequireDefault(_documents3);

var _documents5 = require('../../../providers/ThemeProvider/documents');

var _documents6 = _interopRequireDefault(_documents5);

var _documents7 = require('../../../core/Colors/documents');

var _documents8 = _interopRequireDefault(_documents7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// > Documents to be shown
var getStarted = require('../../../README.md');
var getEnvolved = require('../../../CODE_OF_CONDUCT.md');
var getTodo = require('../../../TODO.md');

function ViewerContainer() {
  return _react2.default.createElement(
    'div',
    { className: 'viewer-container' },
    _react2.default.createElement(
      'h1',
      null,
      _react2.default.createElement(
        'a',
        { href: '#get_started', className: 'anchor', id: 'get_started', style: { visibility: 'hidden' } },
        'Get Started'
      )
    ),
    _react2.default.createElement(_reactMarkdown2.default, {
      source: getStarted,
      escapeHtml: false,
      renderers: { code: _MdCodeBlock2.default }
    }),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h1',
      null,
      _react2.default.createElement(
        'a',
        { href: '#get_envolved', className: 'anchor', id: 'get_envolved' },
        'Get Envolved'
      )
    ),
    _react2.default.createElement(_reactMarkdown2.default, {
      source: getEnvolved,
      escapeHtml: false,
      renderers: { code: _MdCodeBlock2.default }
    }),
    _react2.default.createElement(
      'h2',
      null,
      'Get inspired:'
    ),
    _react2.default.createElement(_reactMarkdown2.default, {
      source: getEnvolved,
      escapeHtml: false,
      renderers: { code: getTodo }
    }),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h1',
      null,
      _react2.default.createElement(
        'a',
        { href: '#providers', className: 'anchor', id: 'providers' },
        'Providers'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_documents6.default, null),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(_documents2.default, null),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(_documents8.default, null)
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h1',
      null,
      _react2.default.createElement(
        'a',
        { href: '#components', className: 'anchor', id: 'components' },
        'Components'
      )
    ),
    _react2.default.createElement(_documents4.default, null)
  );
}

exports.default = ViewerContainer;