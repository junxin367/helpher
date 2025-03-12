
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/buffs/EmptyBuff.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ea85M78IFKBKPCSgHygUEE', 'EmptyBuff');
// framework/extension/buffs/EmptyBuff.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Buff_1 = require("./Buff");
var EmptyBuff = /** @class */ (function (_super) {
    __extends(EmptyBuff, _super);
    function EmptyBuff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyBuff.prototype.onEnabled = function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
    };
    EmptyBuff.prototype.onDisabled = function () {
    };
    EmptyBuff.prototype.onTimeLeftChanged = function () {
    };
    EmptyBuff.prototype.save = function () {
    };
    EmptyBuff.prototype.load = function (offlineSec) {
    };
    return EmptyBuff;
}(Buff_1.default));
exports.default = EmptyBuff;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXGJ1ZmZzXFxFbXB0eUJ1ZmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBRTFCO0lBQXVDLDZCQUFJO0lBQTNDOztJQWNBLENBQUM7SUFiRyw2QkFBUyxHQUFUO1FBQVUsV0FBVzthQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7WUFBWCxzQkFBVzs7SUFDckIsQ0FBQztJQUNELDhCQUFVLEdBQVY7SUFDQSxDQUFDO0lBQ0QscUNBQWlCLEdBQWpCO0lBQ0EsQ0FBQztJQUNELHdCQUFJLEdBQUo7SUFDQSxDQUFDO0lBQ0Qsd0JBQUksR0FBSixVQUFLLFVBQWU7SUFDcEIsQ0FBQztJQUlMLGdCQUFDO0FBQUQsQ0FkQSxBQWNDLENBZHNDLGNBQUksR0FjMUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVmZiBmcm9tIFwiLi9CdWZmXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbXB0eUJ1ZmYgZXh0ZW5kcyBCdWZmIHtcclxuICAgIG9uRW5hYmxlZCguLi5hOiBhbnlbXSkge1xyXG4gICAgfVxyXG4gICAgb25EaXNhYmxlZCgpIHtcclxuICAgIH1cclxuICAgIG9uVGltZUxlZnRDaGFuZ2VkKCkge1xyXG4gICAgfVxyXG4gICAgc2F2ZSgpIHtcclxuICAgIH1cclxuICAgIGxvYWQob2ZmbGluZVNlYzogYW55KSB7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXX0=