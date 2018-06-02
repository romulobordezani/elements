import React from 'react';
import Markdown from 'react-markdown';
import './ViewerContainer.css';
import MdCodeBlock from './MdCodeBlock';

// > Documents to be shown
import { TypographyDoc } from '../../../providers/Typography';
import Button from '../../../elements/Button';
import { ThemeProviderDoc } from '../../../providers/ThemeProvider';
import { CssBaselineDoc } from '../../../providers/CssBaseline';

const getStarted = require('../../../README.md');
const getEnvolved = require('../../../CODE_OF_CONDUCT.md');

function ViewerContainer() {
  return (
    <div className="viewer-container">

      <h1><a href="#get_started" className="anchor" id="get_started" style={{ visibility: 'hidden' }} >Get Started</a></h1>
      <Markdown
        source={getStarted}
        escapeHtml={false}
        renderers={{ code: MdCodeBlock }}
      />

      <hr />

      <h1><a href="#get_envolved" className="anchor" id="get_envolved">Get Envolved</a></h1>
      <Markdown
        source={getEnvolved}
        escapeHtml={false}
        renderers={{ code: MdCodeBlock }}
      />

      <hr />

      <h1><a href="#components" className="anchor" id="components">Components</a></h1>
      <div>
        <h2><a href="#button" className="anchor" id="button">Button</a></h2>
        <p>
          Sed justo diam, viverra at enim non, interdum lobortis dolor.
          Mauris eget ante eget ipsum vulputate efficitur.
        </p>
        <Button>Button</Button>
      </div>

      <hr />

      <h1><a href="#providers" className="anchor" id="providers">Providers</a></h1>
      <div>

        <ThemeProviderDoc />

        <hr />

        <TypographyDoc />

        <hr />

        <CssBaselineDoc />

        <hr />
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
