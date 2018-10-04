'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ThemeProvider = require('../../providers/ThemeProvider');

var _Button = require('./Button.jstyle');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Button(_ref) {
  var theme = _ref.theme,
      classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ['theme', 'classes']);

  return _react2.default.createElement(
    'button',
    _extends({ className: 'eButton ' + classes.eButton }, props),
    props.children
  );
}

Button.defaultProps = {
  palette: 'primary',
  tone: 'light'
};

Button.propTypes = {
  children: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.instanceOf(_ThemeProvider.Theme).isRequired,
  classes: _propTypes2.default.shape({}).isRequired,
  palette: _propTypes2.default.string,
  tone: _propTypes2.default.string
};

exports.default = (0, _ThemeProvider.withTheme)((0, _reactJss2.default)(_Button2.default)(Button));