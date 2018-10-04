'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../providers/ThemeProvider/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ThemeChangerButton(props) {
  return _react2.default.createElement(
    _index.ThemeContext.Consumer,
    null,
    function (_ref) {
      var theme = _ref.theme,
          changeTheme = _ref.changeTheme;
      return _react2.default.createElement(
        'button',
        {
          className: 'theme-changer__item ' + (theme.currentTheme === props.themeName ? 'theme-changer__item_state_selected' : ''),
          style: { backgroundColor: theme.currentTheme === props.themeName || theme.currentTheme === 'default' ? theme.palette.primary.light : '#FFF' },
          onClick: function onClick() {
            return changeTheme(props.themeName);
          }
        },
        props.children
      );
    }
  );
}

ThemeChangerButton.propTypes = {
  children: _propTypes2.default.element.isRequired,
  themeName: _propTypes2.default.string.isRequired
};

exports.default = ThemeChangerButton;