
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/controller/HpBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ec641civBJM6w3EDr17oq7', 'HpBar');
// framework/ui/controller/HpBar.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode;
var HpBar = /** @class */ (function (_super) {
    __extends(HpBar, _super);
    function HpBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maxHp = 0;
        _this.hpLayout = null;
        _this._hp = 0;
        return _this;
    }
    Object.defineProperty(HpBar.prototype, "maxHp", {
        get: function () {
            return this._maxHp;
        },
        set: function (value) {
            this._maxHp = value;
            this.hpLayout = this.getComponent(cc.Layout);
            var template = this.hpLayout.node.children[0];
            if (this.hpLayout.node.children.length > 1) {
                this.hpLayout.node.removeAllChildren();
                this.hpLayout.node.addChild(template);
            }
            this.hpLayout.showlist(this.createHpNodes.bind(this), range(0, this._maxHp - 1, 1));
            this.updateHp();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HpBar.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (value) {
            this._hp = value;
            this.updateHp();
        },
        enumerable: false,
        configurable: true
    });
    HpBar.prototype.get = function (i) {
        return this.hpLayout.node.children[i];
    };
    HpBar.prototype.cur = function () {
        var node = this.get(this.hp);
        return node.children[0];
    };
    HpBar.prototype.onLoad = function () {
        this.hpLayout = this.getComponent(cc.Layout);
    };
    HpBar.prototype.createHpNodes = function (node, data, i) {
        node.children[0].active = true;
    };
    HpBar.prototype.updateHp = function () {
        var _this = this;
        var a = this.hpLayout.node.children.forEach(function (v, i) {
            v.children[0].active = i < _this.hp + 1;
        });
    };
    HpBar.prototype.start = function () {
    };
    HpBar.prototype.onDisable = function () {
    };
    __decorate([
        property()
    ], HpBar.prototype, "_maxHp", void 0);
    __decorate([
        property()
    ], HpBar.prototype, "maxHp", null);
    __decorate([
        property
    ], HpBar.prototype, "_hp", void 0);
    __decorate([
        property
    ], HpBar.prototype, "hp", null);
    HpBar = __decorate([
        ccclass,
        executeInEditMode(),
        menu("Controller/HpBar")
    ], HpBar);
    return HpBar;
}(cc.Component));
exports.default = HpBar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcY29udHJvbGxlclxcSHBCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFpRCxFQUFFLENBQUMsVUFBVSxFQUE1RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFLckU7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE4REM7UUEzRFcsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBa0IzQixTQUFHLEdBQVcsQ0FBQyxDQUFDOztJQXdDNUIsQ0FBQztJQXhERyxzQkFBVyx3QkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBQ0QsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekM7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbkYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7OztPQVpBO0lBZ0JELHNCQUFXLHFCQUFFO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzthQUNELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFbkIsQ0FBQzs7O09BTEE7SUFPRCxtQkFBRyxHQUFILFVBQUksQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxtQkFBRyxHQUFIO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLElBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUM3QyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQscUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx5QkFBUyxHQUFUO0lBRUEsQ0FBQztJQTFERDtRQURDLFFBQVEsRUFBRTt5Q0FDZ0I7SUFHM0I7UUFEQyxRQUFRLEVBQUU7c0NBR1Y7SUFjRDtRQURDLFFBQVE7c0NBQ2U7SUFFeEI7UUFEQyxRQUFRO21DQUdSO0lBMUJnQixLQUFLO1FBSHpCLE9BQU87UUFDUCxpQkFBaUIsRUFBRTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUM7T0FDSixLQUFLLENBOER6QjtJQUFELFlBQUM7Q0E5REQsQUE4REMsQ0E5RGtDLEVBQUUsQ0FBQyxTQUFTLEdBOEQ5QztrQkE5RG9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbkBleGVjdXRlSW5FZGl0TW9kZSgpXHJcbkBtZW51KFwiQ29udHJvbGxlci9IcEJhclwiKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIcEJhciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHByaXZhdGUgX21heEhwOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBocExheW91dDogY2MuTGF5b3V0ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwdWJsaWMgZ2V0IG1heEhwKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heEhwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBtYXhIcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWF4SHAgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmhwTGF5b3V0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmhwTGF5b3V0Lm5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKHRoaXMuaHBMYXlvdXQubm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHBMYXlvdXQubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmhwTGF5b3V0Lm5vZGUuYWRkQ2hpbGQodGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ocExheW91dC5zaG93bGlzdCh0aGlzLmNyZWF0ZUhwTm9kZXMuYmluZCh0aGlzKSwgcmFuZ2UoMCwgdGhpcy5fbWF4SHAgLSAxLCAxKSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUhwKCk7XHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX2hwOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwdWJsaWMgZ2V0IGhwKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBocCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faHAgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhwKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ocExheW91dC5ub2RlLmNoaWxkcmVuW2ldXHJcbiAgICB9XHJcblxyXG4gICAgY3VyKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXQodGhpcy5ocClcclxuICAgICAgICByZXR1cm4gbm9kZS5jaGlsZHJlblswXTtcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmhwTGF5b3V0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVIcE5vZGVzKG5vZGU6IGNjLk5vZGUsIGRhdGEsIGkpIHtcclxuICAgICAgICBub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSHAoKSB7XHJcbiAgICAgICAgbGV0IGEgPSB0aGlzLmhwTGF5b3V0Lm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICB2LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGkgPCB0aGlzLmhwICsgMTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcblxyXG4gICAgfVxyXG59Il19