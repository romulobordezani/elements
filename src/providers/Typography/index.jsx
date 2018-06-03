import React from 'react';
import PropTypes from 'prop-types';
import reactJss from 'react-jss';
import { withTheme, Theme } from '../../providers/ThemeProvider';

// > Styles
import './Typography.css';
import styleOverride from './Typography.jstyle';

function Typography({ theme, classes, ...props }) {
  return (
    <div className={`eTypography ${classes.typography}`}>
      {props.children}
    </div>
  );
}

Typography.defaultProps = {
  palette: 'black',
  tone: 'main',
  align: 'left',
  fontFamily: false,
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.instanceOf(Theme).isRequired,
  classes: PropTypes.shape({}).isRequired,
  palette: PropTypes.string,
  tone: PropTypes.string,
  align: PropTypes.string,
  fontFamily: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export default withTheme(reactJss(styleOverride)(Typography));
export { default as TypographyDoc } from './documents';
