"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateRandomCode;

var _index = require("./languages/index.js");

var LANGUAGES = _interopRequireWildcard(_index);

var _index2 = require("./constants/index.js");

var Constants = _interopRequireWildcard(_index2);

var _index3 = require("./utils/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function generateRandomCode(lang, n) {
  var language = void 0;
  var lines = void 0;
  var randomCode = void 0;

  language = !lang ? _index3.Helpers.getRandomLang() : lang;
  lines = !n ? _index3.Helpers.getRandomInt(4, 12) : n;

  var addComment = Math.random() + 0.5 >> 0;
  // 3 lines will be dedicated to a for loop if lines > 7
  var includeForLoop = parseInt(lines, 10) > 7;

  switch (language) {
    case "cobol":
      randomCode = LANGUAGES.COBOL.generateRandomCode(lines);
      break;
    case "cplusplus":
      randomCode = LANGUAGES.CPlusPlus.generateRandomCode(lines);
      break;
    case "csharp":
      randomCode = LANGUAGES.CSharp.generateRandomCode(lines, addComment);
      break;
    case "css":
      randomCode = LANGUAGES.Css.generateRandomCode(lines, addComment);
      break;
    case "docker":
      randomCode = LANGUAGES.Docker.generateRandomCode(lines);
      break;
    case "fsharp":
      randomCode = LANGUAGES.FSharp.generateRandomCode(lines);
      break;
    case "go":
      randomCode = LANGUAGES.Go.generateRandomCode(lines);
      break;
    case "java":
      randomCode = LANGUAGES.Java.generateRandomCode(lines, addComment);
      break;
    case "js":
      randomCode = LANGUAGES.JavaScript.generateRandomCode(lines, addComment, includeForLoop);
      break;
    case "kotlin":
      randomCode = LANGUAGES.Kotlin.generateRandomCode(lines);
      break;
    case "php":
      randomCode = LANGUAGES.PHP.generateRandomCode(lines, addComment);
      break;
    case "powershell":
      randomCode = LANGUAGES.Powershell.generateRandomCode(lines, addComment);
      break;
    case "python":
      randomCode = LANGUAGES.Python.generateRandomCode(lines, addComment);
      break;
    case "rust":
      randomCode = LANGUAGES.Rust.generateRandomCode(lines);
      break;
    case "sql":
      randomCode = LANGUAGES.SQL.generateRandomCode(lines);
      break;
    case "swift":
      randomCode = LANGUAGES.Swift.generateRandomCode(lines);
      break;
    case "ts":
      randomCode = LANGUAGES.TypeScript.generateRandomCode(lines, addComment, includeForLoop);
      break;
    case "vba":
      randomCode = LANGUAGES.VBA.generateRandomCode(lines, addComment);
      break;
    default:
      randomCode = "lol";
  }

  return {
    code: randomCode,
    language: Constants.Languages[lang],
    contributors: _index3.Helpers.getContributors(lang)
  };
}