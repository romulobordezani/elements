import React from 'react';
import Markdown from 'react-markdown';
import MdCodeBlock from '../../viewer/components/ViewerContainer/MdCodeBlock';

const readme = require('./README.md');

function ColorsDoc() {
  return (
    <React.Fragment>
      <h2><a href="colors" className="anchor" id="colors">Colors</a></h2>
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

export default ColorsDoc;
