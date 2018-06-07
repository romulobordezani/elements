import DefaultColors from '../Colors/index';

class DefaultTheme {
  constructor(theme) {
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

    this.palette = {};

    function getMixedColors(paletteName, colorOverride) {
      const mixedColors = {};

      if (theme && 'palette' in theme && paletteName in theme.palette) {
        Object.assign(mixedColors, theme.palette[paletteName].colors);
      }

      Object.assign(mixedColors, colorOverride);

      return new DefaultColors(mixedColors);
    }

    const PrimaryColors = getMixedColors('primary');
    this.palette.primary = {
      light: PrimaryColors.light[500],
      lightContrastText: 'white',
      main: PrimaryColors.light[500],
      dark: PrimaryColors.dark[500],
      darkContrastText: 'white',
      colors: PrimaryColors,
    };

    const SecondaryColors = getMixedColors('secondary', {
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
        A100: '#3cbdaf',
        A200: '#1f6059',
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
        A100: '#3cbdaf',
        A200: '#1f6059',
        A400: '#1d1616',
        A700: '#0d0c0c',
      },
    });
    this.palette.secondary = {
      light: SecondaryColors.light[500],
      lightContrastText: 'white',
      main: SecondaryColors.light[500],
      dark: SecondaryColors.light[500],
      darkContrastText: 'white',
      colors: SecondaryColors,
    };

    const BlackColors = getMixedColors('black', {
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
        A100: '#3cbdaf',
        A200: '#1f6059',
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
        A100: '#3cbdaf',
        A200: '#1f6059',
        A400: '#1d1616',
        A700: '#0d0c0c',
      },
    });
    this.palette.black = {
      light: BlackColors.light[500],
      lightContrastText: 'white',
      main: BlackColors.light[500],
      dark: BlackColors.light[500],
      colors: BlackColors,
    };

    const WhiteColors = getMixedColors('white', {
      dark: {
        50: '#ffffff',
        100: '#ffffff',
        200: '#ffffff',
        300: '#ebebeb',
        400: '#dbdbdb',
        500: '#cccccc',
        600: '#bdbdbd',
        700: '#adadad',
        800: '#9e9e9e',
        900: '#8f8f8f',
        A100: '#ffffff',
        A200: '#ffffff',
        A400: '#e9e2e2',
        A700: '#dbd7d7',
      },
      light: {
        50: '#ffffff',
        100: '#ffffff',
        200: '#ffffff',
        300: '#ffffff',
        400: '#ffffff',
        500: '#ffffff',
        600: '#e3e3e3',
        700: '#d3d3d3',
        800: '#c4c4c4',
        900: '#b5b5b5',
        A100: '#ffffff',
        A200: '#ffffff',
        A400: '#ffffff',
        A700: '#ffffff',
      },
    });
    this.palette.white = {
      light: BlackColors.light[500],
      lightContrastText: '#333333',
      main: BlackColors.light[500],
      dark: BlackColors.light[500],
      colors: WhiteColors,
    };
  }
}

export default DefaultTheme;
