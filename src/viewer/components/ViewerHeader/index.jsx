import React from 'react';
import ThemeChangerContainer from '../ThemeChanger/ThemeChangerContainer';
import logoType from './images/elem_type.svg';
import './ViewerHeader.css';

function ViewerHeader() {
  return (
    <header className="header" style={{ backgroundColor: '#000000' }}>
      <div className="header__logo-type" title="Elem runs faster with you! Join us." >
        <div className="header__logo-type__logo header__logo-type__logo_size_small" />
        <div className="header__logo-type__title"><img src={logoType} alt="Elements" /></div>
      </div>
      <div className="header__theme-switcher" ><ThemeChangerContainer /></div>
    </header>
  );
}

export default ViewerHeader;
