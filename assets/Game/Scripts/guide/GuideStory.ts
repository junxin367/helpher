import LoadingScene from "../Common/Base/LoadingScene";

let { ccclass, property } = cc._decorator
@ccclass
export default class GuideStory extends cc.Component {

    onLoad() {

    }

    start() {

    }

    onShown() {
        if(this.node.name == "comics2"){
            vm.hide("Prefabs/story/comics1")
        }
    }

    click_go() {
        LoadingScene.goto("Game");
    }

    click_skip(){
        LoadingScene.goto("Game");
    }

}