"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JavaScript = function () {
  function JavaScript() {
    _classCallCheck(this, JavaScript);
  }

  _createClass(JavaScript, null, [{
    key: "getRandomInitializationVars",
    value: function getRandomInitializationVars() {
      return ["[]", "this", "self", "0", "1", "true", "false", "{}", "null", "undefined"];
    }
  }, {
    key: "getRandomFunctionName",
    value: function getRandomFunctionName() {
      return "" + _index.Helpers.getRandomVerb() + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var keyWords = ["let", "const", "var"];

      return _index.Helpers.getRandomEntry(keyWords) + " " + _index.Helpers.getRandomNoun() + " = " + _index.Helpers.getRandomEntry(JavaScript.getRandomInitializationVars()) + ";";
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["console." + _index.Helpers.getRandomEntry(JavaScript.getRandomConsoleLevel()) + "(" + _index.Helpers.getRandomLogLine() + ");", JavaScript.getRandomVariableDeclaration(), JavaScript.getRandomFunctionName() + "();"];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomReturn",
    value: function getRandomReturn() {
      return "    return " + _index.Helpers.getRandomEntry(JavaScript.getRandomInitializationVars()) + ";";
    }
  }, {
    key: "getRandomForLoopAsArray",
    value: function getRandomForLoopAsArray() {
      var randomChar = _index.Helpers.getRandomSingleCharacter();
      var randomNoun = _index.Helpers.getRandomNoun();

      return ["    for (let " + randomChar + " = 0; " + randomChar + " <= " + randomNoun + ".length; " + randomChar + "++) {", "        " + JavaScript.getRandomFunctionName() + "(" + randomChar + ")", "    };"];
    }
  }, {
    key: "getRandomConsoleLevel",
    value: function getRandomConsoleLevel() {
      return ["debug", "info", "log", "warning", "error"];
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment, includeForLoop) {
      var fillerLines = [];
      var firstLines = [function (randomFunctionName) {
        return "function " + randomFunctionName + "() {" + _index.Helpers.addNewLine();
      }, function (randomFunctionName) {
        return "const " + randomFunctionName + " = () => {" + _index.Helpers.addNewLine();
      }];

      var firstLine = _index.Helpers.getRandomEntry(firstLines)(JavaScript.getRandomFunctionName());

      // - 3 because we're now adding a firstLine, returnLine and lastLine
      var fillerLineQty = parseInt(lines, 10) - 3;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(_index.Comments.getRandomComment());
      }

      // if line length > 7
      if (includeForLoop) {
        // add 2 lines
        fillerLines.push("    " + JavaScript.getRandomFillerLine());
        fillerLines.push("    " + JavaScript.getRandomFillerLine());

        // add 3 lines
        var forLoopLines = JavaScript.getRandomForLoopAsArray(); // return array

        fillerLines = [].concat(_toConsumableArray(fillerLines), _toConsumableArray(forLoopLines));

        // add the rest
        for (var i = 6; i <= fillerLineQty; i++) {
          fillerLines.push("    " + JavaScript.getRandomFillerLine());
        }
      } else {
        for (var _i = 1; _i <= fillerLineQty; _i++) {
          fillerLines.push("    " + JavaScript.getRandomFillerLine());
        }
      }

      fillerLines.push(JavaScript.getRandomReturn());

      var lastLine = _index.Helpers.addNewLine() + "}";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return JavaScript;
}();

exports.default = JavaScript;