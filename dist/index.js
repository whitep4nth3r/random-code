"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateRandomCode;

var _index = require("./languages/index.js");

var LANGUAGES = _interopRequireWildcard(_index);

var _helpers = require("./utils/helpers.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function generateRandomCode(lang, n) {
  var language = void 0;
  var lines = void 0;

  language = !lang ? (0, _helpers.getRandomLang)() : lang;
  lines = !n ? (0, _helpers.getRandomInt)(4, 12) : n;

  var addComment = Math.random() + 0.5 >> 0;
  // 3 lines will be dedicated to a for loop if lines > 7
  var includeForLoop = parseInt(lines, 10) > 7;

  switch (language) {
    case "cobol":
      return LANGUAGES.COBOL.generateRandomCode(lines);
    case "cplusplus":
      return LANGUAGES.CPlusPlus.generateRandomCode(lines);
    case "csharp":
      return LANGUAGES.CSharp.generateRandomCode(lines, addComment);
    case "css":
      return LANGUAGES.Css.generateRandomCode(lines, addComment);
    case "docker":
      return LANGUAGES.Docker.generateRandomCode(lines);
    case "fsharp":
      return LANGUAGES.FSharp.generateRandomCode(lines);
    case "go":
      return LANGUAGES.Go.generateRandomCode(lines);
    case "java":
      return LANGUAGES.Java.generateRandomCode(lines, addComment);
    case "js":
      return LANGUAGES.JavaScript.generateRandomCode(lines, addComment, includeForLoop);
    case "kotlin":
      return LANGUAGES.Kotlin.generateRandomCode(lines);
    case "php":
      return LANGUAGES.PHP.generateRandomCode(lines, addComment);
    case "powershell":
      return LANGUAGES.Powershell.generateRandomCode(lines, addComment);
    case "python":
      return LANGUAGES.Python.generateRandomCode(lines, addComment);
    case "rust":
      return LANGUAGES.Rust.generateRandomCode(lines);
    case "sql":
      return LANGUAGES.SQL.generateRandomCode(lines);
    case "swift":
      return LANGUAGES.Swift.generateRandomCode(lines);
    case "ts":
      return LANGUAGES.TypeScript.generateRandomCode(lines, addComment, includeForLoop);
    case "vba":
      return LANGUAGES.VBA.generateRandomCode(lines, addComment);
    default:
      return "lol";
  }
}