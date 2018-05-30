// Reference > https://reactjs.org/docs/context.html
import React from 'react';

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

export { ThemeContext, withTheme };
