"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mdbreact = require("mdbreact");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MultiCarouselPage =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiCarouselPage, _Component);

  function MultiCarouselPage() {
    _classCallCheck(this, MultiCarouselPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiCarouselPage).apply(this, arguments));
  }

  _createClass(MultiCarouselPage, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_mdbreact.Container, null, _react.default.createElement(_mdbreact.Carousel, {
        activeItem: 1,
        length: 3,
        slide: true,
        showControls: true,
        showIndicators: true,
        multiItem: true
      }, _react.default.createElement(_mdbreact.CarouselInner, null, _react.default.createElement(_mdbreact.Row, null, _react.default.createElement(_mdbreact.CarouselItem, {
        itemId: "1"
      }, _react.default.createElement(_mdbreact.Col, {
        md: "4"
      }, _react.default.createElement(_mdbreact.Card, {
        className: "mb-2"
      }, _react.default.createElement(_mdbreact.CardImage, {
        className: "img-fluid",
        src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
      }), _react.default.createElement(_mdbreact.CardBody, null, _react.default.createElement(_mdbreact.CardTitle, null, "Card title"), _react.default.createElement(_mdbreact.CardText, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), _react.default.createElement(_mdbreact.Button, {
        color: "primary"
      }, "Button")))), _react.default.createElement(_mdbreact.Col, {
        md: "4",
        className: "clearfix d-none d-md-block"
      }, _react.default.createElement(_mdbreact.Card, {
        className: "mb-2"
      }, _react.default.createElement(_mdbreact.CardImage, {
        className: "img-fluid",
        src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
      }), _react.default.createElement(_mdbreact.CardBody, null, _react.default.createElement(_mdbreact.CardTitle, null, "Card title"), _react.default.createElement(_mdbreact.CardText, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), _react.default.createElement(_mdbreact.Button, {
        color: "primary"
      }, "Button")))), _react.default.createElement(_mdbreact.Col, {
        md: "4",
        className: "clearfix d-none d-md-block"
      }, _react.default.createElement(_mdbreact.Card, {
        className: "mb-2"
      }, _react.default.createElement(_mdbreact.CardImage, {
        className: "img-fluid",
        src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
      }), _react.default.createElement(_mdbreact.CardBody, null, _react.default.createElement(_mdbreact.CardTitle, null, "Card title"), _react.default.createElement(_mdbreact.CardText, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), _react.default.createElement(_mdbreact.Button, {
        color: "primary"
      }, "Button"))))), _react.default.createElement(_mdbreact.CarouselItem, {
        itemId: "2"
      }, _react.default.createElement(_mdbreact.Col, {
        md: "4"
      }, _react.default.createElement(_mdbreact.Card, {
        className: "mb-2"
      }, _react.default.createElement(_mdbreact.CardImage, {
        className: "img-fluid",
        src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
      }), _react.default.createElement(_mdbreact.CardBody, null, _react.default.createElement(_mdbreact.CardTitle, null, "Card title"), _react.default.createElement(_mdbreact.CardText, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), _react.default.createElement(_mdbreact.Button, {
        color: "primary"
      }, "Button")))), _react.default.createElement(_mdbreact.Col, {
        md: "4",
        className: "clearfix d-none d-md-block"
      }, _react.default.createElement(_mdbreact.Card, {
        className: "mb-2"
      }, _react.default.createElement(_mdbreact.CardImage, {
        className: "img-fluid",
        src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
      }), _react.default.createElement(_mdbreact.CardBody, null, _react.default.createElement(_mdbreact.CardTitle, null, "Card title"), _react.default.createElement(_mdbreact.CardText, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), _react.default.createElement(_mdbreact.Button, {
        color: "primary"
      }, "Button")))), _react.default.createElement(_mdbreact.Col, {
        md: "4",
        className: "clearfix d-none d-md-block"
      }, _react.default.createElement(_mdbreact.Card, {
        className: "mb-2"
      }, _react.default.createElement(_mdbreact.CardImage, {
        className: "img-fluid",
        src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
      }), _react.default.createElement(_mdbreact.CardBody, null, _react.default.createElement(_mdbreact.CardTitle, null, "Card title"), _react.default.createElement(_mdbreact.CardText, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), _react.default.createElement(_mdbreact.Button, {
        color: "primary"
      }, "Button"))))), _react.default.createElement(_mdbreact.CarouselItem, {
        itemId: "3"
      }, _react.default.createElement(_mdbreact.Col, {
        md: "4"
      }, _react.default.createElement(_mdbreact.Card, {
        className: "mb-2"
      }, _react.default.createElement(_mdbreact.CardImage, {
        className: "img-fluid",
        src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
      }), _react.default.createElement(_mdbreact.CardBody, null, _react.default.createElement(_mdbreact.CardTitle, null, "Card title"), _react.default.createElement(_mdbreact.CardText, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), _react.default.createElement(_mdbreact.Button, {
        color: "primary"
      }, "Button")))), _react.default.createElement(_mdbreact.Col, {
        md: "4",
        className: "clearfix d-none d-md-block"
      }, _react.default.createElement(_mdbreact.Card, {
        className: "mb-2"
      }, _react.default.createElement(_mdbreact.CardImage, {
        className: "img-fluid",
        src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
      }), _react.default.createElement(_mdbreact.CardBody, null, _react.default.createElement(_mdbreact.CardTitle, null, "Card title"), _react.default.createElement(_mdbreact.CardText, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), _react.default.createElement(_mdbreact.Button, {
        color: "primary"
      }, "Button")))), _react.default.createElement(_mdbreact.Col, {
        md: "4",
        className: "clearfix d-none d-md-block"
      }, _react.default.createElement(_mdbreact.Card, {
        className: "mb-2"
      }, _react.default.createElement(_mdbreact.CardImage, {
        className: "img-fluid",
        src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"
      }), _react.default.createElement(_mdbreact.CardBody, null, _react.default.createElement(_mdbreact.CardTitle, null, "Card title"), _react.default.createElement(_mdbreact.CardText, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), _react.default.createElement(_mdbreact.Button, {
        color: "primary"
      }, "Button")))))))));
    }
  }]);

  return MultiCarouselPage;
}(_react.Component);

var _default = MultiCarouselPage;
exports.default = _default;