import PrefabLoader from "../../framework/ui/controller/PrefabLoader";

let { ccclass, property } = cc._decorator
@ccclass
export default class LevelLoader extends PrefabLoader {

    onLoad() {

    }

    start() {

    }
}

PrefabLoader.register(LevelLoader,"Prefabs/Levels")