'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../core/Colors/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TricaeColors = function (_DefaultColors) {
  _inherits(TricaeColors, _DefaultColors);

  function TricaeColors() {
    var _ref;

    _classCallCheck(this, TricaeColors);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = TricaeColors.__proto__ || Object.getPrototypeOf(TricaeColors)).call.apply(_ref, [this].concat(args)));

    _this.light = {
      50: '#ffffff',
      100: '#fdedca',
      200: '#fada95',
      300: '#f7c350',
      400: '#f5b933',
      500: '#f4af16',
      600: '#e19e0b',
      700: '#c48a09',
      800: '#a67508',
      900: '#896006',
      A100: '#ffffff',
      A200: '#ffe3a4',
      A400: '#ffc33e',
      A700: '#fbb929'
    };

    _this.dark = {
      50: '#fbde9d',
      100: '#f8c454',
      200: '#f5b21e',
      300: '#c48909',
      400: '#a67507',
      500: '#896006',
      600: '#6c4b05',
      700: '#4e3703',
      800: '#312202',
      900: '#140e01',
      A100: '#ffdc8f',
      A200: '#ffbc29',
      A400: '#c28500',
      A700: '#a67303'
    };
    return _this;
  }

  return TricaeColors;
}(_index2.default);

exports.default = TricaeColors;