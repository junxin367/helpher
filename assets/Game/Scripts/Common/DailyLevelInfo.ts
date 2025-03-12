const {ccclass, property} = cc._decorator;
@ccclass
export  class DailyLevelInfo  {
    id:number = 0;
    day:string= "";
    number:string = "";
    hint_video:string = "";

    constructor(id){
        let data = csv.daily_level.get(id);
        if(!data)return;
        this.id = data.id;
        this.day = data.day;
        this.number = data.number;
        this.hint_video = data.hint_video;
    }

}