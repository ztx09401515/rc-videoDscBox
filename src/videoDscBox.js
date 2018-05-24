"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _videoDscBox = _interopRequireDefault(require("./videoDscBox.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VideoDscBox =
/*#__PURE__*/
function (_React$Component) {
  function VideoDscBox() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, VideoDscBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VideoDscBox)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      previewOn: false,
      percent: 0,
      index: 0
    }), _temp));
  }

  _createClass(VideoDscBox, [{
    key: "handlerMousemove",
    value: function handlerMousemove(pxevent) {
      var event = pxevent.nativeEvent,
          mousepos = event.offsetX / this.refs.cover.scrollWidth;
      mousepos = mousepos >= 1 ? 0.99 : mousepos;
      var imgindex = Math.floor(mousepos / (1 / this.props.previewCount));
      imgindex = imgindex < 0 ? 0 : imgindex;
      imgindex = imgindex > this.props.previewCount ? 5 : imgindex;
      this.setState({
        previewOn: true,
        percent: mousepos * 100,
        index: imgindex
      });
    }
  }, {
    key: "handlerMouseLeave",
    value: function handlerMouseLeave(pxevent) {
      this.setState({
        previewOn: false,
        percent: 0,
        index: 0
      });
    }
  }, {
    key: "handlerMouseOver",
    value: function handlerMouseOver(e) {
      this.props.onMouseOver ? this.props.onMouseOver.call(this, e) : null;
    }
  }, {
    key: "handlerMouseEnter",
    value: function handlerMouseEnter(e) {
      this.props.onMouseEnter ? this.props.onMouseEnter.call(this, e) : null;
    }
  }, {
    key: "handlerBoardMouseLeave",
    value: function handlerBoardMouseLeave(e) {
      this.props.onMouseLeave ? this.props.onMouseLeave.call(this, e) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var state = this.state,
          props = this.props,
          data = props.data;
      var mStyles = {
        className: _videoDscBox.default.videoDscBoxBoard + ' ' + (props.className || ''),
        imgInClassName: _videoDscBox.default.videoDscBoxIn,
        imgBotClassName: _videoDscBox.default.videoDscBoxBot,
        imgRightSmClassName: _videoDscBox.default.videoDscBoxRightSm,
        imgRightMdClassName: _videoDscBox.default.videoDscBoxRightMd,
        previewClassName: _videoDscBox.default.preview,
        infoInClassName: _videoDscBox.default.infoIn,
        infoBotClassName: _videoDscBox.default.infoBot,
        infoRightSmClassName: _videoDscBox.default.infoRightSm,
        infoNameClassName: _videoDscBox.default.infoName,
        infoVisitCountClassName: _videoDscBox.default.infoVisitCount,
        infoAuthorClassName: _videoDscBox.default.infoAuthor,
        infoD1ClassName: _videoDscBox.default.infoD1
      };
      var infoClassNameTemp;
      var imgClassName;

      switch (props.infoType) {
        case 'in':
          imgClassName = mStyles.imgInClassName;
          infoClassNameTemp = mStyles.infoInClassName;
          break;

        case 'bottom':
          imgClassName = mStyles.imgBotClassName;
          infoClassNameTemp = mStyles.infoBotClassName;
          break;

        case 'right':
          imgClassName = mStyles.imgRightSmClassName;
          infoClassNameTemp = mStyles.infoRightSmClassName;
          break;

        default:
          imgClassName = mStyles.imgInClassName;
          infoClassNameTemp = mStyles.infoInClassName;
          break;
      }

      var infoContent = _react.default.createElement("div", {
        className: infoClassNameTemp
      }, _react.default.createElement("span", {
        className: _videoDscBox.default.infoName
      }, data.name), data.D1 ? _react.default.createElement("span", {
        className: _videoDscBox.default.infoD1
      }, data.D1) : null, _react.default.createElement("span", {
        className: _videoDscBox.default.infoAuthor
      }, data.author), data.D2 ? _react.default.createElement("span", {
        className: _videoDscBox.default.infoD1
      }, data.D1) : null, data.D3 ? _react.default.createElement("span", {
        className: _videoDscBox.default.infoD1
      }, data.D1) : null);

      var result;

      if (this.props.preview) {
        var displayPreview = props.preview && state.previewOn;
        var displayInfo = !(displayPreview && !props.infoOpenWhenPreview);
        var resurldata = (props.data.resUrl || '') + '/' + state.index.toString() + props.suffix;

        var previewmaskTemp = _react.default.createElement("div", {
          className: mStyles.previewClassName,
          style: {
            backgroundImage: 'url(' + encodeURI(resurldata) + ')'
          }
        }, _react.default.createElement(_antd.Progress, {
          className: _videoDscBox.default.previewProgresser,
          showInfo: false,
          percent: state.percent
        }));

        var previewmask = displayPreview ? previewmaskTemp : '';

        var imgContent = _react.default.createElement("a", {
          ref: 'cover',
          title: props.data.name,
          href: props.data.url,
          target: '_blank',
          onMouseLeave: this.handlerMouseLeave.bind(this),
          onMouseMove: this.handlerMousemove.bind(this),
          className: imgClassName,
          style: {
            backgroundImage: 'url(' + encodeURI(props.data.coverUrl) + ')'
          }
        }, previewmask);

        result = _react.default.createElement("div", {
          onMouseEnter: this.handlerMouseEnter.bind(this),
          onMouseLeave: this.handlerBoardMouseLeave.bind(this),
          onMouseOver: this.handlerMouseOver.bind(this),
          className: mStyles.className,
          style: Object.assign({
            position: 'relative'
          }, this.props.style)
        }, this.props.prefix ? this.props.prefix : undefined, this.props.displayImage ? imgContent : null, !displayInfo ? null : props.customInfo ? props.customInfo.apply(this) : infoContent);
      } else {
        var imgContent = _react.default.createElement("a", {
          ref: 'cover',
          title: props.data.name,
          href: props.data.url,
          target: '_blank',
          onMouseLeave: this.handlerMouseLeave.bind(this),
          onMouseMove: this.handlerMousemove.bind(this),
          className: imgClassName,
          resurl: props.data.resUrl,
          style: {
            backgroundImage: 'url(' + encodeURI(props.data.coverUrl) + ')'
          }
        });

        result = _react.default.createElement("div", {
          onMouseEnter: this.handlerMouseEnter.bind(this),
          onMouseLeave: this.handlerBoardMouseLeave.bind(this),
          onMouseOver: this.handlerMouseOver.bind(this),
          className: mStyles.className,
          style: Object.assign({
            position: 'relative'
          }, this.props.style)
        }, this.props.prefix ? this.props.prefix : undefined, this.props.displayImage ? imgContent : null, props.customInfo ? props.customInfo.apply(this) : infoContent);
      }

      return result;
    }
  }]);

  _inherits(VideoDscBox, _React$Component);

  return VideoDscBox;
}(_react.default.Component);

exports.default = VideoDscBox;

_defineProperty(VideoDscBox, "proptypes", {
  data: _propTypes.default.object.isRequired,
  prefix: _propTypes.default.node,
  infoType: _propTypes.default.string,
  display: _propTypes.default.object.isRequired,
  preview: _propTypes.default.bool.isRequired,
  infoOpenWhenPreview: _propTypes.default.bool.isRequired,
  onMouseOver: _propTypes.default.func,
  displayImage: _propTypes.default.bool,
  animBorder: _propTypes.default.bool,
  previewCount: _propTypes.default.number,
  suffix: _propTypes.default.string
});

_defineProperty(VideoDscBox, "defaultProps", {
  data: null,
  name: null,
  suffix: '.jpg',
  describe: null,
  customInfo: null,
  //
  author: null,
  visitCount: null,
  danmuCount: null,
  imageLink: true,
  infoType: 'in',
  //bottom,right
  coverurl: '',
  preview: true,
  infoOpenWhenPreview: false,
  previewCount: 6,
  displayImage: true,
  animBorder: false,
  display: {
    name: true,
    visitCount: true
  }
});