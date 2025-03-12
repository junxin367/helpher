
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/DCLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a56c0Fh1bpDto6UwDov+u7M', 'DCLabel');
// framework/ui/DCLabel.ts

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
var DCUI_1 = require("./DCUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
var DCLabel = /** @class */ (function (_super) {
    __extends(DCLabel, _super);
    function DCLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.str = "%s";
        _this.hasAnim = true;
        _this.dur = 0.1;
        _this.scale = 1.2;
        _this.formatUnit = true;
        return _this;
        // update (dt) {}
    }
    DCLabel.prototype.onLoad = function () {
        this.label = this.getComponent(cc.Label);
    };
    DCLabel.prototype.onValueChanged = function (v) {
        if (v == null) {
            console.log("[DCLabel] warn!", "not found field " + this.dataBind);
            v = "0";
        }
        if (this.formatUnit) {
            this.label.string = cc.js.formatStr(this.str, v.toUnitString());
        }
        else {
            this.label.string = cc.js.formatStr(this.str, v);
        }
        if (this.hasAnim) {
            this.node.stopActionByTag(1000);
            var scale = cc.scaleTo(this.dur, this.scale).easing(cc.easeSineInOut());
            var scale2 = cc.scaleTo(this.dur, 1, 1);
            var seq = cc.sequence(scale, scale2);
            seq.setTag(1000);
            this.node.runAction(seq);
        }
    };
    __decorate([
        property
    ], DCLabel.prototype, "str", void 0);
    __decorate([
        property
    ], DCLabel.prototype, "hasAnim", void 0);
    __decorate([
        property({ visible: function () { return this.hasAnim; } })
    ], DCLabel.prototype, "dur", void 0);
    __decorate([
        property({ visible: function () { return this.hasAnim; } })
    ], DCLabel.prototype, "scale", void 0);
    __decorate([
        property({ displayName: "单位格式化" })
    ], DCLabel.prototype, "formatUnit", void 0);
    DCLabel = __decorate([
        ccclass,
        menu("DCUI/DCLable"),
        requireComponent(cc.Label)
    ], DCLabel);
    return DCLabel;
}(DCUI_1.default));
exports.default = DCLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcRENMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFFcEIsSUFBQSxLQUE0QyxFQUFFLENBQUMsVUFBVSxFQUF4RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBQyxnQkFBZ0Isc0JBQUEsRUFBQyxJQUFJLFVBQWlCLENBQUM7QUFFaEUsOEJBQThCO0FBQzlCLDRDQUE0QztBQUM1Qyw0QkFBNEI7QUFDNUIsMENBQTBDO0FBSTFDO0lBQXFDLDJCQUFJO0lBQXpDO1FBQUEscUVBK0NDO1FBM0NHLFNBQUcsR0FBVSxJQUFJLENBQUM7UUFHbEIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixTQUFHLEdBQVUsR0FBRyxDQUFDO1FBR2pCLFdBQUssR0FBVSxHQUFHLENBQUM7UUFHbkIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7O1FBOEIxQixpQkFBaUI7SUFDckIsQ0FBQztJQTdCRyx3QkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0NBQWMsR0FBZCxVQUFlLENBQUM7UUFFWixJQUFHLENBQUMsSUFBSSxJQUFJLEVBQUM7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFHLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNuRSxDQUFDLEdBQUcsR0FBRyxDQUFBO1NBQ1Y7UUFDRCxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQ2xCO1lBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUNsRTthQUFJO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELElBQUcsSUFBSSxDQUFDLE9BQU8sRUFDZjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBO1lBQ3RFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUMzQjtJQUNMLENBQUM7SUF4Q0Q7UUFEQyxRQUFRO3dDQUNTO0lBR2xCO1FBREMsUUFBUTs0Q0FDYztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFDLE9BQU8sZ0JBQUcsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBLENBQUEsQ0FBQyxFQUFDLENBQUM7d0NBQzFCO0lBR2pCO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxnQkFBRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUEsQ0FBQSxDQUFDLEVBQUMsQ0FBQzswQ0FDeEI7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLENBQUM7K0NBQ047SUFoQlQsT0FBTztRQUgzQixPQUFPO1FBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNwQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO09BQ04sT0FBTyxDQStDM0I7SUFBRCxjQUFDO0NBL0NELEFBK0NDLENBL0NvQyxjQUFJLEdBK0N4QztrQkEvQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRENVSSBmcm9tIFwiLi9EQ1VJXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHkscmVxdWlyZUNvbXBvbmVudCxtZW51fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vL+eUteWtkOmCruS7tnB1aGFsc2tpanNlbWVuQGdtYWlsLmNvbVxyXG4vL+a6kOeggee9keermSDlvIB2cG7lhajlsYDmqKHlvI/miZPlvIAgaHR0cDovL3dlYjNpbmN1YmF0b3JzLmNvbS9cclxuLy/nlLXmiqVodHRwczovL3QubWUvZ2FtZWNvZGU5OTlcclxuLy/nvZHpobXlrqLmnI0gaHR0cDovL3dlYjNpbmN1YmF0b3JzLmNvbS9rZWZ1Lmh0bWxcclxuQGNjY2xhc3NcclxuQG1lbnUoXCJEQ1VJL0RDTGFibGVcIilcclxuQHJlcXVpcmVDb21wb25lbnQoY2MuTGFiZWwpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERDTGFiZWwgZXh0ZW5kcyBEQ1VJIHtcclxuXHJcbiAgICBsYWJlbDpjYy5MYWJlbDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3RyOnN0cmluZyA9IFwiJXNcIjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGhhc0FuaW06Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KHt2aXNpYmxlKCl7cmV0dXJuIHRoaXMuaGFzQW5pbX19KVxyXG4gICAgZHVyOm51bWJlciA9IDAuMTtcclxuXHJcbiAgICBAcHJvcGVydHkoe3Zpc2libGUoKXtyZXR1cm4gdGhpcy5oYXNBbmltfX0pXHJcbiAgICBzY2FsZTpudW1iZXIgPSAxLjI7XHJcblxyXG4gICAgQHByb3BlcnR5KHtkaXNwbGF5TmFtZTpcIuWNleS9jeagvOW8j+WMllwifSlcclxuICAgIGZvcm1hdFVuaXQ6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmFsdWVDaGFuZ2VkKHYpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodiA9PSBudWxsKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbRENMYWJlbF0gd2FybiFcIiAsIFwibm90IGZvdW5kIGZpZWxkIFwiICsgdGhpcy5kYXRhQmluZClcclxuICAgICAgICAgICAgdiA9IFwiMFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZm9ybWF0VW5pdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gY2MuanMuZm9ybWF0U3RyKHRoaXMuc3RyLHYudG9Vbml0U3RyaW5nKCkpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IGNjLmpzLmZvcm1hdFN0cih0aGlzLnN0cix2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5oYXNBbmltKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBY3Rpb25CeVRhZygxMDAwKTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gY2Muc2NhbGVUbyh0aGlzLmR1cix0aGlzLnNjYWxlKS5lYXNpbmcoY2MuZWFzZVNpbmVJbk91dCgpKVxyXG4gICAgICAgICAgICBsZXQgc2NhbGUyID0gY2Muc2NhbGVUbyh0aGlzLmR1ciwxLDEpO1xyXG4gICAgICAgICAgICBsZXQgc2VxID0gY2Muc2VxdWVuY2Uoc2NhbGUsc2NhbGUyKVxyXG4gICAgICAgICAgICBzZXEuc2V0VGFnKDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHNlcSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=