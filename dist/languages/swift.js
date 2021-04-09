"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

var _index2 = require("../constants/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swift = function () {
  function Swift() {
    _classCallCheck(this, Swift);
  }

  _createClass(Swift, null, [{
    key: "getRandomInitializationVars",
    value: function getRandomInitializationVars() {
      return ["self", "0", "1", "true", "false", "nil", '"💩"', '"💻"', '"🍎"', '"🙀"', '"🐶"'];
    }
  }, {
    key: "getRandomFunctionName",
    value: function getRandomFunctionName() {
      return "" + _index.Helpers.getRandomVerb() + _index.Helpers.getRandomNounCapitalized() + "()";
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var keyWords = ["let", "var"];

      return _index.Helpers.getRandomEntry(keyWords) + " " + _index.Helpers.getRandomNoun() + " = " + _index.Helpers.getRandomEntry(Swift.getRandomInitializationVars());
    }
  }, {
    key: "getRandomPrintCall",
    value: function getRandomPrintCall() {
      return "print(" + _index.Helpers.getRandomEntry(_index2.logs) + ")";
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = [Swift.getRandomVariableDeclaration(), Swift.getRandomPrintCall(), Swift.getRandomFunctionName()];

      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines) {
      var firstLine = "func " + Swift.getRandomFunctionName() + " {" + _index.Helpers.addNewLine();
      var fillerLineQty = parseInt(lines, 10) - 2;
      var fillerLines = [];

      for (var i = 0; i < fillerLineQty; i++) {
        fillerLines.push("   " + Swift.getRandomFillerLine());
      }

      var lastLine = _index.Helpers.addNewLine() + "}";
      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return Swift;
}();

exports.default = Swift;