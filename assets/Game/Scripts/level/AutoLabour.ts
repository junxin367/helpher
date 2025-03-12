import { PlayerInfo } from "../Common/Base/PlayerInfo";
import Main from "../Main";
import Buff from "../../../framework/extension/buffs/Buff";
import { buffSystem } from "../../../framework/extension/buffs/BuffSystem";


export default class AutoLabour extends Buff {
    onTimeLeftChanged() {
    }
    constructor() {
        super();
    }

    onEnabled() {
        PlayerInfo.buff_labour = this.timeLeft;
        if (Main.instance.daojishi) {
            Main.instance.daojishi.active = true;
        }
    }

    onDisabled() {
        PlayerInfo.labour += 1;
        if (PlayerInfo.labour < csv.Config.Max_Energy) {
            buffSystem.startBuff("AutoLabour", csv.Config.LabourRecoveryTime * 60);
        }
        else {
            if (Main.instance.daojishi) {
                Main.instance.daojishi.active = false;
            }
        }
        PlayerInfo.save("labour");
    }

    step() {
        PlayerInfo.buff_labour = this.timeLeft;
        if (Main.instance.label_timeLeft) {
            Main.instance.label_timeLeft.string = new Date(PlayerInfo.buff_labour * 1000).format("mm:ss");
        }
    }
}