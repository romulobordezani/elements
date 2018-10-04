'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Theme = exports.withTheme = exports.ThemeContext = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Reference > https://reactjs.org/docs/context.html


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Theme = require('../../core/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeContext = _react2.default.createContext({
  theme: {},
  toggleTheme: function toggleTheme() {}
});

function withTheme(Component) {
  return function ThemedComponent(props) {
    return _react2.default.createElement(
      ThemeContext.Consumer,
      null,
      function (theme) {
        return _react2.default.createElement(Component, _extends({}, props, { theme: theme.theme }));
      }
    );
  };
}

exports.ThemeContext = ThemeContext;
exports.withTheme = withTheme;
exports.Theme = _Theme2.default;