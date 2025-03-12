
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/UI/wxRankList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcVUlcXHd4UmFua0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxNQUFNLEdBQUc7SUFDVCxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUUsU0FBUztRQUNsQixLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsWUFBWTtLQUN6QjtJQUNELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLGdCQUFnQixFQUFFLFlBQVk7UUFDOUIsd0JBQXdCLEVBQUUsb0JBQW9CO1FBQzlDLG1CQUFtQixFQUFFLHFCQUFxQjtRQUMxQyxVQUFVLEVBQUUsWUFBWTtRQUN4QixNQUFNLEVBQUUsUUFBUTtRQUNoQixPQUFPLEVBQUUsU0FBUztRQUNsQixlQUFlLEVBQUUsaUJBQWlCO1FBQ2xDLFNBQVMsRUFBRSxXQUFXO0tBQ3pCO0NBQ0osQ0FBQTtBQUVELFlBQVk7QUFDWixJQUFJLEtBQUssR0FBRztJQUNSLFFBQVEsRUFBRSxDQUFDO0lBQ1gsUUFBUSxFQUFFLFVBQUEsQ0FBQyxJQUFNLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQztDQUM5QixDQUFBO0FBR0ssSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFxU0M7UUFoU0csZ0JBQVUsR0FBYyxJQUFJLENBQUMsQ0FBQyxhQUFhO1FBRTNDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFHNUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFJM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IscUJBQXFCO1FBQ3JCLGtCQUFZLEdBQUcsSUFB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QUUsTUFBTTtZQUNkLFNBQVMsRUFBRSxLQUFLLEdBQUcsR0FBRztZQUN0QixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDOztJQWpTTSxtQkFBUSxHQUFlLElBQUksQ0FBQztJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1c7SUFNN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQUkzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNTO0lBakJWLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FxUzlCO0lBQUQsaUJBQUM7Q0FyU0QsQUFxU0MsQ0FyU3VDLEVBQUUsQ0FBQyxTQUFTLEdBcVNuRDtrQkFyU29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgQ29uc3RzID0ge1xuICAgIE9wZW5EYXRhS2V5czoge1xuICAgICAgICBJbml0S2V5OiBcImluaXRLZXlcIixcbiAgICAgICAgR3JhZGU6IFwidGVzdGtleVwiLFxuICAgICAgICBMZXZlbEtleTogXCJyZWFjaGxldmVsXCIsXG4gICAgICAgIFNjb3JlS2V5OiBcImxldmVsU2NvcmVcIiwgLy8ganNvbi5zdHJpbmdcbiAgICB9LFxuICAgIERvbWFpbkFjdGlvbjoge1xuICAgICAgICBGZXRjaEZyaWVuZDogXCJGZXRjaEZyaWVuZFwiLFxuICAgICAgICBGZXRjaEdyb3VwOiBcIkZldGNoR3JvdXBcIixcbiAgICAgICAgRmV0Y2hGcmllbmRMZXZlbDogXCJGcmllbmRSYW5rXCIsIC8v5aW95Y+L5o6S6KGMXG4gICAgICAgIEZldGNoQ2hhbGxlbmdGcmllbmRMZXZlbDogXCJGcmllbmRDaGFsbGVuZ1JhbmtcIiwgLy/lpb3lj4vmjpLooYxcbiAgICAgICAgRmV0Y2hGcmllbmREaXN0YW5jZTogXCJGZXRjaEZyaWVuZERpc3RhbmNlXCIsIC8v5aW95Y+L5YWz5Y2h5b6X5YiG5o6S6KGMXG4gICAgICAgIEhvckNvbm1wYXI6IFwiSG9yQ29ubXBhclwiLCAvL+aoquWQkeavlOi+gyBob3Jpem9udGFsIGNvbXBhcmlzb25cbiAgICAgICAgUGFnaW5nOiBcIlBhZ2luZ1wiLFxuICAgICAgICBFbmRSYW5rOiBcIkVuZFJhbmtcIiwvL+iDnOWIqeeVjOmdouaOkuihjFxuICAgICAgICBFbmRDaGFsbGVuZ1Jhbms6IFwiRW5kQ2hhbGxlbmdSYW5rXCIsLy/og5zliKnnlYzpnaLmjpLooYxcbiAgICAgICAgU2Nyb2xsaW5nOiBcIlNjcm9sbGluZ1wiXG4gICAgfSxcbn1cblxuLy8g6L+Z5Liq5o2i5oiQ6Ieq5bex55qE6YC76L6RXG5sZXQgdXRpbHMgPSB7XG4gICAgY3VyTGV2ZWw6IDEsXG4gICAgZ2V0U2NvcmU6IF8gPT4geyByZXR1cm4gMSB9XG59XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHd4UmFua0xpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGluc3RhbmNlOiB3eFJhbmtMaXN0ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcmFua1JlbmRlcjogY2MuU3ByaXRlID0gbnVsbDsgLy8gcmVuZGVyIHNwclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJhbmtMaXN0Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBob3JSYW5rTm9kZTpjYy5Ob2RlPW51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByYW5rQmdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdG91Y2hMYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHkoQm9vbGVhbilcbiAgICBlbmFibGVTY3JvbGwgPSB0cnVlOy8vXG5cbiAgICBfdGltZUNvdW50ZXIgPSAwO1xuICAgIHJlbmRJbnRlcnZhbCA9IDAuNTsvL+WIt+aWsOaOkuihjOeUu+W4g+mXtOmalHNcblxuICAgIHJhbmtUZXh0dXJlOiBjYy5UZXh0dXJlMkQgPSBudWxsO1xuICAgIHJhbmtTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIGNsb3NlQmFja1JhbmsgPSAwOyAvLyDlhbPpl63lkI7mk43kvZxcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgd3hSYW5rTGlzdC5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fdGltZUNvdW50ZXIgPSAwXG4gICAgICAgIHRoaXMucmFua1RleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XG4gICAgICAgIHRoaXMucmFua1Nwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKCk7XG4gICAgICAgIHRoaXMucmVzaXplU2hhcmVkQ2FudmFzKHRoaXMucmFua1JlbmRlci5ub2RlLndpZHRoLCB0aGlzLnJhbmtSZW5kZXIubm9kZS5oZWlnaHQpXG4gICAgfVxuXG4gICAgLy8gc3RhcnQoKSB7XG4gICAgLy8gfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIHRoaXMuX3RpbWVDb3VudGVyICs9IGR0XG4gICAgICAgIC8vIGlmICh0aGlzLl90aW1lQ291bnRlciA8IHRoaXMucmVuZEludGVydmFsKSByZXR1cm5cbiAgICAgICAgLy8gdGhpcy5fdGltZUNvdW50ZXIgPSAwXG5cbiAgICAgICAgdGhpcy51cGRhdGVSYW5rTGlzdCgpXG4gICAgfVxuXG4gICAgcmVzaXplU2hhcmVkQ2FudmFzKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKCF3aW5kb3dbXCJ3eFwiXSkgcmV0dXJuO1xuICAgICAgICBsZXQgc2hhcmVkQ2FudmFzID0gd2luZG93W1wid3hcIl0uZ2V0T3BlbkRhdGFDb250ZXh0KCkuY2FudmFzXG4gICAgICAgIHNoYXJlZENhbnZhcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIHNoYXJlZENhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgY29uc29sZS5sb2coc2hhcmVkQ2FudmFzKVxuICAgIH1cblxuICAgIGNoYW5nZVJlbmRlcihyZW5kZXJOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmIChyZW5kZXJOb2RlLm5hbWUgPT09IFwic3BySG9yUmFua1wiKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmhvclJhbmtOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJhbmtMaXN0Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmFua0JnTm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9IGVsc2UgaWYgKHJlbmRlck5vZGUubmFtZSA9PT0gXCJzcHJSYW5rTGlzdFwiKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmhvclJhbmtOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yYW5rTGlzdE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmFua0JnTm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yYW5rUmVuZGVyLm5vZGUud2lkdGggPSByZW5kZXJOb2RlLndpZHRoXG4gICAgICAgIHRoaXMucmFua1JlbmRlci5ub2RlLmhlaWdodCA9IHJlbmRlck5vZGUuaGVpZ2h0XG4gICAgICAgIHRoaXMucmFua1JlbmRlci5ub2RlLnBvc2l0aW9uID0gcmVuZGVyTm9kZS5wb3NpdGlvblxuICAgICAgICB0aGlzLnJlc2l6ZVNoYXJlZENhbnZhcyhyZW5kZXJOb2RlLndpZHRoLCByZW5kZXJOb2RlLmhlaWdodClcbiAgICB9XG5cbiAgICB1cGRhdGVSYW5rTGlzdCgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3dbXCJ3eFwiXSkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMucmFua1RleHR1cmUpIHJldHVybjtcbiAgICAgICAgbGV0IHNoYXJlZENhbnZhcyA9IHdpbmRvd1tcInd4XCJdLmdldE9wZW5EYXRhQ29udGV4dCgpLmNhbnZhc1xuICAgICAgICB0aGlzLnJhbmtUZXh0dXJlLmluaXRXaXRoRWxlbWVudChzaGFyZWRDYW52YXMpO1xuICAgICAgICB0aGlzLnJhbmtUZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcbiAgICAgICAgdGhpcy5yYW5rU3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0aGlzLnJhbmtUZXh0dXJlKTtcbiAgICAgICAgdGhpcy5yYW5rUmVuZGVyLnNwcml0ZUZyYW1lID0gdGhpcy5yYW5rU3ByaXRlRnJhbWU7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMudG91Y2hMYXllci5hY3RpdmUgPSB0cnVlXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5yYW5rUmVuZGVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMucG9zdE1lc3NhZ2UoQ29uc3RzLkRvbWFpbkFjdGlvbi5GZXRjaEZyaWVuZExldmVsKVxuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmtSZW5kZXIubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25QYWdlVXAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UoXCJQYWdpbmdcIiwgLTEpXG4gICAgfVxuXG4gICAgb25QYWdlRG93bigpIHtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZShcIlBhZ2luZ1wiLCAxKVxuICAgIH1cblxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlQmFja1JhbmsgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VCYWNrUmFuayA9IDA7XG4gICAgICAgICAgICB0aGlzLmxvYWRIb3JSYW5rKHV0aWxzLmN1ckxldmVsKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IGV2ZW50LmdldERlbHRhWSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJhbmsgdG91Y2htb3ZlOlwiLCBkZWx0YVkpO1xuICAgICAgICB0aGlzLnBvc3RNZXNzYWdlKFwiU2Nyb2xsaW5nXCIsIGRlbHRhWSlcbiAgICB9XG5cbiAgICAvL+iOt+WPluWFs+WNoeW+l+WIhuaOkuihjFxuICAgIGxvYWRMZXZlbFNjb3JlUmFuaygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudG91Y2hMYXllci5hY3RpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMub25FbmFibGUoKVxuICAgICAgICB0aGlzLmNoYW5nZVJlbmRlcih0aGlzLnJhbmtMaXN0Tm9kZSlcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZShDb25zdHMuRG9tYWluQWN0aW9uLkVuZFJhbmspXG4gICAgfVxuXG4gICAgbG9hZENoYWxsZW5nTGV2ZWxTY29yZVJhbmsoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvdWNoTGF5ZXIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLm9uRW5hYmxlKClcbiAgICAgICAgdGhpcy5jaGFuZ2VSZW5kZXIodGhpcy5yYW5rTGlzdE5vZGUpXG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UoQ29uc3RzLkRvbWFpbkFjdGlvbi5FbmRDaGFsbGVuZ1JhbmspXG4gICAgfVxuXG4gICAgLy/ojrflj5blhbPljaHov5vluqbmjpLooYxcbiAgICBsb2FkTGV2ZWxPcGVuUmFuaygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudG91Y2hMYXllci5hY3RpdmUgPSB0cnVlXG4gICAgICAgIHRoaXMub25FbmFibGUoKVxuICAgICAgICB0aGlzLmNoYW5nZVJlbmRlcih0aGlzLnJhbmtMaXN0Tm9kZSlcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZShDb25zdHMuRG9tYWluQWN0aW9uLkZldGNoRnJpZW5kTGV2ZWwpXG4gICAgfVxuICAgIGxvYWRDaGFsbGVuZ0xldmVsT3BlblJhbmsoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvdWNoTGF5ZXIuYWN0aXZlID0gdHJ1ZVxuICAgICAgICB0aGlzLm9uRW5hYmxlKClcbiAgICAgICAgdGhpcy5jaGFuZ2VSZW5kZXIodGhpcy5yYW5rTGlzdE5vZGUpXG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UoQ29uc3RzLkRvbWFpbkFjdGlvbi5GZXRjaENoYWxsZW5nRnJpZW5kTGV2ZWwpXG4gICAgfVxuXG4gICAgLy/mqKrlkJHmr5TovoNcbiAgICBsb2FkSG9yUmFuayhsZXZlbCA9IDEpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudG91Y2hMYXllci5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB0aGlzLm9uRGlzYWJsZSgpXG4gICAgICAgIC8vIHRoaXMuY2hhbmdlUmVuZGVyKHRoaXMuaG9yUmFua05vZGUpXG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2UoQ29uc3RzLkRvbWFpbkFjdGlvbi5Ib3JDb25tcGFyLCBsZXZlbCwgdXRpbHMuZ2V0U2NvcmUobGV2ZWwpKVxuICAgIH1cblxuXG4gICAgLy/lkJHlrZDln5/lj5HpgIHmtojmga9cbiAgICBwb3N0TWVzc2FnZShhY3Rpb24sIGRhdGEgPSBudWxsLCBkYXRhRXggPSBudWxsKSB7XG4gICAgICAgIGlmICghd2luZG93W1wid3hcIl0pIHJldHVybjtcbiAgICAgICAgbGV0IG9wZW5EYXRhQ29udGV4dCA9IHdpbmRvd1tcInd4XCJdLmdldE9wZW5EYXRhQ29udGV4dCgpXG4gICAgICAgIG9wZW5EYXRhQ29udGV4dC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBkYXRhRXg6IGRhdGFFeCxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAvL+ajgOafpeW+l+WIhlxuICAgIC8vIGNoZWNrU2NvcmUoa2V5LCBjYWxsYmFjayl7XG4gICAgLy8gICAgIGlmICghd2luZG93Lnd4KSByZXR1cm5cbiAgICAvLyAgICAgd3guZ2V0VXNlckNsb3VkU3RvcmFnZSh7XG4gICAgLy8gICAgICAgICBrZXlMaXN0OltrZXldLFxuICAgIC8vICAgICAgICAgc3VjY2VzczpyZXM9PntcbiAgICAvLyAgICAgICAgICAgICByZXMuZGF0YS5cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICAvL3d4IGFwaVxuICAgIC8vIOS4iuS8oOWFs+WNoeWIhuaVsFxuICAgIHVwbG9hZFNjb3JlKGxldmVsLCBzY29yZSkge1xuICAgICAgICBpZiAoIXdpbmRvd1tcInd4XCJdKSByZXR1cm47XG4gICAgICAgIHNjb3JlID0gc2NvcmUudG9TdHJpbmcoKVxuICAgICAgICB3aW5kb3dbXCJ3eFwiXS5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcbiAgICAgICAgICAgIEtWRGF0YUxpc3Q6IFtcbiAgICAgICAgICAgICAgICB7IGtleTogQ29uc3RzLk9wZW5EYXRhS2V5cy5TY29yZUtleSArIGxldmVsLCB2YWx1ZTogc2NvcmUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGxvYWRTY29yZSBzdWNjZXNzOnJlcz0+XCIsIHJlcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGxvYWRTY29yZSBmYWlsOnJlcz0+XCIsIHJlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyDkuIrkvKDlhbPljaHlvIDlkK/ov5vluqZcbiAgICB1cGxvYWRMZXZlbE9wZW4obGV2ZWwpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cud2luZG93W1wid3hcIl0pIHJldHVyblxuICAgICAgICBsZXZlbCA9IGxldmVsLnRvU3RyaW5nKClcbiAgICAgICAgd2luZG93W1wid3hcIl0uc2V0VXNlckNsb3VkU3RvcmFnZSh7XG4gICAgICAgICAgICBLVkRhdGFMaXN0OiBbXG4gICAgICAgICAgICAgICAgeyBrZXk6IENvbnN0cy5PcGVuRGF0YUtleXMuTGV2ZWxLZXksIHZhbHVlOiBsZXZlbCB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwbG9hZFNjb3JlIHN1Y2Nlc3M6cmVzPT5cIiwgcmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwbG9hZFNjb3JlIGZhaWw6cmVzPT5cIiwgcmVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8v5Yig6Zmk5b6u5L+h5pWw5o2uXG4gICAgcmVtb3ZlVXNlcktleShrZXlfb3Jfa2V5cykge1xuICAgICAgICBpZiAoIXdpbmRvdy53aW5kb3dbXCJ3eFwiXSkgcmV0dXJuXG4gICAgICAgIGlmICh0eXBlb2YgKGtleV9vcl9rZXlzKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAga2V5X29yX2tleXMgPSBba2V5X29yX2tleXNdXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93W1wid3hcIl0ucmVtb3ZlVXNlckNsb3VkU3RvcmFnZSh7XG4gICAgICAgICAgICBrZXlMaXN0OiBrZXlfb3Jfa2V5cyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwbG9hZFNjb3JlIHN1Y2Nlc3M6cmVzPT5cIiwgcmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwbG9hZFNjb3JlIGZhaWw6cmVzPT5cIiwgcmVzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIOWIhuS6q1xuICAgIC8qIGFyZ3M6e1xuICAgICAgICAgICAgICAgIHRpdGxlOiBzdHJpbmdcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogc3RyaW5nXG4gICAgICAgICAgICAgICAgcXVlcnk6IHN0cmluZ1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmNcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jXG4gICAgICAgICAgICB9XG4gICAgKi9cbiAgICBzaGFyZShhcmdzKSB7XG4gICAgICAgIGlmICghd2luZG93LndpbmRvd1tcInd4XCJdKSByZXR1cm5cbiAgICAgICAgaWYgKCFhcmdzKSBhcmdzID0ge31cbiAgICAgICAgYXJncy5pbWFnZVVybCA9IGFyZ3MuaW1hZ2VVcmwgfHwgXCJodHRwOi8vaW1nLnpjb29sLmNuL2NvbW11bml0eS8wMWMyYWM1N2JlYjE4ZDAwMDAwMTJlN2VhYTZkMTkuanBnQDEyODB3XzFsXzJvXzEwMHNoLmpwZ1wiXG4gICAgICAgIHdpbmRvd1tcInd4XCJdLnNoYXJlQXBwTWVzc2FnZSh7XG4gICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgIC8vIGltYWdlVXJsOiBcInJlcy9yYXctYXNzZXRzL3Jlcy9zaGVuZ21pbmcuMjU5MjkucG5nXCIsXG4gICAgICAgICAgICBpbWFnZVVybDogYXJncy5pbWFnZVVybCxcbiAgICAgICAgICAgIHF1ZXJ5OiBcImtleT10ZXN0c2hhcmVcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3M6XCIsIHJlcylcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3Muc3VjY2VzcyhyZXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsOlwiLCByZXMpXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuZmFpbCkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLmZhaWwocmVzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbml0UmFuaygpIHtcbiAgICB9XG5cbiAgICBzbmFwc2hvdFN5bmMoKSB7XG4gICAgICAgIGlmICghd2luZG93Wyd3eCddKSByZXR1cm5cbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmdhbWUuY2FudmFzO1xuICAgICAgICB2YXIgd2lkdGggPSBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XG5cbiAgICAgICAgcmV0dXJuIGNhbnZhc1sndG9UZW1wRmlsZVBhdGhTeW5jJ10oe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGggKiAxLjUsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIGRlc3RXaWR0aDogd2lkdGggKiAxLjUsXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==