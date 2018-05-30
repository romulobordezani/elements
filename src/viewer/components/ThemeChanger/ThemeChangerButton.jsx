import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../providers/ThemeProvider/index';

function ThemeChangerButton(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => (
        <button
          className="theme-changer__item"
          style={{ backgroundColor: theme.currentTheme === props.themeName || theme.currentTheme === 'default' ? theme.palette.secondary.light : '#FFF' }}
          onClick={() => changeTheme(props.themeName)}
        >
          {props.children}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

ThemeChangerButton.propTypes = {
  children: PropTypes.element.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default ThemeChangerButton;
