
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/game/LevelSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7942O9SJ1JFpcT0/D7YiFO', 'LevelSelector');
// framework/ui/game/LevelSelector.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, help = _a.help;
var LevelSelector = /** @class */ (function (_super) {
    __extends(LevelSelector, _super);
    function LevelSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageview = null;
        _this.template = null;
        _this.onSelectLevel = new cc.Component.EventHandler();
        _this.onRefreshItem = new cc.Component.EventHandler();
        _this.index = 0;
        _this.max = 9;
        _this.itemCountPerPage = 0;
        _this.pages = [];
        _this.currentLevel = 1;
        _this.autoScrollToCurrentLevel = true;
        return _this;
        // update (dt) {}
    }
    LevelSelector.prototype.selectLevel = function (event, msg) {
        if (this.onSelectLevel)
            this.onSelectLevel.emit([event.target, Number(event.target.name)]);
        else
            console.warn("LevelSelector: onSelectLevel callback is nil");
    };
    LevelSelector.prototype.onLoad = function () {
        this.pages.splice(0, this.pages.length);
        this.itemCountPerPage = this.template.childrenCount;
        var pageCount = Math.floor(this.max / this.itemCountPerPage);
        var mod = this.max % this.itemCountPerPage;
        if (mod > 0) {
            pageCount = pageCount + 1;
        }
        for (var i = 0; i < pageCount - 1; i++) {
            var page = cc.instantiate(this.template);
            this.pageview.addPage(page);
            this.pages.push(page);
        }
        this.pages.push(this.template);
        for (var pageIdx = 0; pageIdx < pageCount; pageIdx++) {
            var page = this.pages[pageIdx];
            for (var itemIdx = 0; itemIdx < page.childrenCount; itemIdx++) {
                var item = page.children[itemIdx];
                var label = item.getChildByName("label");
                var level = pageIdx * this.itemCountPerPage + Number(itemIdx) + 1;
                if (level > this.max) {
                    item.active = false;
                }
                item.name = level + "";
                label.getComponent(cc.Label).string = item.name;
            }
        }
    };
    LevelSelector.prototype.refreshItem = function (item, level) {
        var lv = this.currentLevel;
        if (level > lv) {
            item.opacity = 100;
            item.getComponent(cc.Button).enabled = false;
        }
        else {
            item.opacity = 255;
            item.getComponent(cc.Button).enabled = true;
        }
    };
    LevelSelector.prototype.refresh = function () {
        console.log("LevelSelctor: refresh");
        for (var i = 0; i < this.pages.length; i++) {
            var page = this.pages[i];
            for (var itemIdx = 0; itemIdx < page.childrenCount; itemIdx++) {
                var item = page.children[itemIdx];
                var level = i * this.itemCountPerPage + Number(itemIdx) + 1;
                this.refreshItem(item, level);
                this.onRefreshItem.emit([item, level]);
            }
        }
        if (this.autoScrollToCurrentLevel)
            this.scrollToCurrentLevel();
    };
    LevelSelector.prototype.start = function () {
    };
    LevelSelector.prototype.scrollToCurrentLevel = function () {
        var lv = this.currentLevel;
        var curPage = Math.floor(lv / this.itemCountPerPage);
        var mod = lv % this.itemCountPerPage;
        if (mod == 0) {
            curPage = curPage - 1;
        }
        this.pageview.scrollToPage(curPage, 0.3);
    };
    LevelSelector.prototype.nextPage = function () {
        this.pageview.scrollToPage(this.pageview.getCurrentPageIndex() + 1, 0.3);
    };
    LevelSelector.prototype.prevPage = function () {
        this.pageview.scrollToPage(this.pageview.getCurrentPageIndex() - 1, 0.3);
    };
    __decorate([
        property(cc.PageView)
    ], LevelSelector.prototype, "pageview", void 0);
    __decorate([
        property(cc.Node)
    ], LevelSelector.prototype, "template", void 0);
    __decorate([
        property(cc.Component.EventHandler)
    ], LevelSelector.prototype, "onSelectLevel", void 0);
    __decorate([
        property(cc.Component.EventHandler)
    ], LevelSelector.prototype, "onRefreshItem", void 0);
    __decorate([
        property
    ], LevelSelector.prototype, "index", void 0);
    __decorate([
        property
    ], LevelSelector.prototype, "max", void 0);
    LevelSelector = __decorate([
        ccclass
    ], LevelSelector);
    return LevelSelector;
}(cc.Component));
exports.default = LevelSelector;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcZ2FtZVxcTGV2ZWxTZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQTJCLEVBQUUsQ0FBQyxVQUFVLEVBQXZDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFDLElBQUksVUFBaUIsQ0FBQztBQUcvQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXFJQztRQWxJRyxjQUFRLEdBQWdCLElBQUksQ0FBQTtRQUc1QixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBR3hCLG1CQUFhLEdBQTZCLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUcxRSxtQkFBYSxHQUE2QixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHMUUsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBRWhCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUU3QixXQUFLLEdBQWEsRUFBRSxDQUFDO1FBRXJCLGtCQUFZLEdBQVUsQ0FBQyxDQUFDO1FBVXhCLDhCQUF3QixHQUFXLElBQUksQ0FBQzs7UUFrR3hDLGlCQUFpQjtJQUNyQixDQUFDO0lBM0dHLG1DQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUMsR0FBRztRQUVqQixJQUFHLElBQUksQ0FBQyxhQUFhO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7O1lBRWpFLE9BQU8sQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBSUQsOEJBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFB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LEVBQUUsR0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUE7SUFDekUsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUE3SEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzttREFDTTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO3dEQUNzQztJQUcxRTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQzt3REFDc0M7SUFHMUU7UUFEQyxRQUFRO2dEQUNTO0lBR2xCO1FBREMsUUFBUTs4Q0FDTztJQWxCQyxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcUlqQztJQUFELG9CQUFDO0NBcklELEFBcUlDLENBckkwQyxFQUFFLENBQUMsU0FBUyxHQXFJdEQ7a0JBcklvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eSxoZWxwfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFNlbGVjdG9yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUGFnZVZpZXcpXHJcbiAgICBwYWdldmlldyA6Y2MuUGFnZVZpZXcgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0ZW1wbGF0ZTpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcilcclxuICAgIG9uU2VsZWN0TGV2ZWw6Y2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIpXHJcbiAgICBvblJlZnJlc2hJdGVtOmNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaW5kZXggOm51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBtYXg6IG51bWJlciA9IDk7XHJcblxyXG4gICAgaXRlbUNvdW50UGVyUGFnZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwYWdlczpjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBjdXJyZW50TGV2ZWw6bnVtYmVyID0gMTtcclxuXHJcbiAgICBzZWxlY3RMZXZlbChldmVudCxtc2cpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5vblNlbGVjdExldmVsKVxyXG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0TGV2ZWwuZW1pdChbZXZlbnQudGFyZ2V0LE51bWJlcihldmVudC50YXJnZXQubmFtZSldKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTGV2ZWxTZWxlY3Rvcjogb25TZWxlY3RMZXZlbCBjYWxsYmFjayBpcyBuaWxcIilcclxuICAgIH1cclxuXHJcbiAgICBhdXRvU2Nyb2xsVG9DdXJyZW50TGV2ZWw6Ym9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25Mb2FkKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBhZ2VzLnNwbGljZSgwLHRoaXMucGFnZXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLml0ZW1Db3VudFBlclBhZ2UgPSB0aGlzLnRlbXBsYXRlLmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgbGV0IHBhZ2VDb3VudCA9IE1hdGguZmxvb3IodGhpcy5tYXgvdGhpcy5pdGVtQ291bnRQZXJQYWdlKTtcclxuICAgICAgICBsZXQgbW9kID0gdGhpcy5tYXgldGhpcy5pdGVtQ291bnRQZXJQYWdlIFxyXG4gICAgICAgIGlmIChtb2QgPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFnZUNvdW50ID0gcGFnZUNvdW50ICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgO2kgPCBwYWdlQ291bnQgLTEgO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy50ZW1wbGF0ZSlcclxuICAgICAgICAgICAgdGhpcy5wYWdldmlldy5hZGRQYWdlKHBhZ2UpOyBcclxuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VzLnB1c2godGhpcy50ZW1wbGF0ZSk7XHJcbiAgICAgICAgZm9yICh2YXIgcGFnZUlkeCA9IDAgO3BhZ2VJZHggPCBwYWdlQ291bnQ7IHBhZ2VJZHgrKyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcGFnZSA9IHRoaXMucGFnZXNbcGFnZUlkeF07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW1JZHggPSAwOyBpdGVtSWR4IDwgcGFnZS5jaGlsZHJlbkNvdW50O2l0ZW1JZHggKysgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHBhZ2UuY2hpbGRyZW5baXRlbUlkeF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBpdGVtLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWwgPSBwYWdlSWR4ICogdGhpcy5pdGVtQ291bnRQZXJQYWdlICsgTnVtYmVyKGl0ZW1JZHgpICsgMSA7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA+IHRoaXMubWF4KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBsZXZlbCArXCJcIjtcclxuICAgICAgICAgICAgICAgIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hJdGVtKGl0ZW0sbGV2ZWwpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGx2ID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgaWYgKGxldmVsID4gbHYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV2ZWxTZWxjdG9yOiByZWZyZXNoXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGk8IHRoaXMucGFnZXMubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlID0gdGhpcy5wYWdlc1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbUlkeCA9IDA7IGl0ZW1JZHggPCBwYWdlLmNoaWxkcmVuQ291bnQ7aXRlbUlkeCArKyApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gcGFnZS5jaGlsZHJlbltpdGVtSWR4XTtcclxuICAgICAgICAgICAgICAgIGxldCBsZXZlbCA9IGkgKiB0aGlzLml0ZW1Db3VudFBlclBhZ2UgKyBOdW1iZXIoaXRlbUlkeCkgKyAxIDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEl0ZW0oaXRlbSxsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUmVmcmVzaEl0ZW0uZW1pdChbaXRlbSxsZXZlbF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5hdXRvU2Nyb2xsVG9DdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9DdXJyZW50TGV2ZWwoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUb0N1cnJlbnRMZXZlbCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGx2ID0gdGhpcy5jdXJyZW50TGV2ZWw7XHJcbiAgICAgICAgbGV0IGN1clBhZ2UgPSBNYXRoLmZsb29yKGx2L3RoaXMuaXRlbUNvdW50UGVyUGFnZSk7XHJcbiAgICAgICAgbGV0IG1vZCA9IGx2JXRoaXMuaXRlbUNvdW50UGVyUGFnZSBcclxuICAgICAgICBpZiAobW9kID09ICAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY3VyUGFnZSA9IGN1clBhZ2UgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2V2aWV3LnNjcm9sbFRvUGFnZShjdXJQYWdlLDAuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFBhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGFnZXZpZXcuc2Nyb2xsVG9QYWdlKHRoaXMucGFnZXZpZXcuZ2V0Q3VycmVudFBhZ2VJbmRleCgpKzEsMC4zKVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZQYWdlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBhZ2V2aWV3LnNjcm9sbFRvUGFnZSh0aGlzLnBhZ2V2aWV3LmdldEN1cnJlbnRQYWdlSW5kZXgoKS0xLDAuMylcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19