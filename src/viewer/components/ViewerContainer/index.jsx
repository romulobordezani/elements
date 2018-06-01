import React from 'react';
import './ViewerContainer.css';
import Button from '../../../elements/Button';

const ReactMarkdown = require('react-markdown');

const getStarted = require('./mds/getStarted.md');


function ViewerContainer() {
  return (
    <div className="viewer-container">
      <h1><a href="true" className="anchor" id="get_started">Get Started</a></h1>

      <ReactMarkdown source={getStarted} />


      <h1><a href="true" className="anchor" id="get_envolved">Get Envolved</a></h1>
      <p>
        Fusce a ex sit amet quam congue rutrum a ut nunc.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam quam nisi, pharetra quis nibh non, facilisis maximus ipsum.
        Praesent feugiat bibendum viverra.
      </p>

      <h1>Components</h1>
      <div>
        <h2><a href="true" className="anchor" id="button">Button</a></h2>
        <p>
          Sed justo diam, viverra at enim non, interdum lobortis dolor.
          Mauris eget ante eget ipsum vulputate efficitur.
        </p>
        <Button>Button</Button>
      </div>

      <h1>Providers</h1>
      <div>
        <h2><a href="true" className="anchor" id="typography">Typography</a></h2>
        <p>
          Mauris eget ante eget ipsum vulputate efficitur.
          Sed justo diam, viverra at enim non, interdum lobortis dolor.
        </p>
        <h2><a href="true" className="anchor" id="theme">Theme</a></h2>
        <p>
          Mauris eget ante eget ipsum vulputate efficitur.
          Sed justo diam, viverra at enim non, interdum lobortis dolor.
        </p>
        <h2><a href="true" className="anchor" id="css_baseline">CssBaseline</a></h2>
        <p>
          Mauris eget ante eget ipsum vulputate efficitur.
          Sed justo diam, viverra at enim non, interdum lobortis dolor.
        </p>
        <h2><a href="true" className="anchor" id="colors">Colors</a></h2>
        <p>
          Mauris eget ante eget ipsum vulputate efficitur.
          Sed justo diam, viverra at enim non, interdum lobortis dolor.
        </p>
      </div>
    </div>
  );
}
export default ViewerContainer;
