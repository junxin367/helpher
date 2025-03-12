import SpriteFrameCache from "../misc/SpriteFrameCache";
import { evt } from "../core/event";
import display from "../misc/display";
interface FlyCoinConfig { dur?: number, num?: number, interval?: number, random_length?: number, scale?: number, scaleTo?: number };
export default class ccUtil {
    public static Instantiate(origin, position?: cc.Vec3, rotation?: cc.Quat): any {
        let node = cc.instantiate(origin)
        if (position)
            node.position = position;
        if (rotation)
            node.rotation = rotation;
        return node;
    }

    static loadJson(path) {
        return new Promise((resolve, reject) => {
            cc.resources.load(path, cc.JsonAsset, (errorcode, data) => {
                resolve(data.json)
            })
        })
    }


    public static playParticles(ps: cc.ParticleSystem) {
        let subs = ps["_subParticles"]
        if (subs == null) {
            subs = ps.node.getComponentsInChildren(cc.ParticleSystem);
            ps["_subParticles"] = subs;
        }
        subs.forEach(v => {
            v.play()
        });
    }

    public static playAnimation(anim: cc.Animation, stopAfter: number) {
        anim.play();
        if (stopAfter > 0)
            evt.sleep(stopAfter).then(v => {
                anim.stop();
            })

    }
    static newButton(target: cc.Node, component: string, handler: string, listener?: cc.Node, data?: string) {
        listener = listener || target;
        let button = target.getOrAddComponent(cc.Button);
        button.transition = cc.Button.Transition.SCALE;
        if (button.clickEvents.length > 0) {
            let clickEvent = button.clickEvents[0]
            clickEvent.target = listener
            clickEvent.customEventData = data;
            clickEvent.component = component;
            clickEvent.handler = handler;
        } else {
            button.clickEvents.push(ccUtil.handler(listener, component, handler, data))
        }
        return button;
    }


    static handler(target: cc.Node, component: string, handler: string, bindstr?: string) {
        let eventHandler = new cc.Component.EventHandler();
        eventHandler.component = component
        eventHandler.target = target;
        eventHandler.handler = handler
        eventHandler.customEventData = bindstr;
        return eventHandler;
    }

    static allInfos: any = {}; // 所有信息
    static types = [];
    static get<T>(cls: { prototype: T }, ...args): T {
        //prototype.constructor.name 在js 编译后不可用
        let tt = cls.prototype;
        let idx = this.types.indexOf(tt);
        if (idx == -1) {
            this.types.push(tt);
            idx = this.types.length - 1;
        }
        let models = this.allInfos[idx]
        if (!models) {
            models = {};
            this.allInfos[idx] = models;
        }
        let _id = args.join("-");
        let info = models[_id];
        if (!info) {
            let c = cls as any;
            info = new c(args)
            // info = Reflect.construct(c, args);
            models[_id] = info;
        }
        return info as T;
    }


    static isGreaterDays(before, num = 7) {
        let now = new Date();
        var diff = now.getTime() - before
        if (diff > 86400000 * num) // 24*60*60*1000
        {
            return true;
        }
    }

    static setDisplay(sp, url, callback?) {
        if (typeof (url) == 'string') {
            return SpriteFrameCache.instance.getSpriteFrame(url).then(sf => {
                try {
                    sp.spriteFrame = sf
                    callback && callback()
                } catch (e) {
                    console.warn(e)
                }
            }).catch(e => console.warn(e))
        } else {
            if (url instanceof cc.SpriteFrame)
                sp.spriteFrame = url;
        }

    }

    static getOrAddComponent<T extends cc.Component>(obj: any, type: { prototype: T }): T {
        return obj.getOrAddComponent(type);
    }


    static formatSeconds(time) {
        var h = Math.floor(time / 3600);
        var m = Math.floor(time / 60 - h * 60);
        var s = Math.floor(time - m * 60 - h * 3600);
        var start = h > 0 ? (h < 10 ? "0" + h : h) + ":" : "";
        var end = m + ":" + (s < 10 ? "0" + s : s);
        return start + end;
    }

    static convertCameraWorldPosition(worldpos, cameraFrom: cc.Camera, cameraTo: cc.Camera) {
        let pos = cameraFrom.getWorldToScreenPoint(worldpos, cc.Vec2.ZERO)
        let from = cameraTo.getScreenToWorldPoint(pos, cc.Vec2.ZERO)
        return from;
    }

    static setButtonEnabled(btn, b) {
        let node = btn.node;
        if (btn instanceof cc.Node) {
            btn = btn.getComponent(cc.Button)
            node = btn;
        }
        if (btn) {
            node.opacity = b ? 255 : 155;
            btn.interactable = b
        }
    }

    static find<T extends cc.Component>(path: string, node: cc.Node, compType: { prototype: T }): T {
        return cc.find(path, node).getComponent(compType);
    }


