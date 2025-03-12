
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/SpriteFrameCache.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8756by7qCVIPpJ06/9qmobv', 'SpriteFrameCache');
// framework/misc/SpriteFrameCache.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteFrameCache = /** @class */ (function () {
    function SpriteFrameCache() {
    }
    Object.defineProperty(SpriteFrameCache, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new SpriteFrameCache();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    // private frames:{[index:string]:cc.SpriteFrame} = {};
    SpriteFrameCache.prototype.getSpriteFrame = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                // let frame = this.frames[url]
                // if(frame == null)
                // {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("[SpriteFrameCache] request image:" + url)
                        if (!url || url == "") {
                            reject("empty-url");
                            return;
                        }
                        if (url.indexOf("http") == -1) {
                            cc.resources.load(url, cc.SpriteFrame, function (error, frame) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                if (frame) {
                                    // this.addSpriteFrame(url ,frame)
                                    resolve(frame);
                                }
                                else {
                                    reject("frameNull");
                                }
                            });
                        }
                        else {
                            cc.loader.load({ url: url, type: 'png' }, function (error, texture) {
                                if (error) {
                                    reject(error);
                                    return;
                                }
                                if (texture) {
                                    var frame = new cc.SpriteFrame(texture);
                                    // this.addSpriteFrame(url ,frame)
                                    resolve(frame);
                                }
                                else {
                                    reject("frameNull");
                                }
                            });
                        }
                    })];
            });
        });
    };
    return SpriteFrameCache;
}());
exports.default = SpriteFrameCache;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxTcHJpdGVGcmFtZUNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQThFQSxDQUFDO0lBMUVHLHNCQUFXLDRCQUFRO2FBQW5CO1lBRUksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFDekI7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7YUFDM0M7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCx1REFBdUQ7SUFDakQseUNBQWMsR0FBcEIsVUFBcUIsR0FBVTt1Q0FBRSxPQUFPOztnQkFFcEMsK0JBQStCO2dCQUMvQixvQkFBb0I7Z0JBQ3BCLElBQUk7Z0JBQ0Esc0JBQU8sSUFBSSxPQUFPLENBQWlCLFVBQUMsT0FBTyxFQUFDLE1BQU07d0JBQzlDLHlEQUF5RDt3QkFDekQsSUFBRyxDQUFDLEdBQUcsSUFBRyxHQUFHLElBQUksRUFBRSxFQUFFOzRCQUNqQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7NEJBQ25CLE9BQU87eUJBQ1Y7d0JBQ0QsSUFBSyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM5Qjs0QkFDSSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxVQUFDLEtBQUssRUFBQyxLQUFLO2dDQUM3QyxJQUFHLEtBQUssRUFBQztvQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQUEsT0FBTTtpQ0FBQztnQ0FDL0IsSUFBRyxLQUFLLEVBQ1I7b0NBQ0ksa0NBQWtDO29DQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7aUNBQ2pCO3FDQUFJO29DQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtpQ0FDdEI7NEJBQ0wsQ0FBQyxDQUFDLENBQUE7eUJBQ0w7NkJBQUk7NEJBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxVQUFDLEtBQUssRUFBRSxPQUFPO2dDQUNuRCxJQUFHLEtBQUssRUFBQztvQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQUEsT0FBTTtpQ0FBQztnQ0FDL0IsSUFBRyxPQUFPLEVBQ1Y7b0NBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29DQUN4QyxrQ0FBa0M7b0NBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtpQ0FDakI7cUNBQUk7b0NBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2lDQUN0Qjs0QkFDTCxDQUFDLENBQUMsQ0FBQzt5QkFDTjtvQkFDTCxDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUEyQlQsdUJBQUM7QUFBRCxDQTlFQSxBQThFQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlRnJhbWVDYWNoZVxyXG57XHJcbiAgICBzdGF0aWMgX2luc3RhbmNlOlNwcml0ZUZyYW1lQ2FjaGU7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5faW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNwcml0ZUZyYW1lQ2FjaGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgZnJhbWVzOntbaW5kZXg6c3RyaW5nXTpjYy5TcHJpdGVGcmFtZX0gPSB7fTtcclxuICAgIGFzeW5jIGdldFNwcml0ZUZyYW1lKHVybDpzdHJpbmcpOlByb21pc2U8Y2MuU3ByaXRlRnJhbWU+XHJcbiAgICB7XHJcbiAgICAgICAgLy8gbGV0IGZyYW1lID0gdGhpcy5mcmFtZXNbdXJsXVxyXG4gICAgICAgIC8vIGlmKGZyYW1lID09IG51bGwpXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuU3ByaXRlRnJhbWU+KChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiW1Nwcml0ZUZyYW1lQ2FjaGVdIHJlcXVlc3QgaW1hZ2U6XCIgKyB1cmwpXHJcbiAgICAgICAgICAgICAgICBpZighdXJsIHx8dXJsID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJlbXB0eS11cmxcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIHVybC5pbmRleE9mKFwiaHR0cFwiKSA9PSAtMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsY2MuU3ByaXRlRnJhbWUsKGVycm9yLGZyYW1lKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnJvcil7cmVqZWN0KGVycm9yKTtyZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZFNwcml0ZUZyYW1lKHVybCAsZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZyYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcImZyYW1lTnVsbFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHt1cmw6IHVybCwgdHlwZTogJ3BuZyd9LCAoZXJyb3IsIHRleHR1cmUpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnJvcil7cmVqZWN0KGVycm9yKTtyZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkU3ByaXRlRnJhbWUodXJsICxmcmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiZnJhbWVOdWxsXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlPGNjLlNwcml0ZUZyYW1lPigocmVzb2x2ZSxyZWplY3QpPT5yZXNvbHZlKGZyYW1lKSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgLy8gYWRkU3ByaXRlRnJhbWUodXJsOiBzdHJpbmcsIGZyYW1lOiBhbnkpOiBhbnkge1xyXG4gICAgLy8gICAgIHRoaXMuZnJhbWVzW3VybF0gPSBmcmFtZTtcclxuICAgIC8vICAgICByZXR1cm4gZnJhbWU7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIGNsZWFyKClcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBmb3IgKHZhciBrIGluIHRoaXMuZnJhbWVzKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgbGV0IGZyYW1lID0gIHRoaXMuZnJhbWVzW2tdXHJcbiAgICAvLyAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZWxlYXNlQXNzZXQoZnJhbWUpO1xyXG4gICAgLy8gICAgICAgICBkZWxldGUgdGhpcy5mcmFtZXNba11cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVtb3ZlKGspXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgbGV0IGZyYW1lID0gIHRoaXMuZnJhbWVzW2tdXHJcbiAgICAvLyAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlbGVhc2VBc3NldChmcmFtZSk7XHJcbiAgICAvLyAgICAgZGVsZXRlIHRoaXMuZnJhbWVzW2tdXHJcbiAgICAvLyB9XHJcblxyXG59Il19