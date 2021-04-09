"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var COBOL = function () {
  function COBOL() {
    _classCallCheck(this, COBOL);
  }

  _createClass(COBOL, null, [{
    key: "randomValue",
    value: function randomValue() {
      var options = ["" + _index.Helpers.getRandomInt(-999999999, 99999999999), _index.Helpers.getRandomLogLine(), "WS-" + _index.Helpers.getRandomVerbUpperCase(), "WS-" + _index.Helpers.getRandomNounUpperCase()];
      return "" + _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = ["ADD WS-" + _index.Helpers.getRandomNounUpperCase() + " WS-" + _index.Helpers.getRandomVerbUpperCase() + " TO WS-" + _index.Helpers.getRandomVerbUpperCase() + ".", "ADD " + COBOL.randomValue() + " TO WS-" + _index.Helpers.getRandomVerbUpperCase() + ".", "MOVE " + COBOL.randomValue() + " TO WS-" + _index.Helpers.getRandomNounUpperCase() + ".", "DISPLAY " + COBOL.randomValue() + " " + COBOL.randomValue() + ".", "SUBTRACT WS-" + _index.Helpers.getRandomNounUpperCase() + " WS-" + _index.Helpers.getRandomVerbUpperCase() + " FROM WS-" + _index.Helpers.getRandomVerbUpperCase() + ".", "MULTIPLY WS-" + _index.Helpers.getRandomNounUpperCase() + " BY WS-" + _index.Helpers.getRandomVerbUpperCase() + ".", "DIVIDE " + COBOL.randomValue() + " BY " + COBOL.randomValue() + " GIVING WS-" + _index.Helpers.getRandomVerbUpperCase() + " REMAINDER WS-" + _index.Helpers.getRandomVerbUpperCase() + ".", "COMPUTE WS-" + _index.Helpers.getRandomVerbUpperCase() + " = (WS-" + _index.Helpers.getRandomNounUpperCase() + " * WS-" + _index.Helpers.getRandomNounUpperCase() + ") - (WS-" + _index.Helpers.getRandomNounUpperCase() + " / WS-" + _index.Helpers.getRandomNounUpperCase() + ") + WS-" + _index.Helpers.getRandomNounUpperCase() + "."];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines) {
      var firstLine = "PROCEDURE DIVISION." + _index.Helpers.addNewLine();
      var fillerLineQty = parseInt(lines, 10) - 2;

      var fillerLines = Array(fillerLineQty).fill().map(function (l) {
        return "" + _index.Helpers.getIndentation({
          type: "tab"
        }) + COBOL.getRandomFillerLine();
      });

      var lastLine = _index.Helpers.addNewLine() + "STOP RUN.";

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return COBOL;
}();

exports.default = COBOL;