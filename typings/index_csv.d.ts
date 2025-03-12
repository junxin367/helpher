
declare namespace csv{
    interface Item {
        type:number;
        id:number;
        count:number;
    }
    
    interface Chapter_Row {
        
        /**
         * @type {number}
         * @description 编号 -  
         */
        id?:number,

        /**
         * @type {string}
         * @description 章节名 -  
         */
        name?:string
    };
    
    export class Chapter{
        static get(id:number|string):Chapter_Row
        static values:Chapter_Row[];
        static search(predicate: (value: Chapter_Row, index: number) => boolean):Chapter_Row[]
        static size:number;
    }


    interface Collection_Row {
        
        /**
         * @type {number}
         * @description 编号 -  
         */
        id?:number,

        /**
         * @type {string}
         * @description 名字 -  
         */
        name?:string,

        /**
         * @type {number}
         * @description 种类（1摆件、2地板、3墙纸、4地毯、5柜子、6窗帘、7沙发） -  
         */
        type?:number,

        /**
         * @type {string}
         * @description 对应资源 -  
         */
        res?:string,

        /**
         * @type {string}
         * @description 缩略图 -  
         */
        thumbnail?:string,

        /**
         * @type {number}
         * @description 解锁类型(1:默认) -  
         */
        unlockType?:number
    };
    
    export class Collection{
        static get(id:number|string):Collection_Row
        static values:Collection_Row[];
        static search(predicate: (value: Collection_Row, index: number) => boolean):Collection_Row[]
        static size:number;
    }


    export class Config{
        
        /**
         * @type {number}
         * @description 多久上传一次数据 - 60 
         */
        static Sync_User_Data_Time?:number;

        /**
         * @type {string}
         * @description 显示 Banner 的View列表 - UIWin,UIGetLabour,UISetting,UIPause,UILose,UIEndFloat,UIManual_Egg,UIOffLine 
         */
        static BannerAdWhiteList?:string;

        /**
         * @type {string}
         * @description 刷新Banner的View列表 - UIWin,UILose 
         */
        static BannerAdRefreshWhiteList?:string;

        /**
         * @type {number}
         * @description 每个玩家每天能看多少个视频 - 200 
         */
        static max_video_watch?:number;

        /**
         * @type {number}
         * @description 每个玩家每天能分享录屏多少次 - 10 
         */
        static max_share_count?:number;

        /**
         * @type {number}
         * @description 视频获取体力 - 1 
         */
        static SOV_Get_Labour?:number;

        /**
         * @type {number}
         * @description 视频获取体力个数 - 2 
         */
        static Energy_Get_Num?:number;

        /**
         * @type {number}
         * @description 体力恢复时间（分钟） - 5 
         */
        static LabourRecoveryTime?:number;

        /**
         * @type {number}
         * @description 跳过关卡消耗体力数量 - 1 
         */
        static Skip_Need_Labour?:number;

        /**
         * @type {number}
         * @description 复活banner多少秒后显示 - 1 
         */
        static Receive_banner_show_time?:number;

        /**
         * @type {number}
         * @description 看视频跳过 - 1 
         */
        static SOV_Skip_Level?:number;

        /**
         * @type {number}
         * @description 屏蔽banner - 0 
         */
        static Forbid_Banner?:number;

        /**
         * @type {number}
         * @description 连胜体力奖励个数 - 2 
         */
        static LinkWin_Reward_Energey?:number;

        /**
         * @type {number}
         * @description 连胜体力视频分享点 - 1 
         */
        static SOV_LinkWin?:number;

        /**
         * @type {number}
         * @description 玩家最高体力上限 - 20 
         */
        static Max_Energy?:number;

        /**
         * @type {number}
         * @description 体力礼包数量 - 2 
         */
        static EneryPackage_Count?:number;

        /**
         * @type {number}
         * @description 体力礼包视频分享点 - 1 
         */
        static SOV_EneryPackage?:number;

        /**
         * @type {number}
         * @description 初始体力 - 20 
         */
        static Init_Energy?:number;

        /**
         * @type {number}
         * @description 胜利界面获取体力 - 1 
         */
        static SOV_Win_Get?:number;

        /**
         * @type {number}
         * @description 失败界面获取体力 - 1 
         */
        static SOV_Lose_Get?:number;

        /**
         * @type {number}
         * @description 结算界面获取体力数量 - 2 
         */
        static Get_Energey_Count?:number;

        /**
         * @type {number}
         * @description 双倍领取获利点 - 1 
         */
        static SOV_Double_Get?:number;

        /**
         * @type {number}
         * @description 从第多少关开始计算连胜 - 1 
         */
        static LinkWin_Start_Level?:number;

        /**
         * @type {number}
         * @description 提示获利点 - 1 
         */
        static SOV_Level_Hint?:number;

        /**
         * @type {number}
         * @description 普通关解锁到多少关后可每日挑战 - 15 
         */
        static Begin_Daily_Level?:number;

