import React from 'react';
import Markdown from 'react-markdown';
import MdCodeBlock from '../../viewer/components/ViewerContainer/MdCodeBlock';

const readme = require('./README.md');

function CssBaselineDoc() {
  return (
    <React.Fragment>
      <h2><a href="#css_baseline" className="anchor" id="css_baseline">CssBaseline</a></h2>
      <div>
        <Markdown
          source={readme}
          escapeHtml={false}
          renderers={{ code: MdCodeBlock }}
        />
      </div>
    </React.Fragment>
  );
}

export default CssBaselineDoc;
