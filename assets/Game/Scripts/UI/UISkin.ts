

import mvcView from "../../../framework/ui/mvcView";
import ccUtil from "../../../framework/utils/ccUtil";
import { evt } from "../../../framework/core/event";
import { PlayerInfo } from "../Common/Base/PlayerInfo";
import { Toast } from "../../../framework/ui/ToastManager";
import { UserInfo } from "../../../framework/extension/weak_net_game/UserInfo";
import Platform from "../../../framework/extension/Platform";

const { ccclass, property } = cc._decorator;

enum TabType {
    Female = 1,
    Male,
    Theme,
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

@ccclass
export default class UISkin extends mvcView {

    @property(cc.Layout)
    layout: cc.Layout = null;

    @property(cc.Node)
    titleNode: cc.Node = null;

    @property(cc.Layout)
    listLayout: cc.Layout = null;


    @property(cc.Label)
    label_star_free: cc.Label = null;

    // layouts: cc.Layout = null

    private _tab: number = 2;
    public get tabIndex(): number {
        return this._tab;
    }
    public set tabIndex(value: number) {
        if (value == -1) {
            value = TabType.Theme;
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


    onLoad() {
        this.register(this.label_star_free, () => "获取" + csv.Config.skin_store_free_star)
        this.loadTab();
        this._tab = 3;
        this.updateTab(this._tab);
        evt.on("Skin.select", this.onSelect, this)
        Platform.hideBannerAd();
    }

    onDestroy() {
        evt.off("Skin.select", this.onSelect, this)
    }


    onSelect(data: csv.Skin_Row) {
        //refresh other 
        let node = this.all_cls[data.subType].content;
        let list = node.getComponent(cc.Layout);
        this.renderLayout(list)
        Toast.make("已选择:" + data.name)
        if (data.subType == SkinType.Theme) {
            UserInfo.theme = data.data;
        } else if (data.subType == SkinType.Key) {
            UserInfo.theme_key = data.data;
        }
        UserInfo.save('theme');
        UserInfo.save('theme_key');
    }

    loadTab() {
        for (let i = 0; i <= SkinType.Key; i++) {
            this.initClass(i);
        }
        this.titleNode.active = false;
        this.listLayout.node.active = false;
    }

    selectTab(index) {
        this.tabIndex = index;
        this.updateTab(index)
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
        if (index == TabType.Theme) {
            this.enableCls(SkinType.Theme, SkinType.Key)
            // } else if (index == TabType.Male) {
            //     this.enableCls(SkinType.Hair, SkinType.Up, SkinType.Down, SkinType.Misc)
        } else {
            this.enableCls(SkinType.Hair, SkinType.Hat, SkinType.Up, SkinType.Down, SkinType.Misc)
        }
        if (this._first == true) {
            this._first = false;
            return;
        }
        this.render();
    }

    //
    initClass(type) {
        let cfg = SkinTypeProp[type];
        let node = cc.instantiate(this.titleNode)
        this.layout.node.addChild(node);
        let label = ccUtil.find("label", node, cc.Label)
        label.string = cfg.name;
        if (cfg.color) {
            node.color = new cc.Color().fromHEX(cfg.color)
        }
        let list = cc.instantiate(this.listLayout.node)
        this.layout.node.addChild(list);
        let layout = list.getComponent(cc.Layout);

        this.register(layout, this.skinsForType.bind(this, type));
        this.all_cls[type] = ({ title: node, content: list })
    }

    skinsForType(type) {
        let skins = csv.Skin.search((v, i) => {
            return v.type == this.tabIndex && v.subType == type;
        })
        return skins;
    }

    onToggle(toggle: cc.Toggle, index) {
        this.tabIndex = parseInt(index);
    }

    // skinItemAtIndex(node: cc.Node, data: csv.Skin_Row, i) {
    //     // node.getComponent(UISKInItem).render()
    // }

    onShow() {
        evt.emit('UISkin.checkLock');
        this.render();
    }

    click_close() {
        vm.hide(this);
        //save somtthing
    }

    click_getstar() {
        Platform.watch_video(this.video_callback, this)
    }

    video_callback() {
        PlayerInfo.star += csv.Config.skin_store_free_star || 3;
        PlayerInfo.save('star');
    }

}
