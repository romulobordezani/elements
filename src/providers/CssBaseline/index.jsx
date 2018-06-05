import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import './CustomBaseline.css';

function CssBaseline(props) {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

CssBaseline.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CssBaseline;
// export { default as CssBaselineDoc } from './documents';
