'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeChangerContainer = require('../ThemeChanger/ThemeChangerContainer');

var _ThemeChangerContainer2 = _interopRequireDefault(_ThemeChangerContainer);

var _elem_type = require('./images/elem_type.svg');

var _elem_type2 = _interopRequireDefault(_elem_type);

require('./ViewerHeader.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ViewerHeader() {
  return _react2.default.createElement(
    'header',
    { className: 'header', style: { backgroundColor: '#000000' } },
    _react2.default.createElement(
      'div',
      { className: 'header__logo-type', title: 'Elem runs faster with you! Join us.' },
      _react2.default.createElement('div', { className: 'header__logo-type__logo header__logo-type__logo_size_small' }),
      _react2.default.createElement(
        'div',
        { className: 'header__logo-type__title' },
        _react2.default.createElement('img', { src: _elem_type2.default, alt: 'Elements' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'header__theme-switcher' },
      _react2.default.createElement(_ThemeChangerContainer2.default, null)
    )
  );
}

exports.default = ViewerHeader;