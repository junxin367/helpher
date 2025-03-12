import SFireAgent from "./SFireAgent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SWeapon extends cc.Component {
    fireAgents: SFireAgent[] = []

    onLoad() {
        this.fireAgents = this.getComponentsInChildren(SFireAgent);
    }

    fire(rotation?) {
        for (var i in this.fireAgents) {
            let agent = this.fireAgents[i]
            agent.fire(rotation);
        }
    }

    pause() {
        this.fireAgents.forEach(v=>v.paused = true)
    }
    resume() {
        this.fireAgents.forEach(v=>v.paused = false)
    }
}