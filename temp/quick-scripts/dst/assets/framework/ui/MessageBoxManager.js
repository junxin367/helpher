
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/MessageBoxManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc48cBqkERHuJx+iKzOzwOV', 'MessageBoxManager');
// framework/ui/MessageBoxManager.ts

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
exports.MessageBox = void 0;
var ViewManager_1 = require("./ViewManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MessageBoxManager = /** @class */ (function (_super) {
    __extends(MessageBoxManager, _super);
    function MessageBoxManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefab = null;
        return _this;
    }
    MessageBoxManager_1 = MessageBoxManager;
    MessageBoxManager.prototype.onLoad = function () {
        MessageBoxManager_1.instance = this;
    };
    var MessageBoxManager_1;
    MessageBoxManager.instance = null;
    __decorate([
        property(cc.Prefab)
    ], MessageBoxManager.prototype, "prefab", void 0);
    MessageBoxManager = MessageBoxManager_1 = __decorate([
        ccclass
    ], MessageBoxManager);
    return MessageBoxManager;
}(cc.Component));
exports.default = MessageBoxManager;
var MessageBox = /** @class */ (function () {
    function MessageBox() {
    }
    MessageBox.prototype.start = function () {
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    // static UIPath:string = "plugin_boosts/ui/MessageBox"
    MessageBox.show = function (content, title, buttons, extra) {
        title = (title == null || title == undefined) ? "提示" : title;
        return new Promise(function (resolve, reject) {
            ViewManager_1.default.instance.showFromPrefab(MessageBoxManager.instance.prefab, "MessageBox", {
                title: title,
                content: content,
                buttons: buttons,
                extra: extra,
                callback: function (code) {
                    resolve(code);
                }
            });
        });
    };
    MessageBox.raise = function (prefabPath, texts) {
        return new Promise(function (resolve, reject) {
            ViewManager_1.default.instance.show(prefabPath, {
                text: texts,
                callback: function (code) {
                    resolve(code);
                }
            });
        });
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    MessageBox.OK = 1;
    MessageBox.CANCEL = 0;
    MessageBox.OK_CANCEL = 2;
    return MessageBox;
}());
exports.MessageBox = MessageBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcTWVzc2FnZUJveE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUVsQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUkxQztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQVNDO1FBTkcsWUFBTSxHQUFhLElBQUksQ0FBQzs7SUFNNUIsQ0FBQzswQkFUb0IsaUJBQWlCO0lBTWxDLGtDQUFNLEdBQU47UUFDSSxtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7O0lBSE0sMEJBQVEsR0FBcUIsSUFBSSxDQUFDO0lBRnpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ0k7SUFIUCxpQkFBaUI7UUFIckMsT0FBTztPQUdhLGlCQUFpQixDQVNyQztJQUFELHdCQUFDO0NBVEQsQUFTQyxDQVQ4QyxFQUFFLENBQUMsU0FBUyxHQVMxRDtrQkFUb0IsaUJBQWlCO0FBV3RDO0lBQUE7SUE2Q0EsQ0FBQztJQXBDRywwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDBHQUEwRztJQUMxRyx1REFBdUQ7SUFDaEQsZUFBSSxHQUFYLFVBQVksT0FBTyxFQUFFLEtBQU0sRUFBQyxPQUFRLEVBQUMsS0FBTTtRQUV2QyxLQUFLLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxTQUFTLENBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxLQUFLLENBQUE7UUFDM0QsT0FBTyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBQyxNQUFNO1lBQ3RDLHFCQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLFlBQVksRUFBQztnQkFDL0UsS0FBSyxPQUFBO2dCQUNMLE9BQU8sU0FBQTtnQkFDUCxPQUFPLFNBQUE7Z0JBQ1AsS0FBSyxPQUFBO2dCQUNMLFFBQVEsRUFBQyxVQUFBLElBQUk7b0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQixDQUFDO2FBQ0osQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBR00sZ0JBQUssR0FBWixVQUFhLFVBQVUsRUFBQyxLQUFvQjtRQUV4QyxPQUFPLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDdEMscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQztnQkFDakMsSUFBSSxFQUFDLEtBQUs7Z0JBQ1YsUUFBUSxFQUFDLFVBQUEsSUFBSTtvQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ2pCLENBQUM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUF4Q0Qsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDUixhQUFFLEdBQVUsQ0FBQyxDQUFDO0lBQ2QsaUJBQU0sR0FBVSxDQUFDLENBQUM7SUFFbEIsb0JBQVMsR0FBVSxDQUFDLENBQUM7SUFzQ2hDLGlCQUFDO0NBN0NELEFBNkNDLElBQUE7QUE3Q1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld01hbmFnZXIgZnJvbSBcIi4vVmlld01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VCb3hNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50XHJcbntcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVmYWI6Y2MuUHJlZmFiID0gbnVsbDtcclxuICAgIFxyXG4gICAgc3RhdGljIGluc3RhbmNlOk1lc3NhZ2VCb3hNYW5hZ2VyID0gbnVsbDtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgTWVzc2FnZUJveE1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJveCAge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBzdGF0aWMgT0s6bnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBDQU5DRUw6bnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGF0aWMgT0tfQ0FOQ0VMOm51bWJlciA9IDI7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBzdGF0aWMgVUlQYXRoOnN0cmluZyA9IFwicGx1Z2luX2Jvb3N0cy91aS9NZXNzYWdlQm94XCJcclxuICAgIHN0YXRpYyBzaG93KGNvbnRlbnQgLHRpdGxlPyxidXR0b25zPyxleHRyYT8pOlByb21pc2U8bnVtYmVyPlxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlID0gKHRpdGxlID09IG51bGwgfHwgdGl0bGUgPT0gdW5kZWZpbmVkICk/IFwi5o+Q56S6XCIgOnRpdGxlXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0YW5jZS5zaG93RnJvbVByZWZhYihNZXNzYWdlQm94TWFuYWdlci5pbnN0YW5jZS5wcmVmYWIsXCJNZXNzYWdlQm94XCIse1xyXG4gICAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucyxcclxuICAgICAgICAgICAgICAgIGV4dHJhLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6Y29kZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29kZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgc3RhdGljIHJhaXNlKHByZWZhYlBhdGgsdGV4dHM6c3RyaW5nW10gfCBhbnkpOlByb21pc2U8bnVtYmVyPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdGFuY2Uuc2hvdyhwcmVmYWJQYXRoLHtcclxuICAgICAgICAgICAgICAgIHRleHQ6dGV4dHMsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazpjb2RlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=