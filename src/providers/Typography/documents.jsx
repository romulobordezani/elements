import React from 'react';
import Markdown from 'react-markdown';
import Typography from './index';
import MdCodeBlock from '../../viewer/components/ViewerContainer/MdCodeBlock';

const readme = require('./README.md');

function CommomTextTags() {
  return (
    <React.Fragment>
      <h1>Header H1</h1>
      <h2>Header H2</h2>
      <h3>Header H3</h3>
      <p>Paragraph</p>
      <a href="/#">Link</a>
    </React.Fragment>
  );
}

function TypographyDoc() {
  return (
    <React.Fragment>
      <h2><a href="#typography" className="anchor" id="typography">Typography</a></h2>
      <Typography>
        <div>
          <Markdown
            source={readme}
            escapeHtml={false}
            renderers={{ code: MdCodeBlock }}
          />

          Typography coloring example using
          &#123;pallete = primary&#125; & &#123;tone = main&#125;
          <div className="md-card">
            <Typography palette="primary" tone="main" >
              <CommomTextTags />
            </Typography>
          </div>

          Typography coloring example using
          &#123;pallete = primary&#125;, &#123;tone = dark&#125;,
          &#123;align = right&#125; &#123;fontFamily = Serif&#125;
          <div className="md-card">
            <Typography palette="secondary" tone="dark" align="right" fontFamily="serif" >
              <CommomTextTags />
            </Typography>
          </div>

          <div className="md-card">
            <Typography >
              Typography coloring example using defaults
              <CommomTextTags />
            </Typography>
          </div>

        </div>
      </Typography>
    </React.Fragment>
  );
}

export default TypographyDoc;
