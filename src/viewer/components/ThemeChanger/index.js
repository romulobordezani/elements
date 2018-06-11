import DefaultColors from '../../../core/Colors/index';
import Theme from '../../../core/Theme/index';
import KanuiColors from './KanuiColors';
import TricaeColors from './TricaeColors';
import DafitiColors from './DafitiColors';
import LIST_OF_KNOWN_STORES from './listOfKnownStores';

function ThemeChanger(preDefinition) {
  let color;
  let current = 'default';
  if (typeof preDefinition === 'string') {
    const isAknownColorTheme = LIST_OF_KNOWN_STORES.indexOf(preDefinition) >= 0;
    if (isAknownColorTheme) {
      current = preDefinition;
      switch (preDefinition) {
        case 'tricae':
          color = new TricaeColors();
          break;
        case 'kanui':
          color = new KanuiColors();
          break;
        case 'dafiti':
          color = new DafitiColors();
          break;
        default:
          color = new DefaultColors();
      }
    } else {
      throw new Error(`Unknown color pre definition '${preDefinition}'. Please provide a full color Object. So far, Elem only supports the following pre-configured color schemes: ${LIST_OF_KNOWN_STORES.join(', ')}`);
    }
  }

  const customizedTheme = {
    currentTheme: current,
    palette: {
      primary: {
        colors: color,
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
            A700: '#0d0c0c',
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
            A700: '#0d0c0c',
          },
        },
      },
    },
  };

  if (preDefinition === 'kanui') {
    customizedTheme.typography = {
      fontFamily: '"Oswald", "Helvetica", "Arial", "sans-serif"',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    };
  }

  return new Theme(customizedTheme);
}

export default ThemeChanger;
