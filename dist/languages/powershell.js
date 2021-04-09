"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Powershell = function () {
  function Powershell() {
    _classCallCheck(this, Powershell);
  }

  _createClass(Powershell, null, [{
    key: "getRandomFunctionName",
    value: function getRandomFunctionName() {
      return _index.Helpers.getRandomVerbCapitalized() + "-" + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var options = ["[]", "this"];

      return "$" + _index.Helpers.getRandomNounCapitalized() + " = " + _index.Helpers.getRandomEntry(options) + ";";
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["Write-Host " + _index.Helpers.getRandomLogLine() + ";", Powershell.getRandomVariableDeclaration()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment) {
      var firstLine = "function " + Powershell.getRandomFunctionName() + " { " + _index.Helpers.addNewLine();
      var fillerLineQty = parseInt(lines, 10) - 2;
      var fillerLines = [];

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        firstLine += "" + _index.Comments.getRandomComment("powershell") + _index.Helpers.addNewLine();
      }

      for (var i = 1; i <= fillerLineQty; i++) {
        fillerLines.push("    " + Powershell.getRandomFillerLine());
      }

      var lastLine = _index.Helpers.addNewLine() + "}";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return Powershell;
}();

exports.default = Powershell;