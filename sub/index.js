"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Consts = {
	OpenDataKeys: {
		InitKey: "initKey",
		Grade: "testkey",
		LevelKey: "level",
		ScoreKey: "highScore" // json.string

	},
	DomainAction: {
		FetchFriend: "FetchFriend",
		FetchGroup: "FetchGroup",
		FetchFriendLevel: "FriendRank",
		FetchChallengFriendLevel: "FriendChallengRank",
		EndRank: "EndRank",
		EndChallengRank: "EndChallengRank",

		//好友关卡进度排行
		FetchFriendScore: "shareMessageToFriend",
		//好友关卡得分排行
		HorConmpar: "HorConmpar",
		//横向比较 horizontal comparison
		Paging: "Paging",
		Scrolling: "Scrolling"
	}
};
var PAGE_SIZE = 6;
var ITEM_WIDTH = 600;
var ITEM_HEIGHT = 100;
var Max_Page = 0;
var RANK_PAGE_HEIGHT = ITEM_HEIGHT * PAGE_SIZE;
var SHARE_LIST = [];
var PLAYER_RANK = -1;
var ISLAST = false;
var ISCHALLENG = false;


var dataSorter = function dataSorter(gameDatas) {
	var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Consts.OpenDataKeys.LevelKey;
	var data = [];

	for (var i = 0; i < gameDatas.length; i++) {
		if (gameDatas[i].KVDataList[0]) {
			data.push(gameDatas[i]);
		}
	} // Max_Page = Math.ceil(data.length / PAGE_SIZE) - 1
	// console.log(Max_Page, "Max_Page")
	// return data


	var newData = data.sort(function (a, b) {
		var va = JSON.parse(a.KVDataList[0].value).level ? JSON.parse(a.KVDataList[0].value).level - 0 : 0;
		var vb = JSON.parse(b.KVDataList[0].value).level ? JSON.parse(b.KVDataList[0].value).level - 0 : 0;

		return vb - va; // const kvDataA = a.KVDataList.find(kvData => kvData.key === field);
		// const kvDataB = b.KVDataList.find(kvData => kvData.key === field);
		// const gradeA = kvDataA ? parseInt(kvDataA.value || 0) : 0;
		// const gradeB = kvDataB ? parseInt(kvDataB.value || 0) : 0;
		// return gradeA > gradeB ? -1 : gradeA < gradeB ? 1 : 0;
	});
	Max_Page = Math.ceil(data.length / PAGE_SIZE) - 1;
	console.log(Max_Page, "Max_Page");
	return newData;
};

var dataSorter2 = function dataSorter2(gameDatas) {
	var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Consts.OpenDataKeys.LevelKey;
	var data = [];

	for (var i = 0; i < gameDatas.length; i++) {
		if (gameDatas[i].KVDataList[0]) {
			data.push(gameDatas[i]);
		}
	} // Max_Page = Math.ceil(data.length / PAGE_SIZE) - 1
	// console.log(Max_Page, "Max_Page")
	// return data


	var newData = data.sort(function (a, b) {
		var va = JSON.parse(a.KVDataList[0].value).challengelevel ? JSON.parse(a.KVDataList[0].value).challengelevel - 0 : 0;
		var vb = JSON.parse(b.KVDataList[0].value).challengelevel ? JSON.parse(b.KVDataList[0].value).challengelevel - 0 : 0;

		return vb - va; // const kvDataA = a.KVDataList.find(kvData => kvData.key === field);
		// const kvDataB = b.KVDataList.find(kvData => kvData.key === field);
		// const gradeA = kvDataA ? parseInt(kvDataA.value || 0) : 0;
		// const gradeB = kvDataB ? parseInt(kvDataB.value || 0) : 0;
		// return gradeA > gradeB ? -1 : gradeA < gradeB ? 1 : 0;
	});
	Max_Page = Math.ceil(data.length / PAGE_SIZE) - 1;
	console.log(Max_Page, "Max_Page");
	return newData;
};

