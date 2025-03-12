import Platform from "../extension/Platform";

const { ccclass, property } = cc._decorator;


let is_first = true
let with_server = true;

const LOADING_SCENE_NAME = "LoadingScene"
let targetScene: string = null;
@ccclass
export default class LoadingSceneBase extends cc.Component {
    static param: any = null;
    static ResPrefab: cc.Prefab = null

    @property
    defaultSceneName: string = "Home"

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Label)
    private percentLabel: cc.Label = null;

    @property(cc.ProgressBar)
    private bar: cc.ProgressBar = null;

    onLoad() {
        targetScene = targetScene || this.defaultSceneName;
    }
    start() {

        this.bar.progress = 0;
        this.label.string = "加载中..."
    }

    set progress(p) {
        if (this.bar) {
            this.bar.progress = p
            this.percentLabel.string = Math.floor(p * 100) + "%"
        }
    }

    loadNextScene(prefabTobeLoad?) {
        targetScene = targetScene || this.defaultSceneName;
        this.label.string = '加载场景资源'
        return new Promise((resolve, reject) => {
            cc.director.preloadScene(targetScene, (c, t, i) => {
                this.percentLabel.string = `${(c / t * 100).toFixed(1)}%`
                this.bar.progress = c / t;
            }, _ => {
                // evt.emit("SceneChange")
                if (prefabTobeLoad) {
                    cc.resources.load(prefabTobeLoad, cc.Prefab, (err, prefab) => {
                        cc.director.loadScene(targetScene, _ => {
                            let node = cc.instantiate(prefab)
                            cc.director.getScene().addChild(node, -1);
                            this.onLoadFinished()
                        })
                    })

                } else {
                    cc.director.loadScene(targetScene, _ => {
                        this.onLoadFinished()
                    });
                }
            })
        })
    }

    onLoadFinished(node?) {
        let root = cc.find("Canvas")
        if (root) {
            root.getComponents(cc.Component).forEach((v: any) => {
                if (v.onLoadFinished) {
                    v.onLoadFinished(LoadingSceneBase.param, node)
                }
            })
        }
    }


    async loadSubPackage(packageName, txt) {
        if (this.label) {
            this.label.string = txt
        }
        await Platform.loadSubPackage(packageName, (p, k, t) => {
            if (this.progress)
                this.progress = p / 100;
        })
    }

    static setNextScene(scene) {
        targetScene = scene
    }

    static getNextScene() {
        return targetScene
    }

    static goto(sceneName, param = null) {
        LoadingSceneBase.param = param
        targetScene = sceneName
        cc.director.loadScene(LOADING_SCENE_NAME)
    }


}