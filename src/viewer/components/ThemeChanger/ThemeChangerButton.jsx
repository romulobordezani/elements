import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../providers/ThemeProvider/index';

function ThemeChangerButton(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => (
        <button
          className={`theme-changer__item ${theme.currentTheme === props.themeName ? 'theme-changer__item_state_selected' : ''}`}
          style={{ backgroundColor: theme.currentTheme === props.themeName || theme.currentTheme === 'default' ? theme.palette.primary.light : '#FFF' }}
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
