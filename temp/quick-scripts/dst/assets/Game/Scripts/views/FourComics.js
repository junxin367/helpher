
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/views/FourComics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce156bqwhtLC6L/Vabhh8hK', 'FourComics');
// Game/Scripts/views/FourComics.ts

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
var EaseType_1 = require("../../../framework/extension/qanim/EaseType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AnimationType;
(function (AnimationType) {
    AnimationType[AnimationType["Slide"] = 0] = "Slide";
    AnimationType[AnimationType["Scale"] = 1] = "Scale";
    AnimationType[AnimationType["Fade"] = 2] = "Fade";
})(AnimationType || (AnimationType = {}));
function prop(type) {
    if (type == AnimationType.Fade) {
        return 'opacity';
    }
    else if (type == AnimationType.Scale) {
        return 'scale';
    }
    return 'position';
}
var ShowConfig = /** @class */ (function () {
    function ShowConfig() {
        this.type = AnimationType.Fade;
        this.dur = 1;
        this.from = 0;
        this.to = 1;
        this.easeType = EaseType_1.EaseType.linear;
        this.slideBy = cc.v2();
    }
    __decorate([
        property({ type: cc.Enum(AnimationType) })
    ], ShowConfig.prototype, "type", void 0);
    __decorate([
        property()
    ], ShowConfig.prototype, "dur", void 0);
    __decorate([
        property()
    ], ShowConfig.prototype, "from", void 0);
    __decorate([
        property()
    ], ShowConfig.prototype, "to", void 0);
    __decorate([
        property({ type: cc.Enum(EaseType_1.EaseType) })
    ], ShowConfig.prototype, "easeType", void 0);
    __decorate([
        property({ type: cc.Vec2, visible: function () { return this.type == AnimationType.Slide; } })
    ], ShowConfig.prototype, "slideBy", void 0);
    ShowConfig = __decorate([
        ccclass("ShowConfig")
    ], ShowConfig);
    return ShowConfig;
}());
var FourComics = /** @class */ (function (_super) {
    __extends(FourComics, _super);
    function FourComics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cells = [];
        _this.cursor = 0;
        _this.configs = [];
        _this.onFinishes = [];
        _this.interval = 3;
        return _this;
    }
    FourComics.prototype.onLoad = function () {
        this.cells = this.node.children;
        this.cursor = 0;
        this.node.on(cc.Node.EventType.TOUCH_END, this.next, this);
    };
    FourComics.prototype.start = function () {
        this.prepare();
        this.next();
        this.schedule(this.next, this.interval);
    };
    FourComics.prototype.next = function () {
        if (this.cursor >= this.configs.length) {
            return;
        }
        this.play();
        this.cursor++;
        if (this.cursor >= this.configs.length) {
            this.unschedule(this.next);
        }
    };
    FourComics.prototype.prepare = function () {
        var _this = this;
        this.cells.forEach(function (v, i) {
            var c = _this.configs[i];
            var pp = prop(c.type);
            v[pp] = c.from;
        });
    };
    FourComics.prototype.play = function () {
        var _a, _b;
        var _this = this;
        var c = this.cursor;
        var cell = this.cells[c];
        var config = this.configs[c];
        var t = null;
        if (config.type == AnimationType.Slide) {
            var pos = cell.getPosition();
            cell.setPosition(pos.x + config.slideBy.x, pos.y + config.slideBy.y);
            t = cc.tween(cell).to(config.dur, { position: pos }, { easing: EaseType_1.EaseType[config.easeType] });
        }
        else if (config.type == AnimationType.Fade) {
            t = cc.tween(cell).to(config.dur, (_a = {}, _a[prop(config.type)] = config.to * 255, _a), { easing: EaseType_1.EaseType[config.easeType] });
        }
        else if (config.type == AnimationType.Scale) {
            t = cc.tween(cell).to(config.dur, (_b = {}, _b[prop(config.type)] = config.to, _b), { easing: EaseType_1.EaseType[config.easeType] });
        }
        if (c == this.cells.length - 1) {
            t.delay(2.0).call(function () {
                _this.onFinishes.forEach(function (v) { return v.emit([_this]); });
            }).start();
        }
        else {
            t.start();
        }
    };
    __decorate([
        property([ShowConfig])
    ], FourComics.prototype, "configs", void 0);
    __decorate([
        property([cc.Component.EventHandler])
    ], FourComics.prototype, "onFinishes", void 0);
    __decorate([
        property
    ], FourComics.prototype, "interval", void 0);
    FourComics = __decorate([
        ccclass
    ], FourComics);
    return FourComics;
}(cc.Component));
exports.default = FourComics;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcdmlld3NcXEZvdXJDb21pY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQXVFO0FBRW5FLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBQ3pDLElBQUssYUFJSjtBQUpELFdBQUssYUFBYTtJQUNkLG1EQUFLLENBQUE7SUFDTCxtREFBSyxDQUFBO0lBQ0wsaURBQUksQ0FBQTtBQUNSLENBQUMsRUFKSSxhQUFhLEtBQWIsYUFBYSxRQUlqQjtBQUVELFNBQVMsSUFBSSxDQUFDLElBQUk7SUFDZCxJQUFJLElBQUksSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFO1FBQzVCLE9BQU8sU0FBUyxDQUFBO0tBQ25CO1NBQU0sSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLEtBQUssRUFBRTtRQUNwQyxPQUFPLE9BQU8sQ0FBQTtLQUNqQjtJQUNELE9BQU8sVUFBVSxDQUFBO0FBQ3JCLENBQUM7QUFJRDtJQUFBO1FBRUksU0FBSSxHQUFrQixhQUFhLENBQUMsSUFBSSxDQUFDO1FBRXpDLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFHaEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBRWYsYUFBUSxHQUFhLG1CQUFRLENBQUMsTUFBTSxDQUFDO1FBR3JDLFlBQU8sR0FBWSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFL0IsQ0FBQztJQWZHO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQzs0Q0FDRjtJQUV6QztRQURDLFFBQVEsRUFBRTsyQ0FDSztJQUdoQjtRQURDLFFBQVEsRUFBRTs0Q0FDTTtJQUdqQjtRQURDLFFBQVEsRUFBRTswQ0FDSTtJQUVmO1FBREMs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TyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUE7WUFDaEQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDYjthQUFNO1lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2I7SUFDTCxDQUFDO0lBL0REO1FBREMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7K0NBQ0c7SUFHMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO2tEQUNPO0lBRzdDO1FBREMsUUFBUTtnREFDWTtJQVhKLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FxRTlCO0lBQUQsaUJBQUM7Q0FyRUQsQUFxRUMsQ0FyRXVDLEVBQUUsQ0FBQyxTQUFTLEdBcUVuRDtrQkFyRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFYXNlVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvZXh0ZW5zaW9uL3FhbmltL0Vhc2VUeXBlXCI7XHJcblxyXG5sZXQgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxyXG5lbnVtIEFuaW1hdGlvblR5cGUge1xyXG4gICAgU2xpZGUsXHJcbiAgICBTY2FsZSxcclxuICAgIEZhZGUsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb3AodHlwZSkge1xyXG4gICAgaWYgKHR5cGUgPT0gQW5pbWF0aW9uVHlwZS5GYWRlKSB7XHJcbiAgICAgICAgcmV0dXJuICdvcGFjaXR5J1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09IEFuaW1hdGlvblR5cGUuU2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gJ3NjYWxlJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdwb3NpdGlvbidcclxufVxyXG5cclxuXHJcbkBjY2NsYXNzKFwiU2hvd0NvbmZpZ1wiKVxyXG5jbGFzcyBTaG93Q29uZmlnIHtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oQW5pbWF0aW9uVHlwZSkgfSlcclxuICAgIHR5cGU6IEFuaW1hdGlvblR5cGUgPSBBbmltYXRpb25UeXBlLkZhZGU7XHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgZHVyOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBmcm9tOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICB0bzogbnVtYmVyID0gMTtcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oRWFzZVR5cGUpIH0pXHJcbiAgICBlYXNlVHlwZTogRWFzZVR5cGUgPSBFYXNlVHlwZS5saW5lYXI7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuVmVjMiwgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudHlwZSA9PSBBbmltYXRpb25UeXBlLlNsaWRlIH0gfSlcclxuICAgIHNsaWRlQnk6IGNjLlZlYzIgPSBjYy52MigpO1xyXG5cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm91ckNvbWljcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBjZWxsczogY2MuTm9kZVtdID0gW11cclxuICAgIGN1cnNvcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoW1Nob3dDb25maWddKVxyXG4gICAgY29uZmlnczogU2hvd0NvbmZpZ1tdID0gW11cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJdKVxyXG4gICAgb25GaW5pc2hlczogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpbnRlcnZhbDogbnVtYmVyID0gMztcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5jZWxscyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICB0aGlzLmN1cnNvciA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5uZXh0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnByZXBhcmUoKTtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubmV4dCwgdGhpcy5pbnRlcnZhbClcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnNvciA+PSB0aGlzLmNvbmZpZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5KClcclxuICAgICAgICB0aGlzLmN1cnNvcisrO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnNvciA+PSB0aGlzLmNvbmZpZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLm5leHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmVwYXJlKCkge1xyXG4gICAgICAgIHRoaXMuY2VsbHMuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuY29uZmlnc1tpXTtcclxuICAgICAgICAgICAgbGV0IHBwID0gcHJvcChjLnR5cGUpO1xyXG4gICAgICAgICAgICB2W3BwXSA9IGMuZnJvbTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHBsYXkoKSB7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmN1cnNvclxyXG4gICAgICAgIGxldCBjZWxsID0gdGhpcy5jZWxsc1tjXTtcclxuICAgICAgICBsZXQgY29uZmlnID0gdGhpcy5jb25maWdzW2NdO1xyXG4gICAgICAgIGxldCB0OiBjYy5Ud2VlbiA9IG51bGxcclxuICAgICAgICBpZiAoY29uZmlnLnR5cGUgPT0gQW5pbWF0aW9uVHlwZS5TbGlkZSkge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2VsbC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBjZWxsLnNldFBvc2l0aW9uKHBvcy54ICsgY29uZmlnLnNsaWRlQnkueCwgcG9zLnkgKyBjb25maWcuc2xpZGVCeS55KVxyXG4gICAgICAgICAgICB0ID0gY2MudHdlZW4oY2VsbCkudG8oY29uZmlnLmR1ciwgeyBwb3NpdGlvbjogcG9zIH0sIHsgZWFzaW5nOiBFYXNlVHlwZVtjb25maWcuZWFzZVR5cGVdIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnR5cGUgPT0gQW5pbWF0aW9uVHlwZS5GYWRlKSB7XHJcbiAgICAgICAgICAgIHQgPSBjYy50d2VlbihjZWxsKS50byhjb25maWcuZHVyLCB7IFtwcm9wKGNvbmZpZy50eXBlKV06IGNvbmZpZy50byAqIDI1NSB9LCB7IGVhc2luZzogRWFzZVR5cGVbY29uZmlnLmVhc2VUeXBlXSB9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnR5cGUgPT0gQW5pbWF0aW9uVHlwZS5TY2FsZSkge1xyXG4gICAgICAgICAgICB0ID0gY2MudHdlZW4oY2VsbCkudG8oY29uZmlnLmR1ciwgeyBbcHJvcChjb25maWcudHlwZSldOiBjb25maWcudG8gfSwgeyBlYXNpbmc6IEVhc2VUeXBlW2NvbmZpZy5lYXNlVHlwZV0gfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMgPT0gdGhpcy5jZWxscy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHQuZGVsYXkoMi4wKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25GaW5pc2hlcy5mb3JFYWNoKHYgPT4gdi5lbWl0KFt0aGlzXSkpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0LnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==