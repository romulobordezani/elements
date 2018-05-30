import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import Theme from '../../core/Theme';
import { withTheme } from '../../providers/ThemeProvider';

const styles = {
  myButton: {
    color: 'green',
  },
};

function Button({ theme, classes, ...props }) {
  return (
    <button className="{classes.myButton}" >{props.children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.instanceOf(Theme).isRequired,
  classes: PropTypes.any.isRequired,
};

const StyledButton = injectSheet(styles)(Button);

export default withTheme(StyledButton);