var RankListRenderer =
	/*#__PURE__*/
	function () {
		function RankListRenderer() {
			_classCallCheck(this, RankListRenderer);

			this.clearFlag = false;
			this.offsetY = 0;
			this.maxOffsetY = 0;
			this.gameDatas = []; //https://developers.weixin.qq.com/minigame/dev/document/open-api/data/UserGameData.html
			// this.gameLevelDatas = [];

			this.curDataType = Consts.OpenDataKeys.LevelKey;
			this.curPageIndex = 0; //当前页码

			this.drawIconCount = 0;
			this.rankCanvasList = [];
			this.selfUserInfo = null; //avatarUrl //https://developers.weixin.qq.com/minigame/dev/document/open-api/data/wx.getUserInfo.html

			this.init();
		}

		_createClass(RankListRenderer, [{
			key: "init",
			value: function init() {
				this.sharedCanvas = wx.getSharedCanvas();
				this.sharedCtx = this.sharedCanvas.getContext('2d');
				this.fetchSelfInfo();
				wx.getUserCloudStorage({
					keyList: [Consts.OpenDataKeys.LevelKey],
					success: function success(res) {
						console.log("wx.getUserCloudStorage success", res);

						if (!res.KVDataList[0]) {
							wx.setUserCloudStorage({
								KVDataList: [{
									key: Consts.OpenDataKeys.LevelKey,
									value: "1"
								}],
								success: function success(res) {
									console.log("wx.setUserCloudStorage success", res);
								},
								fail: function fail(res) {
									console.log("wx.setUserCloudStorage fail", res);
								}
							});
						}
					},
					fail: function fail(res) {
						console.log("wx.getUserCloudStorage fail", res);
					}
				});
			}
		}, {
			key: "listen",
			value: function listen() {
				var _this = this;

				//msg -> {action, data}
				wx.onMessage(function (msg) {
					console.log("ranklist wx.onMessage", msg);

					switch (msg.action) {
						case Consts.DomainAction.HorConmpar:
							_this.clearFlag = true;

							_this.fetchHorFriendScoreData(msg.data, msg.dataEx); // this.horizontalComparison()


							break;

						case Consts.DomainAction.FetchFriendLevel:
							_this.clearFlag = true;
							_this.ISCHALLENG = false;

							_this.fetchFriendLevelData();

							break;
						case Consts.DomainAction.FetchChallengFriendLevel:
							_this.clearFlag = true;
							_this.ISCHALLENG = true;

							_this.fetchFriendLevelData();

							break;


						case Consts.DomainAction.EndRank:
							_this.clearFlag = true;
							_this.ISCHALLENG = false;
							_this.fetchFriendScoreData();

							break;

						case Consts.DomainAction.EndChallengRank:
							_this.clearFlag = true;
							_this.ISCHALLENG = true;

							_this.fetchFriendScoreData();

							break;

						case Consts.DomainAction.FetchFriendScore:
							_this.clearFlag = true;


							_this.PotentialFriendList();
							var phoneInfo = null;
							wx.onTouchStart(function (res) {
								wx.getSystemInfo({
									success: function success(res) {
										phoneInfo = res;
									}
								});

								let barheight = (phoneInfo.statusBarHeight > 20) ? phoneInfo.statusBarHeight : 0;
								if (res.touches[0].clientY > phoneInfo.screenHeight / 1334 * 440 - barheight && res.touches[0].clientY < phoneInfo.screenHeight / 1334 * 440 + 300 - barheight) {

									var index = Math.floor((res.touches[0].clientY - 230) / 60); //配置分享内容

									var info = JSON.parse(msg.data);
									wx.shareMessageToFriend({
										openId: SHARE_LIST[index],
										title: info ? info.title : null,
										imageUrl: info ? info.imageUrl : null
									});
									wx.offTouchStart();
								}
								else {
									wx.offTouchStart();
									console.log("off");
								}
							});

							break;

						case Consts.DomainAction.FetchGroup:
							if (!msg.data) {
								return;
							}

							_this.fetchGroupData(msg.data);

							break;

						case Consts.DomainAction.Paging:
							var page = msg.data;
							_this.curPageIndex += page;

							if (_this.curPageIndex < 0) {
								_this.curPageIndex = 0;
								console.log("已是第一页");
								return;
							} else if (_this.curPageIndex > Max_Page) {
								_this.curPageIndex = Max_Page;
								console.log("已是最后一页");
								return;
							}

							_this.showPagedRanks(_this.curPageIndex);

							break;

						case Consts.DomainAction.Scrolling:
							_this.clearFlag = false;

							if (!_this.gameDatas.length) {
								return;
							}

							var deltaY = msg.data;
							var newOffsetY = _this.offsetY + deltaY;

							if (newOffsetY < 0) {
								// console.log("前面没有更多了");
								return;
							}

							if (newOffsetY + PAGE_SIZE * ITEM_HEIGHT > _this.maxOffsetY) {
								// console.log(newOffsetY, PAGE_SIZE * ITEM_HEIGHT, _this.maxOffsetY)
								// console.log("后面没有更多了");
								return;
							}

							_this.offsetY = newOffsetY;

							_this.showRanks(newOffsetY);

							break;

						default:
							console.log("\u672A\u77E5\u6D88\u606F\u7C7B\u578B:msg.action=".concat(msg.action));
							break;
					}
				});
			}
		}, {
			key: "fetchSelfInfo",
			value: function fetchSelfInfo() {
				var _this2 = this;

				wx.getUserInfo({
					openIdList: ["selfOpenId"],
					success: function success(res) {
						console.log("fetchSelfCloudData success res=>", res);
						_this2.selfUserInfo = res.data[0];
					}
				});
			}
		}, {
			key: "fetchGroupData",
			value: function fetchGroupData(shareTicket) {
				var _this3 = this;

				//取出群同玩成员数据
				wx.getGroupCloudStorage({
					shareTicket: shareTicket,
					keyList: [Consts.OpenDataKeys.Grade],
					success: function success(res) {
						console.log("wx.getGroupCloudStorage success", res);
						_this3.gameDatas = dataSorter(res.data);
						var dataLen = _this3.gameDatas.length;
						_this3.offsetY = 0;
						_this3.maxOffsetY = dataLen * ITEM_HEIGHT;

						if (dataLen) {
							_this3.showRanks(0);
						}
					},
					fail: function fail(res) {
						console.log("wx.getGroupCloudStorage fail", res);
					}
				});
			} //取出所有好友数据 关卡进度

		}, {
			key: "fetchFriendLevelData",
			value: function fetchFriendLevelData() {
				var _this4 = this;

				console.log("wx.getFriendCloudStorage success");
				wx.getFriendCloudStorage({
					keyList: [Consts.OpenDataKeys.LevelKey, Consts.OpenDataKeys.ScoreKey],
					success: function success(res) {
						console.log("wx.getFriendCloudStorage success", res);
						_this4.curDataType = Consts.OpenDataKeys.LevelKey;
						if(_this4.ISCHALLENG){
							_this4.gameDatas = dataSorter2(res.data, _this4.curDataType);
						}
						else{
							_this4.gameDatas = dataSorter(res.data, _this4.curDataType);
						}
						var dataLen = _this4.gameDatas.length;
						_this4.offsetY = 0;
						_this4.maxOffsetY = dataLen * ITEM_HEIGHT;
						_this4.PLAYER_RANK = -1;
						if (dataLen) {
							_this4.showRanks(0);
						}
					},
					fail: function fail(res) {
						console.log("wx.getFriendCloudStorage fail", res);
					}
				});
			} //取出所有好友数据 关卡得分

		}, {
			key: "fetchFriendScoreData",
			value: function fetchFriendScoreData() {
				var _this5 = this;

				wx.getFriendCloudStorage({
					keyList: [Consts.OpenDataKeys.LevelKey],
					success: function success(res) {
						console.log("wx.getFriendCloudStorage success", res);

						_this5.curDataType = Consts.OpenDataKeys.ScoreKey;
						if (!_this5.ISCHALLENG) {
							var gamedata = dataSorter(res.data, _this5.curDataType);
						}
						else {
							var gamedata = dataSorter2(res.data, _this5.curDataType);
						}
						for (var i = 0; i < gamedata.length; i++) {
							if (gamedata[i].avatarUrl === _this5.selfUserInfo.avatarUrl) {
								_this5.PLAYER_RANK = i;
								if (_this5.PLAYER_RANK == gamedata.length - 1)
									_this5.ISLAST = true;
								else {
									_this5.ISLAST = false;
								}
							}
						}
						var datas = gamedata.slice(Math.max(_this5.PLAYER_RANK - 1, 0), Math.min(_this5.PLAYER_RANK + 2, gamedata.length));
						// for(var i = 0;i< 3 - datas.length;i++){
						// 	datas.push({avatarUrl:"sub/subdomain/touxiang" + Math.ceil(Math.random() * 4)  + ".png",KVDataList:[{key: "level", value: JSON.stringify({"level":Math.ceil(Math.random() * 40)})}]})
						// }
						if (_this5.PLAYER_RANK == gamedata.length) {
							_this5.gameDatas = datas;
						}
						else {
							_this5.gameDatas = datas.reverse();

						}
						var dataLen = _this5.gameDatas.length;
						_this5.offsetY = 0;
						_this5.maxOffsetY = dataLen * ITEM_HEIGHT;

						if (dataLen) {
							_this5.showRanks(0);
						}
					},
					fail: function fail(res) {
						console.log("wx.getFriendCloudStorage fail", res);
					}
				});
			} //定向分享列表

		}, {
			key: "PotentialFriendList",
			value: function PotentialFriendList() {
				var _this6 = this;

				wx.getPotentialFriendList({
					success: function success(res) {
						console.log("wx.getGroupCloudStorage success", res);
						var list = res["list"];
						_this6.rankCanvasList = [];
						var sharedCanvas = wx.getSharedCanvas();
						var sharedCtx = sharedCanvas.getContext('2d');
						SHARE_LIST = [];
						for (var i = 0; i < list.length; i++) {
							_this6.draoList(sharedCtx, list[i], 120 * i);
						}
					},
					fail: function fail(res) {
						console.log("wx.getGroupCloudStorage fail", res);
					}
				});
			} //

		}, {
			key: "draoList",
			value: function draoList(ctx, info, itemGapY) {
				var _this7 = this;

				var nick = info.nickname.length <= 5 ? info.nickname : info.nickname.substr(0, 5);

				ctx.fillStyle = "#c0d0d8";
				ctx.fillRect(0, itemGapY, 478, 110);
				var avatarX = 55;
				var avatarY = 15 + itemGapY;
				var avatarW = 80;
				var avatarH = 80;
				this.drawAvatar(ctx, info.avatarUrl, avatarX, avatarY, avatarW, avatarH, function (avatarImg) {
					ctx.drawImage(avatarImg, avatarX, avatarY, avatarW, avatarH);
				});
				ctx.fillStyle = "#6e5443";
				ctx.textAlign = "left";
				ctx.baseLine = "middle";
				ctx.font = "30px Helvetica";
				ctx.fillText(nick, 210, 70 + itemGapY);
				ctx.fillStyle = "#6e5443";
				ctx.textAlign = "left";
				ctx.baseLine = "middle";
				ctx.font = "35px Helvetica";
				ctx.fillText("分享", 370, 70 + itemGapY);
				SHARE_LIST.push(info.openid);
			} // 横向比较关卡得分

		}, {
			key: "fetchHorFriendScoreData",
			value: function fetchHorFriendScoreData(level, selfScore) {
				var _this8 = this;

				wx.getFriendCloudStorage({
					keyList: [Consts.OpenDataKeys.ScoreKey + level],
					success: function success(res) {
						console.log("wx.fetchHorFriendScoreData success", res);
						_this8.curDataType = Consts.OpenDataKeys.ScoreKey;

						for (var i = 0; i < res.data.length; i++) {
							if (res.data[i].avatarUrl === _this8.selfUserInfo.avatarUrl) {
								if (res.data[i].KVDataList[0].value < selfScore) {
									res.data[i].KVDataList[0].value = selfScore;
								}

								break;
							}
						}

						_this8.gameDatas = dataSorter(res.data, _this8.curDataType);

						_this8.horizontalComparison(level);
					},
					fail: function fail(res) {
						console.log("wx.fetchHorFriendScoreData fail", res);
					}
				});
			} // 根据滑动偏移绘制排行榜画布

		}, {
			key: "showRanks",
			value: function showRanks(offsetY) {
				this.curOffsetY = offsetY;
				var sharedWidth = this.sharedCanvas.width;
				var sharedHeight = this.sharedCanvas.height;
				this.sharedCtx.clearRect(0, 0, 1000, 1000);

				if (this.clearFlag) {
					this.clearFlag = false;
					this.rankCanvasList = [];
				}
				var pageY = offsetY % RANK_PAGE_HEIGHT;
				var pageIndex = Math.floor(offsetY / RANK_PAGE_HEIGHT);
				var isOverOnePage = pageY + sharedHeight > RANK_PAGE_HEIGHT;

				var rankCanvas = this.getCanvasByPageIndex(pageIndex);


				if (!isOverOnePage) {
					this.sharedCtx.drawImage(rankCanvas, 0, pageY, sharedWidth, sharedHeight, 0, 0, sharedWidth, sharedHeight);
				} else {

					//绘制当前页后半部分
					var partialHeight = RANK_PAGE_HEIGHT - pageY;
					this.sharedCtx.drawImage(rankCanvas, 0, pageY, sharedWidth, partialHeight, 0, 0, sharedWidth, partialHeight); //绘制下一页前半部分

					rankCanvas = this.getCanvasByPageIndex(pageIndex + 1);
					this.sharedCtx.drawImage(rankCanvas, 0, 0, sharedWidth, sharedHeight - partialHeight, 0, partialHeight, sharedWidth, sharedHeight - partialHeight);
				}
			} // 获取指定页码的排行榜

		}, {
			key: "getCanvasByPageIndex",
			value: function getCanvasByPageIndex(pageIndex) {
				var canvas = this.rankCanvasList[pageIndex];

				if (!canvas) {
					var canvas = wx.createCanvas();
					canvas.width = this.sharedCanvas.width;
					canvas.height = RANK_PAGE_HEIGHT;
					this.rankCanvasList[pageIndex] = canvas;
					var ctx = canvas.getContext('2d');
					this.drawPagedRanks(ctx, pageIndex);
					// this.drawRankItemEx(ctx, 2, this.gameDatas[2], 600);

				}

				return canvas;
			}
		}, {
			key: "drawPagedRanks",
			value: function drawPagedRanks(ctx, pageIndex) {
				for (var i = 0; i < PAGE_SIZE; i++) {
					var pageOffset = pageIndex * PAGE_SIZE;
					var data = this.gameDatas[pageOffset + i];
					if (!data) continue;

					if (this.PLAYER_RANK >= 0) {
						var num = 0;
						if (this.ISLAST)
							num = 1;

						this.drawWinRankItem(ctx, pageOffset + i + 1, data, 150 * (i + num));

					}
					else {
						this.drawRankItemEx(ctx, pageOffset + i + 1, data, ITEM_HEIGHT * i);
					}

					if (data.avatarUrl == this.selfUserInfo.avatarUrl) {
						console.log(data)

						// this.drawRankItemEx(ctx, this.gameDatas[2], data, 600);
						// ctx.fillStyle = "#030303";
						// ctx.textAlign = "left";
						// ctx.baseLine = "middle";
						// ctx.font = "25px 黑体";
						// ctx.fillText("nick", 270, 40 + 500);
					}
				}

			}
		}, {
			key: "drawAvatar",
			value: function drawAvatar(ctx, avatarUrl, x, y, w, h, cb) {
				// avatarUrl = avatarUrl.substr(0, avatarUrl.lastIndexOf('/')) + "/132";
				ctx.fillStyle = "#ffffff";
				ctx.fillRect(x - 3, y - 3, w + 6, h + 6);
				var avatarImg = wx.createImage();
				avatarImg.src = avatarUrl;

				avatarImg.onload = function () {
					cb(avatarImg);
				};
			}
		}, {
			key: "drawRankItemEx",
			value: function drawRankItemEx(ctx, rank, data, itemGapY) {
				var _this9 = this;

				var nick = data.nickname.length <= 5 ? data.nickname : data.nickname.substr(0, 10);
				var kvData = data.KVDataList[0];
				if (!_this9.ISCHALLENG) {
					var	grade = JSON.parse(kvData.value).level ? JSON.parse(kvData.value).level : 0;

				}
				else {
					var	grade = JSON.parse(kvData.value).challengelevel ? JSON.parse(kvData.value).challengelevel : 0;
				}
				var score = 0;

				if (data.KVDataList[1]) {
					score = JSON.parse(data.KVDataList[1].value).highScore ? JSON.parse(data.KVDataList[1].value).highScore : 0;
				}
				//背景颜色

				ctx.fillStyle = "#dcedf9";
				ctx.fillRect(15, itemGapY, ITEM_WIDTH - 30, 90);


				//名次 这里可以设置前几名的名次背景


				if (rank <= 3) {
					var rankImg = wx.createImage();
					rankImg.src = "sub/subdomain/ranking_no" + rank + ".png";


					rankImg.onload = function () {
						// if (prevOffsetY == this.offsetY) {
						ctx.drawImage(rankImg, 25, 20 + itemGapY, 56, 56); // }
						_this9.showRanks(_this9.curOffsetY);

					};
				} else {
					ctx.fillStyle = "#6e5443";
					ctx.textAlign = "right";
					ctx.baseLine = "middle";
					ctx.font = "40px Helvetica";
					ctx.fillText("".concat(rank), 60, 60 + itemGapY);
				}
				//头像
				var avatarX = 125;
				var avatarY = 20 + itemGapY;
				var avatarW = 60;
				var avatarH = 60;
				this.drawAvatar(ctx, data.avatarUrl, avatarX, avatarY, avatarW, avatarH, function (avatarImg) {
					// if (prevOffsetY == this.offsetY) {
					ctx.drawImage(avatarImg, avatarX, avatarY, avatarW, avatarH); // }
					_this9.showRanks(_this9.curOffsetY);

					// if (_this9.drawIconCount >= _this9.gameDatas.length - 1 || _this9.drawIconCount >= PAGE_SIZE - 1) {
					// 	_this9.drawIconCount = 0;
					// 	console.log(_this9.curOffsetY)
					// 	} else {
					// 		_this9.drawIconCount++;

					// 	}
				});
				//名字
				ctx.fillStyle = "#030303";
				ctx.textAlign = "left";
				ctx.baseLine = "middle";
				ctx.font = "35px 黑体";
				ctx.fillText(nick, 210, 60 + itemGapY, 185);


				ctx.fillStyle = "#b25339";
				ctx.textAlign = "left";
				ctx.baseLine = "middle";
				ctx.font = "35px 黑体";
				//分数
				//段位
				var rankImgdw = wx.createImage();

				rankImgdw.onload = function () {
					ctx.drawImage(rankImgdw, 360, 30 + itemGapY, 50, 50);
					_this9.showRanks(_this9.curOffsetY);
				};
				// ctx.fillStyle = "#030303";
				// ctx.textAlign = "left";
				// ctx.baseLine = "middle";
				// ctx.font = "40px 黑体";
				// ctx.fillText(`${grade}关`, 450, 60 + itemGapY); //分数
				ctx.fillStyle = "#030303";
				ctx.textAlign = "left";
				ctx.baseLine = "middle";
				ctx.font = "40px 黑体";
				ctx.fillText(grade, 450, 60 + itemGapY, 40); //分数

				ctx.fillStyle = "#3e3e3e";
				ctx.textAlign = "left";
				ctx.baseLine = "middle";
				ctx.font = "40px 黑体";
				ctx.fillText(`关`, 490, 60 + itemGapY);
			}
		}, {
			key: "drawWinRankItem",
			value: function drawWinRankItem(ctx, rank, data, itemGapY) {
				var _this9 = this;

				// var nick = data.nickname.length <= 5 ? data.nickname : data.nickname.substr(0, 10);
				var kvData = data.KVDataList[0];
				if (!_this9.ISCHALLENG) {
					var	grade = JSON.parse(kvData.value).level ? JSON.parse(kvData.value).level : 0;

				}
				else {
					var	grade = JSON.parse(kvData.value).challengelevel ? JSON.parse(kvData.value).challengelevel : 0;
				}
				var score = 0;
				if (_this9.PLAYER_RANK > 0) {
					rank += _this9.PLAYER_RANK - 1;
				}
				if (data.KVDataList[1]) {
					score = JSON.parse(data.KVDataList[1].value).highScore ? JSON.parse(data.KVDataList[1].value).highScore : 0;
				}
				//背景颜色

				// ctx.fillStyle = "#FFFFFF";
				// ctx.fillRect(0, itemGapY, ITEM_WIDTH, ITEM_HEIGHT - 10);
				//名次 这里可以设置前几名的名次背景

				// var rankImg = wx.createImage();
				// rankImg.src = "sub/subdomain/touxiangk.png";


				// rankImg.onload = function () {
				// 	// if (prevOffsetY == this.offsetY) {
				// 	ctx.drawImage(rankImg, 113 + itemGapY, 103, 94, 94); // }
				// 	_this9.showRanks(_this9.curOffsetY);

				// };

				ctx.fillStyle = "#FFFFFF";
				ctx.textAlign = "right";
				ctx.baseLine = "middle";
				ctx.font = "25px Helvetica";
				ctx.fillText("".concat(grade) + "关", 185 + itemGapY, 235);

				// ctx.fillStyle = "#030303";
				// ctx.textAlign = "left";
				// ctx.baseLine = "middle";
				// ctx.font = "35px 黑体";
				// ctx.fillText(nick, 120 + itemGapY, 130, 85);
				//头像
				var avatarX = 120 + itemGapY;
				var avatarY = 110;
				var avatarW = 80;
				var avatarH = 80;
				this.drawAvatar(ctx, data.avatarUrl, avatarX, avatarY, avatarW, avatarH, function (avatarImg) {
					// if (prevOffsetY == this.offsetY) {
					ctx.drawImage(avatarImg, avatarX, avatarY, avatarW, avatarH); // }
					_this9.showRanks(_this9.curOffsetY);
					// if (_this9.drawIconCount >= _this9.gameDatas.length - 1 || _this9.drawIconCount >= PAGE_SIZE - 1) {
					// 	_this9.drawIconCount = 0;
					// 	console.log(_this9.curOffsetY)
					// 	} else {
					// 		_this9.drawIconCount++;

					// 	}
				});





				//段位
				// ctx.fillStyle = "#030303";
				// ctx.textAlign = "left";
				// ctx.baseLine = "middle";
				// ctx.font = "40px 黑体";
				// ctx.fillText(`${grade}关`, 450, 60 + itemGapY); //分数
			}
		}, {
			key: "drawRankItemHor",
			value: function drawRankItemHor(ctx1, rank, data, itemPos) {
				if (!data) return;
				var width = this.sharedCanvas.width;
				var nick = data.nickname.length <= 6 ? data.nickname : data.nickname.substr(0, 10);
				var kvData = data.KVDataList[0];
				var grade = kvData ? kvData.value : 0;
				var avatarX;

				if (itemPos === 1) {
					avatarX = width / 6;
				} else if (itemPos === 2) {
					avatarX = width * 0.5;
				} else if (itemPos === 3) {
					avatarX = width * 5 / 6;
				} //名次

				var ctx = this.sharedCtx;
				if (itemPos === 2) {
					ctx.fillStyle = "#00ff00";
				} else {
					ctx.fillStyle = "#ffffff";
				}

				ctx.textAlign = "center";
				ctx.baseLine = "middle";
				ctx.font = "40px Helvetica";
				ctx.fillText(rank, avatarX, 130); //名字

				if (itemPos === 2) {
					ctx.fillStyle = "#00ff00";
				} else {
					ctx.fillStyle = "#ffffff";
				}

				ctx.textAlign = "center";
				ctx.baseLine = "middle";
				ctx.font = "30px Helvetica";
				ctx.fillText(nick, avatarX, 300); //分数

				if (itemPos === 2) {
					ctx.fillStyle = "#00ff00";
				} else {
					ctx.fillStyle = "#ffffff";
				}

				ctx.textAlign = "center";
				ctx.baseLine = "middle";
				ctx.font = "30px Helvetica";
				ctx.fillText(grade, avatarX, 350); //头像

				var avatarY = 160;
				var avatarW = 80;
				var avatarH = 80;
				this.drawAvatar(ctx, data.avatarUrl, avatarX - 40, avatarY, avatarW, avatarH, function (avatarImg) {
					// if (prevOffsetY == this.offsetY) {
					ctx.drawImage(avatarImg, avatarX - 40, avatarY, avatarW, avatarH); // }

				});
			}
		}, {
			key: "horizontalComparison",
			value: function horizontalComparison(level) {
				var height = this.sharedCanvas.height;
				var width = this.sharedCanvas.width;
				var border = 3;
				var padding = 15; // setInterval(dt=>{

				this.sharedCtx.clearRect(0, 0, 1000, 1000);
				this.sharedCtx.fillStyle = "#262833";
				this.sharedCtx.fillRect(0, 0, width, height);
				this.sharedCtx.fillStyle = "#373a4a";
				this.sharedCtx.fillRect(padding, padding, border, height - padding * 2);
				this.sharedCtx.fillRect(width - padding, padding, border, height - padding * 2); // this.sharedCtx.fillRect(width * 0.333, padding + 60, border, height - padding * 2 - 60);
				// this.sharedCtx.fillRect(width * 0.666, padding + 60, border, height - padding * 2 - 60);

				this.sharedCtx.fillRect(padding, padding, width - padding * 2, border);
				this.sharedCtx.fillRect(padding, padding + 60, width - padding * 2, border);
				this.sharedCtx.fillRect(padding, height - padding, width - padding * 2, border);
				this.sharedCtx.fillStyle = "#181a22";
				this.sharedCtx.fillRect(width * 0.333, padding + border + 60, width * 0.333 + border, height - padding * 2 - 60 - border);
				this.sharedCtx.fillStyle = "#ffffff";
				this.sharedCtx.textAlign = "left";
				this.sharedCtx.baseLine = "middle";
				this.sharedCtx.font = "30px Helvetica";
				this.sharedCtx.fillText("\u7B2C".concat(level, "\u5173\u6392\u884C"), padding + 20, 60);
				var d1, d2, d3, selfRank;

				for (var i = 0; i < this.gameDatas.length; i++) {
					if (this.gameDatas[i].avatarUrl === this.selfUserInfo.avatarUrl) {
						selfRank = i;
						d1 = this.gameDatas[i - 1];
						d2 = this.gameDatas[i];
						d3 = this.gameDatas[i + 1];
						break;
					}
				}

				this.drawRankItemHor(this.sharedCtx, selfRank, d1, 1);
				this.drawRankItemHor(this.sharedCtx, selfRank + 1, d2, 2);
				this.drawRankItemHor(this.sharedCtx, selfRank + 2, d3, 3); // },100)
			}
		}]);

		return RankListRenderer;
	}();

var rankList = new RankListRenderer();
rankList.listen();