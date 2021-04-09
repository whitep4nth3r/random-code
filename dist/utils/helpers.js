"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewLine = addNewLine;
exports.capitalizeFirstChar = capitalizeFirstChar;
exports.getContributors = getContributors;
exports.getIndentation = getIndentation;
exports.getRandomInt = getRandomInt;
exports.getRandomEntry = getRandomEntry;
exports.getRandomLang = getRandomLang;
exports.getRandomNoun = getRandomNoun;
exports.getRandomVerb = getRandomVerb;
exports.getRandomSuffix = getRandomSuffix;
exports.getRandomNounCapitalized = getRandomNounCapitalized;
exports.getRandomVerbCapitalized = getRandomVerbCapitalized;
exports.getRandomNounUpperCase = getRandomNounUpperCase;
exports.getRandomVerbUpperCase = getRandomVerbUpperCase;
exports.getRandomLogLine = getRandomLogLine;
exports.getRandomSingleCharacter = getRandomSingleCharacter;

var _index = require("../constants/index.js");

var CONSTANTS = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addNewLine() {
  var numberOfLines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  return "\n".repeat(numberOfLines);
}

function capitalizeFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getContributors(lang) {
  return CONSTANTS.Contributors[lang];
}

function getIndentation(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? "spaces" : _ref$type,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? 1 : _ref$level;

  if (type === "tabs") {
    return "\t".repeat(level);
  }
  return "  ".repeat(level);
}

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomEntry(array) {
  return array[getRandomInt(0, array.length - 1)];
}

function getRandomLang() {
  var languages = Object.keys(CONSTANTS.Languages);
  return getRandomEntry(languages);
}

function getRandomNoun() {
  return getRandomEntry(CONSTANTS.nouns);
}

function getRandomVerb() {
  return getRandomEntry(CONSTANTS.verbs);
}

function getRandomSuffix() {
  return getRandomEntry(CONSTANTS.suffixes);
}

function getRandomNounCapitalized() {
  return capitalizeFirstChar(getRandomNoun());
}

function getRandomVerbCapitalized() {
  return capitalizeFirstChar(getRandomVerb());
}

function getRandomNounUpperCase() {
  return getRandomNoun().toUpperCase();
}

function getRandomVerbUpperCase() {
  return getRandomVerb().toUpperCase();
}

function getRandomLogLine() {
  return getRandomEntry(CONSTANTS.logs);
}

function getRandomSingleCharacter() {
  var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var singleCharacter = void 0;

  do {
    singleCharacter = getRandomEntry(CONSTANTS.singleCharacters);
  } while (singleCharacter === except);

  return singleCharacter;
}