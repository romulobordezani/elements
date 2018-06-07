import DefaultColors from '../../../core/Colors/index';

export default class KanuiColors extends DefaultColors {
  constructor(...args) {
    super(...args);
    this.light = {
      50: '#ffffff',
      100: '#ffe4c9',
      200: '#fec791',
      300: '#fea34b',
      400: '#fd932c',
      500: '#fd840e',
      600: '#ea7502',
      700: '#cc6602',
      800: '#ae5701',
      900: '#8f4701',
      A100: '#ffffff',
      A200: '#ffd1a5',
      A400: '#ff9e3f',
      A700: '#ff9125',
    };

    this.dark = {
      50: '#fecc9b',
      100: '#fea54f',
      200: '#fd8917',
      300: '#cc6501',
      400: '#ad5601',
      500: '#8f4701',
      600: '#713801',
      700: '#522901',
      800: '#341a00',
      900: '#150b00',
      A100: '#ffc790',
      A200: '#ff932a',
      A400: '#c36000',
      A700: '#a95400',
    };
  }
}
