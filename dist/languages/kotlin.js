"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Kotlin = function () {
  function Kotlin() {
    _classCallCheck(this, Kotlin);
  }

  _createClass(Kotlin, null, [{
    key: "getRandomMethodSignature",
    value: function getRandomMethodSignature() {
      var _this = this;

      var randomNoun = _index.Helpers.getRandomNounCapitalized();

      return "fun " + _index.Helpers.getRandomVerb() + randomNoun + "(" + this.getRandomTypes(3).map(function (p) {
        return _this.getRandomVariableName(3) + ": " + p.name();
      }).join(", ") + ")";
    }
  }, {
    key: "getRandomTypes",
    value: function getRandomTypes(maxParamCount) {
      var paramCount = _index.Helpers.getRandomInt(0, maxParamCount);
      var params = [];
      for (var p = 0; p < paramCount; p++) {
        var randomType = this.getRandomType();
        params.push(randomType);
      }
      return params;
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration(indentLevel) {
      var randomType = this.getRandomType();
      var typeName = randomType.name();
      var typeValue = void 0;
      if (_index.Helpers.getRandomInt(0, 10) > 6) {
        typeValue = this.getRandomFunctionCall(0, 3);
      } else {
        typeValue = randomType.generator(typeName);
      }
      return Kotlin.indent(indentLevel) + "val " + this.getRandomVariableName(3) + ": " + typeName + " = " + typeValue;
    }
  }, {
    key: "getRandomVariableName",
    value: function getRandomVariableName(maxLength) {
      return this.getRandomLengthNounChain(maxLength);
    }
  }, {
    key: "getRandomType",
    value: function getRandomType() {
      var _this2 = this;

      var types = [{
        name: function name() {
          return "String";
        },
        generator: function generator(_) {
          return "" + _index.Helpers.getRandomLogLine();
        }
      }, {
        name: function name() {
          return "int";
        },
        generator: function generator(_) {
          return Math.floor(Math.random() * 666);
        }
      }, {
        name: function name() {
          var randomName = _this2.getRandomVariableName(2);
          return _index.Helpers.capitalizeFirstChar(randomName);
        },
        generator: function generator(name) {
          return name + "()";
        }
      }];
      return _index.Helpers.getRandomEntry(types);
    }
  }, {
    key: "getRandomFunctionCall",
    value: function getRandomFunctionCall(indentLevel, maxParamCount) {
      return "" + Kotlin.indent(indentLevel) + this.getRandomVariableName(3) + "(" + this.getRandomTypes(maxParamCount).map(function (p) {
        return p.generator(p.name());
      }).join(", ") + ")";
    }
  }, {
    key: "getRandomLengthNounChain",
    value: function getRandomLengthNounChain(maxNouns) {
      var fragmentCount = Math.floor(Math.random() * maxNouns);
      var fragments = [_index.Helpers.getRandomNoun()];
      for (var i = 0; i < fragmentCount; i++) {
        fragments.push(_index.Helpers.getRandomNounCapitalized());
      }
      return fragments.join("");
    }
  }, {
    key: "getRandomLoop",
    value: function getRandomLoop(indentLevel) {
      var indent = Kotlin.indent(indentLevel);
      var loopLines = [indent + "for (" + this.getRandomVariableName(1) + " in " + this.getRandomFunctionCall(0, 0) + ") {"];
      if (indentLevel === 0) {
        indentLevel += 4;
        indent = Kotlin.indent(indentLevel);
      }
      for (var index = 0; index < _index.Helpers.getRandomInt(1, 3); index++) {
        loopLines.push(this.getRandomFillerLine(indentLevel + 2));
      }
      loopLines.push(indent + "}");
      return loopLines.join(_index.Helpers.addNewLine());
    }
  }, {
    key: "indent",
    value: function indent(level) {
      return "".padStart(level || 0, " ");
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine(indentLevel) {
      var options = [function () {
        return Kotlin.indent(indentLevel) + "println(" + _index.Helpers.getRandomLogLine() + ")";
      }, function () {
        return Kotlin.getRandomVariableDeclaration(indentLevel);
      }, function () {
        return Kotlin.getRandomFunctionCall(indentLevel, 3);
      }, function () {
        return Kotlin.getRandomLoop(indentLevel || 0);
      }];
      return _index.Helpers.getRandomEntry(options)();
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines) {
      var firstLine = Kotlin.getRandomMethodSignature() + " {" + _index.Helpers.addNewLine();
      var fillerLineQty = parseInt(lines, 10) - 2;
      var fillerLines = [];

      for (var i = 1; i <= fillerLineQty; i++) {
        fillerLines.push("    " + Kotlin.getRandomFillerLine());
      }

      var lastLine = _index.Helpers.addNewLine() + "}";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return Kotlin;
}();

exports.default = Kotlin;