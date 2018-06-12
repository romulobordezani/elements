// /* eslint-env browser */
import React from 'react';
import Markdown from 'react-markdown';
import MdCodeBlock from '../../viewer/components/ViewerContainer/MdCodeBlock';
import MenuAux from './index';

const readme = require('./README.md');

// const customButtonTricaeStyle = {
//   margin: '10px',
//   flexGrow: 1,
//   boxShadow: '0 3px 0 0 #cd910a',
//   borderRadius: '3px',
//   backgroundColor: '#f4af16',
// };

function Docs() {
  const items = [
    {
      onClick: (e) => {
        e.preventDefault();
      },
      text: 'Atendimento',
    },
    {
      href: '/perguntas-frequentes/',
      text: 'Ajuda',
    },
  ];
  return (
    <div>
      <h2><a href="#button" className="anchor" id="button">MenuAux</a></h2>
      <Markdown
        source={readme}
        escapeHtml={false}
        renderers={{ code: MdCodeBlock }}
      />
      Live example:
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '60px' }} >
        <MenuAux items={items} />
      </div>
    </div>
  );
}

export default Docs;
