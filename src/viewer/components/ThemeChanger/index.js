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
    colors: color,
    currentTheme: current,
  };

  return new Theme(customizedTheme);
}

export default ThemeChanger;
