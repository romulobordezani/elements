import React from 'react';
import './ViewerSideBar.css';

function ViewerSideBar() {
  return (
    <div className="side-bar">
      <ul>
        <li><a href="#get_started">Get Started</a></li>
        <li><a href="#get_envolved">Get Envolved</a></li>
        <li>
          <a href="#components">Components</a>
          <ul>
            <li><a href="#button">Button</a></li>
            <li><a href="#input">Input</a></li>
            <li><a href="#loader">Loader</a></li>
          </ul>
        </li>
        <li>
          <a href="#providers">Providers</a>
          <ul>
            <li><a href="#theme">Theme</a></li>
            <li><a href="#typography">Typography</a></li>
            <li><a href="#css_baseline">CssBaseline</a></li>
            <li><a href="#colors">Colors</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default ViewerSideBar;
