// /* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from '../core/Theme/index';
import ThemeProvider from '../providers/ThemeProvider';

const theme = new Theme();

it('renders without crashing and using the Theme Provider', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
