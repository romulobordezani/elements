import DefaultColors from '../../../core/Colors/index';

export default class TricaeColors extends DefaultColors {
  constructor(...args) {
    super(...args);
    this.light = {
      50: '#ffffff',
      100: '#fdedca',
      200: '#fada95',
      300: '#f7c350',
      400: '#f5b933',
      500: '#f4af16',
      600: '#e19e0b',
      700: '#c48a09',
      800: '#a67508',
      900: '#896006',
      A100: '#ffffff',
      A200: '#ffe3a4',
      A400: '#ffc33e',
      A700: '#fbb929',
    };

    this.dark = {
      50: '#fbde9d',
      100: '#f8c454',
      200: '#f5b21e',
      300: '#c48909',
      400: '#a67507',
      500: '#896006',
      600: '#6c4b05',
      700: '#4e3703',
      800: '#312202',
      900: '#140e01',
      A100: '#ffdc8f',
      A200: '#ffbc29',
      A400: '#c28500',
      A700: '#a67303',
    };
  }
}
