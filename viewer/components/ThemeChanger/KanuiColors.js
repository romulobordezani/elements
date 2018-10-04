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

var KanuiColors = function (_DefaultColors) {
  _inherits(KanuiColors, _DefaultColors);

  function KanuiColors() {
    var _ref;

    _classCallCheck(this, KanuiColors);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = KanuiColors.__proto__ || Object.getPrototypeOf(KanuiColors)).call.apply(_ref, [this].concat(args)));

    _this.light = {
      50: '#ffffff',
      100: '#ffe4c9',
      200: '#fec791',
      300: '#fea34b',
      400: '#fd932c',
      500: '#fd840e',
      600: '#ea7502',
      700: '#cc6602',
      800: '#ae5701',
      900: '#8f4701',
      A100: '#ffffff',
      A200: '#ffd1a5',
      A400: '#ff9e3f',
      A700: '#ff9125'
    };

    _this.dark = {
      50: '#fecc9b',
      100: '#fea54f',
      200: '#fd8917',
      300: '#cc6501',
      400: '#ad5601',
      500: '#8f4701',
      600: '#713801',
      700: '#522901',
      800: '#341a00',
      900: '#150b00',
      A100: '#ffc790',
      A200: '#ff932a',
      A400: '#c36000',
      A700: '#a95400'
    };
    return _this;
  }

  return KanuiColors;
}(_index2.default);

exports.default = KanuiColors;