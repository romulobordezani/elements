'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../handlers/index');

var _DefaultTheme = require('./DefaultTheme');

var _DefaultTheme2 = _interopRequireDefault(_DefaultTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function Theme(theme) {
  _classCallCheck(this, Theme);

  var defaultTheme = new _DefaultTheme2.default(theme);
  defaultTheme = (0, _index.merge)(defaultTheme, theme);
  Object.assign(this, defaultTheme);
};

exports.default = Theme;