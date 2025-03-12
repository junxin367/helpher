
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/shooter/SItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93f07uu37RHT4vqNhQtuSLc', 'SItem');
// framework/extension/shooter/SItem.ts

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
var SGameEntity_1 = require("./SGameEntity");
var ShootManager_1 = require("./ShootManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SItem = /** @class */ (function (_super) {
    __extends(SItem, _super);
    function SItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SItem.prototype.onCollisionEnter = function (other, self) {
        console.log("eat item 11111111111");
        //player 
        this.fsm.changeState(SGameEntity_1.EntityState.Dead);
    };
    // update (dt) {}
    SItem.prototype.onActive = function () {
        ShootManager_1.default.instance.addItem(this.node);
    };
    SItem.prototype.onDelete = function () {
        _super.prototype.onDelete.call(this);
        ShootManager_1.default.instance.removeItem(this.node);
    };
    SItem = __decorate([
        ccclass
    ], SItem);
    return SItem;
}(SGameEntity_1.default));
exports.default = SItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXHNob290ZXJcXFNJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3RDtBQUN4RCwrQ0FBMEM7QUFFcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFLMUM7SUFBbUMseUJBQVU7SUFBN0M7O0lBbUJBLENBQUM7SUFqQkcsZ0NBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBQyxJQUFJO1FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNuQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMseUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLHdCQUFRLEdBQVI7UUFDSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx3QkFBUSxHQUFSO1FBRUksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsc0JBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBbEJnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBbUJ6QjtJQUFELFlBQUM7Q0FuQkQsQUFtQkMsQ0FuQmtDLHFCQUFVLEdBbUI1QztrQkFuQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUVudGl0eSwgeyBFbnRpdHlTdGF0ZSB9IGZyb20gXCIuL1NHYW1lRW50aXR5XCI7XHJcbmltcG9ydCBTaG9vdE1hbmFnZXIgZnJvbSBcIi4vU2hvb3RNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU0l0ZW0gZXh0ZW5kcyBHYW1lRW50aXR5IHtcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLHNlbGYpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlYXQgaXRlbSAxMTExMTExMTExMVwiKVxyXG4gICAgICAgIC8vcGxheWVyIFxyXG4gICAgICAgIHRoaXMuZnNtLmNoYW5nZVN0YXRlKEVudGl0eVN0YXRlLkRlYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbiAgICBvbkFjdGl2ZSAoKSB7XHJcbiAgICAgICAgU2hvb3RNYW5hZ2VyLmluc3RhbmNlLmFkZEl0ZW0odGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIub25EZWxldGUoKTtcclxuICAgICAgICBTaG9vdE1hbmFnZXIuaW5zdGFuY2UucmVtb3ZlSXRlbSh0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==