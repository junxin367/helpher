import { PlayerInfo } from "./Base/PlayerInfo";

export default class Unity {
    static iconSOV(soa: number): any {
        return soa == 0 ? this.Icon_Share : this.Icon_Video
    }

    static Icon_Share = "Img/share"
    static Icon_Video = "Img/shipin"


    private static loadSkin(skeleton: dragonBones.ArmatureDisplay, skin: csv.Skin_Row) {
        let armature = skeleton.armature() as dragonBones.ArmatureData;

        if (skin.res) {
            let slots = skin.res.split("/")
            let slot_2_index = slots.map(v => v.split(':'))
            slot_2_index.forEach(v => {
                let slotname = v[0];
                let displayIndex = parseInt(v[1]);
                armature.getSlot(slotname).displayIndex = displayIndex;
            })
        }
    }

    static loadSkins(skeleton: dragonBones.ArmatureDisplay, type: number) {
        for (let k in PlayerInfo.skins) {
            let s = PlayerInfo.skins[k];
            //2 : 表示 当前选择
            if (s == 2) {
                let cfg = csv.Skin.get(k)
                if (cfg.type == type) {
                    this.loadSkin(skeleton, cfg);
                }
            }
        }
    }


}