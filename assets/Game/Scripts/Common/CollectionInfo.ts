const { ccclass, property } = cc._decorator;
@ccclass
export class CollectionInfo {
    id: number = 0;
    name: string = "";
    type: number = 0;
    res: string = "";
    thumbnail: string = "";

    constructor(id) {
        let data = csv.Collection.get(id);
        if (!data) return;
        this.id = data.id;
        this.type = data.type;
        this.name = data.name;
        this.res = data.res;
        this.thumbnail = `Img/decorate/thumbnail/${data.thumbnail}`;
    }

}