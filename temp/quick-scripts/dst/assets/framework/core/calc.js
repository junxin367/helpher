
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/core/calc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e0d3V+NORCMYJVFQ7j6FEk', 'calc');
// framework/core/calc.js

"use strict";

var chars = {
  "+": {
    type: "Operator",
    value: "+",
    asso: "left",
    prec: 2
  },
  "-": {
    type: "Operator",
    value: "-",
    asso: "left",
    prec: 2
  },
  "*": {
    type: "Operator",
    value: "*",
    asso: "left",
    prec: 3
  },
  "/": {
    type: "Operator",
    value: "/",
    asso: "left",
    prec: 3
  },
  "^": {
    type: "Operator",
    value: "^",
    asso: "right",
    prec: 4
  },
  "number": function number(n) {
    if (!isNaN(n) && isFinite(n)) {
      return {
        type: "Literal",
        value: n + ''
      };
    }
  },
  "(": {
    type: "Left Parenthesis",
    value: "("
  },
  ")": {
    type: "Right Parenthesis",
    value: ")"
  }
};
function tokenize(str) {
  str = str.replace(/(\t|\s)/g, "");
  var out = [];
  var temp = "";
  for (var i = 0; i < str.length; i++) {
    if (isDigit(str.charAt(i))) {
      temp += str.charAt(i);
      if (!isDigit(str.charAt(i + 1))) {
        out.push(chars["number"](temp));
        temp = "";
      }
    } else if (isOperator(str.charAt(i))) {
      if (str.charAt(i) == "-" && (str.charAt(i - 1) == "" || isOperator(str.charAt(i - 1)) || str.charAt(i - 1) == "(") && isDigit(str.charAt(i + 1))) {
        temp += "-";
      } else {
        out.push(chars[str.charAt(i)]);
      }
    } else if (isPars(str.charAt(i))) {
      if (str.charAt(i) == "(") {
        if (isDigit(str.charAt(i - 1)) || str.charAt(i - 1) == ")") {
          out.push(chars["*"]);
        }
        out.push(chars["("]);
      } else {
        out.push(chars[")"]);
      }
    }
  }
  function test(_string, _array) {
    for (var i = 0; i < _array.length; i++) {
      if (_string === _array[i]) {
        return true;
      }
    }
    return false;
  }
  function isDigit(_string) {
    return test(_string, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]);
  }
  function isOperator(_string) {
    return test(_string, ["+", "-", "*", "/", "^"]);
  }
  function isPars(s) {
    return test(s, ["(", ")"]);
  }
  return out;
}
function c(token) {
  var output = [];
  var stack = [];
  for (var i = 0; i < token.length; i++) {
    var x = token[i];
    var last = stack.length ? stack[stack.length - 1] : false;
    if (x.type == "Literal") {
      output.push(x);
    } else if (x.type == "Operator") {
      while (last && last.value != "(" && (x.prec < last.prec || x.asso == "left" && x.prec == last.prec)) {
        output.push(stack.pop());
        last = stack.length ? stack[stack.length] : false;
      }
      stack.push(x);
    } else if (x.type == "Left Parenthesis") {
      stack.push(x);
    } else if (x.type == "Right Parenthesis") {
      while (last && last.value != "(") {
        output.push(stack.pop());
        last = stack.length ? stack[stack.length - 1] : false;
      }
      stack.pop();
    }
  }
  return output.concat(stack.reverse());
}
function t(a) {
  var x = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i].type == "Literal") {
      x.push(parseFloat(a[i].value));
    } else if (a[i].type == "Operator") {
      switch (a[i].value) {
        case "+":
          {
            x[x.length - 2] = parseFloat((x[x.length - 2] * 10000 + x[x.length - 1] * 10000) / 10000);
            x.pop();
            break;
          }
        case "-":
          {
            x[x.length - 2] = parseFloat((x[x.length - 2] * 10000 - x[x.length - 1] * 10000) / 10000);
            x.pop();
            break;
          }
        case "*":
          {
            x[x.length - 2] = parseFloat(x[x.length - 2] * x[x.length - 1]);
            x.pop();
            break;
          }
        case "/":
          {
            x[x.length - 2] = parseFloat(x[x.length - 2] / x[x.length - 1]);
            x.pop();
            break;
          }
        case "^":
          {
            x[x.length - 2] = parseFloat(Math.pow(x[x.length - 2], x[x.length - 1]));
            x.pop();
            break;
          }
      }
    }
  }
  return x.length ? x[0] : 0;
}
function calc(n) {
  var x = tokenize(n);
  var y = c(x);
  var z = t(y);
  return z.toString();
}
window.calc = calc;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxjb3JlXFxjYWxjLmpzIl0sIm5hbWVzIjpbImNoYXJzIiwidHlwZSIsInZhbHVlIiwiYXNzbyIsInByZWMiLCJudW1iZXIiLCJuIiwiaXNOYU4iLCJpc0Zpbml0ZSIsInRva2VuaXplIiwic3RyIiwicmVwbGFjZSIsIm91dCIsInRlbXAiLCJpIiwibGVuZ3RoIiwiaXNEaWdpdCIsImNoYXJBdCIsInB1c2giLCJpc09wZXJhdG9yIiwiaXNQYXJzIiwidGVzdCIsIl9zdHJpbmciLCJfYXJyYXkiLCJzIiwiYyIsInRva2VuIiwib3V0cHV0Iiwic3RhY2siLCJ4IiwibGFzdCIsInBvcCIsImNvbmNhdCIsInJldmVyc2UiLCJ0IiwiYSIsInBhcnNlRmxvYXQiLCJNYXRoIiwicG93IiwiY2FsYyIsInkiLCJ6IiwidG9TdHJpbmciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSyxHQUFHO0VBQ1IsR0FBRyxFQUFFO0lBQ0hDLElBQUksRUFBRSxVQUFVO0lBQ2hCQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0QsR0FBRyxFQUFFO0lBQ0hILElBQUksRUFBRSxVQUFVO0lBQ2hCQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0QsR0FBRyxFQUFFO0lBQ0hILElBQUksRUFBRSxVQUFVO0lBQ2hCQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0QsR0FBRyxFQUFFO0lBQ0hILElBQUksRUFBRSxVQUFVO0lBQ2hCQyxLQUFLLEVBQUUsR0FBRztJQUNWQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0QsR0FBRyxFQUFFO0lBQ0hILElBQUks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LEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RWMsQ0FBQyxDQUFDRSxHQUFHLEVBQUU7WUFDUDtVQUNGO01BQUM7SUFFTDtFQUNGO0VBQ0EsT0FBT0YsQ0FBQyxDQUFDZCxNQUFNLEdBQUdjLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzVCO0FBRUEsU0FBU1UsSUFBSUEsQ0FBQ2pDLENBQUMsRUFBRTtFQUNmLElBQUl1QixDQUFDLEdBQUdwQixRQUFRLENBQUNILENBQUMsQ0FBQztFQUNuQixJQUFJa0MsQ0FBQyxHQUFHZixDQUFDLENBQUNJLENBQUMsQ0FBQztFQUNaLElBQUlZLENBQUMsR0FBR1AsQ0FBQyxDQUFDTSxDQUFDLENBQUM7RUFDWixPQUFPQyxDQUFDLENBQUNDLFFBQVEsRUFBRTtBQUNyQjtBQUVBQyxNQUFNLENBQUNKLElBQUksR0FBR0EsSUFBSSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNoYXJzID0ge1xyXG4gICAgXCIrXCI6IHtcclxuICAgICAgdHlwZTogXCJPcGVyYXRvclwiLFxyXG4gICAgICB2YWx1ZTogXCIrXCIsXHJcbiAgICAgIGFzc286IFwibGVmdFwiLFxyXG4gICAgICBwcmVjOiAyXHJcbiAgICB9LFxyXG4gICAgXCItXCI6IHtcclxuICAgICAgdHlwZTogXCJPcGVyYXRvclwiLFxyXG4gICAgICB2YWx1ZTogXCItXCIsXHJcbiAgICAgIGFzc286IFwibGVmdFwiLFxyXG4gICAgICBwcmVjOiAyXHJcbiAgICB9LFxyXG4gICAgXCIqXCI6IHtcclxuICAgICAgdHlwZTogXCJPcGVyYXRvclwiLFxyXG4gICAgICB2YWx1ZTogXCIqXCIsXHJcbiAgICAgIGFzc286IFwibGVmdFwiLFxyXG4gICAgICBwcmVjOiAzXHJcbiAgICB9LFxyXG4gICAgXCIvXCI6IHtcclxuICAgICAgdHlwZTogXCJPcGVyYXRvclwiLFxyXG4gICAgICB2YWx1ZTogXCIvXCIsXHJcbiAgICAgIGFzc286IFwibGVmdFwiLFxyXG4gICAgICBwcmVjOiAzXHJcbiAgICB9LFxyXG4gICAgXCJeXCI6IHtcclxuICAgICAgdHlwZTogXCJPcGVyYXRvclwiLFxyXG4gICAgICB2YWx1ZTogXCJeXCIsXHJcbiAgICAgIGFzc286IFwicmlnaHRcIixcclxuICAgICAgcHJlYzogNFxyXG4gICAgfSxcclxuICAgIFwibnVtYmVyXCI6IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgIGlmICghaXNOYU4obikgJiYgaXNGaW5pdGUobikpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdHlwZTogXCJMaXRlcmFsXCIsXHJcbiAgICAgICAgICB2YWx1ZTogbiArICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCIoXCI6IHtcclxuICAgICAgdHlwZTogXCJMZWZ0IFBhcmVudGhlc2lzXCIsXHJcbiAgICAgIHZhbHVlOiBcIihcIlxyXG4gICAgfSxcclxuICAgIFwiKVwiOiB7XHJcbiAgICAgIHR5cGU6IFwiUmlnaHQgUGFyZW50aGVzaXNcIixcclxuICAgICAgdmFsdWU6IFwiKVwiXHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBmdW5jdGlvbiB0b2tlbml6ZShzdHIpIHtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8oXFx0fFxccykvZywgXCJcIik7XHJcbiAgICB2YXIgb3V0ID0gW107XHJcbiAgICB2YXIgdGVtcCA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaXNEaWdpdChzdHIuY2hhckF0KGkpKSkge1xyXG4gICAgICAgIHRlbXAgKz0gc3RyLmNoYXJBdChpKTtcclxuICAgICAgICBpZiAoIWlzRGlnaXQoc3RyLmNoYXJBdChpICsgMSkpKSB7XHJcbiAgICAgICAgICBvdXQucHVzaChjaGFyc1tcIm51bWJlclwiXSh0ZW1wKSk7XHJcbiAgICAgICAgICB0ZW1wID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNPcGVyYXRvcihzdHIuY2hhckF0KGkpKSkge1xyXG4gICAgICAgIGlmIChzdHIuY2hhckF0KGkpID09IFwiLVwiICYmIChzdHIuY2hhckF0KGkgLSAxKSA9PSBcIlwiIHx8IGlzT3BlcmF0b3Ioc3RyLmNoYXJBdChpIC0gMSkpIHx8IHN0ci5jaGFyQXQoaSAtIDEpID09IFwiKFwiKSAmJiBpc0RpZ2l0KHN0ci5jaGFyQXQoaSArIDEpKSkge1xyXG4gICAgICAgICAgdGVtcCArPSBcIi1cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3V0LnB1c2goY2hhcnNbc3RyLmNoYXJBdChpKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChpc1BhcnMoc3RyLmNoYXJBdChpKSkpIHtcclxuICAgICAgICBpZiAoc3RyLmNoYXJBdChpKSA9PSBcIihcIikge1xyXG4gICAgICAgICAgaWYgKGlzRGlnaXQoc3RyLmNoYXJBdChpIC0gMSkpIHx8IHN0ci5jaGFyQXQoaSAtIDEpID09IFwiKVwiKSB7XHJcbiAgICAgICAgICAgIG91dC5wdXNoKGNoYXJzW1wiKlwiXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvdXQucHVzaChjaGFyc1tcIihcIl0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvdXQucHVzaChjaGFyc1tcIilcIl0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gdGVzdChfc3RyaW5nLCBfYXJyYXkpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoX3N0cmluZyA9PT0gX2FycmF5W2ldKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gaXNEaWdpdChfc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiB0ZXN0KF9zdHJpbmcsIFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIuXCJdKTtcclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGlzT3BlcmF0b3IoX3N0cmluZykge1xyXG4gICAgICByZXR1cm4gdGVzdChfc3RyaW5nLCBbXCIrXCIsIFwiLVwiLCBcIipcIiwgXCIvXCIsIFwiXlwiXSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBpc1BhcnMocykge1xyXG4gICAgICByZXR1cm4gdGVzdChzLCBbXCIoXCIsIFwiKVwiXSlcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gYyh0b2tlbikge1xyXG4gICAgdmFyIG91dHB1dCA9IFtdO1xyXG4gICAgdmFyIHN0YWNrID0gW11cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHggPSB0b2tlbltpXTtcclxuICAgICAgdmFyIGxhc3QgPSBzdGFjay5sZW5ndGggPyBzdGFja1tzdGFjay5sZW5ndGggLSAxXSA6IGZhbHNlO1xyXG4gIFxyXG4gICAgICBpZiAoeC50eXBlID09IFwiTGl0ZXJhbFwiKSB7XHJcbiAgICAgICAgb3V0cHV0LnB1c2goeCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoeC50eXBlID09IFwiT3BlcmF0b3JcIikge1xyXG4gICAgICAgIHdoaWxlIChsYXN0ICYmIGxhc3QudmFsdWUgIT0gXCIoXCIgJiYgKHgucHJlYyA8IGxhc3QucHJlYyB8fCB4LmFzc28gPT0gXCJsZWZ0XCIgJiYgeC5wcmVjID09IGxhc3QucHJlYykpIHtcclxuICAgICAgICAgIG91dHB1dC5wdXNoKHN0YWNrLnBvcCgpKTtcclxuICAgICAgICAgIGxhc3QgPSBzdGFjay5sZW5ndGggPyBzdGFja1tzdGFjay5sZW5ndGhdIDogZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YWNrLnB1c2goeCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoeC50eXBlID09IFwiTGVmdCBQYXJlbnRoZXNpc1wiKSB7XHJcbiAgICAgICAgc3RhY2sucHVzaCh4KVxyXG4gICAgICB9IGVsc2UgaWYgKHgudHlwZSA9PSBcIlJpZ2h0IFBhcmVudGhlc2lzXCIpIHtcclxuICAgICAgICB3aGlsZSAobGFzdCAmJiBsYXN0LnZhbHVlICE9IFwiKFwiKSB7XHJcbiAgICAgICAgICBvdXRwdXQucHVzaChzdGFjay5wb3AoKSk7XHJcbiAgICAgICAgICBsYXN0ID0gc3RhY2subGVuZ3RoID8gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gOiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhY2sucG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQuY29uY2F0KHN0YWNrLnJldmVyc2UoKSlcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gdChhKSB7XHJcbiAgICB2YXIgeCA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhW2ldLnR5cGUgPT0gXCJMaXRlcmFsXCIpIHtcclxuICAgICAgICB4LnB1c2gocGFyc2VGbG9hdChhW2ldLnZhbHVlKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYVtpXS50eXBlID09IFwiT3BlcmF0b3JcIikge1xyXG4gICAgICAgIHN3aXRjaCAoYVtpXS52YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgXCIrXCI6XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHhbeC5sZW5ndGggLSAyXSA9IHBhcnNlRmxvYXQoKCh4W3gubGVuZ3RoIC0gMl0qMTAwMDApICsgKHhbeC5sZW5ndGggLSAxXSoxMDAwMCkpIC8gMTAwMDApO1xyXG4gICAgICAgICAgICB4LnBvcCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiLVwiOlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4W3gubGVuZ3RoIC0gMl0gPSBwYXJzZUZsb2F0KCgoeFt4Lmxlbmd0aCAtIDJdKjEwMDAwKSAtICh4W3gubGVuZ3RoIC0gMV0qMTAwMDApKSAvIDEwMDAwKTtcclxuICAgICAgICAgICAgeC5wb3AoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIipcIjpcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgeFt4Lmxlbmd0aCAtIDJdID0gcGFyc2VGbG9hdCh4W3gubGVuZ3RoIC0gMl0gKiB4W3gubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICB4LnBvcCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiL1wiOlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4W3gubGVuZ3RoIC0gMl0gPSBwYXJzZUZsb2F0KHhbeC5sZW5ndGggLSAyXSAvIHhbeC5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgIHgucG9wKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJeXCI6XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHhbeC5sZW5ndGggLSAyXSA9IHBhcnNlRmxvYXQoTWF0aC5wb3coeFt4Lmxlbmd0aCAtIDJdLCB4W3gubGVuZ3RoIC0gMV0pKTtcclxuICAgICAgICAgICAgeC5wb3AoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geC5sZW5ndGggPyB4WzBdIDogMDtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2FsYyhuKSB7XHJcbiAgICB2YXIgeCA9IHRva2VuaXplKG4pO1xyXG4gICAgdmFyIHkgPSBjKHgpO1xyXG4gICAgdmFyIHogPSB0KHkpO1xyXG4gICAgcmV0dXJuIHoudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy5jYWxjID0gY2FsYztcclxuICAiXX0=