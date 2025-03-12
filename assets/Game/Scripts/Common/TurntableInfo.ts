const { ccclass, property } = cc._decorator;
@ccclass
export class TurntableInfo {
    id: number = 0;
    type: number = 0;
    content: string = "";
    num: number = 0;
    text: string = "";
    chance: number = 0;
    path: string = "";

    constructor(id) {
        let data = csv.turntable.get(id);
        if (!data) return;
        this.id = data.id;
        this.type = data.type;
        this.content = data.content;
        this.num = data.num;
        this.text = data.text;
        this.chance = data.chance;
        this.path = `Img/${data.thumbnail}`;
    }

}