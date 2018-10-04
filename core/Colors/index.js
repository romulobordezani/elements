'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultColors = function DefaultColors(colors) {
  _classCallCheck(this, DefaultColors);

  this.dark = {
    50: '#92cdbb',
    100: '#5eb59a',
    200: '#45967d',
    300: '#2e6554',
    400: '#255042',
    500: '#1b3b31',
    600: '#112620',
    700: '#08110e',
    800: '#000000',
    900: '#000000',
    A100: '#72e3c0',
    A200: '#27c896',
    A400: '#216852',
    A700: '#204f41'
  };

  if (colors && 'dark' in colors) {
    Object.assign(this.dark, colors.dark);
  }

  this.light = {
    50: '#ffffff',
    100: '#c8eeea',
    200: '#9ee0d9',
    300: '#67cfc4',
    400: '#50c7bb',
    500: '#3cbdaf',
    600: '#35a699',
    700: '#2d8f84',
    800: '#26776e',
    900: '#1f6059',
    A100: '#fafefe',
    A200: '#9df5ec',
    A400: '#50dccd',
    A700: '#46ccbe'
  };

  if (colors && 'light' in colors) {
    Object.assign(this.light, colors.light);
  }
};

exports.default = DefaultColors;