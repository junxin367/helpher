
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/extension/SDKInterafce.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0712eFvzaNE1JyVQ55Hw/6B', 'SDKInterafce');
// framework/extension/SDKInterafce.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDKBase = void 0;
// export interface SystemInfo {
//     SDKVersion: string,
//     batteryLevel: number,
//     benchmarkLevel: number,
//     brand: string,
//     devicePixelRatio: number
//     fontSizeSetting: number,
//     language: string,
//     model: string,//"iPhone 6/7/8 Plus"
//     pixelRatio: number
//     platform: string;//"devtools"
//     safeArea: any;//{ right, bottom, left, top, width }
//     screenHeight: number;
//     screenWidth: number;
//     statusBarHeight: number;
//     system: string;//"iOS 10.0.1"
//     version: string;//"7.0.4"
//     windowHeight: number
//     windowWidth: number;
// }
var SDKBase = /** @class */ (function () {
    function SDKBase() {
        SDKBase.instance = this;
    }
    SDKBase.initConfig = function (cf) {
        this._gameConf = cf;
    };
    Object.defineProperty(SDKBase, "gameConfig", {
        get: function () {
            return SDKBase._gameConf;
        },
        enumerable: false,
        configurable: true
    });
    SDKBase._gameConf = null;
    SDKBase.instance = null;
    return SDKBase;
}());
exports.SDKBase = SDKBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxleHRlbnNpb25cXFNES0ludGVyYWZjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxnQ0FBZ0M7QUFDaEMsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0Isd0JBQXdCO0FBQ3hCLDBDQUEwQztBQUMxQyx5QkFBeUI7QUFDekIsb0NBQW9DO0FBQ3BDLDBEQUEwRDtBQUMxRCw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCLCtCQUErQjtBQUMvQixvQ0FBb0M7QUFDcEMsZ0NBQWdDO0FBQ2hDLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsSUFBSTtBQUVKO0lBR0k7UUFDSSxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBQ00sa0JBQVUsR0FBakIsVUFBa0IsRUFBZTtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0Qsc0JBQVcscUJBQVU7YUFBckI7WUFDSSxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFWTSxpQkFBUyxHQUFnQixJQUFJLENBQUM7SUFDOUIsZ0JBQVEsR0FBWSxJQUFJLENBQUM7SUFVcEMsY0FBQztDQVpELEFBWUMsSUFBQTtBQVpZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJR2FtZUNvbmZpZyB7XG4gICAgZ2FtZUlkOiBzdHJpbmc7XG4gICAgYXBwSWQ6IHN0cmluZyxcbiAgICBiYW5uZXJfYWRfaWQ6IHN0cmluZ1xuICAgIGJhbm5lcl9hZF9pZDE/OiBzdHJpbmdcbiAgICB2aWRlb19hZF9pZDogc3RyaW5nXG4gICAgaW50ZXJzdGl0aWFsX2FkX2lkOiBzdHJpbmdcbiAgICBwb3J0YWxfaWQ/OiBzdHJpbmdcbiAgICB0bXBsSWRzPzogc3RyaW5nW11cbiAgICB2ZXJzaW9uPzogc3RyaW5nXG4gICAgY2xvdWRVcmw/OiBzdHJpbmc7XG59XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgU3lzdGVtSW5mbyB7XG4vLyAgICAgU0RLVmVyc2lvbjogc3RyaW5nLFxuLy8gICAgIGJhdHRlcnlMZXZlbDogbnVtYmVyLFxuLy8gICAgIGJlbmNobWFya0xldmVsOiBudW1iZXIsXG4vLyAgICAgYnJhbmQ6IHN0cmluZyxcbi8vICAgICBkZXZpY2VQaXhlbFJhdGlvOiBudW1iZXJcbi8vICAgICBmb250U2l6ZVNldHRpbmc6IG51bWJlcixcbi8vICAgICBsYW5ndWFnZTogc3RyaW5nLFxuLy8gICAgIG1vZGVsOiBzdHJpbmcsLy9cImlQaG9uZSA2LzcvOCBQbHVzXCJcbi8vICAgICBwaXhlbFJhdGlvOiBudW1iZXJcbi8vICAgICBwbGF0Zm9ybTogc3RyaW5nOy8vXCJkZXZ0b29sc1wiXG4vLyAgICAgc2FmZUFyZWE6IGFueTsvL3sgcmlnaHQsIGJvdHRvbSwgbGVmdCwgdG9wLCB3aWR0aCB9XG4vLyAgICAgc2NyZWVuSGVpZ2h0OiBudW1iZXI7XG4vLyAgICAgc2NyZWVuV2lkdGg6IG51bWJlcjtcbi8vICAgICBzdGF0dXNCYXJIZWlnaHQ6IG51bWJlcjtcbi8vICAgICBzeXN0ZW06IHN0cmluZzsvL1wiaU9TIDEwLjAuMVwiXG4vLyAgICAgdmVyc2lvbjogc3RyaW5nOy8vXCI3LjAuNFwiXG4vLyAgICAgd2luZG93SGVpZ2h0OiBudW1iZXJcbi8vICAgICB3aW5kb3dXaWR0aDogbnVtYmVyO1xuLy8gfVxuXG5leHBvcnQgY2xhc3MgU0RLQmFzZSB7XG4gICAgc3RhdGljIF9nYW1lQ29uZjogSUdhbWVDb25maWcgPSBudWxsO1xuICAgIHN0YXRpYyBpbnN0YW5jZTogU0RLQmFzZSA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFNES0Jhc2UuaW5zdGFuY2UgPSB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgaW5pdENvbmZpZyhjZjogSUdhbWVDb25maWcpIHtcbiAgICAgICAgdGhpcy5fZ2FtZUNvbmYgPSBjZjtcbiAgICB9XG4gICAgc3RhdGljIGdldCBnYW1lQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4gU0RLQmFzZS5fZ2FtZUNvbmY7XG4gICAgfVxufVxuIl19