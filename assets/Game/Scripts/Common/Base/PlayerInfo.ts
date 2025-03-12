import DataCenter, { dc, field } from "../../../../framework/core/DataCenter";
import gameUtil from "../../../../framework/utils/gameUtil";
import Platform from "../../../../framework/extension/Platform";
import { UserInfo } from "../../../../framework/extension/weak_net_game/UserInfo";
import WeakNetGame from "../../../../framework/extension/weak_net_game/WeakNetGame";
import Net from "../../../../framework/misc/Net";
import { Api } from "./ServerConfig";
import { evt } from "../../../../framework/core/event";

const arr_1234 = [1, 2, 3, 4]

@dc("PlayerInfo")
export default class PlayerInfoDC extends DataCenter {

   //解锁关卡
   @field()
   level: number = 1;

   //当前关卡
   @field()
   playinglevel: number = 1;

   //是否在游玩每日关卡
   @field()
   isPlayingDaily: boolean = false;

   //是否在游玩特殊关卡
   @field()
   isPlayingSpecial: boolean = false;

   //解锁每日关卡
   @field()
   dailylevel: number = 1;

   //当前游玩每日关卡
   @field()
   playingDailyLevel: number = 0;

   //体力
   @field()
   labour: number = 10;

   //体力恢复 剩余时间
   @field()
   buff_labour: number = 0;

   //上次退出的时间
   @field()
   lastExitTime: number = 0;


   @field()
   challenge_level_unlocked: boolean = false;




   /**邀请者的id */
   @field()
   inviterId: number = 0

   @field()
   openId: string = "";

   /**
    * 每次添加 删除 字段，需要带上版本号  
    * 升级后，新的key 会被加入，删除的key，会保留 ，版本好不会更新
    * */
   /**version 2:
    * -inited
    * version 3:
    * - isguided (removed)
    * - is_guide_4 (add)
    * - isguided_badman (add)
    */
   @field()
   version = 3;

   @field()
   inited: boolean = false;

   //是否过引导4关
   @field()
   is_guide_4 = false;


   //挑战模式阶段礼包
   @field()
   challenge_gift: number[] = [];

   //关卡星星数量
   @field()
   level_star: { [index: number]: number } = {};

   //我的收藏宝贝
   @field()
   collections: { [index: number]: number } = {};

   //是否过引导15关
   @field()
   is_guide_15 = false;

   //**是否正在引导 */
   isInGuide = false;

   /**是否引导过坏人关卡 */
   @field()
   isguided_badman: boolean = false;

   /**是否解锁道具 */
   @field()
   isUnlock_Prop: boolean = false;

   @field()
   guide: number = 1;

   @field()
   boxProgress: number = 0;

   //1 : win , -1 : lose  , 0:unsure
   winStatus: number = 0;

   ///////////////////////////[chapter help]////////////////////////////
   @field()
   newchapter: { [index: number]: number } = {}

   ///////////////////////////[skin data]////////////////////////////
   // [id:status]
   @field()
   skins: { [index: number]: number } = {}


   @field()
   isFavClaimed:boolean = false;


   claimFav(){
      this.isFavClaimed = true;
      this.save("isFavClaimed")
   }

   initSkinData() {
      csv.on('load', v => {
         if (v != 'Skin') return;
         csv.Skin.values.forEach(v => {
            if (v.unlockType == 4) {
               //默认选择
               if (this.skins[v.id] == null) {
                  this.skins[v.id] = 2;
               }
            }
         })
      })
   }

   /**是否已解锁 */
   isSkinUnlocked(id) {
      let s = this.skins[id]
      return s >= 1;
   }
   /**是否正在使用中 */
   isSkinUsing(id) {
      return this.skins[id] == 2;
   }


   isAllSkinUnlocked() {
      let res = csv.Skin.values.filter(v => arr_1234.indexOf(v.subType) > -1 && v.unlockType === 3)
         .every(_ => this.isSkinUnlocked(_.id));
      return res;
   }

   unlockSkin(id) {
      if (this.isSkinUnlocked(id)) return;
      this.skins[id] = 1;
      this.save('skins');
   }

   randomVideoSkin() { // 不含主题和钥匙
      let res = csv.Skin.values.filter(_ => arr_1234.indexOf(_.subType) > -1 && _.unlockType === 3);
      g.shuffle(res);
      for (let i = 0; i < res.length; i++) {
         if (!this.skins[res[i].id]) {
            return res[i].id;
         }
      }
      return 0;
   }

   useSkin(id) {
      if (!this.isSkinUnlocked(id)) return;
      let data: csv.Skin_Row = csv.Skin.get(id);
      let sameTypeSkins = csv.Skin.search(v => v.type == data.type && v.subType == data.subType && v.id != id)
      sameTypeSkins.forEach(v => {
         if (PlayerInfo.skins[v.id] == 2)
            PlayerInfo.skins[v.id] = 1;
      })
      this.skins[id] = 2;
      this.save('skins');
   }

   ///////////////////////////[skin data end]////////////////////////////


   ///////////////////////////[collection data start]////////////////////////////

