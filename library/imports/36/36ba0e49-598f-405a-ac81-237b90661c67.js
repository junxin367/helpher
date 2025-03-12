"use strict";
cc._RF.push(module, '36ba05JWY9AWqyBI3uQZhxn', 'Unity');
// Game/Scripts/Common/Unity.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerInfo_1 = require("./Base/PlayerInfo");
var Unity = /** @class */ (function () {
    function Unity() {
    }
    Unity.iconSOV = function (soa) {
        return soa == 0 ? this.Icon_Share : this.Icon_Video;
    };
    Unity.loadSkin = function (skeleton, skin) {
        var armature = skeleton.armature();
        if (skin.res) {
            var slots = skin.res.split("/");
            var slot_2_index = slots.map(function (v) { return v.split(':'); });
            slot_2_index.forEach(function (v) {
                var slotname = v[0];
                var displayIndex = parseInt(v[1]);
                armature.getSlot(slotname).displayIndex = displayIndex;
            });
        }
    };
    Unity.loadSkins = function (skeleton, type) {
        for (var k in PlayerInfo_1.PlayerInfo.skins) {
            var s = PlayerInfo_1.PlayerInfo.skins[k];
            //2 : 表示 当前选择
            if (s == 2) {
                var cfg = csv.Skin.get(k);
                if (cfg.type == type) {
                    this.loadSkin(skeleton, cfg);
                }
            }
        }
    };
    Unity.Icon_Share = "Img/share";
    Unity.Icon_Video = "Img/shipin";
    return Unity;
}());
exports.default = Unity;

cc._RF.pop();