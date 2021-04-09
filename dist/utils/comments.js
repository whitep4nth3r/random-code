"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = require("./helpers.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comments = function () {
  function Comments() {
    _classCallCheck(this, Comments);
  }

  _createClass(Comments, null, [{
    key: "options",
    value: function options() {
      return [{
        name: "TODO",
        messages: ["Finish this function", "Finish this thing?", "Ask a Sr dev what to do here", "Finish this on Monday!", "Remove this code before I commit this bit of code"]
      }, {
        name: "FIXME",
        messages: ["Fix this!", "Google how to fix this later", "Bug a Sr dev to fix this", "Add one to this", "H E L P", "Figure out the type", "For some reason this is causing the code below to error out?", "Works on my machine"]
      }, {
        name: "REVIEW",
        messages: ["Get Sr dev to look at this on Monday", "Bring this up in stand up", "Please let me know if there is a better way to write this code", "Does this look right?", "I tried...."]
      }, {
        name: "DONOTTOUCH",
        messages: ["This has to be here otherwise prod db goes down!!!!!", "No idea why this is here but when we remove it the code will break :/", "I'll fix this one day...", "This hack is here for the one client."]
      }];
    }
  }, {
    key: "getRandomComment",
    value: function getRandomComment() {
      var languageOverride = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default";

      var index = Math.floor(Math.random() * Comments.options().length);
      var commentName = Comments.options()[index].name;
      var commentMessage = (0, _helpers.getRandomEntry)(Comments.options()[index].messages);
      var comment = "";

      switch (languageOverride) {
        case "powershell":
          comment = "    <# " + commentName + ": " + commentMessage + " #>";
          break;
        case "vba":
          comment = "    ' " + Comments.options()[index].name + ": " + Comments.options()[index].messages[Math.floor(Math.random() * Comments.options()[index].messages.length)] + " ";
          break;
        default:
          comment = "    /* " + commentName + ": " + commentMessage + " */";
          break;
      }

      return comment;
    }
  }]);

  return Comments;
}();

exports.default = Comments;