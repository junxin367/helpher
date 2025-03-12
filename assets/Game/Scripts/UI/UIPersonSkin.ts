

import mvcView from "../../../framework/ui/mvcView";
import { evt } from "../../../framework/core/event";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import Platform from "../../../framework/extension/Platform";
import Unity from "../Common/Unity";
import LoadingScene from "../Common/Base/LoadingScene";

const { ccclass, property } = cc._decorator;

enum TabType {
    Female = 1,
    Male,
}

export enum TwoType {
    Skin = 0,
    Collection = 1,
}

export enum SkinType {
    Hair = 0,
    Hat = 1,
    Up,
    Down,
    Misc,
    Theme,
    Key
}

let SkinTypeProp = {
    [SkinType.Hair]: { name: "头发", color: "#FA8F4A" },
    [SkinType.Hat]: { name: "帽子", color: "#FA8F4A" },
    [SkinType.Up]: { name: "上身", color: "#FA8F4A" },
    [SkinType.Down]: { name: "下身", color: "#FA8F4A" },
    [SkinType.Misc]: { name: "附件", color: "#00D893" },
    [SkinType.Theme]: { name: "主题背景", color: "#0B88FF" },
    [SkinType.Key]: { name: "钥匙", color: "#00D893" },
}

export enum DecorateType {
    BaiJian = 1,
    DiBan = 2,
    QiangZhi,
    DiTan,
    GuiZhi,
    ChuangLian,
    ShaFa,
}


@ccclass
export default class UIPersonSkin extends mvcView {


    @property(cc.Layout)
    listLayout: cc.Layout = null;

    @property(cc.Layout)
    decorateListLayout: cc.Layout = null;

    @property(cc.Node)
    layout: cc.Node = null;

    @property(cc.Label)
    label_star_free: cc.Label = null;

    @property(dragonBones.ArmatureDisplay)
    skeleton_1: dragonBones.ArmatureDisplay = null;

    @property(dragonBones.ArmatureDisplay)
    skeleton_2: dragonBones.ArmatureDisplay = null;

    @property(cc.Sprite)
    qiangzhi: cc.Sprite = null;

    @property(cc.Sprite)
    diban: cc.Sprite = null;

    @property(cc.Sprite)
    guizhi: cc.Sprite = null;

    @property({ type: cc.Sprite })
    baijians: cc.Sprite[] = [];

    @property(cc.Sprite)
    chuanglian: cc.Sprite = null;

    @property(cc.Sprite)
    shafa: cc.Sprite = null;

    @property(cc.Sprite)
    ditan: cc.Sprite = null;

    @property(cc.Node)
    zhezhao: cc.Node = null;


    // layouts: cc.Layout = null

    private _tab: number = -1;
    public get tabIndex(): number {
        return this._tab;
    }
    public set tabIndex(value: number) {
        if (value == -1) {
            value = TabType.Female;
        }
        if (this._tab != value) {
            this._tab = value;
            this.selectTab(value)
        }
    }

    tabs_loaded: [] = [];


    //@ts-ignore
    all_cls: { [index: number]: { title: cc.Node, content: cc.Node } } = {};

    _first = true;

    _skins = [];
    _decorates = [];

    path = 'Img/decorate';

    onLoad() {
        this.register(this.label_star_free, () => "获取" + csv.Config.skin_store_free_star)
        if (LoadingScene.param == TwoType.Collection) {
            this.initDecorateClass(1);
        } else {
            this.initClass(0);
        }
        this._tab = 1;
        this.updateTab(this._tab);
        evt.on("Skin.select", this.onSelect, this);
        evt.on("Decorate.select", this.onDecorateSelect, this);
        evt.on("UISkin.checkLock", this.check_lockSkin, this);

        // this.layout.children.forEach((_, i) => {
        //     _.opacity = (i === 0 ? 255 : 120);
        // });

        this._skins = this.skinsForType(0);
        this.register(this.listLayout, _ => this._skins);
        this.register(this.decorateListLayout, _ => this._decorates);

        // 墙纸
        this.register(this.qiangzhi, _ => this.decoratePathForType(DecorateType.QiangZhi, `${this.path}/qiangzhi/`));
        // 地板
        this.register(this.diban, _ => this.decoratePathForType(DecorateType.DiBan, `${this.path}/diban/`));
        // 柜子
        this.register(this.guizhi, _ => this.decoratePathForType(DecorateType.GuiZhi, `${this.path}/guizi/`));
        // 摆件
        this.baijians.forEach((_, i) => {
            this.onVisible(_.node, _ => PlayerInfo.isDecorateUsing(i + 1));
        });
        // 窗帘
        this.register(this.chuanglian, _ => this.decoratePathForType(DecorateType.ChuangLian, `${this.path}/chuanglian/`));
        // 沙发
        this.register(this.shafa, _ => this.decoratePathForType(DecorateType.ShaFa, `${this.path}/shafa/`));
        // 地毯
        this.register(this.ditan, _ => this.decoratePathForType(DecorateType.DiTan, `${this.path}/ditan/`));
    }

    start() {
        Unity.loadSkins(this["skeleton_" + this.tabIndex], this.tabIndex);
        this.selectTab(this.tabIndex);

        this.layout.children.forEach((v, i) => {
            if (LoadingScene.param == TwoType.Collection) {
                i < 12 && (v.active = false);
            } else {
                i >= 12 && (v.active = false);
            }
        });
    }