   initDecoreateData() {
      csv.on('load', v => {
         if (v != 'Collection') return;
         csv.Collection.values.forEach(v => {
            if (v.unlockType == 1) {
               //默认选择
               if (this.collections[v.id] == null) {
                  this.collections[v.id] = 2;
               }
            }
         })
      })
   }

   /**是否已解锁收藏 */
   isDecorateUnlocked(id) {
      let s = this.collections[id];
      return s >= 1;
   }

   /**是否正在使用收藏中 */
   isDecorateUsing(id) {
      return this.collections[id] === 2;
   }

   unlockDecorate(id) {
      if (this.isDecorateUnlocked(id)) return;
      this.collections[id] = 1;
      this.save('collections');
   }

   useDecorate(id) {
      if (!this.isDecorateUnlocked(id)) return;
      let data: csv.Collection_Row = csv.Collection.get(id);
      let sameTypeDecorates = csv.Collection.search(v => v.type == data.type && v.id != id);
      sameTypeDecorates.forEach(v => {
         if (data.type !== 1 && PlayerInfo.collections[v.id] == 2)
            PlayerInfo.collections[v.id] = 1;
      });
      this.collections[id] = 2;
      this.save('collections');
   }


   ///////////////////////////[sign start]////////////////////////////
   @field()
   signCount: number = 0;

   @field()
   signTime: number = 0;

   ///////////////////////////[sign start]////////////////////////////


   @field()
   star: number = 0;


   //连续胜利
   winLink: number = 0;

   @field({ persistent: false, enumerable: false, readonly: true })
   lld: Date = new Date();

   nowTili: number = 0;
   //当天是否消耗过体力
   @field()
   isUse: boolean = false;

   maxDailyLv: number = 0;
   playTime: number = 0;
   isRandomLevel: boolean = false;
   init() {
      //如果是新用户
      if (UserInfo.isNew) {
         //如果没有过初始化用户数据
         if (this.inited == false) {
            this.inited = true;
            //初始化初始体力
            this.labour = csv.Config.Init_Energy || 5;
            //变成未引导状态 
            //0表示未进行过任何引导
            this.guide = 0;
            this.save();
         }
      }
   }

   onStartLevel() {
      this.playTime = 0;
   }

   onLoadAll() {
      // this.updateBuffs();
      //update skin data
      this.initSkinData();
      this.initDecoreateData();
   }

   saveExit() {
      this.lastExitTime = Date.now() / 1000;
      this.save('buff_labour')
      console.log(this.buff_labour);
      this.save("lastExitTime")
   }

   updateBuffs() {

      if (this.buff_labour > 0) {
         let diff_sec = (Date.now() / 1000 - this.lastExitTime);
         // 200 260 
         // -60
         console.log("离线时体力" + this.labour);
         console.log("离线时长:" + diff_sec);
         let old = this.labour;
         let [coin, leftTime] = gameUtil.calcOfflineReward(this.labour, this.buff_labour, diff_sec, csv.Config.Max_Energy, 300);
         if (coin >= 0) {
            this.buff_labour = leftTime;
            this.labour = coin;
         }
         let offsetBeforeLLD = (Date.now() - this.lld.getTime()) / 1000;
         //离上次登陆时间 过了超过 10分钟,那么必然恢复满体力
         if (offsetBeforeLLD > 60 * 10 * csv.Config.Max_Energy) {
            this.labour = csv.Config.Max_Energy;
         }
         console.log("现在体力" + this.labour);
         PlayerInfo.nowTili = this.labour;
         // if (old < csv.Config.Max_Energy && this.labour >= csv.Config.Max_Energy && !UserInfo.isDy) {
         //    vm.show("Prefabs/UI/UISubscriber");
         // }
         //  if (this.labour > 5) return;
         //  let left = this.buff_labour - diff_sec;
         //  if (left < 0) {
         //      let offline_reward = Math.floor(diff_sec / 300)
         //      if (offline_reward <= 0) offline_reward = 1;
         //      this.labour += Math.min(offline_reward, 5 - this.labour);
         //      if (this.labour >= 5) {
         //          this.buff_labour = 0
         //      } else {
         //          let left_sec = this.buff_labour - diff_sec % 300;
         //          if (left_sec < 0) left_sec = 300 + left_sec;
         //          this.buff_labour = left_sec
         //      }
         //  } else {
         //      this.buff_labour = left;
         //  }
      }
   }

   upRank() {
      // if (window.tt) return;
      let kvs = [
         { key: "level", value: JSON.stringify({ level: PlayerInfo.level, challengelevel: PlayerInfo.dailylevel }) },
      ]
      Platform.uploadScores(kvs)
   }

   addLabour(add) {
      let c = PlayerInfo.labour + add
      PlayerInfo.labour = c;
      PlayerInfo.save('labour');
   }

   isShowSDK() {
      //@ts-ignore
      if (window.qq) {
         return false;
         //@ts-ignore
      } else if (window.tt) {
         return false;
      } else if (CC_DEBUG) {
         return false;
         //@ts-ignore
      } else if (window.wx) {
         return true;
      } else {
         return false;
      }
   }

