import React from 'react';
import Markdown from 'react-markdown';
import './ViewerContainer.css';
import MdCodeBlock from './MdCodeBlock';

// > Documents to be shown
import TypographyDoc from '../../../providers/Typography/documents';
import ButtonDocs from '../../../elements/Button/documents';
import ThemeProviderDoc from '../../../providers/ThemeProvider/documents';
import ColorsDoc from '../../../core/Colors/documents';

const getStarted = require('../../../README.md');
const getEnvolved = require('../../../CODE_OF_CONDUCT.md');
const getTodo = require('../../../TODO.md');

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

      <h2>Get inspired:</h2>
      <Markdown
        source={getEnvolved}
        escapeHtml={false}
        renderers={{ code: getTodo }}
      />

      <hr />

      <h1><a href="#providers" className="anchor" id="providers">Providers</a></h1>
      <div>
        <ThemeProviderDoc />
        <hr />
        <TypographyDoc />
        <hr />
        <ColorsDoc />
      </div>

      <hr />

      <h1><a href="#components" className="anchor" id="components">Components</a></h1>
      <ButtonDocs />

    </div>
  );
}

export default ViewerContainer;
