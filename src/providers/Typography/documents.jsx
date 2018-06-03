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
      <h4>Header H4</h4>
      <h5>Header H5</h5>
      <h6>Header H6</h6>
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

          <br />

          Typography coloring example using
          &#123;pallete = primary&#125;, &#123;tone = dark&#125;,
          &#123;align = center&#125; &#123;fontFamily = Serif&#125;
          <div className="md-card">
            <Typography palette="secondary" tone="dark" align="center" fontFamily="serif" >
              <CommomTextTags />
            </Typography>
          </div>

          <br />
          Typography coloring example using defaults
          <div className="md-card">
            <Typography >
              <CommomTextTags />
            </Typography>
          </div>

        </div>
      </Typography>
    </React.Fragment>
  );
}

export default TypographyDoc;
