import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withTheme, Theme } from '../../providers/ThemeProvider';
import styleOverride from './Button.jstyle';

function Button({ theme, classes, ...props }) {
  return (
    <button className={`eButton ${classes.eButton}`} {...props} >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  palette: 'primary',
  tone: 'light',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.instanceOf(Theme).isRequired,
  classes: PropTypes.shape({}).isRequired,
  palette: PropTypes.string,
  tone: PropTypes.string,
};

export default withTheme(injectSheet(styleOverride)(Button));
