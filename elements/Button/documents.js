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

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /* eslint-env browser */

var readme = require('./README.md');

var customButtonTricaeStyle = {
  margin: '10px',
  flexGrow: 1,
  boxShadow: '0 3px 0 0 #cd910a',
  borderRadius: '3px',
  backgroundColor: '#f4af16'
};

/* eslint-disable no-alert */
function ButtonDocs() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      _react2.default.createElement(
        'a',
        { href: '#button', className: 'anchor', id: 'button' },
        'Button'
      )
    ),
    _react2.default.createElement(_reactMarkdown2.default, {
      source: readme,
      escapeHtml: false,
      renderers: { code: _MdCodeBlock2.default }
    }),
    'Live example:',
    _react2.default.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'row', marginBottom: '60px' } },
      _react2.default.createElement(
        _index2.default,
        { style: { margin: '10px', flexGrow: 1 }, onClick: function onClick() {
            return window.alert('I was clicked!');
          } },
        'Default'
      ),
      _react2.default.createElement(
        _index2.default,
        { style: { margin: '10px', flexGrow: 1 }, palette: 'secondary', tone: 'dark' },
        'Secondary'
      ),
      _react2.default.createElement(
        _index2.default,
        { style: customButtonTricaeStyle, palette: 'primary', tone: 'light' },
        'Tricae Bevel'
      ),
      _react2.default.createElement(
        _index2.default,
        { style: { margin: '10px', flexGrow: 1 }, palette: 'white' },
        'White'
      ),
      _react2.default.createElement(
        _index2.default,
        { style: { margin: '10px', flexGrow: 1 }, palette: 'black' },
        'Black'
      )
    )
  );
}
/* eslint-enable no-alert */

exports.default = ButtonDocs;