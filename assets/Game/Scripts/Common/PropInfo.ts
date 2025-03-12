const { ccclass, property } = cc._decorator;
@ccclass
export class PropInfo {
    id: number = 0;
    icon: string = "";
    desc: string = "";
    name: string = "";


    constructor(id) {
        let data = csv.Prop.get(id);
        if (!data) return;
        this.id = data.id;
        this.icon = data.icon;
        this.desc = data.desc;
        this.name = data.name;
    }
}