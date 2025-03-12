
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/Net.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e139lB+RRCNpxXRSqgoURG', 'Net');
// framework/misc/Net.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.net = void 0;
var Net = /** @class */ (function () {
    function Net() {
        this._timeout = 8000;
        this.headers = {};
    }
    Net.prototype.setTimeout = function (v) {
        this._timeout = v;
    };
    Net.prototype.httpRequest = function (url, method, params) {
        var _this = this;
        console.log('[' + method + ']: ' + url);
        return new Promise(function (_) {
            var time = false; //是否超时
            var timer = setTimeout(function () {
                time = true;
                xhr.abort(); //请求中止
                _(Net.Code.Timeout);
            }, _this._timeout);
            var xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        var respone = xhr.responseText;
                        if (time)
                            return; //请求已经超时，忽略中止请求
                        clearTimeout(timer); //取消等待的超时    
                        _(respone);
                    }
                    else {
                        _(null);
                    }
                }
            };
            xhr.open(method, url, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }
            Object.keys(_this.headers).forEach(function (k) {
                var v = _this.headers[k];
                xhr.setRequestHeader(k, v);
            });
            // note: In Internet Explorer, the timeout property may be set only after calling the open()
            // method and before calling the send() method.
            xhr.timeout = _this._timeout; // 8 seconds for timeout
            if (method == "POST" || method == "PUT") {
                //set params to body 
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(params);
            }
            else {
                xhr.send();
            }
        });
    };
    Net.prototype.setHeader = function (key, value) {
        this.headers[key] = value;
    };
    Net.prototype.httpGet = function (url, params) {
        if (params && url.indexOf("?") == -1) {
            if (Object.keys(params).length > 0)
                url += "?";
        }
        if (params)
            url += Object.keys(params).map(function (k) { return k + "=" + params[k]; }).join("&");
        return this.httpRequest(url, 'GET');
    };
    Net.prototype.httpPost = function (url, params) {
        return this.httpRequest(url, "POST", params);
    };
    Net.prototype.httpPut = function (url, params) {
        return this.httpRequest(url, "PUT", params);
    };
    Net.Code = {
        Error: "__error__",
        Success: 1,
        Timeout: "__timeout__"
    };
    return Net;
}());
exports.default = Net;
exports.net = new Net();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxOZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQVFJLGFBQVEsR0FBVSxJQUFJLENBQUM7UUFxRHZCLFlBQU8sR0FBRyxFQUFFLENBQUM7SUEyQmpCLENBQUM7SUE5RUcsd0JBQVUsR0FBVixVQUFXLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQseUJBQVcsR0FBWCxVQUFZLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTztRQUFoQyxpQkE2Q0M7UUE1Q0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUN2QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNoQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQSxNQUFNO1lBQ3ZCLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQztnQkFDbkIsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDWixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQSxNQUFNO2dCQUNsQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTt3QkFDdkMsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQzt3QkFDL0IsSUFBRyxJQUFJOzRCQUFFLE9BQU8sQ0FBQSxl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c291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0IHtcclxuXHJcbiAgICBzdGF0aWMgQ29kZSA9IHtcclxuICAgICAgICBFcnJvcjogXCJfX2Vycm9yX19cIixcclxuICAgICAgICBTdWNjZXNzOiAxLFxyXG4gICAgICAgIFRpbWVvdXQ6IFwiX190aW1lb3V0X19cIlxyXG4gICAgfVxyXG5cclxuICAgIF90aW1lb3V0Om51bWJlciA9IDgwMDA7XHJcblxyXG4gICAgc2V0VGltZW91dCh2KXtcclxuICAgICAgICB0aGlzLl90aW1lb3V0ID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBodHRwUmVxdWVzdCh1cmwsIG1ldGhvZCwgcGFyYW1zPyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1snICsgbWV0aG9kICsgJ106ICcgKyB1cmwpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKF8gPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGltZSA9IGZhbHNlOy8v5piv5ZCm6LaF5pe2XHJcbiAgICAgICAgICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgeGhyLmFib3J0KCk7Ly/or7fmsYLkuK3mraJcclxuICAgICAgICAgICAgICAgIF8oTmV0LkNvZGUuVGltZW91dCk7XHJcbiAgICAgICAgICAgIH0sdGhpcy5fdGltZW91dCk7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Q7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRpbWUpIHJldHVybjsvL+ivt+axguW3sue7j+i2heaXtu+8jOW/veeVpeS4reatouivt+axglxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpOy8v5Y+W5raI562J5b6F55qE6LaF5pe2ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfKHJlc3BvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8obnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmhlYWRlcnMpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHRoaXMuaGVhZGVyc1trXTtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIHYpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gbm90ZTogSW4gSW50ZXJuZXQgRXhwbG9yZXIsIHRoZSB0aW1lb3V0IHByb3BlcnR5IG1heSBiZSBzZXQgb25seSBhZnRlciBjYWxsaW5nIHRoZSBvcGVuKClcclxuICAgICAgICAgICAgLy8gbWV0aG9kIGFuZCBiZWZvcmUgY2FsbGluZyB0aGUgc2VuZCgpIG1ldGhvZC5cclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLl90aW1lb3V0Oy8vIDggc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgICAgICBpZiAobWV0aG9kID09IFwiUE9TVFwiIHx8IG1ldGhvZCA9PSBcIlBVVFwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL3NldCBwYXJhbXMgdG8gYm9keSBcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQocGFyYW1zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVycyA9IHt9O1xyXG5cclxuICAgIHNldEhlYWRlcihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJzW2tleV0gPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBodHRwR2V0KHVybCwgcGFyYW1zPykge1xyXG4gICAgICAgIGlmIChwYXJhbXMgJiYgdXJsLmluZGV4T2YoXCI/XCIpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gXCI/XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcmFtcylcclxuICAgICAgICAgICAgdXJsICs9IE9iamVjdC5rZXlzKHBhcmFtcykubWFwKGsgPT4gYCR7a309JHtwYXJhbXNba119YCkuam9pbihcIiZcIilcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwUmVxdWVzdCh1cmwsICdHRVQnKVxyXG4gICAgfVxyXG5cclxuICAgIGh0dHBQb3N0KHVybCwgcGFyYW1zPyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBcIlBPU1RcIiwgcGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBodHRwUHV0KHVybCwgcGFyYW1zPykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBSZXF1ZXN0KHVybCwgXCJQVVRcIiwgcGFyYW1zKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGxldCBuZXQ6IE5ldCA9IG5ldyBOZXQoKTsiXX0=