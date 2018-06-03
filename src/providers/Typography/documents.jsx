import React from 'react';
import Markdown from 'react-markdown';
import FlexBoxGrid from 'fbgrid-spec-react';
import Typography from './index';
import MdCodeBlock from '../../viewer/components/ViewerContainer/MdCodeBlock';
import { withTheme } from '../ThemeProvider';

const readme = require('./README.md');

const grid = {
  style: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cells: [
    {
      component: {
        name: 'typographySample',
        options: {
          info: 'primary > main, text: centered, fontFamily: Serif',
          palette: 'primary',
          tone: 'main',
        },
      },
    },
    {
      component: {
        name: 'typographySample',
        options: {
          info: 'primary > dark, text: centered, fontFamily: Serif',
          palette: 'primary',
          tone: 'dark',
          align: 'center',
          fontFamily: 'Serif',
        },
      },
    },
    {
      component: {
        name: 'typographySample',
        options: {
          info: 'Defaults',
        },
      },
    },
  ],
};

function CommonTextTags() {
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

const typographySample = withTheme(({ theme, ...props }) => {
  return (
    <div className="md-card">
      <div className="md-card__title">
        { props.info }
      </div>
      <div className="md-card__content">
        <Typography {...props} >
          <CommonTextTags />
        </Typography>
      </div>
    </div>
  );
});

const componentsMap = {
  typographySample,
};

function TypographyDoc() {
  return (
    <React.Fragment>
      <h2><a href="#typography" className="anchor" id="typography">Typography</a></h2>
      <Typography>
        <div className="debug">
          <Markdown
            source={readme}
            escapeHtml={false}
            renderers={{ code: MdCodeBlock }}
          />

          <FlexBoxGrid
            spec={grid}
            componentsMap={componentsMap}
          />

        </div>
      </Typography>
    </React.Fragment>
  );
}

export default TypographyDoc;
