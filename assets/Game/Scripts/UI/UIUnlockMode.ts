import LoadingScene from "../Common/Base/LoadingScene"

let { ccclass, property } = cc._decorator
@ccclass
export default class UIUnlockMode extends cc.Component {

    onLoad() {

    }

    start() {

    }

    onShown() {

    }

    click_enterChallenge() {
        LoadingScene.goto("Main", "Prefabs/UI/UIChallengeChapter")
    }
    click_exit() {
        vm.hide(this);
    }
}

