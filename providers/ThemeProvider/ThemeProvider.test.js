'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _index = require('./index');

var _Theme = require('../../core/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = {
  theme: new _Theme2.default({})
};

describe('Theme', function () {

  it('Renders a default theme, without any customization', function () {
    var tree = _reactTestRenderer2.default.create(_react2.default.createElement(
      _index.ThemeContext.Provider,
      { value: theme },
      _react2.default.createElement(
        _Button2.default,
        null,
        'Button'
      )
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a CUSTOM theme, with new colors customized', function () {

    var customTheme = {
      theme: new _Theme2.default({
        palette: {
          primary: {
            dark: 'pink'
          },
          secondary: {
            light: 'blue'
          }
        }
      })
    };

    var tree = _reactTestRenderer2.default.create(_react2.default.createElement(
      _index.ThemeContext.Provider,
      { value: customTheme },
      _react2.default.createElement(
        _Button2.default,
        null,
        'Button'
      )
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});