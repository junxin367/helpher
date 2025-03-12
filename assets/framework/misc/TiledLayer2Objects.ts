const { ccclass, property, menu } = cc._decorator;


export interface TileAttrs {
    pos: cc.Vec2
    gid: number
    tileId: number
    properties,
    tilexy: cc.Vec2
}

export interface TileObjectFactoryInterface {
    createObject(objectLayer: cc.TiledLayer, attrs: TileAttrs);
}

@ccclass
@menu("Tiledmap工具/TiledLayer2Objects")
export default class TiledLayer2Objects extends cc.Component {

    tiledmap: cc.TiledMap;
    objectLayer: cc.TiledLayer;
    mw: number = 0;
    mh: number = 0
    tw: number = 0;
    th: number = 0;
    ht: cc.Vec2;

    _objectFactory: any;
    onLoad() {
        this.tiledmap = this.getComponent(cc.TiledMap);
        let size = this.tiledmap.getMapSize();
        this.mw = size.width;
        this.mh = size.height;
        let tilesize = this.tiledmap.getTileSize();
        this.tw = tilesize.width;
        this.th = tilesize.height;
        this.ht = cc.v2(this.tw / 2, this.th / 2);

    }

    start() {

    }


    IDX(x: cc.Vec2 | number, y?) {
        if (x instanceof cc.Vec2) {
            y = x.y;
            x = x.x;
        }
        let idx = y * this.mw + x
        return idx;
    }


    createObjects(layerName, onProgress?): Promise<any> {
        if (this._objectFactory == null) {
            console.log("[Tiledlayer2object] no factory provided!")
            return Promise.reject("no factory provided!");
        }
        this.objectLayer = this.tiledmap.getLayer(layerName)
        this.objectLayer.enabled = false;

        //从上到下，从左到右
        let sum = 0;
        let promises = []
        let i = 0;
        for (var col = 0; col < this.mw; col++) {
            for (var row = 0; row < this.mh; row++) {
                let tilexy = cc.v2(col, row)
                let gid = this.objectLayer.getTileGIDAt(tilexy);
                if (gid != 0) {
                    //create obj of gid at xy 
                    let r = this.createObj(gid, tilexy)
                    if (r) {
                        r.then(v => onProgress && onProgress(++i, sum)).catch(e => console.log(e));
                        promises.push(r);
                    }
                }
            }
        }
        sum = promises.length;
        return Promise.all(promises);
    }


    setFactory(factory: any) {
        this._objectFactory = factory;
    }

    createObj(gid: number, tilexy: cc.Vec2): Promise<any> {
        let properties = this.tiledmap.getPropertiesForGID(gid)
        if (!gid) {
            // console.warn(`gid :${gid} has no properties`)
            return;
        }
        let pos = this.objectLayer.getPositionAt(tilexy);
        pos.addSelf(cc.v2(this.ht.x, this.ht.y))
        let attrs = {
            pos, gid, tileId: this.IDX(tilexy), properties, tilexy
        }
        return this._objectFactory.createObject(this.objectLayer, attrs);
    }


}