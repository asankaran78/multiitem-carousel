"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var AlertDismissable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AlertDismissable, _React$Component);

  function AlertDismissable(props, context) {
    var _this;

    _classCallCheck(this, AlertDismissable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AlertDismissable).call(this, props, context));
    _this.handleDismiss = _this.handleDismiss.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleShow = _this.handleShow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      show: true
    };
    return _this;
  }

  _createClass(AlertDismissable, [{
    key: "handleDismiss",
    value: function handleDismiss() {
      this.setState({
        show: false
      });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {
      this.setState({
        show: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.show) {
        return _react.default.createElement(_reactBootstrap.Alert, {
          bsStyle: "danger",
          onDismiss: this.handleDismiss
        }, _react.default.createElement("h4", null, "Oh snap! You got an error!"), _react.default.createElement("p", null, "Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."), _react.default.createElement("p", null, _react.default.createElement(_reactBootstrap.Button, {
          bsStyle: "danger"
        }, "Take this action"), _react.default.createElement("span", null, " or "), _react.default.createElement(_reactBootstrap.Button, {
          onClick: this.handleDismiss
        }, "Hide Alert")));
      }

      return _react.default.createElement(_reactBootstrap.Button, {
        onClick: this.handleShow
      }, "Show Alert");
    }
  }]);

  return AlertDismissable;
}(_react.default.Component);

var _default = AlertDismissable;
exports.default = _default;