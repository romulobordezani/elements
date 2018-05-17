import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../../core/Theme/index';

class ThemeProvider extends React.Component {
  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }

  render() {
    return this.props.children;
  }
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.instanceOf(Theme),
};

ThemeProvider.propTypes = {
  theme: PropTypes.instanceOf(Theme).isRequired,
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;
