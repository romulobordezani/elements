// /* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Theme from '../core/Theme/index';
import ThemeContext from '../providers/ThemeProvider';

const theme = {
  theme: new Theme(),
};

it('renders without crashing and using the Theme Provider', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeContext.Provider value={theme} >
      <div>Hello world</div>
    </ThemeContext.Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
