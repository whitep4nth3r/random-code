"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VBA = function () {
  function VBA() {
    _classCallCheck(this, VBA);
  }

  _createClass(VBA, null, [{
    key: "getRandomMethodName",
    value: function getRandomMethodName() {
      return "" + _index.Helpers.getRandomVerbCapitalized() + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomFunctionName",
    value: function getRandomFunctionName() {
      return "" + _index.Helpers.getRandomVerbCapitalized() + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomDataType",
    value: function getRandomDataType() {
      var keyWords = ["Integer", "Long", "String", "Double", "Single", "Date", "Boolean", "Excel.Application", "Access.Application", "Word.Application", "DAO.Recordset", "Object", "DAO.Database", "Variant"];

      var keyWord = _index.Helpers.getRandomEntry(keyWords);
      return "" + keyWord;
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var keyWord = "" + VBA.getRandomDataType();
      var variableName = _index.Helpers.getRandomNoun();
      return "Dim " + variableName + " As " + keyWord + " " + _index.Helpers.addNewLine() + "    " + variableName + " = " + _index.Helpers.getRandomInt(0, 99999);
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["Print " + _index.Helpers.getRandomLogLine(), VBA.getRandomVariableDeclaration(), VBA.getRandomNewVariableDeclaration(), VBA.getRandomMethodCall(), VBA.getRandomForLoopAsArray(), VBA.getRandomIfBlock(), "On Error Resume Next 'DON'T ever do this! "];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomIfBlock",
    value: function getRandomIfBlock() {
      return "If " + _index.Helpers.getRandomNounCapitalized() + " > " + _index.Helpers.getRandomInt(1, 8765) + " Then" + _index.Helpers.addNewLine() + "        " + VBA.getRandomFunctionName() + "(" + _index.Helpers.getRandomInt(5, 99) + ")" + _index.Helpers.addNewLine() + "    End If";
    }
  }, {
    key: "getRandomNewVariableDeclaration",
    value: function getRandomNewVariableDeclaration() {
      var keyWords = ["Dim", "Static"];

      var keyWord = _index.Helpers.getRandomEntry(keyWords);
      return keyWord + " " + _index.Helpers.getRandomNoun() + " As " + VBA.getRandomDataType();
    }
  }, {
    key: "getRandomMethodCall",
    value: function getRandomMethodCall() {
      return this.getRandomMethodName() + "( " + _index.Helpers.getRandomNoun() + " )";
    }
  }, {
    key: "getRandomAccessModifier",
    value: function getRandomAccessModifier() {
      var options = ["Public", "Private", ""];

      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomForLoopAsArray",
    value: function getRandomForLoopAsArray() {
      var randomChar = _index.Helpers.getRandomSingleCharacter();

      return "For " + randomChar + " = 0 to " + _index.Helpers.getRandomInt(1, 4000) + _index.Helpers.addNewLine() + "        " + VBA.getRandomFunctionName() + "(" + randomChar + ")" + _index.Helpers.addNewLine() + "    Next";
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment) {
      var firstLine = (VBA.getRandomAccessModifier() + " Function " + VBA.getRandomMethodName() + "() As " + VBA.getRandomDataType() + _index.Helpers.addNewLine()).replace("  ", " ");
      if (firstLine[0] === " ") firstLine = firstLine.slice(1);
      var fillerLineQty = parseInt(lines, 10) - 3;
      var fillerLines = [];

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(_index.Comments.getRandomComment("vba"));
      }

      for (var i = 1; i <= fillerLineQty; i++) {
        fillerLines.push("    " + VBA.getRandomFillerLine());
      }

      var lastLine = _index.Helpers.addNewLine() + "End Function";

      return firstLine + fillerLines.join("" + _index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return VBA;
}();

exports.default = VBA;