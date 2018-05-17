import { merge } from '../../handlers/index';
import DefaultTheme from './DefaultTheme';

class Theme {
  constructor(theme) {
    let defaultTheme = new DefaultTheme();
    defaultTheme = merge(defaultTheme, theme);
    Object.assign(this, defaultTheme);
  }
}

export default Theme;
