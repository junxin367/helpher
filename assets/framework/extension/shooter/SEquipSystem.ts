import SWeapon from "./SWeapon";
const {ccclass, property} = cc._decorator;

@ccclass
export default class SEquipSystem extends cc.Component {

    @property(cc.Prefab)
    weaponPrefab:cc.Prefab = null

    weapon:SWeapon = null;

    weapons:{[index:string]:SWeapon} = {}

    start () {
        //mainweapon
        this.switchWeapon(this.weaponPrefab);
    }

    onDisable()
    {
        this.removeMainWeapon()
    }

    private createWeapon(weaponPrefab:cc.Prefab):SWeapon
    {
        let weaponNode = cc.instantiate(weaponPrefab);
        weaponNode.setParent(this.node);
        weaponNode.setPosition(0,0);
        let weapon = weaponNode.getComponent(SWeapon);
        if(!weapon){
            console.log("[SEquipSystem] target node is not a SWeapon")
            weapon = weaponNode.addComponent(SWeapon);
        }
        return weapon
    }
    
    addWeapon(k,weaponPrefab:cc.Prefab)
    {
        this.removeWeapon(k)
        let weapon = this.createWeapon(weaponPrefab)
        this.weapons[k] = weapon;
    }

    removeMainWeapon()
    {
        if(this.weapon)
        {
            this.weapon.node.destroy();
        }
    }

    removeWeapon(k)
    {
        let weapon = this.weapons[k]
        if(weapon)
            weapon.node.destroy();
        this.weapons[k] = null;
    }

    switchWeapon(weaponPrefab:cc.Prefab)
    {
        if(weaponPrefab == null)
            return;
        if(this.weapon)
        {
            this.weapon.node.destroy();
        }
        this.weapon = this.createWeapon(weaponPrefab)
    }

    // update (dt) {}
}
