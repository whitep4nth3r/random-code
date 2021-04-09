"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CPlusPlus = function () {
  function CPlusPlus() {
    _classCallCheck(this, CPlusPlus);
  }

  _createClass(CPlusPlus, null, [{
    key: "getRandomFunctionName",
    value: function getRandomFunctionName() {
      var keyWords = ["int", "string", "double", "char", "bool"];

      return _index.Helpers.getRandomEntry(keyWords) + " " + _index.Helpers.getRandomVerb() + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var keyWords = ["int", "string", "double", "char", "bool"];
      var options = ["[]", "this"];

      return _index.Helpers.getRandomEntry(keyWords) + " " + _index.Helpers.getRandomNoun() + " = " + _index.Helpers.getRandomEntry(options) + ";";
    }
  }, {
    key: "getRandomMethodKeyword",
    value: function getRandomMethodKeyword() {
      var options = ["abstract", "virtual", "", "override", "static"];

      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["clog << " + _index.Helpers.getRandomEntry(_index.Helpers.getRandomLogLine()) + ";", CPlusPlus.getRandomVariableDeclaration(), CPlusPlus.getRandomFunctionName() + "();"];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines) {
      var firstLine = CPlusPlus.getRandomFunctionName() + "() {" + _index.Helpers.addNewLine();
      var fillerLineQty = parseInt(lines, 10) - 2;
      var fillerLines = Array(fillerLineQty).fill().map(function (l) {
        return "" + _index.Helpers.getIndentation(1) + CPlusPlus.getRandomFillerLine();
      });
      var lastLine = _index.Helpers.addNewLine() + "}";
      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return CPlusPlus;
}();

exports.default = CPlusPlus;