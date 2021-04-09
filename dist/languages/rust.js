"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rust = function () {
  function Rust() {
    _classCallCheck(this, Rust);
  }

  _createClass(Rust, null, [{
    key: "getRandomFunctionName",
    value: function getRandomFunctionName() {
      return _index.Helpers.getRandomVerb() + "_" + _index.Helpers.getRandomNoun();
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var keyWords = ["let", "const", "let mut"];
      var options = [Rust.getRandomFunctionName() + "().expect(" + _index.Helpers.getRandomLogLine() + ")", Rust.getRandomFunctionName() + "()"];

      return _index.Helpers.getRandomEntry(keyWords) + " " + _index.Helpers.getRandomNoun() + " = " + _index.Helpers.getRandomEntry(options) + ";";
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["printf!(\"{}\", " + _index.Helpers.getRandomLogLine() + ");", Rust.getRandomVariableDeclaration(), Rust.getRandomFunctionName() + "();"];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomType",
    value: function getRandomType() {
      var types = ["String", "&str", "u8", "u16", "u32", "u64", "usize", "i8", "i16", "i32", "i64", "isize"];
      return _index.Helpers.getRandomEntry(types);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines) {
      var firstLine = "fn " + Rust.getRandomFunctionName() + "() -> " + Rust.getRandomType() + " {" + _index.Helpers.addNewLine();
      var fillerLineQty = parseInt(lines, 10) - 2;
      var fillerLines = [];

      for (var i = 1; i <= fillerLineQty; i++) {
        fillerLines.push("    " + Rust.getRandomFillerLine());
      }

      var lastLine = _index.Helpers.addNewLine() + "}";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return Rust;
}();

exports.default = Rust;