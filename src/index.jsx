// /* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import './runners/index.css';
import App from './runners/App';
import ThemeProvider from './providers/ThemeProvider';
import Theme from './core/Theme/index';

const theme = new Theme({
  palette: {
    primary: {
      dark: 'pink',
    },
    secondary: {
      light: 'blue',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
