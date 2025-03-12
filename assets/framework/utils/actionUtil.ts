
export default class actionUtil {

//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
//网页客服 http://web3incubators.com/kefu.html
    //弹性效果 果冻效果 
    static jellyJump(node) {
        let spawn_action1 = cc.scaleTo(0.06, 1.6, 0.8)
        // let  spawn_action2 = this.generate_action({time : 0.12, scale_x : 1.3, scale_y  :1.3, scale_z :1})
        let spawn_action3 = cc.scaleTo(0.07, 1, 1.2)
        // let  spawn_action4 = this.generate_action({time : 0.07, scale_x : 1.3, scale_y  :1.3, scale_z: 1})
        // let  spawn_action5 = this.generate_action({time : 0.07, scale_x : 1.2, scale_y : 1.2, scale_z : 1})
        let spawn_action5 = cc.scaleTo(0.1, 1).easing(cc.easeElasticOut(0.3));
        let seq_actions = cc.sequence(spawn_action1,
            //  spawn_action2,
            spawn_action3,
            // spawn_action4,
            spawn_action5
        )
        node.runAction(seq_actions);
    }

    static jellyJump2(node, from = 0.9, scale = 1.0, duration = 0.8) {
        node.scale = from;
        let act = cc.scaleTo(duration, scale, scale).easing(cc.easeElasticOut(0.3));
        node.runAction(act)
    }

    static moveToCenter(node: cc.Node) {
        if (node.parent) {
            let rect = node.parent.getBoundingBox()
            node.position = cc.v2(rect.width / 2, rect.height / 2)
        }
    }

    /** move and form as a circle ,then bezier move to target */
    static flyNode(resNode, parentNode, targetpos, degree, len, flybeziercp = cc.v2(0, 1), endCallback = null, speed1 = 600, speed2 = 700) {
        let tar = cc.Vec2.RIGHT.rotate(cc.macro.RAD * degree)
        tar.mulSelf(len)
        let dur = len / speed1;
        let move = cc.moveBy(dur, tar).easing(cc.easeSineOut())
        let seq = cc.sequence(move, cc.callFunc(_ => {
            let wpos = resNode.getBoundingBoxToWorld().center;
            let mag = targetpos.sub(wpos).mag();
            let d2 = mag / speed2;
            actionUtil.moveBezier2(resNode, wpos, targetpos, flybeziercp, (node) => {
                node.destroy()
                endCallback && endCallback();
            }, d2)
        }))
        resNode.parent = parentNode;
        resNode.runAction(seq)
    }


    static moveBezier2(node, from, to, cp = cc.Vec2.RIGHT, callback: Function = null, dur = 1, delay = 0) {
        let bezier = []
        let x = from.x, y = from.y
        let ex = to.x, ey = to.y;
        bezier[0] = cc.v2(x, y)
        bezier[1] = cc.v2(x + (ex - x) * cp.x, y + (ey - y) * cp.y);
        bezier[2] = cc.v2(ex, ey)
        node.runAction(cc.sequence(cc.delayTime(delay), cc.bezierTo(dur, bezier).easing(cc.easeSineInOut()), cc.fadeOut(0.3), cc.callFunc(callback && callback.bind(node))))
    }

    static moveBezier(prefab, from, to, callback = null, dur = 1, delay = 0): cc.Node {
        let sprite = cc.instantiate(prefab)
        sprite.opacity = 255;
        sprite.setPosition(from)
        this.moveBezier2(sprite, from, to, cc.Vec2.RIGHT, callback, dur, delay);
        return sprite;
    }

}