   isWechat() {
      if (window.qq) {
         return false;
         //@ts-ignore
      } else if (window.tt) {
         return false;
      } else if (CC_DEBUG) {
         return true;
         //@ts-ignore
      } else if (window.wx) {
         return true;
      }
   }

   save(v?, force = false) {
      if (v) {
         super.save(v);
         this.save_timestamps = Date.now();
         super.save("save_timestamps")
         return;
      }
      else {
         super.save();
      }
      let time = this.save_timestamps
      // do 
      if (!force) {
         if (Date.now() - time < 1000 * csv.Config.Sync_User_Data_Time) {
            console.log("上报太频繁，下次同步。。。。")
            return;
         }
      }
      //未登陆不记录保存时间 
      let data = this.toString()
      if (v == null) {
         console.warn("Start sync to server!", data);
         WeakNetGame.syncData(data).then(v => {
            if (v) {
               //同步成功
               console.log("上报用户数据成功")
            }
         })
      }
   }

   /**领取邀请奖励 */
   // 今天邀请(新，老)
   // openId, invitee, avatarUrl, status
   //总邀请
   // openId, inviteeCount ,claimedCount;
   claimInviteReward() {

   }

   /*获取指定关卡所在的章节数，不传参则返回当前已解锁的最后一章 */
   getChapter(lv?) {
      let level = lv ? lv : this.level
      let n = Math.floor((level - 1) / 10) + 1;
      return n;
   }

   isChapterNew(c) {
      return this.newchapter[c] == null;
   }

   markChapterOld(c) {
      this.newchapter[c] = 1;
      PlayerInfo.save('newchapter')
   }

   /**获得当前解锁的关卡数 */
   getCurrentLevel() {
      if (this.isPlayingDaily) {
         return PlayerInfo.dailylevel;
      } else {
         return PlayerInfo.level;
      }
   }

   /**获得当前正在游玩的关卡数 */
   getCurrentPlayingLevel() {
      if (this.isPlayingDaily) {
         return PlayerInfo.playingDailyLevel;
      } else {
         return PlayerInfo.playinglevel;
      }
   }

   resetLevel() {
      this.winStatus = 0;
   }

   lose() {
      this.winStatus = -1;
   }

   //下一关
   nextLevel() {
      this.winStatus = 1
      let block = false;
      if (this.isPlayingDaily) {
         this.playingDailyLevel += 1;
         if (this.playingDailyLevel > this.dailylevel) {
            this.dailylevel = this.playingDailyLevel;
            if (!window.tt) {
               UserInfo.uploadUserInfo({ level: this.level, challengelevel: this.dailylevel });
               this.upRank();
            }
         }
      } else {
         this.playinglevel += 1;
         if (this.playinglevel > this.level && this.challenge_level_unlocked == false) {
            this.level = this.playinglevel;
            if (this.level === (csv.Config.Chanllenge_Unlock_Level || 25)) {
               vm.show("Prefabs/UI/UIUnlockMode")
               this.challenge_level_unlocked = true;
               block = true;
            }
            csv.Skin.values.forEach(v => {
               if (v.unlockType == 1 && !PlayerInfo.isSkinUnlocked(v.id) && this.level == v.unlock1) {
                  // PlayerInfo.unlockSkin(v.id);
                  vm.show("Prefabs/UI/UIUnlockSkin", v.id);
                  block = true;
               }
            });
            let c = PlayerInfo.getChapter(this.level);
            if (PlayerInfo.star >= csv.star.get(c).demand) {
               let bNew = PlayerInfo.isChapterNew(c)
               if (c > 1) {
                  if (bNew) {
                     vm.show("Prefabs/story/help", c)
                     block = true;
                     PlayerInfo.markChapterOld(c);
                  }
               }
            }
            if (!window.tt) {
               UserInfo.uploadUserInfo({ level: this.level, challengelevel: this.dailylevel });
               this.upRank();
            }

         }
      }
      this.save();
      return block;
   }

   // 比较当前日期和每日挑战表格里的日期 
   isGreaterDate(date2) {
      let oDate1: Date = this.lld
      // oDate1 = new Date("2020/5/16")
      // console.log("当前日期",oDate1);

      var oDate2 = new Date(date2);
      // console.log("表格日期",oDate2);
      if (oDate1.getTime() >= oDate2.getTime()) {
         //  console.log("当前日期大于或等于表格日期");
         return true;
      } else {
         // console.log("当前日期小于表格日期");
         return false;
      }

   }

   isNewLevel(date2) {
      let oDate1: Date = this.lld
      // oDate1 = new Date("2020/5/16")
      // console.log("当前日期",oDate1.toDateString());
      var oDate2 = new Date(date2);
      // console.log("表格日期",oDate2.toDateString());
      if (oDate1.toDateString() == oDate2.toDateString()) {
         // console.log("当前日期等于表格日期");
         return true;
      } else {
         // console.log("当前日期不等于于表格日期");
         return false;
      }
   }
}


export let PlayerInfo: PlayerInfoDC = DataCenter.register(PlayerInfoDC);
