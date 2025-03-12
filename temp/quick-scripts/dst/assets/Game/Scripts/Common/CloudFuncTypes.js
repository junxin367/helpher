
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/CloudFuncTypes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e295azR1O1IK5Mu54R6GBtP', 'CloudFuncTypes');
// Game/Scripts/Common/CloudFuncTypes.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudFuncType = void 0;
var wegame_1 = require("../sdk/wegame");
var CloudFuncType;
(function (CloudFuncType) {
    /**banner位移 */
    CloudFuncType[CloudFuncType["Banner_move"] = 1] = "Banner_move";
    /**体力连胜礼包 */
    CloudFuncType[CloudFuncType["Energey_LinkWin"] = 2] = "Energey_LinkWin";
    CloudFuncType[CloudFuncType["Energy_Package"] = 3] = "Energy_Package";
    //游戏内显示、隐藏banner
    CloudFuncType[CloudFuncType["BannerInGame"] = 4] = "BannerInGame";
    //假分享失败控制
    CloudFuncType[CloudFuncType["ShareFail"] = 5] = "ShareFail";
    //Banner刷新 
    CloudFuncType[CloudFuncType["Banner_Refresh"] = 6] = "Banner_Refresh";
    //投放用户拉抽屉
    CloudFuncType[CloudFuncType["user_OpenDraw"] = 7] = "user_OpenDraw";
    //投放用户继续游戏拉抽屉
    CloudFuncType[CloudFuncType["user_Next_OpenDraw"] = 8] = "user_Next_OpenDraw";
    //电击枪领取弹窗
    CloudFuncType[CloudFuncType["Gun_View"] = 9] = "Gun_View";
    //关闭按钮展示
    CloudFuncType[CloudFuncType["Close_Btn_Show"] = 10] = "Close_Btn_Show";
    //体力蛋
    CloudFuncType[CloudFuncType["Manual_Egg"] = 11] = "Manual_Egg";
    // 全屏插屏banner
    CloudFuncType[CloudFuncType["interfull_banner"] = 12] = "interfull_banner";
})(CloudFuncType = exports.CloudFuncType || (exports.CloudFuncType = {}));
// 注册云屏蔽功能 ，对应的ui界面 
// wegame.registerUI(CloudFuncType.FixCar, wegame.CrazyClick)
// wegame.registerUI(CloudFuncType.RedEnvelop, wegame.RedEnvelop)
// wegame.registerUI(CloudFuncType.Manual_Egg, "Prefabs/UI/UIManual_Egg")
wegame_1.default.registerUI(CloudFuncType.Energey_LinkWin, "Prefabs/UI/UILinkWinReward");
wegame_1.default.registerUI(CloudFuncType.Energy_Package, "Prefabs/UI/UIEnergyPackage");
// wegame.registerUI(CloudFuncType.AddCoin_Home, "UI/UIAddCoin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxDbG91ZEZ1bmNUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBa0M7QUFHbEMsSUFBWSxhQXdCWDtBQXhCRCxXQUFZLGFBQWE7SUFDckIsY0FBYztJQUNkLCtEQUFlLENBQUE7SUFDZixZQUFZO0lBQ1osdUVBQW1CLENBQUE7SUFDbkIscUVBQWtCLENBQUE7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlFQUFnQixDQUFBO0lBQ2hCLFNBQVM7SUFDVCwyREFBYSxDQUFBO0lBQ2IsV0FBVztJQUNYLHFFQUFrQixDQUFBO0lBQ2xCLFNBQVM7SUFDVCxtRUFBaUIsQ0FBQTtJQUNqQixhQUFhO0lBQ2IsNkVBQXNCLENBQUE7SUFDdEIsU0FBUztJQUNULHlEQUFZLENBQUE7SUFDWixRQUFRO0lBQ1Isc0VBQW1CLENBQUE7SUFDbkIsS0FBSztJQUNMLDhEQUFlLENBQUE7SUFDZixhQUFhO0lBQ2IsMEVBQXFCLENBQUE7QUFDekIsQ0FBQyxFQXhCVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQXdCeEI7QUFFRCxvQkFBb0I7QUFDcEIsNkRBQTZEO0FBQzdELGlFQUFpRTtBQUNqRSx5RUFBeUU7QUFDekUsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFBO0FBQzlFLGdCQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsNEJBQTRCLENBQUMsQ0FBQTtBQUU3RSxpRUFBaUUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VnYW1lIGZyb20gXCIuLi9zZGsvd2VnYW1lXCJcblxuXG5leHBvcnQgZW51bSBDbG91ZEZ1bmNUeXBlIHtcbiAgICAvKipiYW5uZXLkvY3np7sgKi9cbiAgICBCYW5uZXJfbW92ZSA9IDEsXG4gICAgLyoq5L2T5Yqb6L+e6IOc56S85YyFICovXG4gICAgRW5lcmdleV9MaW5rV2luID0gMixcbiAgICBFbmVyZ3lfUGFja2FnZSA9IDMsXG4gICAgLy/muLjmiI/lhoXmmL7npLrjgIHpmpDol49iYW5uZXJcbiAgICBCYW5uZXJJbkdhbWUgPSA0LFxuICAgIC8v5YGH5YiG5Lqr5aSx6LSl5o6n5Yi2XG4gICAgU2hhcmVGYWlsID0gNSxcbiAgICAvL0Jhbm5lcuWIt+aWsCBcbiAgICBCYW5uZXJfUmVmcmVzaCA9IDYsXG4gICAgLy/mipXmlL7nlKjmiLfmi4nmir3lsYlcbiAgICB1c2VyX09wZW5EcmF3ID0gNyxcbiAgICAvL+aKleaUvueUqOaIt+e7p+e7rea4uOaIj+aLieaKveWxiVxuICAgIHVzZXJfTmV4dF9PcGVuRHJhdyA9IDgsXG4gICAgLy/nlLXlh7vmnqrpooblj5blvLnnqpdcbiAgICBHdW5fVmlldyA9IDksXG4gICAgLy/lhbPpl63mjInpkq7lsZXnpLpcbiAgICBDbG9zZV9CdG5fU2hvdyA9IDEwLFxuICAgIC8v5L2T5Yqb6JuLXG4gICAgTWFudWFsX0VnZyA9IDExLFxuICAgIC8vIOWFqOWxj+aPkuWxj2Jhbm5lclxuICAgIGludGVyZnVsbF9iYW5uZXIgPSAxMixcbn1cblxuLy8g5rOo5YaM5LqR5bGP6JS95Yqf6IO9IO+8jOWvueW6lOeahHVp55WM6Z2iIFxuLy8gd2VnYW1lLnJlZ2lzdGVyVUkoQ2xvdWRGdW5jVHlwZS5GaXhDYXIsIHdlZ2FtZS5DcmF6eUNsaWNrKVxuLy8gd2VnYW1lLnJlZ2lzdGVyVUkoQ2xvdWRGdW5jVHlwZS5SZWRFbnZlbG9wLCB3ZWdhbWUuUmVkRW52ZWxvcClcbi8vIHdlZ2FtZS5yZWdpc3RlclVJKENsb3VkRnVuY1R5cGUuTWFudWFsX0VnZywgXCJQcmVmYWJzL1VJL1VJTWFudWFsX0VnZ1wiKVxud2VnYW1lLnJlZ2lzdGVyVUkoQ2xvdWRGdW5jVHlwZS5FbmVyZ2V5X0xpbmtXaW4sIFwiUHJlZmFicy9VSS9VSUxpbmtXaW5SZXdhcmRcIilcbndlZ2FtZS5yZWdpc3RlclVJKENsb3VkRnVuY1R5cGUuRW5lcmd5X1BhY2thZ2UsIFwiUHJlZmFicy9VSS9VSUVuZXJneVBhY2thZ2VcIilcblxuLy8gd2VnYW1lLnJlZ2lzdGVyVUkoQ2xvdWRGdW5jVHlwZS5BZGRDb2luX0hvbWUsIFwiVUkvVUlBZGRDb2luXCIpOyJdfQ==