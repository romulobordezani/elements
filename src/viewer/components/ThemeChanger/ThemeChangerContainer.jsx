import React from 'react';
import ThemeChangerButton from './ThemeChangerButton';
import dafitiLogoPico from './images/logo-dafiti.png';
import kanuiLogoPico from './images/logo-kanui.png';
import tricaeLogoPico from './images/logo-tricae.png';
import './ThemeChanger.scss';

function ThemeChangerContainer() {
  return (
    <div className="theme-changer">
      <ThemeChangerButton themeName="dafiti"><img src={dafitiLogoPico} alt="Change Theme to Dafiti" /></ThemeChangerButton>
      <ThemeChangerButton themeName="kanui"><img src={kanuiLogoPico} alt="Change Theme to Kanui" /></ThemeChangerButton>
      <ThemeChangerButton themeName="tricae"><img src={tricaeLogoPico} alt="Change Theme to Tricae" /></ThemeChangerButton>
    </div>
  );
}

export default ThemeChangerContainer;
