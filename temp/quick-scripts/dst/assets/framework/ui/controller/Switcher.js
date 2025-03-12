
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/controller/Switcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd228eRfHv1KB4qxEM9MtnXC', 'Switcher');
// framework/ui/controller/Switcher.ts

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
var Signal_1 = require("../../core/Signal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode, inspector = _a.inspector;
var Switcher = /** @class */ (function (_super) {
    __extends(Switcher, _super);
    function Switcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = null;
        _this.onValueChanged = new Signal_1.default();
        _this._childrenCount = 0;
        _this._currentIndex = 0;
        _this.interactable = false;
        _this._currentChild = null;
        _this.btn = null;
        return _this;
    }
    Object.defineProperty(Switcher.prototype, "currentIndex", {
        get: function () {
            return this._currentIndex;
        },
        set: function (value) {
            value = cc.misc.clampf(value, 0, this.children.length - 1);
            value = Math.floor(value);
            this._select(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Switcher.prototype, "index", {
        get: function () {
            return this.currentIndex;
        },
        set: function (index) {
            if (!this.children) {
                this._currentIndex = index;
            }
            if (this.currentIndex != index) {
                this._select(index);
                this.onValueChanged.fire(index);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Switcher.prototype, "resizeToCurrent", {
        set: function (v) {
            if (v) {
                this.node.setContentSize(this._currentChild.getContentSize());
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Switcher.prototype, "_checkInteractive", {
        set: function (v) {
            if (v) {
                this.btn = this.getComponent(cc.Button);
                if (this.btn == null) {
                    this.btn = this.addComponent(cc.Button);
                    this.btn.target = this._currentChild;
                    var evt = new cc.Component.EventHandler();
                    evt.target = this.node;
                    evt.component = "Switcher";
                    evt.handler = "switch";
                    this.btn.clickEvents.push(evt);
                }
            }
            else {
                if (this.btn) {
                    this.btn.destroy();
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Switcher.prototype.onLoad = function () {
        // this._currentIndex = this.children.indexOf(this.currentActiveNode);
    };
    Switcher.prototype.resetInEditor = function () {
    };
    Switcher.prototype.start = function () {
        this.children = this.node.children;
        this._childrenCount = this.children.length;
        this._select(this.currentIndex);
        // this.resizeToCurrent = true;
        this._checkInteractive = this.interactable;
    };
    Switcher.prototype._select = function (index) {
        this._currentIndex = index;
        this._currentChild = this.children[index];
        for (var i = 0; i < this.children.length; i++) {
            var element = this.children[i];
            if (i == index) {
                element.active = true;
            }
            else {
                element.active = false;
            }
        }
    };
    Switcher.prototype.switch = function () {
        this.index = (this.currentIndex + 1) % (this._childrenCount);
    };
    __decorate([
        property()
    ], Switcher.prototype, "_childrenCount", void 0);
    __decorate([
        property()
    ], Switcher.prototype, "_currentIndex", void 0);
    __decorate([
        property({ displayName: "交互" })
    ], Switcher.prototype, "interactable", void 0);
    __decorate([
        property({ displayName: "当前值" })
    ], Switcher.prototype, "currentIndex", null);
    __decorate([
        property(cc.Node)
    ], Switcher.prototype, "_currentChild", void 0);
    Switcher = __decorate([
        ccclass,
        menu("Controller/Switcher"),
        executeInEditMode(),
        inspector("packages://qcontroller/inspector/switcher.js")
    ], Switcher);
    return Switcher;
}(cc.Component));
exports.default = Switcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcY29udHJvbGxlclxcU3dpdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBRWpDLElBQUEsS0FBNEQsRUFBRSxDQUFDLFVBQVUsRUFBdkUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsU0FBUyxlQUFrQixDQUFDO0FBTWhGO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNEdDO1FBM0dVLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBVyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUl0QyxvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUduQixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUlsQyxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQVk5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQWdCOUIsU0FBRyxHQUFjLElBQUksQ0FBQzs7SUFrRTFCLENBQUM7SUEzRkcsc0JBQVcsa0NBQVk7YUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQVVELFVBQXdCLEtBQWE7WUFDakMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0QsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDOzs7T0FkQTtJQUVELHNCQUFJLDJCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQTJFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzlCO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEtBQUssRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkM7UUFDTCxDQUFDOzs7T0FuRkE7SUFhRCxzQkFBVyxxQ0FBZTthQUExQixVQUEyQixDQUFDO1lBQ3hCLElBQUksQ0FBQyxFQUFFO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQzthQUNqRTtRQUNMLENBQUM7OztPQUFBO0lBSUQsc0JBQUksdUNBQWlCO2FBQXJCLFVBQXNCLENBQUM7WUFDbkIsSUFBSSxDQUFDLEVBQUU7Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTtvQkFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUMxQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO29CQUMzQixHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQTtvQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNsQzthQUNKO2lCQUFNO2dCQUNILElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDVixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN0QjthQUNKO1FBQ0wsQ0FBQzs7O09BQUE7SUFHRCx5QkFBTSxHQUFOO1FBRUksc0VBQXNFO0lBQzFFLENBQUM7SUFFRCxnQ0FBYSxHQUFiO0lBRUEsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEMsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQzFCO1NBQ0o7SUFDTCxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUF6RkQ7UUFEQyxRQUFRLEVBQUU7b0RBQ2dCO0lBRzNCO1FBREMsUUFBUSxFQUFFO21EQUN1QjtJQUlsQztRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztrREFDRjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQztnREFHaEM7SUFPRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNZO0lBMUJiLFFBQVE7UUFKNUIsT0FBTztRQUNQLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUMzQixpQkFBaUIsRUFBRTtRQUNuQixTQUFTLENBQUMsOENBQThDLENBQUM7T0FDckMsUUFBUSxDQTRHNUI7SUFBRCxlQUFDO0NBNUdELEFBNEdDLENBNUdxQyxFQUFFLENBQUMsU0FBUyxHQTRHakQ7a0JBNUdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZ25hbCBmcm9tIFwiLi4vLi4vY29yZS9TaWduYWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUsIGV4ZWN1dGVJbkVkaXRNb2RlLCBpbnNwZWN0b3IgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5AbWVudShcIkNvbnRyb2xsZXIvU3dpdGNoZXJcIilcclxuQGV4ZWN1dGVJbkVkaXRNb2RlKClcclxuQGluc3BlY3RvcihcInBhY2thZ2VzOi8vcWNvbnRyb2xsZXIvaW5zcGVjdG9yL3N3aXRjaGVyLmpzXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjaGlsZHJlbjogY2MuTm9kZVtdID0gbnVsbDtcclxuXHJcbiAgICBvblZhbHVlQ2hhbmdlZDogU2lnbmFsID0gbmV3IFNpZ25hbCgpO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgX2NoaWxkcmVuQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHByaXZhdGUgX2N1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5Lqk5LqSXCIgfSlcclxuICAgIGludGVyYWN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuW9k+WJjeWAvFwiIH0pXHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIF9jdXJyZW50Q2hpbGQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjYy5taXNjLmNsYW1wZih2YWx1ZSwgMCwgdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxKTtcclxuICAgICAgICB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXQgcmVzaXplVG9DdXJyZW50KHYpIHtcclxuICAgICAgICBpZiAodikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUodGhpcy5fY3VycmVudENoaWxkLmdldENvbnRlbnRTaXplKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidG46IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgc2V0IF9jaGVja0ludGVyYWN0aXZlKHYpIHtcclxuICAgICAgICBpZiAodikge1xyXG4gICAgICAgICAgICB0aGlzLmJ0biA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ0biA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0biA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bi50YXJnZXQgPSB0aGlzLl9jdXJyZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXZ0ID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIGV2dC50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBldnQuY29tcG9uZW50ID0gXCJTd2l0Y2hlclwiO1xyXG4gICAgICAgICAgICAgICAgZXZ0LmhhbmRsZXIgPSBcInN3aXRjaFwiXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bi5jbGlja0V2ZW50cy5wdXNoKGV2dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICAvLyB0aGlzLl9jdXJyZW50SW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YodGhpcy5jdXJyZW50QWN0aXZlTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbkVkaXRvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbkNvdW50ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0KHRoaXMuY3VycmVudEluZGV4KTtcclxuICAgICAgICAvLyB0aGlzLnJlc2l6ZVRvQ3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnRlcmFjdGl2ZSA9IHRoaXMuaW50ZXJhY3RhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZWxlY3QoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRDaGlsZCA9IHRoaXMuY2hpbGRyZW5baW5kZXhdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAodGhpcy5jdXJyZW50SW5kZXggKyAxKSAlICh0aGlzLl9jaGlsZHJlbkNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ICE9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdChpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQuZmlyZShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==