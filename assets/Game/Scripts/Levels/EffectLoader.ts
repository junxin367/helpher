import ccUtil from "../../../framework/utils/ccUtil";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EffectLoader extends cc.Component {
    @property
    path: string = ""
    onLoad() {

    }
    start() {
        ccUtil.getRes(this.path, cc.Prefab).then(v => {
            let node = cc.instantiate(v)
            node.parent = this.node;
        })
    }
}