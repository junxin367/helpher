const {ccclass, property} = cc._decorator;
@ccclass
export  class ChapterlInfo  {
    id:number = 0;
    name: string = "";
    chapter: string = "";
    title: string = "";

    constructor(id){
        let data = csv.Chapter.get(id);
        if(!data)return;
        this.id = data.id;
        this.name =data.name;
        let str = data.name.split(" ");
        this.chapter = str[0];
        this.title = str[1];
    }

}