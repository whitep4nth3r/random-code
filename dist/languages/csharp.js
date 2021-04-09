"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CSharp = function () {
  function CSharp() {
    _classCallCheck(this, CSharp);
  }

  _createClass(CSharp, null, [{
    key: "getRandomMethodName",
    value: function getRandomMethodName() {
      return "" + _index.Helpers.getRandomVerbCapitalized() + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var keyWords = ["int", "string", "double", "float", "decimal", "bool"];

      var keyWord = _index.Helpers.getRandomEntry(keyWords);
      return keyWord + " " + _index.Helpers.getRandomNoun() + ";";
    }
  }, {
    key: "getRandomNewVariableDeclaration",
    value: function getRandomNewVariableDeclaration() {
      var keyWords = ["ArrayList", "List<string>", "HashTable", "Dictionary<int, string>", "Queue", "StringBuilder"];

      var keyWord = _index.Helpers.getRandomEntry(keyWords);
      return keyWord + " " + _index.Helpers.getRandomNoun() + " = new " + keyWord + "();";
    }
  }, {
    key: "getRandomMethodKeyword",
    value: function getRandomMethodKeyword() {
      var options = ["abstract", "virtual", "", "override", "static"];

      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomAccessModifier",
    value: function getRandomAccessModifier() {
      var options = ["public", "private", "", "protected", "internal"];

      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomMethodCall",
    value: function getRandomMethodCall() {
      return this.getRandomMethodName() + "();";
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["Debug.WriteLine(" + _index.Helpers.getRandomLogLine() + ");", CSharp.getRandomVariableDeclaration(), CSharp.getRandomNewVariableDeclaration(), CSharp.getRandomMethodCall()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment) {
      var firstLine = (CSharp.getRandomAccessModifier() + " " + CSharp.getRandomMethodKeyword() + " void " + CSharp.getRandomMethodName() + "()" + _index.Helpers.addNewLine()).replace("  ", " ");
      if (firstLine[0] === " ") firstLine = firstLine.slice(1);
      var fillerLines = [];
      var fillerLineQty = parseInt(lines, 10) - 3;

      fillerLines.push("{");

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(_index.Comments.getRandomComment());
      }

      fillerLines = fillerLines.concat(Array(fillerLineQty).fill().map(function (l) {
        return "" + _index.Helpers.getIndentation(2) + CSharp.getRandomFillerLine();
      }));

      var lastLine = _index.Helpers.addNewLine() + "}";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return CSharp;
}();

exports.default = CSharp;