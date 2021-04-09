"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PHP = function () {
  function PHP() {
    _classCallCheck(this, PHP);
  }

  _createClass(PHP, null, [{
    key: "getRandomNamespace",
    value: function getRandomNamespace() {
      return "namespace " + _index.Helpers.getRandomNounCapitalized() + "\\" + _index.Helpers.getRandomNounCapitalized() + ";";
    }
  }, {
    key: "getRandomClassName",
    value: function getRandomClassName() {
      return "" + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomFunctionKeyword",
    value: function getRandomFunctionKeyword() {
      var starters = ["public", "public static", "private", "protected"];

      return _index.Helpers.getRandomEntry(starters) + " function";
    }
  }, {
    key: "getRandomFunctionName",
    value: function getRandomFunctionName() {
      return "" + _index.Helpers.getRandomVerb() + _index.Helpers.getRandomVerbCapitalized();
    }
  }, {
    key: "getRandomParamtersSet",
    value: function getRandomParamtersSet() {
      var paramaters = ["", "'" + _index.Helpers.getRandomNoun() + "'", "'" + _index.Helpers.getRandomNoun() + "', '" + _index.Helpers.getRandomNoun() + "'"];
      return "" + _index.Helpers.getRandomEntry(paramaters);
    }
  }, {
    key: "getRandomParamtersRead",
    value: function getRandomParamtersRead() {
      var paramaters = ["", "$" + _index.Helpers.getRandomNoun(), "$" + _index.Helpers.getRandomNoun() + ", $" + _index.Helpers.getRandomNoun()];
      return _index.Helpers.getRandomEntry(paramaters);
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var keyWords = ["$"];
      var options = ["[" + PHP.getRandomParamtersSet() + "]", "array()", "array(" + PHP.getRandomParamtersSet() + ")", "$this->" + _index.Helpers.getRandomVerb(), "$this->" + _index.Helpers.getRandomVerb() + "(" + PHP.getRandomParamtersSet() + ")", "\"" + _index.Helpers.getRandomVerb() + "\""];

      return "" + _index.Helpers.getRandomEntry(keyWords) + _index.Helpers.getRandomNoun() + " = " + _index.Helpers.getRandomEntry(options) + ";";
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["var_dump(" + _index.Helpers.getRandomLogLine() + "); die();", PHP.getRandomVariableDeclaration()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment) {
      var fillerLineQty = lines;
      var firstLine = "<?php " + _index.Helpers.addNewLine(2);
      var namespaceLine = "" + PHP.getRandomNamespace() + _index.Helpers.addNewLine(2);

      var classLine = "class " + PHP.getRandomClassName() + " {" + _index.Helpers.addNewLine();

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        classLine += "" + _index.Comments.getRandomComment() + _index.Helpers.addNewLine();
      }

      var functionLine = "    " + PHP.getRandomFunctionKeyword() + " " + PHP.getRandomFunctionName() + "(" + PHP.getRandomParamtersRead() + ") {" + _index.Helpers.addNewLine();

      fillerLineQty = parseInt(lines, 10) - 2;
      var fillerLines = [];

      for (var i = 1; i <= fillerLineQty; i++) {
        fillerLines.push("        " + PHP.getRandomFillerLine());
      }

      var endFunctionLine = _index.Helpers.addNewLine() + "    }" + _index.Helpers.addNewLine();
      var lastLine = "}";

      return firstLine + namespaceLine + classLine + functionLine + fillerLines.join(_index.Helpers.addNewLine()) + endFunctionLine + lastLine;
    }
  }]);

  return PHP;
}();

exports.default = PHP;