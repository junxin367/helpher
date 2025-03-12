"use strict";
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