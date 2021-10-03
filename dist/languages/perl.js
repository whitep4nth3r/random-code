"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Perl = function () {
  function Perl() {
    _classCallCheck(this, Perl);
  }

  _createClass(Perl, null, [{
    key: "getRandomVariableType",
    value: function getRandomVariableType() {
      var options = ["scalar", "array", "hash"];

      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomVariableValues",
    value: function getRandomVariableValues() {
      var varType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Perl.getRandomVariableType();

      var options = {
        scalar: ["0", "1", "" + _index.Helpers.getRandomInt(-999999999, 99999999999), "\"" + _index.Helpers.getRandomNoun() + "\""],
        array: ["()", "(" + _index.Helpers.getRandomInt(-999999999, 99999999999) + ")", "(\"" + _index.Helpers.getRandomNoun() + "\")"],
        hash: ["()", "(" + _index.Helpers.getRandomNoun() + " => \"" + _index.Helpers.getRandomNoun() + "\"," + _index.Helpers.getRandomNoun() + " => \"" + _index.Helpers.getRandomNoun() + "\")"]
      };

      return _index.Helpers.getRandomEntry(options[varType]);
    }
  }, {
    key: "getRandomVariable",
    value: function getRandomVariable() {
      var varType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Perl.getRandomVariableType();

      var keyWords = {
        scalar: "$",
        array: "@",
        hash: "%"
      };

      return "" + keyWords[varType] + _index.Helpers.getRandomNoun();
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var varType = Perl.getRandomVariableType();

      return "" + Perl.getRandomAccessModifier() + Perl.getRandomVariable(varType) + " = " + Perl.getRandomVariableValues(varType) + ";";
    }
  }, {
    key: "getRandomSubroutineName",
    value: function getRandomSubroutineName() {
      return "" + _index.Helpers.getRandomVerb() + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomAccessModifier",
    value: function getRandomAccessModifier() {
      var options = ["my ", ""];

      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomSubroutineCall",
    value: function getRandomSubroutineCall() {
      return Perl.getRandomSubroutineName() + "();";
    }
  }, {
    key: "getRandomLoopCommand",
    value: function getRandomLoopCommand() {
      var options = ["if", "unless", "while"];

      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomOneLineConditional",
    value: function getRandomOneLineConditional() {
      return Perl.getRandomLoopCommand() + " " + Perl.getRandomVariable("scalar");
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["print " + _index.Helpers.getRandomLogLine() + " " + Perl.getRandomOneLineConditional() + ";", "print " + Perl.getRandomVariable() + ";", Perl.getRandomVariableDeclaration(), Perl.getRandomSubroutineCall()];

      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment) {
      var fillerLines = [];
      var firstLine = "sub " + Perl.getRandomSubroutineName() + " { " + _index.Helpers.addNewLine();

      var fillerLineQty = parseInt(lines, 10) - 3;

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(_index.Comments.getRandomComment("perl"));
      }

      for (var i = 1; i <= fillerLineQty; i++) {
        fillerLines.push("    " + Perl.getRandomFillerLine());
      }

      var lastLine = _index.Helpers.addNewLine() + "}";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return Perl;
}();

exports.default = Perl;