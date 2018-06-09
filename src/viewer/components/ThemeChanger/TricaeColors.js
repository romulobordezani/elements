import DefaultColors from '../../../core/Colors/index';

export default class TricaeColors extends DefaultColors {
  constructor(...args) {
    super(...args);
    this.light.A100 = '#f4af16';
    this.light.A200 = '#cd910a';
    this.light.A400 = '#a7790a';
    this.light.A700 = '#7b560a';
    this.dark.A100 = '#f4af16';
    this.dark.A200 = '#cd910a';
    this.dark.A400 = '#a7790a';
    this.dark.A700 = '#7b560a';
  }
}