        /**
         * @type {number}
         * @description 开始按钮领取电击枪 - 1 
         */
        static Start_Get_Gun?:number;

        /**
         * @type {number}
         * @description 不允许跳过视频的关卡，从第X关开始拉 - 8 
         */
        static Level_Show_AD?:number;

        /**
         * @type {number}
         * @description 允许跳过视频的关卡，从第X关开始拉 - 100 
         */
        static Level_Show_AD_Skip?:number;

        /**
         * @type {number}
         * @description banner刷新间隔时间 - 30 
         */
        static Banner_Refresh_Rate?:number;

        /**
         * @type {number}
         * @description 挑战不允许跳过视频的关卡，从第X关开始拉 - 100 
         */
        static Challenge_Level_Show_AD?:number;

        /**
         * @type {number}
         * @description 挑战允许跳过视频的关卡，从第X关开始拉 - 3 
         */
        static Challenge_Level_Show_AD_Skip?:number;

        /**
         * @type {number}
         * @description 下一关播放视频 - 1 
         */
        static SOV_ShowAD?:number;

        /**
         * @type {number}
         * @description 不允许跳过视频的关卡，每隔X关再次拉起 - 100 
         */
        static Level_Show_AD_Interval?:number;

        /**
         * @type {number}
         * @description 允许跳过视频的关卡，每隔X关再次拉起 - 3 
         */
        static Level_Show_AD_Skip_Interval?:number;

        /**
         * @type {number}
         * @description 挑战不允许跳过视频的关卡，每隔X关再次拉起 - 100 
         */
        static Challenge_Level_Show_AD_Interval?:number;

        /**
         * @type {number}
         * @description 挑战允许跳过视频的关卡，每隔X关再次拉起 - 3 
         */
        static Challenge_Level_Show_AD_Skip_Interval?:number;

        /**
         * @type {number}
         * @description 每日开屏展示次数 - 0 
         */
        static Show_Kaiping_AD?:number;

        /**
         * @type {number}
         * @description 累计失败数拉起视频 - 3 
         */
        static Show_AD_Lose?:number;

        /**
         * @type {number}
         * @description 累计失败拉起视频是否允许跳过 - 0 
         */
        static Show_AD_Lose_Skip?:number;

        /**
         * @type {number}
         * @description 累计重试数拉起视频 - 5 
         */
        static Show_AD_Return?:number;

        /**
         * @type {number}
         * @description 累计重试拉起视频是否允许跳过 - 1 
         */
        static Show_AD_Return_Skip?:number;

        /**
         * @type {number}
         * @description 多少关开始能领取枪 - 11 
         */
        static Start_Lv_Get_Gun?:number;

        /**
         * @type {number}
         * @description 领取枪弹窗上限 - 9 
         */
        static Get_Gun_Limt?:number;

        /**
         * @type {number}
         * @description 领取枪弹窗出现的概率 - 1 
         */
        static Get_Gun_Pro?:number;

        /**
         * @type {number}
         * @description 每日领取枪弹窗上限 - 5 
         */
        static Get_Gun_Limt_Day?:number;

        /**
         * @type {number}
         * @description 免费星星个数（皮肤商店） - 10 
         */
        static skin_store_free_star?:number;

        /**
         * @type {number}
         * @description 签到看视屏双倍奖励 - 1 
         */
        static SOV_Sign_Double?:number;

        /**
         * @type {number}
         * @description 解锁挑战关的条件（关卡） - 25 
         */
        static Chanllenge_Unlock_Level?:number
    }

    interface daily_level_Row {
        
        /**
         * @type {number}
         * @description 关卡 -  
         */
        id?:number,

        /**
         * @type {number}
         * @description 上线日期 -  
         */
        day?:number,

        /**
         * @type {string}
         * @description 编号/标签 -  
         */
        number?:string,

        /**
         * @type {string}
         * @description 提示视频地址 -  
         */
        hint_video?:string,

        /**
         * @type {string}
         * @description 提示视频地址2 -  
         */
        hint_video2?:string,

        /**
         * @type {string}
         * @description 任务 -  
         */
        task?:string,

        /**
         * @type {number}
         * @description 宝藏 -  
         */
        treasure?:number
    };
    
    export class daily_level{
        static get(id:number|string):daily_level_Row
        static values:daily_level_Row[];
        static search(predicate: (value: daily_level_Row, index: number) => boolean):daily_level_Row[]
        static size:number;
    }


    interface level_Row {
        
        /**
         * @type {number}
         * @description 关卡 -  
         */
        id?:number,

        /**
         * @type {number}
         * @description 章节 -  
         */
        chapter?:number,

        /**
         * @type {string}
         * @description 编号/标签 -  
         */
        number?:string,

        /**
         * @type {string}
         * @description 提示视频地址 -  
         */
        hint_video?:string,

        /**
         * @type {string}
         * @description 提示视频地址2 -  
         */
        hint_video2?:string,

        /**
         * @type {number}
         * @description 是否是新关卡 -  
         */
        isNew?:number,

