// Reference > https://reactjs.org/docs/context.html
import React from 'react';
import Theme from '../../core/Theme';

const ThemeContext = React.createContext({
  theme: {},
  toggleTheme: () => {},
});

function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} theme={theme.theme} />}
      </ThemeContext.Consumer>
    );
  };
}

export { ThemeContext, withTheme, Theme };
// export { default as ThemeProviderDoc } from './documents';
