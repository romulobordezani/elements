// Reference > https://reactjs.org/docs/context.html
import React from 'react';

const ThemeContext = React.createContext({
  theme: {},
  toggleTheme: () => {},
});

export default ThemeContext;
