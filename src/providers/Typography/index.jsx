import React from 'react';
import PropTypes from 'prop-types';
import './Typography.css';

function Typography(props) {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

Typography.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Typography;
