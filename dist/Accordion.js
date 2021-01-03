"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _constant = require("./constant");

var _useAccordion2 = require("./hooks/useAccordion");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Accordion = function Accordion(_ref) {
  var listActitvies = _ref.listActitvies,
      style = _ref.style,
      platform = _ref.platform;

  var _useAccordion = (0, _useAccordion2.useAccordion)({
    platform: platform
  }),
      listActivity = _useAccordion.listActivity,
      open = _useAccordion.open,
      onOpen = _useAccordion.onOpen;

  var device = style;
  return /*#__PURE__*/_react.default.createElement(device.DefinitionWrapper, null, /*#__PURE__*/_react.default.createElement(device.DL, {
    ref: listActivity
  }, listActitvies.map(function (activity, position) {
    var idTerm = "".concat(_constant.ACCORDION_TERM).concat(position);
    var idDefinition = "".concat(_constant.ACCORDION_DEFINITION).concat(position);
    var shouldOpen = open === idTerm;
    var propsDD = {
      tabIndex: shouldOpen ? 0 : -1
    };
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(device.DT, {
      id: idTerm,
      key: position,
      onPress: onOpen(idTerm),
      onClick: onOpen(idTerm),
      tabIndex: "0"
    }, /*#__PURE__*/_react.default.createElement(device.IconOpen, {
      open: shouldOpen
    }), /*#__PURE__*/_react.default.createElement(device.DText, null, activity.term)), /*#__PURE__*/_react.default.createElement(device.DD, _extends({
      id: idDefinition
    }, propsDD, {
      open: shouldOpen
    }), activity.definition));
  })));
};

Accordion.propTypes = {
  listActitvies: _propTypes.default.array.isRequired,
  style: _propTypes.default.any.isRequired,
  platform: _propTypes.default.string.isRequired
};
var _default = Accordion;
exports.default = _default;