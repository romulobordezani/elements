'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../core/Colors/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../core/Theme/index');

var _index4 = _interopRequireDefault(_index3);

var _KanuiColors = require('./KanuiColors');

var _KanuiColors2 = _interopRequireDefault(_KanuiColors);

var _TricaeColors = require('./TricaeColors');

var _TricaeColors2 = _interopRequireDefault(_TricaeColors);

var _DafitiColors = require('./DafitiColors');

var _DafitiColors2 = _interopRequireDefault(_DafitiColors);

var _listOfKnownStores = require('./listOfKnownStores');

var _listOfKnownStores2 = _interopRequireDefault(_listOfKnownStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ThemeChanger(preDefinition) {
  var color = void 0;
  var current = 'default';
  if (typeof preDefinition === 'string') {
    var isAknownColorTheme = _listOfKnownStores2.default.indexOf(preDefinition) >= 0;
    if (isAknownColorTheme) {
      current = preDefinition;
      switch (preDefinition) {
        case 'tricae':
          color = new _TricaeColors2.default();
          break;
        case 'kanui':
          color = new _KanuiColors2.default();
          break;
        case 'dafiti':
          color = new _DafitiColors2.default();
          break;
        default:
          color = new _index2.default();
      }
    } else {
      throw new Error('Unknown color pre definition \'' + preDefinition + '\'. Please provide a full color Object. So far, Elem only supports the following pre-configured color schemes: ' + _listOfKnownStores2.default.join(', '));
    }
  }

  var customizedTheme = {
    currentTheme: current,
    palette: {
      primary: {
        colors: color
      },
      secondary: {
        colors: {
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
            A100: color.dark[500],
            A200: color.dark[700],
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
            A100: color.light[500],
            A200: color.light[700],
            A400: '#1d1616',
            A700: '#0d0c0c'
          }
        }
      }
    }
  };

  if (preDefinition === 'kanui') {
    customizedTheme.typography = {
      fontFamily: '"Oswald", "Helvetica", "Arial", "sans-serif"',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    };
  }

  return new _index4.default(customizedTheme);
}

exports.default = ThemeChanger;