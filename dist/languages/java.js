"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Java = function () {
  function Java() {
    _classCallCheck(this, Java);
  }

  _createClass(Java, null, [{
    key: "getRandomMethodSignature",
    value: function getRandomMethodSignature() {
      return "public void " + _index.Helpers.getRandomVerb() + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
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
          return _index.Helpers.getRandomInt(0, 666);
        }
      }, {
        name: function name() {
          var randomName = Java.getRandomVariableName();
          return _index.Helpers.capitalizeFirstChar(randomName);
        },
        generator: function generator(name) {
          return "new " + name + "()";
        }
      }];
      var randomType = _index.Helpers.getRandomEntry(types);
      var typeName = randomType.name();
      return typeName + " " + this.getRandomVariableName() + " = " + randomType.generator(typeName) + ";";
    }
  }, {
    key: "getRandomVariableName",
    value: function getRandomVariableName() {
      var fragmentCount = _index.Helpers.getRandomInt(1, 2);
      var fragments = [];
      for (var i = 0; i < fragmentCount; i++) {
        fragments.push(_index.Helpers.getRandomNounCapitalized());
      }
      var fullName = fragments.join("");
      return _index.Helpers.capitalizeFirstChar(fullName);
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["System.out.println(" + _index.Helpers.getRandomLogLine() + ");", Java.getRandomVariableDeclaration()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment) {
      var firstLine = Java.getRandomMethodSignature() + "() {" + _index.Helpers.addNewLine();
      var fillerLineQty = parseInt(lines, 10) - 2;
      var fillerLines = [];

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(_index.Comments.getRandomComment());
      }

      for (var i = 1; i <= fillerLineQty; i++) {
        fillerLines.push("    " + Java.getRandomFillerLine());
      }

      var lastLine = _index.Helpers.addNewLine() + "}";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return Java;
}();

exports.default = Java;