"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconOpen = exports.DD = exports.DT = exports.DL = exports.DefinitionWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        &:after {\n            content: \"-\";\n        }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        &:after {\n            content: \"+\";\n        }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-size: 20px;\n    margin-right: 15px;\n    ", "\n    ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        max-height: 0;\n        opacity: 0;\n        overflow: hidden;\n        padding: 0;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        max-height: 15rem;\n        padding: 24px;\n        overflow: auto;\n        opacity: 100%;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid #A6A6A6;\n    margin: 0;\n    transition: opacity 2s cubic-bezier(0, 0, 0.38, 0.9), max-height .5s cubic-bezier(0, 0, 0.38, 0.9);\n    ", "\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid #979797;\n    cursor: pointer;\n    font-weight: bold;\n    margin: 3px 0 0 0;\n    padding: 10px;\n    &:hover, &:focus {\n        background-color: #4DC4EA;\n        border: 1px solid #4DC4EA;\n        box-shadow: 0 2px rgba(0, 0, 0, 0.2);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DefinitionWrapper = _styledComponents.default.div(_templateObject());

exports.DefinitionWrapper = DefinitionWrapper;

var DL = _styledComponents.default.dl(_templateObject2());

exports.DL = DL;

var DT = _styledComponents.default.dt(_templateObject3());

exports.DT = DT;

var DD = _styledComponents.default.dd(_templateObject4(), function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject5());
}, function (props) {
  return !props.open && (0, _styledComponents.css)(_templateObject6());
});

exports.DD = DD;

var IconOpen = _styledComponents.default.span(_templateObject7(), function (props) {
  return !props.open && (0, _styledComponents.css)(_templateObject8());
}, function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject9());
});

exports.IconOpen = IconOpen;