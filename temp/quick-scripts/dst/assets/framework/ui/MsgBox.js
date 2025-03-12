
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/MsgBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80286DRY89Mi4zsQlde8jnL', 'MsgBox');
// framework/ui/MsgBox.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("./View");
var ccUtil_1 = require("../utils/ccUtil");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, playOnFocus = _a.playOnFocus;
var MsgBox = /** @class */ (function (_super) {
    __extends(MsgBox, _super);
    function MsgBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_ok = null;
        _this.btn_cancel = null;
        _this.defaultStrings = {};
        _this.text = [];
        _this.messageBoxCallback = null;
        _this.label_ok = null;
        _this.label_cancel = null;
        return _this;
        // update (dt) {}
    }
    MsgBox_1 = MsgBox;
    MsgBox.prototype.onLoad = function () {
        // this.getComponent(View).setDelegate(this);
        ccUtil_1.default.newButton(this.btn_ok, "MsgBox", "on_btn_ok_clicked", this.node);
        ccUtil_1.default.newButton(this.btn_cancel, "MsgBox", "on_btn_cancel_clicked", this.node);
    };
    MsgBox.prototype.onHidden = function () {
    };
    MsgBox.prototype.onShown = function (params) {
        var _this = this;
        this.messageBoxCallback = params.callback;
        Object.keys(params.text).forEach(function (k) {
            var _a;
            var label = ccUtil_1.default.find(k, _this.node, cc.Label);
            var basestr = _this.defaultStrings[k];
            if (basestr == null) {
                basestr = label.string;
                _this.defaultStrings[k] = basestr;
            }
            if (label) {
                label.string = (_a = cc.js).formatStr.apply(_a, __spreadArrays([basestr], params.text[k]));
            }
            else {
                console.warn("label not found", k);
            }
        });
    };
    MsgBox.prototype.start = function () {
    };
    MsgBox.prototype.on_btn_ok_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MsgBox_1.OK);
        this.getComponent(View_1.default).hide();
    };
    MsgBox.prototype.on_btn_cancel_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MsgBox_1.CANCEL);
        this.getComponent(View_1.default).hide();
    };
    var MsgBox_1;
    MsgBox.OK = 1;
    MsgBox.CANCEL = 0;
    __decorate([
        property(cc.Node)
    ], MsgBox.prototype, "btn_ok", void 0);
    __decorate([
        property(cc.Node)
    ], MsgBox.prototype, "btn_cancel", void 0);
    MsgBox = MsgBox_1 = __decorate([
        ccclass
    ], MsgBox);
    return MsgBox;
}(cc.Component));
exports.default = MsgBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcTXNnQm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFDMUIsMENBQXFDO0FBRXJDLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBRTdGLElBQUEsS0FBdUQsRUFBRSxDQUFDLFVBQVUsRUFBbEUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsV0FBVyxpQkFBa0IsQ0FBQztBQUczRTtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQW1FQztRQTVERyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLG9CQUFjLEdBQWdDLEVBQUUsQ0FBQztRQUVqRCxVQUFJLEdBQWEsRUFBRSxDQUFBO1FBRW5CLHdCQUFrQixHQUFhLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQWEsSUFBSSxDQUFDOztRQStDOUIsaUJBQWlCO0lBQ3JCLENBQUM7ZUFuRW9CLE1BQU07SUFzQnZCLHVCQUFNLEdBQU47UUFDSSw2Q0FBNkM7UUFDN0MsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLGdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQseUJBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx3QkFBTyxHQUFQLFVBQVEsTUFBTTtRQUFkLGlCQWVDO1FBZEcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQzs7WUFDOUIsSUFBSSxLQUFLLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQy9DLElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDcEMsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNqQixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUE7YUFDbkM7WUFDRCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUEsS0FBQSxFQUFFLENBQUMsRUFBRSxDQUFBLENBQUMsU0FBUywyQkFBQyxPQUFPLEdBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFBO2FBQzdEO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDckM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFpQixHQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLGtCQUFrQjtZQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0NBQXFCLEdBQXJCO1FBQ0ksSUFBSSxJQUFJLENBQUMsa0JBQWtCO1lBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLENBQUM7O0lBNURNLFNBQUUsR0FBVyxDQUFDLENBQUM7SUFDZixhQUFNLEdBQVcsQ0FBQyxDQUFDO0lBSTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQVRWLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FtRTFCO0lBQUQsYUFBQztDQW5FRCxBQW1FQyxDQW5FbUMsRUFBRSxDQUFDLFNBQVMsR0FtRS9DO2tCQW5Fb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3IGZyb20gXCIuL1ZpZXdcIjtcclxuaW1wb3J0IGNjVXRpbCBmcm9tIFwiLi4vdXRpbHMvY2NVdGlsXCI7XHJcblxyXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIHJlcXVpcmVDb21wb25lbnQsIHBsYXlPbkZvY3VzIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnQm94IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgT0s6IG51bWJlciA9IDE7XHJcbiAgICBzdGF0aWMgQ0FOQ0VMOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9vazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9jYW5jZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBkZWZhdWx0U3RyaW5nczogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gICAgdGV4dDogc3RyaW5nW10gPSBbXVxyXG5cclxuICAgIG1lc3NhZ2VCb3hDYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIGxhYmVsX29rOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBsYWJlbF9jYW5jZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBiZ0FuaW1hdGlvbjogY2MuQW5pbWF0aW9uO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLnNldERlbGVnYXRlKHRoaXMpO1xyXG4gICAgICAgIGNjVXRpbC5uZXdCdXR0b24odGhpcy5idG5fb2ssIFwiTXNnQm94XCIsIFwib25fYnRuX29rX2NsaWNrZWRcIiwgdGhpcy5ub2RlKTtcclxuICAgICAgICBjY1V0aWwubmV3QnV0dG9uKHRoaXMuYnRuX2NhbmNlbCwgXCJNc2dCb3hcIiwgXCJvbl9idG5fY2FuY2VsX2NsaWNrZWRcIiwgdGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGRlbigpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3duKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUJveENhbGxiYWNrID0gcGFyYW1zLmNhbGxiYWNrO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcy50ZXh0KS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBjY1V0aWwuZmluZChrLCB0aGlzLm5vZGUsIGNjLkxhYmVsKVxyXG4gICAgICAgICAgICBsZXQgYmFzZXN0ciA9IHRoaXMuZGVmYXVsdFN0cmluZ3Nba11cclxuICAgICAgICAgICAgaWYgKGJhc2VzdHIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYmFzZXN0ciA9IGxhYmVsLnN0cmluZztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFN0cmluZ3Nba10gPSBiYXNlc3RyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBjYy5qcy5mb3JtYXRTdHIoYmFzZXN0ciwgLi4ucGFyYW1zLnRleHRba10pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsYWJlbCBub3QgZm91bmRcIiwgaylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uX2J0bl9va19jbGlja2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VCb3hDYWxsYmFjaylcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQm94Q2FsbGJhY2suY2FsbChudWxsLCBNc2dCb3guT0spXHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoVmlldykuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uX2J0bl9jYW5jZWxfY2xpY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlQm94Q2FsbGJhY2spXHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJveENhbGxiYWNrLmNhbGwobnVsbCwgTXNnQm94LkNBTkNFTClcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChWaWV3KS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==