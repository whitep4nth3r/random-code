"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FSharp = function () {
  function FSharp() {
    _classCallCheck(this, FSharp);
  }

  _createClass(FSharp, null, [{
    key: "getRandomValue",
    value: function getRandomValue() {
      var values = ["[1;2;3]", "()", "123", '"HELLO WORLD!"', "3.14", "123456789012345678901234567890123456I"];
      return _index.Helpers.getRandomEntry(values);
    }
  }, {
    key: "getRandomVariableName",
    value: function getRandomVariableName() {
      var options = ["``" + _index.Helpers.getRandomVerb() + " " + _index.Helpers.getRandomNoun() + "``", "" + _index.Helpers.getRandomNoun()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var name = FSharp.getRandomVariableName();
      var value = FSharp.getRandomValue();
      return "let " + name + " = " + value;
    }
  }, {
    key: "getRandomMethodKeyword",
    value: function getRandomMethodKeyword() {
      var options = ["inline", "rec"];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomMethodCall",
    value: function getRandomMethodCall() {
      var options = ["let " + FSharp.getRandomVariableName() + " = " + FSharp.getRandomVariableName() + " " + FSharp.getRandomValue() + " " + FSharp.getRandomValue(), "ignore <| " + FSharp.getRandomVariableName() + " " + FSharp.getRandomValue(), "let " + FSharp.getRandomVariableName() + " = " + FSharp.getRandomVariableName() + " " + FSharp.getRandomValue(), "if input < 0 then failwithf \"Ooops: %A\" " + FSharp.getRandomValue(), "printfn \"DEBUG: This should never happen: %A\" " + FSharp.getRandomValue()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomComment",
    value: function getRandomComment() {
      var options = ["// TODO: " + _index.Helpers.getRandomVerb() + " " + _index.Helpers.getRandomNoun()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "randomPreamble",
    value: function randomPreamble() {
      return "let " + FSharp.getRandomMethodKeyword() + " " + FSharp.getRandomVariableName() + " input =" + _index.Helpers.addNewLine();
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = [FSharp.getRandomComment(), FSharp.getRandomVariableDeclaration(), FSharp.getRandomMethodCall()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines) {
      var firstLine = FSharp.randomPreamble();

      var fillerLineQty = parseInt(lines, 10) - 2;

      var fillerLines = Array(fillerLineQty).fill().map(function (l) {
        return "" + _index.Helpers.getIndentation(2) + FSharp.getRandomFillerLine();
      });

      var lastLine = _index.Helpers.addNewLine() + "    ()";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return FSharp;
}();

exports.default = FSharp;