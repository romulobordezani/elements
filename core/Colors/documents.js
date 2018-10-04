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

var _MdCodeBlock = require('../../viewer/components/ViewerContainer/MdCodeBlock');

var _MdCodeBlock2 = _interopRequireDefault(_MdCodeBlock);

var _ThemeProvider = require('../../providers/ThemeProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var readme = require('./README.md');

var cellStyle = {
  margin: '0.1em',
  textAlign: 'center',
  paddingLeft: '0.1em',
  paddingRight: '0.1em',
  flexGrow: 0
};

var grid = {
  style: {
    flexDirection: 'row'
  },
  cells: [{
    style: cellStyle,
    component: {
      name: 'ColorList',
      options: {
        palette: 'primary',
        tone: 'dark',
        contrastText: '#FFFFFF'
      }
    }
  }, {
    style: cellStyle,
    component: {
      name: 'ColorList',
      options: {
        palette: 'primary',
        tone: 'light',
        contrastText: '#111111'
      }
    }
  }, {
    style: cellStyle,
    component: {
      name: 'ColorList',
      options: {
        palette: 'secondary',
        tone: 'dark',
        contrastText: '#FFFFFF'
      }
    }
  }, {
    style: cellStyle,
    component: {
      name: 'ColorList',
      options: {
        palette: 'secondary',
        tone: 'light',
        contrastText: '#FFFFFF'
      }
    }
  }]
};

var ColorList = (0, _ThemeProvider.withTheme)(function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['theme']);

  function listColors(colors, contrastText) {
    return Object.keys(colors).map(function (key) {
      return _react2.default.createElement(
        'div',
        {
          key: key,
          style: {
            backgroundColor: colors[key],
            color: contrastText,
            padding: '6px'
          }
        },
        key
      );
    });
  }

  return _react2.default.createElement(
    'div',
    { className: 'e-grid' },
    _react2.default.createElement(
      'div',
      { className: 'md-card' },
      _react2.default.createElement(
        'span',
        { style: { padding: '5px', fontSize: '0.8em' } },
        props.palette,
        ' : ',
        props.tone
      ),
      listColors(theme.palette[props.palette].colors[props.tone], props.contrastText)
    )
  );
});

var componentsMap = {
  ColorList: ColorList
};

function ColorsDoc() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'h2',
      null,
      _react2.default.createElement(
        'a',
        { href: 'colors', className: 'anchor', id: 'colors' },
        'Colors'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactMarkdown2.default, {
        source: readme,
        escapeHtml: false,
        renderers: { code: _MdCodeBlock2.default }
      })
    ),
    _react2.default.createElement(_fbgridSpecReact2.default, {
      spec: grid,
      componentsMap: componentsMap
    })
  );
}

exports.default = ColorsDoc;