import wegame from "../sdk/wegame"


export enum CloudFuncType {
    /**banner位移 */
    Banner_move = 1,
    /**体力连胜礼包 */
    Energey_LinkWin = 2,
    Energy_Package = 3,
    //游戏内显示、隐藏banner
    BannerInGame = 4,
    //假分享失败控制
    ShareFail = 5,
    //Banner刷新 
    Banner_Refresh = 6,
    //投放用户拉抽屉
    user_OpenDraw = 7,
    //投放用户继续游戏拉抽屉
    user_Next_OpenDraw = 8,
    //电击枪领取弹窗
    Gun_View = 9,
    //关闭按钮展示
    Close_Btn_Show = 10,
    //体力蛋
    Manual_Egg = 11,
    // 全屏插屏banner
    interfull_banner = 12,
}

// 注册云屏蔽功能 ，对应的ui界面 
// wegame.registerUI(CloudFuncType.FixCar, wegame.CrazyClick)
// wegame.registerUI(CloudFuncType.RedEnvelop, wegame.RedEnvelop)
// wegame.registerUI(CloudFuncType.Manual_Egg, "Prefabs/UI/UIManual_Egg")
wegame.registerUI(CloudFuncType.Energey_LinkWin, "Prefabs/UI/UILinkWinReward")
wegame.registerUI(CloudFuncType.Energy_Package, "Prefabs/UI/UIEnergyPackage")

// wegame.registerUI(CloudFuncType.AddCoin_Home, "UI/UIAddCoin");