    static sign(x) {
        return x > 0 ? 1 : -1;
    }

    /**
 * invoke every components 
 * @param node 
 * @param funcname 
 * @param params 
 */
    static broadCast(node, funcname, ...params): Promise<any> {
        return Promise.race(
            node.getComponents(cc.Component).filter(v => v[funcname] != null).map(v => {
                return new Promise((resolve) => {
                    let ret = v[funcname].call(v, ...params)
                    resolve(ret);
                })
            })
        )
    }

    /**
     * attempat to call func of one component which succeded 
     * @param node 
     * @param funcname 
     * @param params 
     */
    static sendMessage(node: cc.Node, funcname, ...params) {
        let ret = null;
        node.getComponents(cc.Component).some(v => {
            let f = v[funcname]
            if (f) {
                ret = f.call(v, ...params)
                return true
            }
            return false;
        })
        return ret;
    }

    //高效率getboundingbox ,不同于node.getBoundingBoxToWorld
    static getWorldBoundingBox(node: cc.Node) {
        let parent = node.parent
        if (parent == null) return;
        let box = node.getBoundingBox();
        let xy = cc.v2(box.xMin, box.yMin)
        let xy2 = cc.v2(box.xMax, box.yMax);
        xy = parent.convertToWorldSpaceAR(xy);
        xy2 = parent.convertToWorldSpaceAR(xy2);
        let wh = xy2.subSelf(xy);
        return cc.rect(xy.x, xy.y, wh.x, wh.y)
    }

    static setParent(node, newParent, keepWorldPosition = false) {
        let oldParent = node.parent;
        if (oldParent == null) return;
        let worldPos = oldParent.convertToWorldSpaceAR(node.position);
        node.removeFromParent();
        node.parent = newParent;
        if (keepWorldPosition) {
            node.position = newParent.convertToNodeSpaceAR(worldPos);
        }
    }


    static getWorldPosition(node: cc.Node) {
        if (node.parent == null) return;
        let xy = cc.v2(node.x, node.y)
        return node.parent.convertToWorldSpaceAR(xy);
    }


    static changeParent(node: cc.Node, parentNode: cc.Node, zindex = 0) {
        let pos = ccUtil.getWorldPosition(node);
        node.removeFromParent();
        parentNode.addChild(node, zindex);
        pos = parentNode.convertToNodeSpaceAR(pos)
        node.setPosition(pos)
    }

    static moveToOrigin(node, dur, ease?) {
        node.runAction(cc.moveTo(dur, cc.Vec2.ZERO).easing(ease || cc.easeSineOut()))
    }
    static _tmp_vec2: cc.Vec2 = cc.v2()
    static default_flycoin_config = {
        dur: 0.5,
        num: 5,
        interval: 0.1,
        random_length: 0,
        scale: 1,
        scaleTo: 1
    }

    /**播放 飞行动画 简化版本 */
    static async playFly(template: cc.Node, dur?, num?, interval?) {
        this.playFlyCoin(template, template.parent, display.center, ccUtil.getWorldPosition(template), { dur, num, interval })
    }

    //播放飞行动画 
    static async playFlyCoin(template: cc.Node | cc.Prefab = null, parent: cc.Node = null, from: cc.Node | cc.Vec2 = display.center, to: cc.Vec2 = display.leftTop, config?: FlyCoinConfig) {
        try {

            if (config == null) {
                config = this.default_flycoin_config
            }
            config.num = config.num || this.default_flycoin_config.num;
            for (var i = 0; i < config.num; i++) {
                let node = cc.instantiate(template) as cc.Node;
                node.parent = parent;
                let f = from;
                if (from instanceof cc.Node) {
                    f = ccUtil.getWorldPosition(from);
                } else {
                    f = from;
                }
                f = parent.convertToNodeSpaceAR(f)
                let target = parent.convertToNodeSpaceAR(to);
                if (config.random_length > 0) {
                    let round = cc.Vec2.random(this._tmp_vec2, config.random_length || this.default_flycoin_config.random_length)
                    node.setPosition(f.add(round));
                } else {
                    node.setPosition(f)
                }
                let duration = config.dur || this.default_flycoin_config.dur
                cc.tween(node).to(duration, { position: target }, { easing: "sineInOut" }).call(() => {
                    node.destroy();
                }).start();
                //缩放动画
                if (config.scale) {
                    node.scale = config.scale;
                    cc.tween(node).to(duration, { scale: config.scaleTo }).start();
                }
                await evt.sleep((config.interval || this.default_flycoin_config.interval))
            }
        } catch (e) {
            console.warn(e);
        }
    }

    public static getRes<T extends cc.Asset>(path, type: { prototype: T }): Promise<T> {
        return new Promise((resolve, reject) => {
            cc.resources.load(path, type, (err, res) => {
                if (err) return reject(err)
                resolve(res);
            })
        })
    }

}