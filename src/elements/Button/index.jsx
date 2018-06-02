import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withTheme, Theme } from '../../providers/ThemeProvider';
import './Button.css';

const styleOveride = {
  eButton: {
    backgroundColor: props => props.theme.palette.primary.main,
    color: props => props.theme.palette.primary.contrastText,
  },
};

function Button({ theme, classes, ...props }) {
  return (
    <button className={`eButton ${classes.eButton}`} >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.instanceOf(Theme).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withTheme(injectSheet(styleOveride)(Button));
