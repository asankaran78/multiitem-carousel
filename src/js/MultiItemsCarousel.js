"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactItemsCarousel = _interopRequireDefault(require("react-items-carousel"));

var _range = _interopRequireDefault(require("lodash/range"));

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

var MultiItemsCarousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MultiItemsCarousel, _React$Component);

  function MultiItemsCarousel() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, MultiItemsCarousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MultiItemsCarousel)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.createChildren = function (n) {
      return (0, _range.default)(n).map(function (i) {
        return _react.default.createElement("div", {
          key: i,
          className: "carouselDisplay"
        }, _react.default.createElement("p", null, "Franklin Group Investors's fund (FCGLX)"), _react.default.createElement("span", {
          className: "carouselInner"
        }, "Awaiting Approval"));
      });
    }, _this.changeActiveItem = function (activeItemIndex) {
      return _this.setState({
        activeItemIndex: activeItemIndex
      });
    }, _temp));
  }

  _createClass(MultiItemsCarousel, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        children: [],
        activeItemIndex: 0
      });
      setTimeout(function () {
        _this2.setState({
          children: _this2.createChildren(15)
        });
      }, 100);
    }
    /* createChildren = n => range(n).map(i => <div key={i} style={{ height: 87, background: '#EDF0F4' }}>
           <p>Franklin Group Investors's fund (FCGLX)</p>{i}</div>); */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          activeItemIndex = _this$state.activeItemIndex,
          children = _this$state.children;
      return _react.default.createElement(_reactItemsCarousel.default // Placeholder configurations
      , {
        enablePlaceholder: true,
        numberOfPlaceholderItems: 20,
        minimumPlaceholderTime: 1000,
        placeholderItem: _react.default.createElement("div", {
          style: {
            height: 87,
            background: '#900',
            align: 'center'
          }
        }, "Placeholder") // Carousel configurations
        ,
        numberOfCards: 6,
        gutter: 12,
        showSlither: true,
        firstAndLastGutter: true,
        freeScrolling: false // Active item configurations
        ,
        requestToChangeActive: this.changeActiveItem,
        activeItemIndex: activeItemIndex,
        activePosition: 'center',
        chevronWidth: 25,
        rightChevron: '>',
        leftChevron: '<',
        outsideChevron: false
      }, children);
    }
  }]);

  return MultiItemsCarousel;
}(_react.default.Component);

var _default = MultiItemsCarousel;
exports.default = _default;