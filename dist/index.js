"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguages = getLanguages;
exports.generateRandomCode = generateRandomCode;

var _index = require("./languages/index.js");

var LANGUAGES = _interopRequireWildcard(_index);

var _index2 = require("./constants/index.js");

var Constants = _interopRequireWildcard(_index2);

var _index3 = require("./utils/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getLanguages() {
  return Constants.Languages;
}

function generateRandomCode(lang, n) {
  var language = void 0;
  var lines = void 0;
  var code = void 0;

  language = !lang ? _index3.Helpers.getRandomLang() : lang;
  lines = !n ? _index3.Helpers.getRandomInt(4, 12) : n;

  var addComment = Math.random() + 0.5 >> 0;
  // 3 lines will be dedicated to a for loop if lines > 7
  var includeForLoop = parseInt(lines, 10) > 7;

  switch (language) {
    case "cobol":
      code = LANGUAGES.COBOL.generateRandomCode(lines);
      break;
    case "cplusplus":
      code = LANGUAGES.CPlusPlus.generateRandomCode(lines);
      break;
    case "csharp":
      code = LANGUAGES.CSharp.generateRandomCode(lines, addComment);
      break;
    case "css":
      code = LANGUAGES.Css.generateRandomCode(lines, addComment);
      break;
    case "docker":
      code = LANGUAGES.Docker.generateRandomCode(lines);
      break;
    case "fsharp":
      code = LANGUAGES.FSharp.generateRandomCode(lines);
      break;
    case "go":
      code = LANGUAGES.Go.generateRandomCode(lines);
      break;
    case "java":
      code = LANGUAGES.Java.generateRandomCode(lines, addComment);
      break;
    case "js":
      code = LANGUAGES.JavaScript.generateRandomCode(lines, addComment, includeForLoop);
      break;
    case "kotlin":
      code = LANGUAGES.Kotlin.generateRandomCode(lines);
      break;
    case "php":
      code = LANGUAGES.PHP.generateRandomCode(lines, addComment);
      break;
    case "powershell":
      code = LANGUAGES.Powershell.generateRandomCode(lines, addComment);
      break;
    case "python":
      code = LANGUAGES.Python.generateRandomCode(lines, addComment);
      break;
    case "rust":
      code = LANGUAGES.Rust.generateRandomCode(lines);
      break;
    case "sql":
      code = LANGUAGES.SQL.generateRandomCode(lines);
      break;
    case "swift":
      code = LANGUAGES.Swift.generateRandomCode(lines);
      break;
    case "ts":
      code = LANGUAGES.TypeScript.generateRandomCode(lines, addComment, includeForLoop);
      break;
    case "vba":
      code = LANGUAGES.VBA.generateRandomCode(lines, addComment);
      break;
    default:
      code = "lol";
  }

  return {
    code: code,
    languageKey: language,
    languageValue: Constants.Languages[language],
    contributors: _index3.Helpers.getContributors(language)
  };
}