import DefaultColors from '../Colors/index';

class DefaultTheme {
  constructor(theme) {
    this.colors = new DefaultColors(theme.colors);

    this.currentTheme = 'default';

    this.typography = {
      fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    };

    this.text = {
      primary: 'rgba(0, 0, 0, 0.87)', // The most important text.
      secondary: 'rgba(0, 0, 0, 0.54)', // Secondary text.
      disabled: 'rgba(0, 0, 0, 0.38)', // Disabled text have even lower visual prominence.
      hint: 'rgba(0, 0, 0, 0.38)', // Text hints.
    };

    // The color used on the line which divides different contents.
    this.divider = 'rgba(0, 0, 0, 0.12)';

    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    this.background = {
      paper: '#FFFFFF',
      default: '#CCC',
    };

    // The colors used to style the action elements.
    this.action = {
      active: 'rgba(0, 0, 0, 0.54)', // The color of an active action like an icon button.
      hover: 'rgba(0, 0, 0, 0.37)', // The colors of an hovered action.
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)', // The color of a selected action.
      disabled: 'rgba(0, 0, 0, 0.26)', // The color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)', // The background color of a disabled action.
    };

    this.palette = {
      primary: {
        light: this.colors.dark.A100,
        main: this.colors.dark.A200,
        dark: this.colors.dark.A700,
        lightContrastText: 'black',
        darkContrastText: 'white',
      },
      secondary: {
        light: this.colors.dark.A100,
        main: this.colors.dark.A700,
        dark: this.colors.dark.A400,
        lightContrastText: 'black',
        darkContrastText: 'white',
      },
      black: {
        dark: this.text.primary,
        light: this.action.hover,
      },
      white: {
        dark: this.text.primary,
        light: this.action.hover,
      },
    };
  }
}

export default DefaultTheme;
