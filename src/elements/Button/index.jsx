import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../providers/ThemeProvider';

function Button(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button
          style={{
            backgroundColor: theme.colors.dark.A100,
            color: theme.colors.dark.A700,
          }}
        >
          {props.children}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
