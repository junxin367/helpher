
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/CollectionInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f75bjPjARDULt4zgs/pFxb', 'CollectionInfo');
// Game/Scripts/Common/CollectionInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionInfo = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CollectionInfo = /** @class */ (function () {
    function CollectionInfo(id) {
        this.id = 0;
        this.name = "";
        this.type = 0;
        this.res = "";
        this.thumbnail = "";
        var data = csv.Collection.get(id);
        if (!data)
            return;
        this.id = data.id;
        this.type = data.type;
        this.name = data.name;
        this.res = data.res;
        this.thumbnail = "Img/decorate/thumbnail/" + data.thumbnail;
    }
    CollectionInfo = __decorate([
        ccclass
    ], CollectionInfo);
    return CollectionInfo;
}());
exports.CollectionInfo = CollectionInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxDb2xsZWN0aW9uSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQU9JLHdCQUFZLEVBQUU7UUFOZCxPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUduQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsNEJBQTBCLElBQUksQ0FBQyxTQUFXLENBQUM7SUFDaEUsQ0FBQztJQWZRLGNBQWM7UUFEMUIsT0FBTztPQUNLLGNBQWMsQ0FpQjFCO0lBQUQscUJBQUM7Q0FqQkQsQUFpQkMsSUFBQTtBQWpCWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSW5mbyB7XHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICB0eXBlOiBudW1iZXIgPSAwO1xyXG4gICAgcmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgdGh1bWJuYWlsOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBjc3YuQ29sbGVjdGlvbi5nZXQoaWQpO1xyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5yZXMgPSBkYXRhLnJlcztcclxuICAgICAgICB0aGlzLnRodW1ibmFpbCA9IGBJbWcvZGVjb3JhdGUvdGh1bWJuYWlsLyR7ZGF0YS50aHVtYm5haWx9YDtcclxuICAgIH1cclxuXHJcbn0iXX0=