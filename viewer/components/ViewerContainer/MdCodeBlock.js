'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // /* eslint-env browser */


// Reference: https://highlightjs.org
var _window = window,
    hljs = _window.hljs;

var MdCodeBlock = function (_React$PureComponent) {
  _inherits(MdCodeBlock, _React$PureComponent);

  function MdCodeBlock(props) {
    _classCallCheck(this, MdCodeBlock);

    var _this = _possibleConstructorReturn(this, (MdCodeBlock.__proto__ || Object.getPrototypeOf(MdCodeBlock)).call(this, props));

    _this.setRef = _this.setRef.bind(_this);
    return _this;
  }

  _createClass(MdCodeBlock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlightCode();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.highlightCode();
    }
  }, {
    key: 'setRef',
    value: function setRef(el) {
      this.codeEl = el;
    }
  }, {
    key: 'highlightCode',
    value: function highlightCode() {
      hljs.highlightBlock(this.codeEl);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'pre',
        null,
        _react2.default.createElement(
          'code',
          { ref: this.setRef, className: 'language-' + this.props.language },
          this.props.value
        )
      );
    }
  }]);

  return MdCodeBlock;
}(_react2.default.PureComponent);

MdCodeBlock.defaultProps = {
  language: ''
};

MdCodeBlock.propTypes = {
  value: _propTypes2.default.string.isRequired,
  language: _propTypes2.default.string
};

exports.default = MdCodeBlock;