    onEnable() {
        // 引导
        // if (UserInfo.skin_guide === 0 && PlayerInfo.level === 5 && !PlayerInfo.skins[20]) {
        //     this.initClass(4);
        //     this.zhezhao.active = true;
        //     let txt = this.zhezhao.getComponentInChildren(cc.Label);
        //     if (txt) {
        //         txt.string = !PlayerInfo.skins[20] ? `点击按钮解锁新获得的皮肤` : `再次点击选择可使用该皮肤`;
        //     }
        // }
    }

    onDestroy() {
        evt.off(this);
    }


    onSelect(data: csv.Skin_Row) {
        Toast.make("已选择:" + data.name)
        Unity.loadSkins(this["skeleton_" + this.tabIndex], this.tabIndex);
        // this.selectTab(this.tabIndex);
        this.render();
    }

    onDecorateSelect() {
        this.render();
    }

    selectTab(index) {
        this.tabIndex = index;
        this.updateTab(index);
    }

    enableCls(...clsTypes) {
        for (let k in this.all_cls) {
            let tk = parseInt(k);
            let tv = this.all_cls[k];
            let b = clsTypes.indexOf(tk) >= 0;
            tv.title.active = b;
            tv.content.active = b;
        }
    }

    updateTab(index) {
        this.enableCls(SkinType.Hair, SkinType.Hat, SkinType.Up, SkinType.Down, SkinType.Misc)
        if (this._first == true) {
            this._first = false;
            return;
        }
        this.render();
    }

    // 女孩  老人
    initClass(type) {
        this.listLayout.node.parent.parent.active = true;
        this.decorateListLayout.node.parent.parent.active = false;
        this._skins = this.skinsForType(type);
    }

    // 装饰
    initDecorateClass(type) {
        this.listLayout.node.parent.parent.active = false;
        this.decorateListLayout.node.parent.parent.active = true;
        this._decorates = this.decoratesForType(type);
    }

    skinsForType(type) {
        let skins = csv.Skin.search((v, i) => {
            return v.type == this.tabIndex && v.subType == type;
        })
        return skins;
    }

    decoratesForType(type) {
        let decorates = csv.Collection.search((v, i) => {
            return v.type == type;
        })
        return decorates;
    }

    /**
     * 根据装饰类型找正在使用的资源
     * @param type 装饰类型
     */
    decoratePathForType(type, path) {
        let data = this.decoratesForType(type).find(v => PlayerInfo.isDecorateUsing(v.id));
        return data && data.res ? `${path}${data.res}` : '';
    }

    onToggle(toggle: cc.Toggle, index) {
        index = parseInt(index);
        if (index < 10) {
            if (index < 5) {
                this.tabIndex = 1;
                this.initClass(index);
                this.selectTab(1);
            } else {
                this.tabIndex = 2;
                this.initClass(index - 5);
                this.selectTab(2);
            }
            Unity.loadSkins(this["skeleton_" + this.tabIndex], this.tabIndex);
        } else {
            this.initDecorateClass(index - 9);
            this.render();
        }

        // this.layout.children.forEach((_, i) => {
        //     _.opacity = (i === index ? 255 : 120);
        // });
    }

    onShow() {
        evt.emit('UISkin.checkLock');
        this.render();
    }

    onHidden() {
        UserInfo.save();
        PlayerInfo.save();
    }

    click_guideBtn() {
        if (!PlayerInfo.skins[20]) {
            evt.emit('Guide.unlockSkin');
            let txt = this.zhezhao.getComponentInChildren(cc.Label);
            txt && (txt.string = `再次点击选择可使用该皮肤`);
        } else {
            evt.emit('Guide.useSkin');
            this.zhezhao.active = false;
        }
    }

    click_close() {
        LoadingScene.goto("Main");
        //save somtthing
    }

    click_getstar() {
        Platform.watch_video(this.video_callback, this)
    }

    video_callback() {
        PlayerInfo.star += csv.Config.skin_store_free_star || 3;
        PlayerInfo.save('star');
    }

    check_lockSkin() {
        UserInfo.isunlock_men = 0;
        UserInfo.isunlock_girl = 0;
        for (let i = 1; i <= 5; i++) {
            UserInfo[`isunlock_girl${i}`] = 0;
            UserInfo[`isunlock_men${i}`] = 0;
        }

        for (let i = 1; i <= csv.Skin.values.length; i++) {
            let data = csv.Skin.get(i);
            if (((PlayerInfo.level >= data.unlock1 && data.unlockType == 1) || (data.unlockType == 2 && PlayerInfo.star >= data.unlock2))
                && !PlayerInfo.isSkinUnlocked(data.id)) {
                if (data.type == 1) {
                    UserInfo.isunlock_girl = 1;
                } else if (data.type == 2) {
                    UserInfo.isunlock_men = 1;
                }
                if (data.subType < 5) {
                    if (data.type == 1) {
                        UserInfo[`isunlock_girl${data.subType + 1}`] = 1;
                    } else if (data.type == 2) {
                        UserInfo[`isunlock_men${data.subType + 1}`] = 1;
                    }
                }
            }
        }
    }

}
