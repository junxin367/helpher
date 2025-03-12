import GameEntity, { EntityState } from "./SGameEntity";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu("shooter/Bullet")
export default class SBullet extends GameEntity {

    @property
    speed: number = 5;

    @property([cc.Sprite])
    tails: cc.Sprite[] = []

    @property
    def_opacity: number = 155;

    onDead() {
        this.tails.forEach(v => {
            v.node.runAction(cc.fadeOut(0.2));
        })
    }

    onLoad() {
        super.onLoad();
        if (this.tails.length == 0) {
            this.tails = this.getComponentsInChildren(cc.Sprite);
            this.tails = this.tails.filter(v => v.node != this.node)
        }
    }

    onEnable() {
        super.onEnable();
        this.tails.forEach(v => {
            v.node.width = 0
            v.node.opacity = this.def_opacity;
        })
    }

    onCollisionEnter(other: cc.Collider, self) {

        let entity = other.getComponent(GameEntity)
        if (entity == null) {
            entity = other.getComponentInParent(GameEntity);
        }
        if (entity.isActive && this.isActive) {
            entity.decreaseHp(this.damage);
            this.decreaseHp(entity.damage)
            this.onHitEntity(entity, other)
        }
    }

    onHitEntity(entity: GameEntity, collider: cc.Collider) {

    }

    fire(v) {
        this.moveEngine.velocity = v
        this.run()
    }

    update(dt) {
        this.tails.forEach(v => {
            v.node.width += this.speed;
        })
    }
}
