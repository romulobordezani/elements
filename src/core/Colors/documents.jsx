import React from 'react';
import Markdown from 'react-markdown';
import FlexBoxGrid from 'fbgrid-spec-react';
import MdCodeBlock from '../../viewer/components/ViewerContainer/MdCodeBlock';
import { withTheme } from '../../providers/ThemeProvider';

const readme = require('./README.md');

const grid = {
  style: {
    flexDirection: 'row',
  },
  cells: [
    {
      component: {
        name: 'ColorList',
        options: {
          tone: 'dark',
          contrastText: '#FFFFFF',
        },
      },
    },
    {
      component: {
        name: 'ColorList',
        options: {
          tone: 'light',
          contrastText: '#111111',
        },
      },
    },
  ],
};

const ColorList = withTheme(({ theme, ...props }) => {
  function listColors(colors, contrastText) {
    return Object.keys(colors).map((key) => {
      return (
        <div
          key={key}
          style={{
            backgroundColor: colors[key],
            color: contrastText,
            padding: '6px',
          }}
        >{key}
        </div>
      );
    });
  }

  return (
    <div className="e-grid">
      <div className="md-card">
        { listColors(theme.colors[props.tone], props.contrastText) }
      </div>
    </div>
  );
});

const componentsMap = {
  ColorList,
};


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
      <FlexBoxGrid
        spec={grid}
        componentsMap={componentsMap}
      />
    </React.Fragment>
  );
}

export default ColorsDoc;
