import React from 'react';
import Markdown from 'react-markdown';
import MdCodeBlock from '../../viewer/components/ViewerContainer/MdCodeBlock';
import Button from './index';

const readme = require('./README.md');

function ButtonDocs() {
  return (
    <div>
      <h2><a href="#button" className="anchor" id="button">Button</a></h2>
      <Markdown
        source={readme}
        escapeHtml={false}
        renderers={{ code: MdCodeBlock }}
      />
      Live example:
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '60px' }} >
        <Button style={{ margin: '10px' }}>Default</Button>
        <Button style={{ margin: '10px' }} palette="secondary" tone="dark">Secondary</Button>
        <Button style={{ margin: '10px' }} palette="white" >White</Button>
        <Button style={{ margin: '10px' }} palette="black" >Black</Button>
      </div>
    </div>
  );
}

export default ButtonDocs;
