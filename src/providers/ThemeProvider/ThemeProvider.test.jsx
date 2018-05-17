import React from 'react';
import renderer from 'react-test-renderer';
import ThemeProvider from './index';
import Theme from '../../core/Theme';
import App from '../../runners/App';
jest.mock('react-dom');

const theme = new Theme();

describe('Theme', () => {

  it('Renders a default theme, without any customization', () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a CUSTOM theme, with new colors customized', () => {

    const customTheme = new Theme({
      palette: {
        primary: {
          dark: 'pink',
        },
        secondary: {
          light: 'blue',
        },
      },
    });

    const tree = renderer.create(
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
