'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('normalize.css');

var _Theme = require('../core/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _ThemeProvider = require('../providers/ThemeProvider');

var _Typography = require('../providers/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Colors = require('../core/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

var _ThemeChanger = require('./components/ThemeChanger');

var _ThemeChanger2 = _interopRequireDefault(_ThemeChanger);

var _ViewerHeader = require('./components/ViewerHeader');

var _ViewerHeader2 = _interopRequireDefault(_ViewerHeader);

var _ViewerSideBar = require('./components/ViewerSideBar');

var _ViewerSideBar2 = _interopRequireDefault(_ViewerSideBar);

var _ViewerContainer = require('./components/ViewerContainer');

var _ViewerContainer2 = _interopRequireDefault(_ViewerContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-unused-state: 0 */


// Example of how to set new color palettes
var customSecondaryColors = new _Colors2.default({
  dark: {
    50: '#858585',
    100: '#5e5e5e',
    200: '#424242',
    300: '#1f1f1f',
    400: '#0f0f0f',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000',
    A100: '#3cbdaf',
    A200: '#1f6059',
    A400: '#1d1616',
    A700: '#0d0c0c'
  },
  light: {
    50: '#858585',
    100: '#5e5e5e',
    200: '#424242',
    300: '#1f1f1f',
    400: '#0f0f0f',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000',
    A100: '#3cbdaf',
    A200: '#1f6059',
    A400: '#1d1616',
    A700: '#0d0c0c'
  }
});

var customPrimaryColors = new _Colors2.default({
  dark: {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ffffff',
    300: '#ebebeb',
    400: '#dbdbdb',
    500: '#cccccc',
    600: '#bdbdbd',
    700: '#adadad',
    800: '#9e9e9e',
    900: '#8f8f8f',
    A100: '#ffffff',
    A200: '#ffffff',
    A400: '#e9e2e2',
    A700: '#dbd7d7'
  },
  light: {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ffffff',
    300: '#ffffff',
    400: '#ffffff',
    500: '#f2f2f2',
    600: '#e3e3e3',
    700: '#d3d3d3',
    800: '#c4c4c4',
    900: '#b5b5b5',
    A100: '#ffffff',
    A200: '#ffffff',
    A400: '#ffffff',
    A700: '#ffffff'
  }
});

var customTheme = new _Theme2.default({
  palette: {
    primary: {
      colors: customPrimaryColors
    },
    secondary: {
      colors: customSecondaryColors
    }
  }
});

var Viewer = function (_React$Component) {
  _inherits(Viewer, _React$Component);

  function Viewer() {
    var _ref;

    _classCallCheck(this, Viewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Viewer.__proto__ || Object.getPrototypeOf(Viewer)).call.apply(_ref, [this].concat(args)));

    _this.changeTheme = function (theme) {
      _this.setState({
        theme: (0, _ThemeChanger2.default)(theme)
      });
    };

    _this.state = {
      theme: customTheme,
      changeTheme: _this.changeTheme
    };
    return _this;
  }

  _createClass(Viewer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ThemeProvider.ThemeContext.Provider,
        { value: this.state },
        _react2.default.createElement(
          _Typography2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'Viewer' },
            _react2.default.createElement(_ViewerHeader2.default, null),
            _react2.default.createElement(_ViewerSideBar2.default, null),
            _react2.default.createElement(_ViewerContainer2.default, null)
          )
        )
      );
    }
  }]);

  return Viewer;
}(_react2.default.Component);

exports.default = Viewer;