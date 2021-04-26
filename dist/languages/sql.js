"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fieldNames = ["customerNumber", "dinosaur_glass", "twoshoes_without_one", "data", '"select"', "id", "name", "FLEISCH", "fire", "panther", "tucaseid", "tulineno", "eeincome1", "erbmi", "erhhch", "erincome", "erspemch", "ertpreat", "ertseat", "ethgt", "etwgt", "eudietsoda", "eudrink", "eueat", "euexercise", "euexfreq", "eufastfd", "eufastfdfrq", "euffyday", "eufdsit", "eufinlwgt", "eusnap", "eugenhth", "eugroshp", "euhgt", "euinclvl", "euincome2", "eumeat", "eumilk", "euprpmel", "eusoda", "eustores", "eustreason", "eutherm", "euwgt", "euwic", "exincome", "CensusTract", "County", "Borough", "TotalPop", "Men", "Women", "Hispanic", "White", "Black", "Native", "Asian", "Citizen", "Income", "IncomeErr", "IncomePerCap", "IncomePerCapErr", "Poverty", "ChildPoverty", "Professional", "Service", "Office", "Construction", "Production", "Drive", "Carpool", "Transit", "Walk", "OtherTransp", "WorkAtHome", "MeanCommute", "Employed", "PrivateWork", "PublicWork", "SelfEmployed", "FamilyWork", "Unemployment"];

var SQL = function () {
  function SQL() {
    _classCallCheck(this, SQL);
  }

  _createClass(SQL, null, [{
    key: "getRandomOperator",
    value: function getRandomOperator() {
      var positionValues = ["AND", "OR"];

      return _index.Helpers.addNewLine() + " " + _index.Helpers.getRandomEntry(positionValues) + " ";
    }
  }, {
    key: "getRandomFieldName",
    value: function getRandomFieldName() {
      if (_index.Helpers.getRandomInt(1, 10) <= 3) {
        return _index.Helpers.getRandomEntry(fieldNames) + " AS " + _index.Helpers.getRandomEntry(fieldNames);
      } else {
        return _index.Helpers.getRandomEntry(fieldNames);
      }
    }
  }, {
    key: "getRandomSchemaName",
    value: function getRandomSchemaName() {
      var schemaName = ["schema" + _index.Helpers.getRandomInt(1, 999), "sql", "dbo", "postgres", "urmum", "dinosaur", "panther", "n00b", "pretzel", "schnitzel"];
      return _index.Helpers.getRandomEntry(schemaName);
    }
  }, {
    key: "getRandomTableName",
    value: function getRandomTableName() {
      var tableName = ["stock", "breakfast", "day", "prison", "account", "consequence", "bridge", "st", "age", "strike", "constitution", "wind", "conversation", "page", "murder", "new", "error", "bedroom", "island", "phone", "environment", "content", "passage", "machine", "screen", "may", "tradition", "target", "crown", "tour", "fun", "palace", "election", "flat", "summer"];
      return _index.Helpers.getRandomEntry(tableName);
    }
  }, {
    key: "getRandomWhereCondition",
    value: function getRandomWhereCondition() {
      var where = _index.Helpers.getRandomEntry(fieldNames) + " = " + _index.Helpers.getRandomInt(1, 100000);
      return where;
    }
  }, {
    key: "getRandomGroupByCondition",
    value: function getRandomGroupByCondition(lineQty) {
      var groupBy = _index.Helpers.getRandomInt(1, lineQty);
      return groupBy;
    }
  }, {
    key: "getRandomOrderByCondition",
    value: function getRandomOrderByCondition(lineQty) {
      var orderBy = _index.Helpers.getRandomInt(1, lineQty);
      return orderBy;
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines) {
      var distinct = _index.Helpers.getRandomInt(1, 10) <= 3 ? " DISTINCT" : "";
      var firstLine = "SELECT" + (distinct + " " + SQL.getRandomFieldName() + _index.Helpers.addNewLine());
      var fillerLineQty = parseInt(lines, 10);
      var fillerLines = [];
      //first loop is just for field names sorry
      for (var i = 1; i <= fillerLineQty; i++) {
        var lineOptions = [" ," + SQL.getRandomFieldName()];

        fillerLines.push(_index.Helpers.getRandomEntry(lineOptions));
      }
      var lineBreak = void 0;
      if (fillerLineQty > 1) {
        lineBreak = _index.Helpers.addNewLine();
      } else lineBreak = "";
      var fromStatement = lineBreak + "FROM" + (" " + SQL.getRandomSchemaName()) + ("." + SQL.getRandomTableName());

      var whereCond = "";
      //this part is for the other functions like WHERE, GROUP BY etc.
      if (_index.Helpers.getRandomInt(1, 10) <= 3) {
        whereCond = _index.Helpers.addNewLine() + "WHERE " + SQL.getRandomWhereCondition();
      } else if (_index.Helpers.getRandomInt(1, 10) <= 5) {
        whereCond = _index.Helpers.addNewLine() + "WHERE " + SQL.getRandomWhereCondition() + SQL.getRandomOperator() + SQL.getRandomWhereCondition();
      }

      var groupByCond = "";
      if (_index.Helpers.getRandomInt(1, 10) <= 5) {
        groupByCond = _index.Helpers.addNewLine() + "GROUP BY " + SQL.getRandomGroupByCondition(fillerLineQty);
      } else ;

      var orderByCond = "";
      if (_index.Helpers.getRandomInt(1, 10) <= 5) {
        groupByCond = _index.Helpers.addNewLine() + "ORDER BY " + SQL.getRandomOrderByCondition(fillerLineQty) + " ASC";
      } else ;

      var lastLine = ";";
      return firstLine + fillerLines.join(_index.Helpers.addNewLine()) + fromStatement + whereCond + groupByCond + orderByCond + lastLine;
    }
  }]);

  return SQL;
}();

exports.default = SQL;