        /**
         * @type {number}
         * @description 宝藏 -  
         */
        treasure?:number
    };
    
    export class level{
        static get(id:number|string):level_Row
        static values:level_Row[];
        static search(predicate: (value: level_Row, index: number) => boolean):level_Row[]
        static size:number;
    }


    interface Prop_Row {
        
        /**
         * @type {number}
         * @description 编号 -  
         */
        id?:number,

        /**
         * @type {string}
         * @description 道具名 -  
         */
        name?:string,

        /**
         * @type {string}
         * @description 说明文本 -  
         */
        desc?:string,

        /**
         * @type {string}
         * @description 图片 -  
         */
        icon?:string
    };
    
    export class Prop{
        static get(id:number|string):Prop_Row
        static values:Prop_Row[];
        static search(predicate: (value: Prop_Row, index: number) => boolean):Prop_Row[]
        static size:number;
    }


    interface Sign_Row {
        
        /**
         * @type {number}
         * @description 签到数 -  
         */
        day?:number,

        /**
         * @type {number}
         * @description 首周奖励（1-体力，2-道具礼包，3-皮肤） -  
         */
        type?:number,

        /**
         * @type {string}
         * @description 首周按钮 -  
         */
        btnString?:string,

        /**
         * @type {number}
         * @description 循环奖励 -  
         */
        typeLoop?:number,

        /**
         * @type {string}
         * @description 循环按钮 -  
         */
        btnLoopString?:string,

        /**
         * @type {number}
         * @description 通用数量 -  
         */
        number?:number,

        /**
         * @type {string}
         * @description 图标 -  
         */
        icon?:string,

        /**
         * @type {string}
         * @description 循环图标 -  
         */
        iconLoop?:string
    };
    
    export class Sign{
        static get(id:number|string):Sign_Row
        static values:Sign_Row[];
        static search(predicate: (value: Sign_Row, index: number) => boolean):Sign_Row[]
        static size:number;
    }


    interface Skin_Row {
        
        /**
         * @type {number}
         * @description 编号 -  
         */
        id?:number,

        /**
         * @type {string}
         * @description 名称 -  
         */
        name?:string,

        /**
         * @type {number}
         * @description 类型（1：女 2：男 3：装饰） -  
         */
        type?:number,

        /**
         * @type {number}
         * @description 子类（0:头发，1：头饰 2：上身 3：下身 4：物品 5：主题 6：钥匙） -  
         */
        subType?:number,

        /**
         * @type {number}
         * @description 解锁条件1（关卡） -  
         */
        unlock1?:number,

        /**
         * @type {number}
         * @description 解锁条件2（星星数） -  
         */
        unlock2?:number,

        /**
         * @type {string}
         * @description 对应资源 -  
         */
        res?:string,

        /**
         * @type {string}
         * @description 缩略图 -  
         */
        thumbnail?:string,

        /**
         * @type {number}
         * @description 解锁类型(1:关卡，2星星，3看视频, 4默认) -  
         */
        unlockType?:number,

        /**
         * @type {number}
         * @description 数据 -  
         */
        data?:number
    };
    
    export class Skin{
        static get(id:number|string):Skin_Row
        static values:Skin_Row[];
        static search(predicate: (value: Skin_Row, index: number) => boolean):Skin_Row[]
        static size:number;
    }


    interface star_Row {
        
        /**
         * @type {number}
         * @description id -  
         */
        id?:number,

        /**
         * @type {number}
         * @description 类型(1章节\2挑战） -  
         */
        type?:number,

        /**
         * @type {number}
         * @description 章节/阶段 -  
         */
        chapter?:number,

        /**
         * @type {number}
         * @description 需求星星 -  
         */
        demand?:number,

        /**
         * @type {number}
         * @description 奖励星星 -  
         */
        reward?:number
    };
    
    export class star{
        static get(id:number|string):star_Row
        static values:star_Row[];
        static search(predicate: (value: star_Row, index: number) => boolean):star_Row[]
        static size:number;
    }


    interface turntable_Row {
        
        /**
         * @type {number}
         * @description 编号 -  
         */
        id?:number,

        /**
         * @type {number}
         * @description 类型(1:再转一次2:体力3:道具礼包4:电枪5:限定皮肤6:冻结7:磁铁) -  
         */
        type?:number,

        /**
         * @type {string}
         * @description 内容 -  
         */
        content?:string,

        /**
         * @type {number}
         * @description 数量 -  
         */
        num?:number,

        /**
         * @type {string}
         * @description 文本 -  
         */
        text?:string,

        /**
         * @type {number}
         * @description 概率 -  
         */
        chance?:number,

        /**
         * @type {string}
         * @description 缩略图 -  
         */
        thumbnail?:string
    };
    
    export class turntable{
        static get(id:number|string):turntable_Row
        static values:turntable_Row[];
        static search(predicate: (value: turntable_Row, index: number) => boolean):turntable_Row[]
        static size:number;
    }


}