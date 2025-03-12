
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/misc/ClickAudio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79f2ailkJpKCb/aXocZslku', 'ClickAudio');
// framework/misc/ClickAudio.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Device_1 = require("./Device");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var ClickAudio = /** @class */ (function (_super) {
    __extends(ClickAudio, _super);
    function ClickAudio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audio = null;
        _this.audio_down = null;
        return _this;
        // update (dt) {}
    }
    ClickAudio.prototype.onLoad = function () {
        var _this = this;
        this.node.on('touchstart', function (_) {
            //cc.EaseElasticOut:create(
            // this.node.stopAllActions();
            Device_1.default.playEffect(_this.audio_down, false);
        }, this.node);
        this.node.on("touchend", function (_) {
            Device_1.default.playEffect(_this.audio, false);
        });
        this.node.on("touchcancel", function (_) {
        });
    };
    __decorate([
        property(cc.AudioClip)
    ], ClickAudio.prototype, "audio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], ClickAudio.prototype, "audio_down", void 0);
    ClickAudio = __decorate([
        ccclass
    ], ClickAudio);
    return ClickAudio;
}(cc.Component));
exports.default = ClickAudio;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxtaXNjXFxDbGlja0F1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qyw4QkFBOEI7QUFDOUIsNENBQTRDO0FBQzVDLDRCQUE0QjtBQUM1QiwwQ0FBMEM7QUFFMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF3QkM7UUFyQkcsV0FBSyxHQUFpQixJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDOztRQWlCaEMsaUJBQWlCO0lBQ3JCLENBQUM7SUFoQkcsMkJBQU0sR0FBTjtRQUFBLGlCQWFDO1FBWEcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUEsQ0FBQztZQUN4QiwyQkFBMkI7WUFDM0IsOEJBQThCO1lBQzlCLGdCQUFNLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVkLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFBLENBQUM7WUFDdEIsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFBLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ0k7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDUztJQU5mLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F3QjlCO0lBQUQsaUJBQUM7Q0F4QkQsQUF3QkMsQ0F4QnVDLEVBQUUsQ0FBQyxTQUFTLEdBd0JuRDtrQkF4Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGV2aWNlIGZyb20gXCIuL0RldmljZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLy/nlLXlrZDpgq7ku7ZwdWhhbHNraWpzZW1lbkBnbWFpbC5jb21cclxuLy/mupDnoIHnvZHnq5kg5byAdnBu5YWo5bGA5qih5byP5omT5byAIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20vXHJcbi8v55S15oqlaHR0cHM6Ly90Lm1lL2dhbWVjb2RlOTk5XHJcbi8v572R6aG15a6i5pyNIGh0dHA6Ly93ZWIzaW5jdWJhdG9ycy5jb20va2VmdS5odG1sXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWNrQXVkaW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBhdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXVkaW9fZG93bjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIF8gPT4ge1xyXG4gICAgICAgICAgICAvL2NjLkVhc2VFbGFzdGljT3V0OmNyZWF0ZShcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIERldmljZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW9fZG93biwgZmFsc2UpXHJcbiAgICAgICAgfSwgdGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidG91Y2hlbmRcIiwgXyA9PiB7XHJcbiAgICAgICAgICAgIERldmljZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW8sIGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwidG91Y2hjYW5jZWxcIiwgXyA9PiB7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==