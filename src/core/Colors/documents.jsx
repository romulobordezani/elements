import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import MdCodeBlock from '../../viewer/components/ViewerContainer/MdCodeBlock';
import { withTheme, Theme } from '../../providers/ThemeProvider';

const readme = require('./README.md');

function listColors(colors, contrastText) {
  const coloredList = Object.keys(colors).map((key) => {
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
  return coloredList;
}

function ColorsDoc({ theme }) {
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
      { listColors(theme.colors.dark, '#FFFFFF') }
      { listColors(theme.colors.light, '#000000') }
    </React.Fragment>
  );
}

ColorsDoc.propTypes = {
  theme: PropTypes.instanceOf(Theme).isRequired,
};

export default withTheme(ColorsDoc);
