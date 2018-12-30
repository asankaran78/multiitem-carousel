"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactAliceCarousel = _interopRequireDefault(require("react-alice-carousel"));

require("react-alice-carousel/lib/alice-carousel.css");

var _carouselPending = _interopRequireDefault(require("../images/carousel-pending.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var image = {
  src: _carouselPending.default,
  alt: 'my image'
};

var Gallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Gallery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Gallery)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.items = [1, 2, 3, 4, 5], _this.state = {
      currentIndex: 0,
      responsive: {
        1024: {
          items: 3
        }
      },
      items: _this.items.map(_this.galleryItem)
    }, _this.slideTo = function (i) {
      return _this.setState({
        currentIndex: i
      });
    }, _this.onSlideChanged = function (e) {
      return _this.setState({
        currentIndex: e.item
      });
    }, _this.slideNext = function () {
      return _this.setState({
        currentIndex: _this.state.currentIndex + 1
      });
    }, _this.slidePrev = function () {
      return _this.setState({
        currentIndex: _this.state.currentIndex - 1
      });
    }, _this.thumbItem = function (item, i) {
      return _react.default.createElement("li", {
        key: "key-".concat(i),
        onClick: function onClick() {
          return _this.slideTo(i);
        }
      }, "Thumb ", item);
    }, _this.galleryItem = function (item, i) {
      return _react.default.createElement("div", {
        key: "key-".concat(i),
        className: "yours-custom-class"
      }, _react.default.createElement("h2", null, item));
    }, _temp));
  }

  _createClass(Gallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          items = _this$state.items,
          responsive = _this$state.responsive,
          currentIndex = _this$state.currentIndex;

      var handleOnDragStart = function handleOnDragStart(e) {
        return e.preventDefault();
      };

      return _react.default.createElement("div", null, _react.default.createElement("h3", null, "Navigation"), _react.default.createElement("ul", null, this.items.map(this.thumbItem)), _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.slidePrev();
        }
      }, "Prev button"), _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.slideNext();
        }
      }, "Next button"), _react.default.createElement("h3", null, "React Alice Carousel"), _react.default.createElement(AliceCarousel, {
        mouseDragEnabled: true
      }, "items=", items, _react.default.createElement("img", {
        src: image.src,
        onDragStart: handleOnDragStart,
        className: "yours-custom-class"
      }), "dotsDisabled=", true, "buttonsDisabled=", true, "responsive=", responsive, "slideToIndex=", currentIndex, "onSlideChanged=", this.onSlideChanged), "/>");
    }
  }]);

  return Gallery;
}(_react.default.Component);

var _default = _reactAliceCarousel.default;
exports.default = _default;