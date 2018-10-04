'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _fbgridSpecReact = require('fbgrid-spec-react');

var _fbgridSpecReact2 = _interopRequireDefault(_fbgridSpecReact);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _MdCodeBlock = require('../../viewer/components/ViewerContainer/MdCodeBlock');

var _MdCodeBlock2 = _interopRequireDefault(_MdCodeBlock);

var _ThemeProvider = require('../ThemeProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var readme = require('./README.md');

var cellStyle = {
  margin: '0.1em',
  textAlign: 'center',
  paddingLeft: '0.1em',
  paddingRight: '0.1em',
  flexGrow: 1
};

var grid = {
  style: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cells: [{
    style: cellStyle,
    component: {
      name: 'typographySample',
      options: {
        info: 'primary: dark',
        palette: 'primary',
        tone: 'dark'
      }
    }
  }, {
    style: cellStyle,
    component: {
      name: 'typographySample',
      options: {
        info: 'secondary: dark, text: centered, fontFamily: Serif',
        palette: 'secondary',
        tone: 'dark',
        align: 'center',
        fontFamily: 'Serif'
      }
    }
  }, {
    style: cellStyle,
    component: {
      name: 'typographySample',
      options: {
        info: 'Defaults'
      }
    }
  }]
};

function CommonTextTags() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Header H1'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Header H2'
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Header H3'
    ),
    _react2.default.createElement(
      'h4',
      null,
      'Header H4'
    ),
    _react2.default.createElement(
      'h5',
      null,
      'Header H5'
    ),
    _react2.default.createElement(
      'h6',
      null,
      'Header H6'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Paragraph'
    ),
    _react2.default.createElement(
      'a',
      { href: '/#' },
      'Link'
    )
  );
}

var typographySample = (0, _ThemeProvider.withTheme)(function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  return _react2.default.createElement(
    'div',
    { className: 'md-card' },
    _react2.default.createElement(
      'div',
      { className: 'md-card__title' },
      props.info
    ),
    _react2.default.createElement(
      'div',
      { className: 'md-card__content' },
      _react2.default.createElement(
        _index2.default,
        props,
        _react2.default.createElement(CommonTextTags, null)
      )
    )
  );
});

var componentsMap = {
  typographySample: typographySample
};

function TypographyDoc() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'h2',
      null,
      _react2.default.createElement(
        'a',
        { href: '#typography', className: 'anchor', id: 'typography' },
        'Typography'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: 'debug' },
        _react2.default.createElement(_reactMarkdown2.default, {
          source: readme,
          escapeHtml: false,
          renderers: { code: _MdCodeBlock2.default }
        }),
        _react2.default.createElement(_fbgridSpecReact2.default, {
          spec: grid,
          componentsMap: componentsMap
        })
      )
    )
  );
}

exports.default = TypographyDoc;