// /* eslint-env browser */

import React from 'react';
import Markdown from 'react-markdown';
import MdCodeBlock from '../../viewer/components/ViewerContainer/MdCodeBlock';
import Button from './index';

const readme = require('./README.md');

const customButtonTricaeStyle = {
  margin: '10px',
  flexGrow: 1,
  boxShadow: '0 3px 0 0 #cd910a',
  borderRadius: '3px',
  backgroundColor: '#f4af16',
};

/* eslint-disable no-alert */
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
        <Button style={{ margin: '10px', flexGrow: 1 }} onClick={() => window.alert('I was clicked!')}>Default</Button>
        <Button style={{ margin: '10px', flexGrow: 1 }} palette="secondary" tone="dark">Secondary</Button>
        <Button style={customButtonTricaeStyle} palette="primary" tone="light">Tricae Bevel</Button>
        <Button style={{ margin: '10px', flexGrow: 1 }} palette="white" >White</Button>
        <Button style={{ margin: '10px', flexGrow: 1 }} palette="black" >Black</Button>
      </div>
    </div>
  );
}
/* eslint-enable no-alert */

export default ButtonDocs;
