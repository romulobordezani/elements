import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeContext } from './index';
import Theme from '../../core/Theme';
import Button from '../../elements/Button';

const theme = {
  theme: new Theme({}),
};

describe('Theme', () => {

  it('Renders a default theme, without any customization', () => {
    const tree = renderer.create(
      <ThemeContext.Provider value={theme}>
        <Button>Button</Button>
      </ThemeContext.Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a CUSTOM theme, with new colors customized', () => {

    const customTheme = {
      theme: new Theme({
        palette: {
          primary: {
            dark: 'pink',
          },
          secondary: {
            light: 'blue',
          },
        },
      }),
    };

    const tree = renderer.create(
      <ThemeContext.Provider value={customTheme}>
        <Button>Button</Button>
      </ThemeContext.Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
