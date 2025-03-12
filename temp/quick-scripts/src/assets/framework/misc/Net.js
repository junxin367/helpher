"use strict";
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