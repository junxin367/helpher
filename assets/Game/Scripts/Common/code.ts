export enum Code {
    Succ = 0,
    //已领取
    Claimed = 1,
    NoRecord = 1001,

    ParamError = 1002,

    DayInvite_Claim_EmptyIndex = 2000,
    DayInvite_Claim_IndexError = 2001,

    DayInvite_Claim_Claimed = 2002,//已领取完
    DayInvite_Claim_ParamError = 2003, //参数错误
    SumInvite_Claim_Empty = 2004,//没有邀请数据
    SumInvite_Claim_Claimed = 2005,//已领取完


    FreeEnergy_NoEntry = 2100, //没有记录
    FreeEnergy_Claimed = 2101,//已领取


    Subscribe_ERROR = 2200,/// 订阅
}