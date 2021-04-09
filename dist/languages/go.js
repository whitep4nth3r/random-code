"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Go = function () {
  function Go() {
    _classCallCheck(this, Go);
  }

  _createClass(Go, null, [{
    key: "getRandomFunctionName",
    value: function getRandomFunctionName() {
      return "" + _index.Helpers.getRandomVerb() + _index.Helpers.getRandomNounCapitalized();
    }
  }, {
    key: "getRandomVariableDeclaration",
    value: function getRandomVariableDeclaration() {
      var keyWords = ["const", "var"];
      var types = ["int", "bool", "string"];
      var values = ["[]", "this", "" + _index.Helpers.getRandomInt(0, 100)];

      var keyword = _index.Helpers.getRandomEntry(keyWords);
      var type = _index.Helpers.getRandomEntry(types);
      var varName = _index.Helpers.getRandomNoun();
      var value = _index.Helpers.getRandomEntry(values);

      if (keyword === "const") {
        varName = _index.Helpers.getRandomNounUpperCase();
      }
    }
  }, {
    key: "getRandomfmtPrintln",
    value: function getRandomfmtPrintln() {
      var msg = _index.Helpers.getRandomLogLine();
      return "fmt.Println(" + msg + ")";
    }
  }, {
    key: "getRandomFillerLine",
    value: function getRandomFillerLine() {
      var options = [Go.getRandomfmtPrintln(), Go.getRandomVariableDeclaration(), Go.getRandomFunctionName() + "()"];
      return "" + _index.Helpers.getIndentation({ type: "tab" }) + _index.Helpers.getRandomEntry(options);
    }
  }, {
    key: "getRandomImportName",
    value: function getRandomImportName() {
      // Actual list of standard library packages, as documented here: https://golang.org/pkg/
      var imports = ["archive/tar", "archive/zip", "bufio", "builtin", "bytes", "cmd/addr2line", "cmd/api", "cmd/asm", "cmd/buildid", "cmd/cgo", "cmd/compile", "cmd/cover", "cmd/dist", "cmd/foc", "cmd/fix", "cmd/go", "cmd/go", "cmd/gofmt", "cmd/link", "cmd/nm", "cmd/objdump", "cmd/pack", "cmd/pprof", "cmd/test2json", "cmd/trace", "cmd/vet", "compress/", "compress/", "compress/", "compress/", "compress/", "container/heap", "container/list", "container/ring", "context", "crypto", "crypto/aes", "crypto/cipher", "crypto/des", "crypto/dsa", "crypto/ecdsa", "crypto/ed25519", "crypto/elliptic", "crypto/hmac", "crypto/md5", "crypto/rand", "crypto/rc4", "crypto/rsa", "crypto/sha1", "crypto/sha256", "crypto/sha512", "crypto/subtle", "crypto/tls", "crypto/x509", "crypto/x509/pkix", "database/sql", "database/sql/driver", "debug/dwarf", "debug/elf", "debug/gosym", "debug/macho", "debug/pe", "debug/plan9obj", "embed", "encoding", "encoding/ascii85", "encoding/asn1", "encoding/base32", "encoding/base64", "encoding/binary", "encoding/csv", "encoding/gob", "encoding/hex", "encoding/json", "encoding/pem", "encoding/xml", "errors", "expvar", "flag", "fmt", "go/ast", "go/build", "go/build/constant", "go/constant", "go/doc", "go/format", "go/importer", "go/parser", "go/printer", "go/scanner", "go/token", "go/types", "hash", "hash/", "hash/", "hash/", "hash/", "hash/maphash", "html", "html/template", "image", "image/color", "image/color/palette", "image/draw", "image/gif", "image/jpeg", "image/ong", "index/suffixarray", "io", "io/fs", "io/ioutil", "log", "log/syslog", "math", "math/big", "math/bits", "math/complx", "math/rand", "mime", "mime/multipart", "mime/quotedprintable", "net", "net/http", "net/http/cgi", "net/http/cookiejar", "net/http/fcgi", "net/http/httptest", "net/http/httptrace", "net/http/httputil", "net/http/pprof", "net/mail", "net/rpc", "net/rpc/jsonrpc", "net/smtp", "net/textproto", "net/url", "os", "os/exec", "os/signal", "os/user", "path", "path/filepath", "plugin", "reflect", "regexp", "regexp/syntax", "runtime", "runtime/cgo", "runtime/debug", "runtime/metrics", "runtime/msan", "runtime/pprof", "runtime/race", "runtime/trace", "sort", "strconv", "strings", "sync", "sync/atomic", "syscall", "syscall/js", "testing", "testing/fstest", "testing/iotest", "testing/quick", "text", "text/scanner", "text/tabwriter", "text/template", "text/template/parse", "time", "time/tzdata", "unicode", "unicode/utf16", "unicode/utf8", "unsafe"];
      return _index.Helpers.getRandomEntry(imports);
    }
  }, {
    key: "getRandomPackageName",
    value: function getRandomPackageName() {
      return _index.Helpers.getRandomNoun();
    }
  }, {
    key: "getExistingVariable",
    value: function getExistingVariable() {
      return "null";
    }
  }, {
    key: "generateRandomCode",
    value: function generateRandomCode(lines, addComment) {
      // get a random amount of package imports.
      var importsToGet = Math.floor(lines / 5);
      // coin flip for adding a return statement or not
      var addReturnLine = Math.floor(Math.random() * 2);
      var fillerLineQty = parseInt(lines, 10) - 2 - 2 - importsToGet - addReturnLine;
      var randomImports = [];
      var lastLine = void 0;

      //package name is mandatory, so let's always have this, and exclude it from the line count
      var pkgLine = "package " + Go.getRandomPackageName() + _index.Helpers.addNewLine(2);

      //set up random package import[s]
      var importLine = "";
      if (importsToGet >= 1) {
        for (var i = 1; i <= importsToGet; i++) {
          randomImports.push(_index.Helpers.getIndentation({
            type: "tab"
          }) + "\"" + Go.getRandomImportName() + "\"" + _index.Helpers.addNewLine());
        }
        importLine = "import (" + _index.Helpers.addNewLine() + _index.Helpers.getIndentation({
          type: "tab"
        }) + "\"fmt\"" + _index.Helpers.addNewLine() + randomImports.join("") + ")" + _index.Helpers.addNewLine(2);
      } else {
        importLine = "import \"fmt\"" + _index.Helpers.addNewLine(2);
      }

      //set up a function
      var firstLine = "func " + Go.getRandomFunctionName() + " { " + _index.Helpers.addNewLine();
      //add code to function
      var fillerLines = Array(fillerLineQty < 1 ? 1 : fillerLineQty).fill().map(function (l) {
        return Go.getRandomFillerLine();
      });

      if (addReturnLine === 1) {
        lastLine = "" + _index.Helpers.addNewLine() + _index.Helpers.getIndentation({
          type: "tab"
        }) + "return " + Go.getExistingVariable();
      }

      lastLine += _index.Helpers.addNewLine() + "}";

      return pkgLine + importLine + firstLine + fillerLines.join(_index.Helpers.addNewLine()) + lastLine;
    }
  }]);

  return Go;
}();

exports.default = Go;