'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeChangerButton = require('./ThemeChangerButton');

var _ThemeChangerButton2 = _interopRequireDefault(_ThemeChangerButton);

var _logoDafiti = require('./images/logo-dafiti.png');

var _logoDafiti2 = _interopRequireDefault(_logoDafiti);

var _logoKanui = require('./images/logo-kanui.png');

var _logoKanui2 = _interopRequireDefault(_logoKanui);

var _logoTricae = require('./images/logo-tricae.png');

var _logoTricae2 = _interopRequireDefault(_logoTricae);

require('./ThemeChanger.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ThemeChangerContainer() {
  return _react2.default.createElement(
    'div',
    { className: 'theme-changer' },
    _react2.default.createElement(
      _ThemeChangerButton2.default,
      { themeName: 'dafiti' },
      _react2.default.createElement('img', { src: _logoDafiti2.default, alt: 'Change Theme to Dafiti' })
    ),
    _react2.default.createElement(
      _ThemeChangerButton2.default,
      { themeName: 'kanui' },
      _react2.default.createElement('img', { src: _logoKanui2.default, alt: 'Change Theme to Kanui' })
    ),
    _react2.default.createElement(
      _ThemeChangerButton2.default,
      { themeName: 'tricae' },
      _react2.default.createElement('img', { src: _logoTricae2.default, alt: 'Change Theme to Tricae' })
    )
  );
}

exports.default = ThemeChangerContainer;