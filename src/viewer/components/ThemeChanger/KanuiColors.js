import DefaultColors from '../../../core/Colors/index';

export default class KanuiColors extends DefaultColors {
  constructor(...args) {
    super(...args);
    this.light.A100 = '#fd840e';
    this.light.A200 = '#de6f0e';
    this.light.A400 = '#b45a0e';
    this.light.A700 = '#763b0d';
    this.dark.A100 = '#fd840e';
    this.dark.A200 = '#de6f0e';
    this.dark.A400 = '#b45a0e';
    this.dark.A700 = '#763b0d';
  }
}
