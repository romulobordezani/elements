import React from 'react';
import ThemeChangerContainer from '../ThemeChanger/ThemeChangerContainer';
import logo from './images/logo-elem.svg';
import { ThemeContext } from '../../../providers/ThemeProvider';
import './ViewerHeader.css';

function ViewerHeader() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className="header" style={{ backgroundColor: theme.colors.dark[700] }}>
          <div className="header__logo-type">
            <img src={logo} className="header__logo-type__logo header__logo-type__logo_size_small" alt="Elem" />
            <div className="header__logo-type__title">Elem</div>
          </div>
          <div className="header__theme-switcher" ><ThemeChangerContainer /></div>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}

export default ViewerHeader;
