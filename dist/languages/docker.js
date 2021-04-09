"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imageNames = ["ubuntu", "centos", "nginx", "redis", "node", "postgres", "mysql", "mongo", "debian", "jenkins"];

var commandGenerators = [{
  command: "COPY",
  parameters: function parameters() {
    return _index.Helpers.getRandomNoun() + _index.Helpers.getRandomSuffix() + " " + _index.Helpers.getRandomNoun() + "/";
  }
}, {
  command: "ADD",
  parameters: function parameters() {
    return _index.Helpers.getRandomNoun() + _index.Helpers.getRandomSuffix() + " " + _index.Helpers.getRandomNoun() + "/";
  }
}, {
  command: "EXPOSE",
  parameters: function parameters() {
    return _index.Helpers.getRandomInt(80, 8080);
  }
}, {
  command: "RUN",
  parameters: function parameters() {
    return Docker.getRandomPath() + _index.Helpers.getRandomVerb();
  }
}];

var fileSuffixes = [".sh", ".txt", ".xml", ".png"];

var Docker = function () {
  function Docker() {
    _classCallCheck(this, Docker);
  }

  _createClass(Docker, null, [{
    key: "getRandomCommand",
    value: function getRandomCommand() {
      var randomCommand = _index.Helpers.getRandomEntry(commandGenerators);
      var commandName = randomCommand.command;
      return commandName + " " + randomCommand.parameters();
    }
  }, {
    key: "getRandomPath",
    value: function getRandomPath() {
      var options = ["/bin/", "/sbin/", "/lib/", "/opt/"];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomComment",
    value: function getRandomComment() {
      return "# " + _index.Helpers.getRandomVerb() + " " + _index.Helpers.getRandomNoun();
    }
  }, {
    key: "randomPreamble",
    value: function randomPreamble() {
      return "FROM " + this.getRandomImageName() + _index.Helpers.addNewLine();
    }
  }, {
    key: "getRandomImageName",
    value: function getRandomImageName() {
      return _index.Helpers.getRandomEntry(imageNames);
    }
  }, {
    key: "randomPostamble",
    value: function randomPostamble() {
      return _index.Helpers.addNewLine() + "CMD bin";
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = [Docker.getRandomComment(), Docker.getRandomCommand()];
      return _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines) {
      var firstLine = Docker.randomPreamble();
      var fillerLineQty = parseInt(lines, 10) - 2;

      var fillerLines = Array(fillerLineQty).fill().map(function (l) {
        return Docker.getRandomFillerLine();
      });

      var lastLine = Docker.randomPostamble();

      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return Docker;
}();

exports.default = Docker;