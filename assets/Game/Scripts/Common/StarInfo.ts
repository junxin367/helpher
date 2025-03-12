const {ccclass, property} = cc._decorator;
@ccclass
export  class StarInfo  {
    id:number = 0;
    type: number = 0;
    chapter: number = 0;
    demand:number = 0;
    reward:number = 0;

    constructor(id){
        let data = csv.star.get(id);
        if(!data)return;
        this.id = data.id;
        this.type = data.type;
        this.chapter = data.chapter; 
        this.demand = data.demand;
        this.reward = data.reward;
    }

}