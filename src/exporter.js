if (typeof window === 'undefined') {
  global.window = {};
}

export { default as Button } from './elements/Button';
export { ThemeContext, Theme, withTheme } from './providers/ThemeProvider';
export { default as CssBaseline } from './providers/CssBaseline';
export { default as DefaultColors } from './core/Colors';
export { default as Typography } from './providers/Typography';
