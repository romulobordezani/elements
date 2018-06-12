import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withTheme, Theme } from '../../providers/ThemeProvider';
import styleOverride from './style.jstyle';
import MenuAuxItem from '../MenuAuxItem';

let count = 0;

function MenuAux({
  theme, classes, items, ...props
}) {
  return (
    <ul className={`eMenuAux ${classes.eMenuAux}`} {...props} >
      { items.map((val) => {
        count += 1;
        return (<MenuAuxItem
          val={val}
          key={count}
          palette="secondary"
          tone="dark"
        />);
      })}
    </ul>
  );
}

MenuAux.defaultProps = {
  palette: 'primary',
  tone: 'light',
  items: [],
};

MenuAux.propTypes = {
  theme: PropTypes.instanceOf(Theme).isRequired,
  classes: PropTypes.shape({}).isRequired,
  palette: PropTypes.string,
  tone: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};

export default withTheme(injectSheet(styleOverride)(MenuAux));
