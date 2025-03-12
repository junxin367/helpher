"use strict";
cc._RF.push(module, 'b9c3e2G9W1Czq9FyCjPGN5q', 'wxRankList');
// Game/Scripts/UI/wxRankList.ts

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
var Consts = {
    OpenDataKeys: {
        InitKey: "initKey",
        Grade: "testkey",
        LevelKey: "reachlevel",
        ScoreKey: "levelScore",
    },
    DomainAction: {
        FetchFriend: "FetchFriend",
        FetchGroup: "FetchGroup",
        FetchFriendLevel: "FriendRank",
        FetchChallengFriendLevel: "FriendChallengRank",
        FetchFriendDistance: "FetchFriendDistance",
        HorConmpar: "HorConmpar",
        Paging: "Paging",
        EndRank: "EndRank",
        EndChallengRank: "EndChallengRank",
        Scrolling: "Scrolling"
    },
};
// 这个换成自己的逻辑
var utils = {
    curLevel: 1,
    getScore: function (_) { return 1; }
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var wxRankList = /** @class */ (function (_super) {
    __extends(wxRankList, _super);
    function wxRankList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankRender = null; // render spr
        _this.rankListNode = null;
        // @property(cc.Node)
        // horRankNode:cc.Node=null;
        _this.rankBgNode = null;
        _this.touchLayer = null;
        // @property(Boolean)
        _this.enableScroll = true; //
        _this._timeCounter = 0;
        _this.rendInterval = 0.5; //刷新排行画布间隔s
        _this.rankTexture = null;
        _this.rankSpriteFrame = null;
        _this.closeBackRank = 0; // 关闭后操作
        return _this;
    }
    wxRankList_1 = wxRankList;
    // LIFE-CYCLE CALLBACKS:
    wxRankList.prototype.onLoad = function () {
        wxRankList_1.instance = this;
        this._timeCounter = 0;
        this.rankTexture = new cc.Texture2D();
        this.rankSpriteFrame = new cc.SpriteFrame();
        this.resizeSharedCanvas(this.rankRender.node.width, this.rankRender.node.height);
    };
    // start() {
    // }
    wxRankList.prototype.update = function (dt) {
        // this._timeCounter += dt
        // if (this._timeCounter < this.rendInterval) return
        // this._timeCounter = 0
        this.updateRankList();
    };
    wxRankList.prototype.resizeSharedCanvas = function (width, height) {
        if (!window["wx"])
            return;
        var sharedCanvas = window["wx"].getOpenDataContext().canvas;
        sharedCanvas.width = width;
        sharedCanvas.height = height;
        console.log(sharedCanvas);
    };
    wxRankList.prototype.changeRender = function (renderNode) {
        if (renderNode.name === "sprHorRank") {
            // this.horRankNode.active = true;
            this.rankListNode.active = false;
            this.rankBgNode.active = false;
        }
        else if (renderNode.name === "sprRankList") {
            // this.horRankNode.active = false;
            this.rankListNode.active = true;
            this.rankBgNode.active = true;
        }
        this.rankRender.node.width = renderNode.width;
        this.rankRender.node.height = renderNode.height;
        this.rankRender.node.position = renderNode.position;
        this.resizeSharedCanvas(renderNode.width, renderNode.height);
    };
    wxRankList.prototype.updateRankList = function () {
        if (!window["wx"])
            return;
        if (!this.rankTexture)
            return;
        var sharedCanvas = window["wx"].getOpenDataContext().canvas;
        this.rankTexture.initWithElement(sharedCanvas);
        this.rankTexture.handleLoadedTexture();
        this.rankSpriteFrame.setTexture(this.rankTexture);
        this.rankRender.spriteFrame = this.rankSpriteFrame;
    };
    wxRankList.prototype.onEnable = function () {
        this.touchLayer.active = true;
        if (this.enableScroll) {
            this.rankRender.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }
        // this.postMessage(Consts.DomainAction.FetchFriendLevel)
    };
    wxRankList.prototype.onDisable = function () {
        if (this.enableScroll) {
            this.rankRender.node.off(cc.Node.EventType.TOUCH_MOVE);
        }
    };
    wxRankList.prototype.onPageUp = function () {
        console.log(this);
        this.postMessage("Paging", -1);
    };
    wxRankList.prototype.onPageDown = function () {
        this.postMessage("Paging", 1);
    };
    wxRankList.prototype.onClose = function () {
        if (this.closeBackRank === 1) {
            this.closeBackRank = 0;
            this.loadHorRank(utils.curLevel);
            return;
        }
        this.node.active = false;
    };
    wxRankList.prototype.onTouchMove = function (event) {
        var deltaY = event.getDeltaY();
        // console.log("rank touchmove:", deltaY);
        this.postMessage("Scrolling", deltaY);
    };
    //获取关卡得分排行
    wxRankList.prototype.loadLevelScoreRank = function () {
        this.node.active = true;
        this.touchLayer.active = true;
        this.onEnable();
        this.changeRender(this.rankListNode);
        this.postMessage(Consts.DomainAction.EndRank);
    };
    wxRankList.prototype.loadChallengLevelScoreRank = function () {
        this.node.active = true;
        this.touchLayer.active = true;
        this.onEnable();
        this.changeRender(this.rankListNode);
        this.postMessage(Consts.DomainAction.EndChallengRank);
    };
    //获取关卡进度排行
    wxRankList.prototype.loadLevelOpenRank = function () {
        this.node.active = true;
        this.touchLayer.active = true;
        this.onEnable();
        this.changeRender(this.rankListNode);
        this.postMessage(Consts.DomainAction.FetchFriendLevel);
    };
    wxRankList.prototype.loadChallengLevelOpenRank = function () {
        this.node.active = true;
        this.touchLayer.active = true;
        this.onEnable();
        this.changeRender(this.rankListNode);
        this.postMessage(Consts.DomainAction.FetchChallengFriendLevel);
    };
    //横向比较
    wxRankList.prototype.loadHorRank = function (level) {
        if (level === void 0) { level = 1; }
        this.node.active = true;
        this.touchLayer.active = false;
        this.onDisable();
        // this.changeRender(this.horRankNode)
        this.postMessage(Consts.DomainAction.HorConmpar, level, utils.getScore(level));
    };
    //向子域发送消息
    wxRankList.prototype.postMessage = function (action, data, dataEx) {
        if (data === void 0) { data = null; }
        if (dataEx === void 0) { dataEx = null; }
        if (!window["wx"])
            return;
        var openDataContext = window["wx"].getOpenDataContext();
        openDataContext.postMessage({
            action: action,
            data: data,
            dataEx: dataEx,
        });
    };
    // //检查得分
    // checkScore(key, callback){
    //     if (!window.wx) return
    //     wx.getUserCloudStorage({
    //         keyList:[key],
    //         success:res=>{
    //             res.data.
    //         }
    //     })
    // }
    //wx api
    // 上传关卡分数
    wxRankList.prototype.uploadScore = function (level, score) {
        if (!window["wx"])
            return;
        score = score.toString();
        window["wx"].setUserCloudStorage({
            KVDataList: [
                { key: Consts.OpenDataKeys.ScoreKey + level, value: score },
            ],
            success: function (res) {
                console.log("uploadScore success:res=>", res);
            },
            fail: function (res) {
                console.log("uploadScore fail:res=>", res);
            }
        });
    };
    // 上传关卡开启进度
    wxRankList.prototype.uploadLevelOpen = function (level) {
        if (!window.window["wx"])
            return;
        level = level.toString();
        window["wx"].setUserCloudStorage({
            KVDataList: [
                { key: Consts.OpenDataKeys.LevelKey, value: level },
            ],
            success: function (res) {
                console.log("uploadScore success:res=>", res);
            },
            fail: function (res) {
                console.log("uploadScore fail:res=>", res);
            }
        });
    };
    //删除微信数据
    wxRankList.prototype.removeUserKey = function (key_or_keys) {
        if (!window.window["wx"])
            return;
        if (typeof (key_or_keys) === "string") {
            key_or_keys = [key_or_keys];
        }
        window["wx"].removeUserCloudStorage({
            keyList: key_or_keys,
            success: function (res) {
                console.log("uploadScore success:res=>", res);
            },
            fail: function (res) {
                console.log("uploadScore fail:res=>", res);
            }
        });
    };
    // 分享
    /* args:{
                title: string
                imageUrl: string
                query: string
                success: func
                fail: func
            }
    */
    wxRankList.prototype.share = function (args) {
        if (!window.window["wx"])
            return;
        if (!args)
            args = {};
        args.imageUrl = args.imageUrl || "http://img.zcool.cn/community/01c2ac57beb18d0000012e7eaa6d19.jpg@1280w_1l_2o_100sh.jpg";
        window["wx"].shareAppMessage({
            title: "",
            // imageUrl: "res/raw-assets/res/shengming.25929.png",
            imageUrl: args.imageUrl,
            query: "key=testshare",
            success: function (res) {
                console.log("success:", res);
                if (args.success) {
                    args.success(res);
                }
            },
            fail: function (res) {
                console.log("fail:", res);
                if (args.fail) {
                    args.fail(res);
                }
            }
        });
    };
    wxRankList.prototype.initRank = function () {
    };
    wxRankList.prototype.snapshotSync = function () {
        if (!window['wx'])
            return;
        var canvas = cc.game.canvas;
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        return canvas['toTempFilePathSync']({
            x: 0,
            y: 0,
            width: width * 1.5,
            height: height,
            destWidth: width * 1.5,
            destHeight: height
        });
    };
    var wxRankList_1;
    wxRankList.instance = null;
    __decorate([
        property(cc.Sprite)
    ], wxRankList.prototype, "rankRender", void 0);
    __decorate([
        property(cc.Node)
    ], wxRankList.prototype, "rankListNode", void 0);
    __decorate([
        property(cc.Node)
    ], wxRankList.prototype, "rankBgNode", void 0);
    __decorate([
        property(cc.Node)
    ], wxRankList.prototype, "touchLayer", void 0);
    wxRankList = wxRankList_1 = __decorate([
        ccclass
    ], wxRankList);
    return wxRankList;
}(cc.Component));
exports.default = wxRankList;

cc._RF.pop();