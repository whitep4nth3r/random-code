"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contributors = require("./contributors.js");

Object.defineProperty(exports, "Contributors", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contributors).default;
  }
});

var _languages = require("./languages.js");

Object.defineProperty(exports, "Languages", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_languages).default;
  }
});

var _logs = require("./logs.js");

Object.defineProperty(exports, "logs", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logs).default;
  }
});

var _nouns = require("./nouns.js");

Object.defineProperty(exports, "nouns", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_nouns).default;
  }
});

var _singleCharacters = require("./singleCharacters.js");

Object.defineProperty(exports, "singleCharacters", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_singleCharacters).default;
  }
});

var _suffixes = require("./suffixes.js");

Object.defineProperty(exports, "suffixes", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_suffixes).default;
  }
});

var _verbs = require("./verbs.js");

Object.defineProperty(exports, "verbs", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_verbs).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }