const {ccclass, property} = cc._decorator;
@ccclass
export  class LevelInfo  {
    id:number = 0;
    chapter:number = 0;
    isNew:boolean = false;
    constructor(id){
        let data = csv.level.get(id);
        if(!data)return;
        this.id = data.id;
        this.chapter = data.chapter;
        this.isNew = data.isNew == 1?true:false;
    }

}