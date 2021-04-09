"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

var _index2 = require("../constants/index.js");

var _javascript = require("./javascript.js");

var _javascript2 = _interopRequireDefault(_javascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypeScript = function (_JavaScript) {
  _inherits(TypeScript, _JavaScript);

  function TypeScript() {
    _classCallCheck(this, TypeScript);

    return _possibleConstructorReturn(this, (TypeScript.__proto__ || Object.getPrototypeOf(TypeScript)).apply(this, arguments));
  }

  _createClass(TypeScript, null, [{
    key: "getRandomProperties",
    value: function getRandomProperties() {
      var start = _index.Helpers.getRandomInt(0, _index2.singleCharacters.length - 1);
      var end = _index.Helpers.getRandomInt(start + 1, _index2.singleCharacters.length);

      return _index2.singleCharacters.slice(start, end);
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var keyWords = ["let", "const", "var"];

      return _index.Helpers.getRandomEntry(keyWords) + " " + _index.Helpers.getRandomNoun() + ": any = " + _index.Helpers.getRandomEntry(TypeScript.getRandomInitializationVars()) + ";";
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["console." + _index.Helpers.getRandomEntry(TypeScript.getRandomConsoleLevel()) + "(" + _index.Helpers.getRandomLogLine() + ");", TypeScript.getRandomVariableDeclaration(), TypeScript.getRandomFunctionName() + "();"];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment, includeForLoop) {
      var fillerLines = [];
      var functionProperties = TypeScript.getRandomProperties().join(": any, ") + ": any";

      var firstTsLines = [function (randomFunctionName) {
        return "function " + randomFunctionName + "(" + functionProperties + "): any {" + _index.Helpers.addNewLine();
      }, function (randomFunctionName) {
        return "const " + randomFunctionName + " = function (" + functionProperties + "): any {" + _index.Helpers.addNewLine();
      }];

      var firstLine = _index.Helpers.getRandomEntry(firstTsLines)(TypeScript.getRandomFunctionName());

      // - 3 because we're now adding a firstLine, returnLine and lastLine
      var fillerLineQty = parseInt(lines, 10) - 3;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(_index.Comments.getRandomComment());
      }

      // if line length > 7
      if (includeForLoop) {
        // add 2 lines
        fillerLines.push("    " + TypeScript.getRandomFillerLine());
        fillerLines.push("    " + TypeScript.getRandomFillerLine());

        // add 3 lines
        var forLoopLines = TypeScript.getRandomForLoopAsArray(); // return array

        fillerLines = [].concat(_toConsumableArray(fillerLines), _toConsumableArray(forLoopLines));

        // add the rest
        for (var i = 6; i <= fillerLineQty; i++) {
          fillerLines.push("    " + TypeScript.getRandomFillerLine());
        }
      } else {
        for (var _i = 1; _i <= fillerLineQty; _i++) {
          fillerLines.push("    " + TypeScript.getRandomFillerLine());
        }
      }

      fillerLines.push(TypeScript.getRandomReturn());

      var lastLine = _index.Helpers.addNewLine() + "}";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return TypeScript;
}(_javascript2.default);

exports.default = TypeScript;