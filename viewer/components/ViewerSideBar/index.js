'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ViewerSideBar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ViewerSideBar() {
  return _react2.default.createElement(
    'div',
    { className: 'side-bar' },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#get_started' },
          'Get Started'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#get_envolved' },
          'Get Envolved'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#providers' },
          'Providers'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#theme' },
              'Theme'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#typography' },
              'Typography'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#colors' },
              'Colors'
            )
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#components' },
          'Components'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#button' },
              'Button'
            )
          )
        )
      )
    )
  );
}
exports.default = ViewerSideBar;