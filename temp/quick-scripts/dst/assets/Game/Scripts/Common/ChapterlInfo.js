
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/ChapterlInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31f41YK4edMrqza0HFHytb8', 'ChapterlInfo');
// Game/Scripts/Common/ChapterlInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapterlInfo = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ChapterlInfo = /** @class */ (function () {
    function ChapterlInfo(id) {
        this.id = 0;
        this.name = "";
        this.chapter = "";
        this.title = "";
        var data = csv.Chapter.get(id);
        if (!data)
            return;
        this.id = data.id;
        this.name = data.name;
        var str = data.name.split(" ");
        this.chapter = str[0];
        this.title = str[1];
    }
    ChapterlInfo = __decorate([
        ccclass
    ], ChapterlInfo);
    return ChapterlInfo;
}());
exports.ChapterlInfo = ChapterlInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxDaGFwdGVybEluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFNSSxzQkFBWSxFQUFFO1FBTGQsT0FBRSxHQUFVLENBQUMsQ0FBQztRQUNkLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR2YsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBRyxDQUFDLElBQUk7WUFBQyxPQUFPO1FBQ2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQWRTLFlBQVk7UUFEekIsT0FBTztPQUNNLFlBQVksQ0FnQnpCO0lBQUQsbUJBQUM7Q0FoQkQsQUFnQkMsSUFBQTtBQWhCYSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCAgY2xhc3MgQ2hhcHRlcmxJbmZvICB7XG4gICAgaWQ6bnVtYmVyID0gMDtcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIGNoYXB0ZXI6IHN0cmluZyA9IFwiXCI7XG4gICAgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZCl7XG4gICAgICAgIGxldCBkYXRhID0gY3N2LkNoYXB0ZXIuZ2V0KGlkKTtcbiAgICAgICAgaWYoIWRhdGEpcmV0dXJuO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5uYW1lID1kYXRhLm5hbWU7XG4gICAgICAgIGxldCBzdHIgPSBkYXRhLm5hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICB0aGlzLmNoYXB0ZXIgPSBzdHJbMF07XG4gICAgICAgIHRoaXMudGl0bGUgPSBzdHJbMV07XG4gICAgfVxuXG59Il19