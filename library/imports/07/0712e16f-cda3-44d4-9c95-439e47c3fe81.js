"use strict";
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