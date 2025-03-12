
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/Common/Unity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcQ29tbW9uXFxVbml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUErQztBQUUvQztJQUFBO0lBcUNBLENBQUM7SUFwQ1UsYUFBTyxHQUFkLFVBQWUsR0FBVztRQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUE7SUFDdkQsQ0FBQztJQU1jLGNBQVEsR0FBdkIsVUFBd0IsUUFBcUMsRUFBRSxJQUFrQjtRQUM3RSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxFQUE4QixDQUFDO1FBRS9ELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQy9CLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFBO1lBQy9DLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNsQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRU0sZUFBUyxHQUFoQixVQUFpQixRQUFxQyxFQUFFLElBQVk7UUFDaEUsS0FBSyxJQUFJLENBQUMsSUFBSSx1QkFBVSxDQUFDLEtBQUssRUFBRTtZQUM1QixJQUFJLENBQUMsR0FBRyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixhQUFhO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNSLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUN6QixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQTdCTSxnQkFBVSxHQUFHLFdBQVcsQ0FBQTtJQUN4QixnQkFBVSxHQUFHLFlBQVksQ0FBQTtJQStCcEMsWUFBQztDQXJDRCxBQXFDQyxJQUFBO2tCQXJDb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9CYXNlL1BsYXllckluZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdHkge1xuICAgIHN0YXRpYyBpY29uU09WKHNvYTogbnVtYmVyKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHNvYSA9PSAwID8gdGhpcy5JY29uX1NoYXJlIDogdGhpcy5JY29uX1ZpZGVvXG4gICAgfVxuXG4gICAgc3RhdGljIEljb25fU2hhcmUgPSBcIkltZy9zaGFyZVwiXG4gICAgc3RhdGljIEljb25fVmlkZW8gPSBcIkltZy9zaGlwaW5cIlxuXG5cbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkU2tpbihza2VsZXRvbjogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5LCBza2luOiBjc3YuU2tpbl9Sb3cpIHtcbiAgICAgICAgbGV0IGFybWF0dXJlID0gc2tlbGV0b24uYXJtYXR1cmUoKSBhcyBkcmFnb25Cb25lcy5Bcm1hdHVyZURhdGE7XG5cbiAgICAgICAgaWYgKHNraW4ucmVzKSB7XG4gICAgICAgICAgICBsZXQgc2xvdHMgPSBza2luLnJlcy5zcGxpdChcIi9cIilcbiAgICAgICAgICAgIGxldCBzbG90XzJfaW5kZXggPSBzbG90cy5tYXAodiA9PiB2LnNwbGl0KCc6JykpXG4gICAgICAgICAgICBzbG90XzJfaW5kZXguZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2xvdG5hbWUgPSB2WzBdO1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5SW5kZXggPSBwYXJzZUludCh2WzFdKTtcbiAgICAgICAgICAgICAgICBhcm1hdHVyZS5nZXRTbG90KHNsb3RuYW1lKS5kaXNwbGF5SW5kZXggPSBkaXNwbGF5SW5kZXg7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRTa2lucyhza2VsZXRvbjogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5LCB0eXBlOiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChsZXQgayBpbiBQbGF5ZXJJbmZvLnNraW5zKSB7XG4gICAgICAgICAgICBsZXQgcyA9IFBsYXllckluZm8uc2tpbnNba107XG4gICAgICAgICAgICAvLzIgOiDooajnpLog5b2T5YmN6YCJ5oupXG4gICAgICAgICAgICBpZiAocyA9PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNmZyA9IGNzdi5Ta2luLmdldChrKVxuICAgICAgICAgICAgICAgIGlmIChjZmcudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFNraW4oc2tlbGV0b24sIGNmZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn0iXX0=