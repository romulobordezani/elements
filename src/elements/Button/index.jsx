import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../../core/Theme/index';

const Button = function Button(props, context) {
  return (
    <button style={{ color: context.theme.palette.primary.dark }}>
      {props.content},
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
};

Button.contextTypes = {
  theme: PropTypes.instanceOf(Theme).isRequired,
};

export default Button;
