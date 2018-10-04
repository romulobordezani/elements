'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ThemeProvider = require('../../providers/ThemeProvider');

var _Typography = require('./Typography.jstyle');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Typography(_ref) {
  var theme = _ref.theme,
      classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ['theme', 'classes']);

  return _react2.default.createElement(
    'div',
    { className: 'eTypography ' + classes.eTypography },
    props.children
  );
}

Typography.defaultProps = {
  palette: 'black',
  tone: 'dark',
  align: 'left',
  fontFamily: false
};

Typography.propTypes = {
  children: _propTypes2.default.node.isRequired,
  theme: _propTypes2.default.instanceOf(_ThemeProvider.Theme).isRequired,
  classes: _propTypes2.default.shape({}).isRequired,
  palette: _propTypes2.default.string,
  tone: _propTypes2.default.string,
  align: _propTypes2.default.string,
  fontFamily: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
};

exports.default = (0, _ThemeProvider.withTheme)((0, _reactJss2.default)(_Typography2.default)(Typography));