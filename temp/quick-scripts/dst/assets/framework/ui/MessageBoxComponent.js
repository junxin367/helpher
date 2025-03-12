
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/MessageBoxComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d14c63Zc1PupexE+EkksQp', 'MessageBoxComponent');
// framework/ui/MessageBoxComponent.ts

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
var View_1 = require("./View");
var MessageBoxManager_1 = require("./MessageBoxManager");
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, playOnFocus = _a.playOnFocus;
var MessageBoxComponent = /** @class */ (function (_super) {
    __extends(MessageBoxComponent, _super);
    function MessageBoxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.node_title = null;
        _this.node_content = null;
        _this.btn_ok = null;
        _this.btn_cancel = null;
        _this.messageBoxCallback = null;
        _this.label_ok = null;
        _this.label_cancel = null;
        _this.group_ok_cancel = null;
        _this.group_ok = null;
        return _this;
        // update (dt) {}
    }
    MessageBoxComponent.prototype.onLoad = function () {
        this.label_ok = this.btn_ok.getChildByName("Label").getComponent(cc.Label);
        this.label_cancel = this.btn_cancel.getChildByName("Label").getComponent(cc.Label);
        this.getComponent(View_1.default).setDelegate(this);
        this.bgAnimation = this.node.getChildByName("bg").getComponent(cc.Animation);
    };
    MessageBoxComponent.prototype.onHidden = function () {
    };
    MessageBoxComponent.prototype.onShown = function (params) {
        this.node_title.string = params.title;
        this.node_content.string = params.content;
        this.messageBoxCallback = params.callback;
        if (params.extra) {
            this.label_ok.string = params.extra.okText;
            this.label_cancel.string = params.extra.cancelText;
        }
        if (params.buttons == MessageBoxManager_1.MessageBox.OK_CANCEL) {
            //show two 
            this.group_ok_cancel.active = true;
            this.group_ok.active = false;
        }
        else {
            //show one 
            this.group_ok.active = true;
            this.group_ok_cancel.active = false;
        }
    };
    MessageBoxComponent.prototype.start = function () {
    };
    MessageBoxComponent.prototype.on_btn_ok_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MessageBoxManager_1.MessageBox.OK);
        this.getComponent(View_1.default).hide();
    };
    MessageBoxComponent.prototype.on_btn_cancel_clicked = function () {
        if (this.messageBoxCallback)
            this.messageBoxCallback.call(null, MessageBoxManager_1.MessageBox.CANCEL);
        this.getComponent(View_1.default).hide();
    };
    __decorate([
        property(cc.Label)
    ], MessageBoxComponent.prototype, "node_title", void 0);
    __decorate([
        property(cc.Label)
    ], MessageBoxComponent.prototype, "node_content", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "btn_ok", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "btn_cancel", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "group_ok_cancel", void 0);
    __decorate([
        property(cc.Node)
    ], MessageBoxComponent.prototype, "group_ok", void 0);
    MessageBoxComponent = __decorate([
        ccclass
    ], MessageBoxComponent);
    return MessageBoxComponent;
}(cc.Component));
exports.default = MessageBoxComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcTWVzc2FnZUJveENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFDMUIseURBQStDO0FBRS9DLG9CQUFvQjtBQUNwQixpRkFBaUY7QUFDakYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5QiwyRkFBMkY7QUFDM0YsbUdBQW1HO0FBRTdGLElBQUEsS0FBb0QsRUFBRSxDQUFDLFVBQVUsRUFBaEUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUMsaUJBQWlCLHVCQUFBLEVBQUMsV0FBVyxpQkFBaUIsQ0FBQztBQUd4RTtJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQWdGQztRQTdFRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRTFCLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBVyxJQUFJLENBQUM7O1FBMER4QixpQkFBaUI7SUFDckIsQ0FBQztJQXhERyxvQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsRixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELHNDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQscUNBQU8sR0FBUCxVQUFRLE1BQU07UUFFVixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBRyxNQUFNLENBQUMsS0FBSyxFQUNmO1lBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7U0FDckQ7UUFDRCxJQUFLLE1BQU0sQ0FBQyxPQUFPLElBQUcsOEJBQVUsQ0FBQyxTQUFTLEVBQzFDO1lBQ0ksV0FBVztZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDaEM7YUFBSTtZQUNELFdBQVc7WUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELG1DQUFLLEdBQUw7SUFFQSxDQUFDO0lBSUQsK0NBQWlCLEdBQWpCO1FBRUksSUFBRyxJQUFJLENBQUMsa0JBQWtCO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLDhCQUFVLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsbURBQXFCLEdBQXJCO1FBRUksSUFBRyxJQUFJLENBQUMsa0JBQWtCO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLDhCQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBeEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2REFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ1E7SUFRMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnRUFDYztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNNO0lBckJQLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBZ0Z2QztJQUFELDBCQUFDO0NBaEZELEFBZ0ZDLENBaEZnRCxFQUFFLENBQUMsU0FBUyxHQWdGNUQ7a0JBaEZvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XHJcbmltcG9ydCB7TWVzc2FnZUJveH0gZnJvbSBcIi4vTWVzc2FnZUJveE1hbmFnZXJcIjtcclxuXHJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5LGV4ZWN1dGVJbkVkaXRNb2RlLHBsYXlPbkZvY3VzfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlQm94Q29tcG9uZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBub2RlX3RpdGxlOmNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG5vZGVfY29udGVudDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fb2s6Y2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9jYW5jZWw6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgbWVzc2FnZUJveENhbGxiYWNrOkZ1bmN0aW9uID0gbnVsbDtcclxuXHJcbiAgICBsYWJlbF9vazpjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBsYWJlbF9jYW5jZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3JvdXBfb2tfY2FuY2VsIDpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdyb3VwX29rOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGJnQW5pbWF0aW9uOmNjLkFuaW1hdGlvbjtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9vayA9IHRoaXMuYnRuX29rLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIHRoaXMubGFiZWxfY2FuY2VsID0gdGhpcy5idG5fY2FuY2VsLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLnNldERlbGVnYXRlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmdBbmltYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGRlbigpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bihwYXJhbXMpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlX3RpdGxlLnN0cmluZyA9IHBhcmFtcy50aXRsZTtcclxuICAgICAgICB0aGlzLm5vZGVfY29udGVudC5zdHJpbmcgPSBwYXJhbXMuY29udGVudDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VCb3hDYWxsYmFjayA9IHBhcmFtcy5jYWxsYmFjaztcclxuICAgICAgICBpZihwYXJhbXMuZXh0cmEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsX29rLnN0cmluZyA9IHBhcmFtcy5leHRyYS5va1RleHRcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9jYW5jZWwuc3RyaW5nID0gcGFyYW1zLmV4dHJhLmNhbmNlbFRleHRcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBwYXJhbXMuYnV0dG9ucz09IE1lc3NhZ2VCb3guT0tfQ0FOQ0VMKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9zaG93IHR3byBcclxuICAgICAgICAgICAgdGhpcy5ncm91cF9va19jYW5jZWwuYWN0aXZlID0gdHJ1ZTsgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdyb3VwX29rLmFjdGl2ZSA9IGZhbHNlOyAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vc2hvdyBvbmUgXHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBfb2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ncm91cF9va19jYW5jZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbl9idG5fb2tfY2xpY2tlZCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5tZXNzYWdlQm94Q2FsbGJhY2spXHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJveENhbGxiYWNrLmNhbGwobnVsbCxNZXNzYWdlQm94Lk9LKVxyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KFZpZXcpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbl9idG5fY2FuY2VsX2NsaWNrZWQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMubWVzc2FnZUJveENhbGxiYWNrKVxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCb3hDYWxsYmFjay5jYWxsKG51bGwsTWVzc2FnZUJveC5DQU5DRUwpICAgXHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoVmlldykuaGlkZSgpOyAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==