class DefaultColors {
  constructor(colors) {
    this.dark = {
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
      A200: '#319c90',
      A400: '#2a685c',
      A700: '#1b3b31',
    };

    if (colors && 'dark' in colors) {
      Object.assign(this.dark, colors.dark);
    }

    this.light = {
      50: '#ffffff',
      100: '#ffffff',
      200: '#ffffff',
      300: '#ffffff',
      400: '#f3f3f4',
      500: '#e3e4e5',
      600: '#d3d5d6',
      700: '#c3c5c8',
      800: '#b3b6b9',
      900: '#a4a7aa',
      A100: '#96bdac',
      A200: '#7ea392',
      A400: '#638574',
      A700: '#415e4e',
    };

    if (colors && 'light' in colors) {
      Object.assign(this.light, colors.light);
    }
  }
}

export default DefaultColors;
export { default as ColorsDoc } from './documents';
