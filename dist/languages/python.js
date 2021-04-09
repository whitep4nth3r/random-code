"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Python = function () {
  function Python() {
    _classCallCheck(this, Python);
  }

  _createClass(Python, null, [{
    key: "getRandomImport",
    value: function getRandomImport() {
      return "import " + _index.Helpers.getRandomNoun();
    }
  }, {
    key: "getRandomFunctionName",
    value: function getRandomFunctionName() {
      return _index.Helpers.getRandomVerb() + "_" + _index.Helpers.getRandomNoun();
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var options = ["[]", "this", "self", "x + 1"];

      return _index.Helpers.getRandomNoun() + " = " + _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["print(" + _index.Helpers.getRandomLogLine() + ")", Python.getRandomVariableDeclaration()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment) {
      var imports = "" + Python.getRandomImport() + _index.Helpers.addNewLine(2);
      var firstLine = "def " + Python.getRandomFunctionName() + "():" + _index.Helpers.addNewLine();

      var fillerLineQty = parseInt(lines, 10) - 2;
      var fillerLines = [];

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(_index.Comments.getRandomComment());
      }

      for (var i = 1; i <= fillerLineQty; i++) {
        fillerLines.push("\t" + Python.getRandomFillerLine());
      }

      return imports + firstLine + fillerLines.join(_index.Helpers.addNewLine());
    }
  }]);

  return Python;
}();

exports.default = Python;