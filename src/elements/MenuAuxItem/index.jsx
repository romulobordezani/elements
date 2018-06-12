import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withTheme, Theme } from '../../providers/ThemeProvider';
import styleOverride from './style.jstyle';

function MenuAuxItem({
  theme, classes, val, ...props
}) {
  return (
    <li
      className={`eMenuAuxItem ${classes.eMenuAuxItem}`}
      {...props}
    >
      <a
        className={`eMenuAuxAnchor ${classes.eMenuAuxAnchor}`}
        href={val.href}
      >
        { val.text }
      </a>
    </li>
  );
}

MenuAuxItem.defaultProps = {
  palette: 'primary',
  tone: 'light',
};

MenuAuxItem.propTypes = {
  theme: PropTypes.instanceOf(Theme).isRequired,
  classes: PropTypes.shape({}).isRequired,
  palette: PropTypes.string,
  tone: PropTypes.string,
  val: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
};

export default withTheme(injectSheet(styleOverride)(MenuAuxItem));
