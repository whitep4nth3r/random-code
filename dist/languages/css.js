"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Css = function () {
  function Css() {
    _classCallCheck(this, Css);
  }

  _createClass(Css, null, [{
    key: "getRandomListStyle",

    // box-shadow props
    // pseudo stuff

    // font style props
    // font family

    value: function getRandomListStyle() {
      var listStyleValues = ["disc", "circle", "square", "decimal", "decimal-leading-zero", "lower-roman", "upper-roman", "lower-greek", "lower-latin", "upper-latin", "armenian", "georgian", "lower-alpha", "upper-alpha", "none"];

      return "list-style: " + _index.Helpers.getRandomEntry(listStyleValues);
    }
  }, {
    key: "getRandomBorderStyle",
    value: function getRandomBorderStyle() {
      var borderStyleValues = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"];

      return "border-style: " + _index.Helpers.getRandomEntry(borderStyleValues);
    }
  }, {
    key: "getRandomTextAlign",
    value: function getRandomTextAlign() {
      var alignValues = ["left", "right", "center", "justify", "initial", "inherit"];

      return "text-align: " + _index.Helpers.getRandomEntry(alignValues);
    }
  }, {
    key: "getRandomPositionRule",
    value: function getRandomPositionRule() {
      var positionValues = ["relative", "absolute", "fixed", "sticky"];

      return "position: " + _index.Helpers.getRandomEntry(positionValues);
    }
  }, {
    key: "getRandomDisplayRule",
    value: function getRandomDisplayRule() {
      var displayValues = ["block", "inline-block", "inline", "flex", "grid", "inline-grid", "inline-flex", "flow-root"];

      return "display: " + _index.Helpers.getRandomEntry(displayValues);
    }
  }, {
    key: "getRandomZIndexRule",
    value: function getRandomZIndexRule() {
      return "z-index: " + _index.Helpers.getRandomInt(-1, 999999);
    }
  }, {
    key: "getRandomColorProp",
    value: function getRandomColorProp() {
      var colorProps = ["color", "background-color", "border-color", "border-bottom-color", "border-top-color", "border-left-color", "border-right-color"];
      return _index.Helpers.getRandomEntry(colorProps);
    }
  }, {
    key: "getRandomHexCode",
    value: function getRandomHexCode() {
      return "#" + _index.Helpers.getRandomInt(0, 16777215).toString(16);
    }
  }, {
    key: "getRandomUnitProp",
    value: function getRandomUnitProp() {
      var unitProps = ["padding", "padding-bottom", "padding-top", "padding-left", "padding-right", "margin", "margin-bottom", "margin-top", "margin-left", "margin-right", "line-height", "font-size", "min-width", "width", "height", "max-width", "border-width", "border-bottom-width", "border-top-width", "border-left-width", "border-right-width"];
      return _index.Helpers.getRandomEntry(unitProps);
    }
  }, {
    key: "getRandomUnit",
    value: function getRandomUnit() {
      var cssUnits = ["px", "rem", "em", "ch", "vw", "vh"];
      return _index.Helpers.getRandomEntry(cssUnits);
    }
  }, {
    key: "getRandomUnitRule",
    value: function getRandomUnitRule() {
      return Css.getRandomUnitProp() + ": " + _index.Helpers.getRandomInt(0, 500) + Css.getRandomUnit();
    }
  }, {
    key: "getRandomColorRule",
    value: function getRandomColorRule() {
      return Css.getRandomColorProp() + ": " + Css.getRandomHexCode();
    }
  }, {
    key: "getRandomClassName",
    value: function getRandomClassName() {
      // to do
      // add more options
      // sometimes, add a camelCased item
      // sometimes add a --modifier
      var options = ["button", "input", "container", "element", "tab", "nav", "class", "this", "random"];

      return _index.Helpers.getRandomEntry(options) + "__" + _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomJustify",
    value: function getRandomJustify() {
      var justifyValues = ["flex-start", "flex-end", "center", "space-around", "space-between", "space-evenly", "initial", "inherit"];

      return "justify-content: " + _index.Helpers.getRandomEntry(justifyValues);
    }
  }, {
    key: "getRandomAlign",
    value: function getRandomAlign() {
      var alignTypes = ["items", "content", "self"];
      var alignValues = ["stretch", "center", "flex-start", "flex-end", "baseline", "initial", "inherit"];

      return "align-" + _index.Helpers.getRandomEntry(alignTypes) + ": " + _index.Helpers.getRandomEntry(alignValues);
    }
  }, {
    key: "getRandomCursorStyle",
    value: function getRandomCursorStyle() {
      var cursorStyleValues = ["alias", "all-scroll", "auto", "cell", "col-resize", "copy", "crosshair", "default", "e-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nw-resize", "no-drop", "none", "not-allowed", "pointer", "progress", "row-resize", "text", "vertical-text", "wait", "zoom-in", "zoom-out", "initial"];

      return "cursor: " + _index.Helpers.getRandomEntry(cursorStyleValues);
    }
  }, {
    key: "getRandomFlexDirection",
    value: function getRandomFlexDirection() {
      var flexDirectionValues = ["row", "column", "row-reverse", "column-reverse", "initial", "inherit"];

      return "flex-direction: " + _index.Helpers.getRandomEntry(flexDirectionValues);
    }
  }, {
    key: "getRandomBackgroundPostition",
    value: function getRandomBackgroundPostition() {
      var backgroundPositionValues = ["left top", "left center", "left bottom", "right top", "right center", "right bottom", "center top", "center center", "center bottom"];

      return "background-position: " + _index.Helpers.getRandomEntry(backgroundPositionValues);
    }
  }, {
    key: "getRandomBorderCollapse",
    value: function getRandomBorderCollapse() {
      var borderCollapseValues = ["seperate", "collapse", "initial", "inherit"];

      return "border-collapse: " + _index.Helpers.getRandomEntry(borderCollapseValues);
    }
  }, {
    key: "getRandomBackgroundRepeat",
    value: function getRandomBackgroundRepeat() {
      var backgroundRepeatValues = ["repeat", "repeat-x", "repeat-y", "no-repeat", "space", "round", "initial", "inherit"];

      return "background-repeat: " + _index.Helpers.getRandomEntry(backgroundRepeatValues);
    }
  }, {
    key: "getRandomBoxShadow",
    value: function getRandomBoxShadow() {
      var boxShadowValue = "" + _index.Helpers.getRandomInt(1, 10) + this.getRandomUnit() + " " + _index.Helpers.getRandomInt(1, 10) + this.getRandomUnit() + " ";

      // 50% chance to have spread and blur
      if (_index.Helpers.getRandomInt(1, 100) <= 50) {
        boxShadowValue += "" + _index.Helpers.getRandomInt(2, 20) + this.getRandomUnit() + " " + _index.Helpers.getRandomInt(2, 20) + this.getRandomUnit() + " ";
      }

      return "box-shadow: " + (boxShadowValue + ("" + this.getRandomHexCode()));
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment) {
      var firstLine = "." + Css.getRandomClassName() + " {" + _index.Helpers.addNewLine();
      var fillerLineQty = parseInt(lines, 10) - 2;
      var fillerLines = [];

      if (addComment) {
        fillerLineQty = fillerLineQty - 1;
        fillerLines.push(_index.Comments.getRandomComment());
      }

      var lineOptions = [Css.getRandomUnitRule(), Css.getRandomColorRule(), Css.getRandomDisplayRule(), Css.getRandomZIndexRule(), Css.getRandomPositionRule(), Css.getRandomBorderStyle(), Css.getRandomTextAlign(), Css.getRandomListStyle(), Css.getRandomJustify(), Css.getRandomAlign(), Css.getRandomCursorStyle(), Css.getRandomFlexDirection(), Css.getRandomBackgroundPostition(), Css.getRandomBorderCollapse(), Css.getRandomBackgroundRepeat(), Css.getRandomBoxShadow()];

      fillerLines = fillerLines.concat(Array(fillerLineQty).fill().map(function (l) {
        return "" + _index.Helpers.getIndentation(2) + _index.Helpers.getRandomEntry(lineOptions) + ";";
      }));

      var lastLine = _index.Helpers.addNewLine() + "}";
      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return Css;
}();

exports.default = Css;