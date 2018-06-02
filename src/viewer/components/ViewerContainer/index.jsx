import React from 'react';
import Markdown from 'react-markdown';
import './ViewerContainer.css';
import MdCodeBlock from './md-code-block';
import Button from '../../../elements/Button';

const getStarted = require('../../../README.md');
const getEnvolved = require('../../../CODE_OF_CONDUCT.md');

function ViewerContainer() {
  return (
    <div className="viewer-container">

      <h1><a href="true" className="anchor" id="get_started" style={{ visibility: 'hidden' }} >Get Started</a></h1>
      <Markdown
        source={getStarted}
        escapeHtml={false}
        renderers={{ code: MdCodeBlock }}
      />

      <h1><a href="true" className="anchor" id="get_envolved">Get Envolved</a></h1>
      <Markdown
        source={getEnvolved}
        escapeHtml={false}
        renderers={{ code: MdCodeBlock }}
      />

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
