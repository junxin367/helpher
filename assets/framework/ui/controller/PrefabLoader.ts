import Signal from "../../core/Signal";
import ccUtil from "../../utils/ccUtil";

const { ccclass, property, menu, executeInEditMode } = cc._decorator;
const ResListEnum = cc.Enum({});

export interface PrefabLoaderDelegate {
    onLoadPrefab(lvIndex, path);
}

@ccclass
@executeInEditMode()
export default abstract class PrefabLoader extends cc.Component {
    static path_assets = {}
    static path = "";

    // @property({ serializable: true })
    // public _maxLevel: number = 0;
    // @property
    // get maxLevel() {
    //     if (this.assets == null) {
    //         return this._maxLevel;
    //     }
    //     return this.assets.length;
    // }

    // set maxLevel(v) {
    //     this._maxLevel = v;
    // }

    @property
    public prefix: string = "Lv"

    @property
    _resIndex = 1;
    @property({ type: ResListEnum })
    get level() {
        return this._resIndex;
    }

    _delegate: PrefabLoaderDelegate = null;

    set delegate(v: PrefabLoaderDelegate) {
        this._delegate = v;
    }

    get assets(): [] {
        if (PrefabLoader.path_assets == null) {
            return
        }
        let derivedClass = this["__proto__"].constructor
        var assets = PrefabLoader.path_assets[derivedClass.path];
        return assets;
    }

    onLevelLoaded: Signal = new Signal();
    set level(v) {
        // if (this._resIndex == v) return;
        this._resIndex = v
        this._resIndex = this._resIndex < 0 ? 0 : this._resIndex;
        // if (this.maxLevel > 0) {
        // this._resIndex = this._resIndex > this.maxLevel - 1 ? this.maxLevel - 1 : this._resIndex;
        // }
        this.reloadLevel();
    }


    loadLevelInstance(levelPrefab) {
        var node = cc.instantiate(levelPrefab)
        node.setParent(this.node);
        try {
            this.onLevelLoaded.fire(node, this._resIndex);
        } catch (e) {
            console.error(e)
        }
    }

    /** 一般用于测试 */
    loadPrefab(path) {
        this.node.destroyAllChildren();
        cc.resources.release(path);
        ccUtil.getRes(path, cc.Prefab).then(v => {
            this.loadLevelInstance(v)
        })
    }

    reloadLevel() {
        this.node.destroyAllChildren();
        if (CC_EDITOR) {
            this.loadLevel();
        } else {
            this.scheduleOnce(this.loadLevel);
        }
    }

    loadLevel() {
        if (this.assets) {
            var levelPrefab = this.assets[this._resIndex]
            this.loadLevelInstance(levelPrefab)
        } else {
            let derivedClass = this["__proto__"].constructor
            if (this._delegate) {
                let res = this._delegate.onLoadPrefab(this._resIndex, derivedClass.path)
                if (res instanceof Promise) {
                    res.then(v => {
                        this.loadLevelInstance(v);
                    })
                } else {
                    this.loadLevelInstance(res);
                }
            } else {
                // if no delegate  prefab-create using prefix + index  as a path
                cc.resources.loadDir(derivedClass.path + "/" + this.prefix + (this._resIndex), cc.Prefab, (error, res) => {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    console.log(res);
                    this.loadLevelInstance(res)
                });
            }

        }
    }

    nextLevel() {
        this.level++;
    }

    prevLevel() {
        this.level--;
    }

    static loadPrefabList(path) {
        cc.resources.loadDir(path, cc.Prefab, (error, res) => {
            this.path_assets[path] = res;
            let array = res.map((item, i) => {
                return { name: item.name, value: i };
            });
            //@ts-ignore
            cc.Class.Attr.setClassAttr(this, 'level', 'enumList', array);
        });
    }

    public static register(cls, path, debug?) {
        //TODO: 真机上优化
        cls.path = path;
        cc.game.on(cc.game.EVENT_ENGINE_INITED, () => {
            if (CC_EDITOR || debug) {
                //cls.loadPrefabList(path)
            }
        })
    }
}

