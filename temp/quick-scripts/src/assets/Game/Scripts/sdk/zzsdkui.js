"use strict";
cc._RF.push(module, '5499cotyT9E6Z88sNoCDX6G', 'zzsdkui');
// Game/Scripts/sdk/zzsdkui.js

"use strict";

var zzsdkui_item = require('zzsdkui_item');
var zzsdkui = cc['Class']({
  'extends': cc['Component'],
  'properties': {
    'z_adurl': 'https://wxa.332831.com/xsl/wx791c9814ea515099/v1.0.0/config.json',
    'z_from': 'appid',
    'z_gameVer': '1.0.0',
    'z_frontAppid': '',
    'z_openid': '',
    'z_scene': '',
    'z_channel': '',
    'z_validAd': 0x1,
    'z_adSwitch': 0x1,
    'z_sdkVer': 'v2.3.2',
    'game_open_tip': ![]
  },
  'statics': {
    'self': null,
    'getInstance': function getInstance() {
      var _0x53cae7 = {
        'AUhbn': function AUhbn(_0x150749, _0x77c6ed) {
          return _0x150749 == _0x77c6ed;
        }
      };
      if (_0x53cae7['AUhbn'](zzsdkui['self'], null)) {
        zzsdkui['self'] = new zzsdkui();
      }
      return zzsdkui['self'];
    }
  },
  'initSDK': function initSDK(_0x4a7b46, _0x4f76f9, _0xf1c5ea, _0x3c400c, _0x94680a, _0x193586) {
    var _0x516a7f = {
      'kSQhW': '---------------------初始化sdk------------------',
      'ArJQa': function ArJQa(_0x28558a, _0x1a0abe) {
        return _0x28558a == _0x1a0abe;
      },
      'BzfLw': function BzfLw(_0x15401b, _0x49bd7c) {
        return _0x15401b / _0x49bd7c;
      },
      'jsCNo': 'loadSDK',
      'REXiU': 'all',
      'JxpJM': function JxpJM(_0x196e9e, _0x488d8f) {
        return _0x196e9e != _0x488d8f;
      },
      'LlAdx': 'iPhone',
      'FefxT': 'ios',
      'GoCFY': 'android',
      'scjbj': 'options:\x20',
      'Yihsc': function Yihsc(_0x4d24a1, _0x21a430) {
        return _0x4d24a1 == _0x21a430;
      },
      'dEuwP': 'undefined',
      'Vmefk': 'xsl_from',
      'jCkdp': 'xsl_from:\x20'
    };
    this['youlikeSchArr'] = [];
    this['newDrawerSchArr'] = [];
    this['newDrawerSchArr_pull'] = [];
    this['floatSchArr'] = [];
    this['fullBoxSchArr'] = [];
    this['fulltopSchArr'] = [];
    this['fullBotSchArr'] = [];
    this['fulltopSchArr_ver'] = [];
    this['fullBotSchArr_ver'] = [];
    this['newInterSchArr'] = [];
    this['newLargeSchArr'] = [];
    this['loadFinishCb'] = _0x193586;
    this['z_sign'] = _0x4a7b46;
    this['z_gameVer'] = _0x4f76f9;
    this['z_adurl'] = _0xf1c5ea;
    this['z_appid_self'] = _0x3c400c;
    this['z_from'] = _0x3c400c;
    this['z_openid'] = _0x94680a;
    console['log'](_0x516a7f['kSQhW'], this['z_sdkVer']);
    if (_0x516a7f['ArJQa'](this['z_sign'], 0x0)) {
      this['offsetX'] = _0x516a7f['BzfLw'](cc['winSize']['width'], 0x2ee);
    } else {
      this['offsetX'] = _0x516a7f['BzfLw'](cc['winSize']['width'], 0x536);
    }
    if (window[_0x516a7f['jsCNo']]) {} else {
      if (!window['wx']) {
        this['curModel'] = _0x516a7f['REXiU'];
      } else {
        var _0x182f0e = window['wx']['getSystemInfoSync']()['model'];
        if (_0x516a7f['JxpJM'](_0x182f0e['indexOf'](_0x516a7f['LlAdx']), -0x1)) {
          this['curModel'] = _0x516a7f['FefxT'];
        } else {
          this['curModel'] = _0x516a7f['GoCFY'];
        }
        var _0x110576 = window['wx']['getLaunchOptionsSync']();
        console['log'](_0x516a7f['scjbj'], _0x110576);
        this['z_scene'] = _0x110576['scene'];
        if (_0x110576['query'] && _0x110576['query']['appid'] && _0x516a7f['Yihsc'](_0x110576['query']['appid']['indexOf'](_0x516a7f['dEuwP']), -0x1)) {
          this['z_from'] = _0x110576['query']['appid'];
          window['wx']['setStorageSync'](_0x516a7f['Vmefk'], this['z_from']);
        } else {
          if (window['wx']['getStorageSync'](_0x516a7f['Vmefk']) && _0x516a7f['Yihsc'](window['wx']['getStorageSync'](_0x516a7f['Vmefk'])['indexOf'](_0x516a7f['dEuwP']), -0x1)) {
            this['z_from'] = window['wx']['getStorageSync'](_0x516a7f['Vmefk']);
          } else {
            if (_0x110576['referrerInfo'] && _0x110576['referrerInfo']['appId']) {
              this['z_from'] = _0x110576['referrerInfo']['appId'];
            }
          }
        }
        console['log'](_0x516a7f['jCkdp'], this['z_from']);
        if (_0x110576['query'] && _0x110576['query']['channel']) {
          this['z_channel'] = _0x110576['query']['channel'];
        }
        if (_0x110576['referrerInfo'] && _0x110576['referrerInfo']['appId']) {
          this['z_frontAppid'] = _0x110576['referrerInfo']['appId'];
        }
      }
      this['shieldRequest']();
    }
    this['onshow']();
  },
  'onshow': function onshow() {
    var _0x1ac04e = {
      'AOeap': 'wx.onShow\x20\x20',
      'DMPqC': 'clickTryTime',
      'HJBEp': function HJBEp(_0x385f3a, _0x84a60e) {
        return _0x385f3a >= _0x84a60e;
      },
      'Xnfoj': function Xnfoj(_0x1fcec0, _0x374043) {
        return _0x1fcec0 - _0x374043;
      },
      'JaDDo': 'getre',
      'kmEpx': function kmEpx(_0x521413, _0x28a54a) {
        return _0x521413 + _0x28a54a;
      },
      'ezBEZ': function ezBEZ(_0x39b77a, _0x53cacd) {
        return _0x39b77a + _0x53cacd;
      },
      'XCZMd': 'tryitem',
      'tkhfu': '成功获取奖励',
      'XhOLh': '试玩游戏时间太短'
    };
    if (!window['wx']) return;
    window['wx']['onShow'](function (_0x59641a) {
      console['log'](_0x1ac04e['AOeap'], _0x59641a);
      if (window[_0x1ac04e['DMPqC']]) {
        var _0x18990d = new Date()['getTime']();
        if (_0x1ac04e['HJBEp'](_0x1ac04e['Xnfoj'](_0x18990d, window[_0x1ac04e['DMPqC']]), 0xea60)) {
          if (window['wx']['getStorageSync'](_0x1ac04e['JaDDo'])) {
            var _0x97acdf = window['wx']['getStorageSync'](_0x1ac04e['JaDDo']);
            _0x97acdf = _0x1ac04e['kmEpx'](_0x1ac04e['ezBEZ'](_0x97acdf, '&'), window[_0x1ac04e['XCZMd']]['data']['creative_id']);
            window['wx']['setStorageSync'](_0x1ac04e['JaDDo'], _0x97acdf);
          } else {
            var _0x406e10 = window[_0x1ac04e['XCZMd']]['data']['creative_id'];
            window['wx']['setStorageSync'](_0x1ac04e['JaDDo'], _0x406e10);
          }
          window[_0x1ac04e['XCZMd']]['changeTrybtn']();
          window['wx']['showToast']({
            'title': _0x1ac04e['tkhfu'],
            'duration': 0x3e8
          });
        } else {
          window['wx']['showToast']({
            'title': _0x1ac04e['XhOLh'],
            'duration': 0x3e8
          });
        }
        window[_0x1ac04e['DMPqC']] = null;
        window[_0x1ac04e['XCZMd']] = null;
      }
    });
  },
  'youlike': function youlike(_0x360fd6, _0x4e84e6, _0x51d90d, _0x55ac05, _0x5b7bff, _0x2ae1ef, _0x5750fe, _0x190f98) {
    if (_0x4e84e6 === void 0) {
      _0x4e84e6 = null;
    }
    if (_0x51d90d === void 0) {
      _0x51d90d = null;
    }
    if (_0x55ac05 === void 0) {
      _0x55ac05 = null;
    }
    if (_0x5b7bff === void 0) {
      _0x5b7bff = null;
    }
    if (_0x2ae1ef === void 0) {
      _0x2ae1ef = null;
    }
    if (_0x5750fe === void 0) {
      _0x5750fe = null;
    }
    if (_0x190f98 === void 0) {
      _0x190f98 = !![];
    }
    var _0x17b9dc = {
      'vTkWv': function vTkWv(_0x24ee7d, _0x3755f3) {
        return _0x24ee7d == _0x3755f3;
      },
      'zqRno': function zqRno(_0x52c03d, _0x3487ac) {
        return _0x52c03d * _0x3487ac;
      },
      'hQYbZ': function hQYbZ(_0x4e4ae4, _0x365e54) {
        return _0x4e4ae4 + _0x365e54;
      },
      'VGnnf': 'content',
      'FUpFs': 'youlike_normal',
      'RejIX': 'sdk总开关关闭，不展示sdk',
      'AtAwG': 'loadSDK',
      'pJlaS': 'SDK未初始化或初始化失败',
      'ZtGvf': function ZtGvf(_0x5a3308, _0x38bc3f) {
        return _0x5a3308 + _0x38bc3f;
      },
      'jPcSy': '后台没有',
      'DgvBo': '广告位',
      'POfNt': 'data_chain_youlike',
      'zNuyC': 'youlikeNode',
      'qpmEf': function qpmEf(_0x1343fb, _0x1a5d01) {
        return _0x1343fb > _0x1a5d01;
      },
      'lMgCv': function lMgCv(_0x52c3be, _0x123dcb) {
        return _0x52c3be != _0x123dcb;
      },
      'uzzTe': function uzzTe(_0x3af1a1, _0x193177) {
        return _0x3af1a1 != _0x193177;
      },
      'lmkgr': function lmkgr(_0x13f834, _0x4343dc) {
        return _0x13f834 - _0x4343dc;
      },
      'MrKlZ': function MrKlZ(_0x2fb0bb, _0xc246c5) {
        return _0x2fb0bb * _0xc246c5;
      },
      'SGxcV': 'scrollView',
      'DDdvR': function DDdvR(_0x582c45, _0x2a1617) {
        return _0x582c45 == _0x2a1617;
      },
      'glOjS': function glOjS(_0x16cdd0, _0x239334) {
        return _0x16cdd0 + _0x239334;
      },
      'XgnmZ': function XgnmZ(_0x5d02a1, _0x5668b7) {
        return _0x5d02a1 * _0x5668b7;
      },
      'Fuosi': function Fuosi(_0x649736, _0x20ec46) {
        return _0x649736 * _0x20ec46;
      },
      'qfMRC': function qfMRC(_0x547748, _0x594800) {
        return _0x547748 * _0x594800;
      },
      'AkWjI': 'view',
      'InUci': function InUci(_0xe6f882, _0xa131fd) {
        return _0xe6f882 - _0xa131fd;
      },
      'PSwzw': function PSwzw(_0x319750, _0xc98e39) {
        return _0x319750 < _0xc98e39;
      },
      'jblWa': 'item',
      'HKiks': function HKiks(_0x2dd151, _0x516560) {
        return _0x2dd151 * _0x516560;
      },
      'hwLZb': function hwLZb(_0x424745, _0x258010) {
        return _0x424745 + _0x258010;
      },
      'RNAOR': function RNAOR(_0x4c0f83, _0x1ba2bd) {
        return _0x4c0f83 - _0x1ba2bd;
      },
      'bbzpr': function bbzpr(_0x1eac92, _0x23e225) {
        return _0x1eac92 * _0x23e225;
      },
      'WAGuP': function WAGuP(_0x474774, _0x588000) {
        return _0x474774 * _0x588000;
      },
      'OKMzv': function OKMzv(_0xdfe472, _0x9e5b07) {
        return _0xdfe472 + _0x9e5b07;
      },
      'anxTr': function anxTr(_0x1d9d5b, _0x50edcb) {
        return _0x1d9d5b * _0x50edcb;
      },
      'xQqKl': function xQqKl(_0x4c1c69, _0x422985) {
        return _0x4c1c69 + _0x422985;
      },
      'VDzzK': function VDzzK(_0xcd62b6, _0xdab1d8) {
        return _0xcd62b6 - _0xdab1d8;
      }
    };
    var _0x44c172 = _0x17b9dc['FUpFs'];
    if (_0x17b9dc['vTkWv'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x17b9dc['RejIX']);
      return;
    }
    if (!window[_0x17b9dc['AtAwG']]) {
      console['log'](_0x17b9dc['pJlaS']);
      return;
    }
    ;
    if (!this['checkShow'](_0x44c172)) {
      console['log'](_0x17b9dc['ZtGvf'](_0x17b9dc['ZtGvf'](_0x17b9dc['jPcSy'], _0x44c172), _0x17b9dc['DgvBo']));
      return;
    }
    var _0x4a9fbe = this;
    _0x4a9fbe['youlikeSch'] = !![];
    _0x4a9fbe['youlikeRefData'] = {
      'adtype': _0x44c172,
      'tagtype': _0x55ac05,
      'itemCon': {
        'bg': _0x2ae1ef,
        'textcolor': _0x5750fe
      },
      'failCb': _0x5b7bff
    };
    var _0x318c17;
    if (_0x190f98) {
      var _0xd02413 = '';
      if (window['wx']) {
        if (window['wx']['getStorageSync'](_0x17b9dc['POfNt'])) {
          _0xd02413 = window['wx']['getStorageSync'](_0x17b9dc['POfNt']);
        }
        window['wx']['removeStorage']({
          'key': _0x17b9dc['POfNt']
        });
      }
      _0x318c17 = this['getData_local_others'](_0xd02413);
    } else {
      _0x318c17 = _0x4a9fbe['ad_Data'];
    }
    var _0x31b490 = new cc['Node'](_0x17b9dc['zNuyC']);
    _0x31b490['width'] = cc['winSize']['width'];
    _0x31b490['height'] = 0xb4;
    _0x31b490['scaleX'] = _0x31b490['scaleY'] = _0x17b9dc['qpmEf'](_0x4a9fbe['offsetX'], 0x1) ? 1.3 : _0x4a9fbe['offsetX'];
    _0x31b490['x'] = _0x17b9dc['lMgCv'](_0x4e84e6, null) ? _0x4e84e6 : 0x0;
    _0x31b490['y'] = _0x17b9dc['uzzTe'](_0x51d90d, null) ? _0x51d90d : -_0x17b9dc['lmkgr'](_0x17b9dc['zqRno'](cc['winSize']['height'], 0.5), _0x17b9dc['MrKlZ'](_0x17b9dc['MrKlZ'](_0x31b490['height'], _0x31b490['scaleY']), 0.5));
    var _0x3c948c = _0x31b490['addComponent'](cc['BlockInputEvents']);
    var _0x143970 = new cc['Node'](_0x17b9dc['SGxcV']);
    _0x143970['anchorY'] = 0x1;
    _0x143970['anchorX'] = 0x0;
    if (_0x17b9dc['DDdvR'](_0x4a9fbe['z_sign'], 0x0)) {
      _0x143970['width'] = _0x31b490['width'];
    } else {
      _0x143970['width'] = _0x17b9dc['glOjS'](_0x17b9dc['XgnmZ'](_0x17b9dc['XgnmZ'](0xac, 0.9), 0x5), _0x17b9dc['XgnmZ'](0xa, 0x6));
    }
    _0x143970['height'] = _0x31b490['height'];
    _0x143970['x'] = _0x17b9dc['Fuosi'](-_0x143970['width'], 0.5);
    _0x143970['y'] = _0x17b9dc['qfMRC'](_0x143970['height'], 0.5);
    _0x31b490['addChild'](_0x143970);
    var _0x1ee213 = _0x143970['addComponent'](cc['ScrollView']);
    _0x1ee213['vertical'] = ![];
    _0x1ee213['cancelInnerEvents'] = !![];
    var _0x453ac5 = new cc['Node'](_0x17b9dc['AkWjI']);
    _0x453ac5['setContentSize'](_0x17b9dc['lmkgr'](_0x143970['width'], 0xa), _0x143970['height']);
    _0x453ac5['x'] = 0x5;
    _0x453ac5['anchorY'] = 0x1;
    _0x453ac5['anchorX'] = 0x0;
    var _0xbfc4cb = _0x453ac5['addComponent'](cc['Mask']);
    _0x143970['addChild'](_0x453ac5);
    var _0x5083a0 = new cc['Node'](_0x17b9dc['VGnnf']);
    _0x5083a0['setContentSize'](_0x17b9dc['InUci'](_0x143970['width'], 0xa), _0x143970['height']);
    _0x5083a0['anchorX'] = 0x0;
    _0x5083a0['anchorY'] = 0x1;
    _0x5083a0['x'] = 0x0;
    _0x5083a0['y'] = _0x17b9dc['qfMRC'](_0x5083a0['height'], 0.5);
    _0x453ac5['addChild'](_0x5083a0);
    _0x1ee213['content'] = _0x453ac5['getChildByName'](_0x17b9dc['VGnnf']);
    var _0x4b764e;
    for (var _0x4b583b = 0x0; _0x17b9dc['PSwzw'](_0x4b583b, _0x318c17['length']); _0x4b583b++) {
      var _0x48f2b5 = new cc['Node'](_0x17b9dc['jblWa']);
      _0x48f2b5['addComponent'](zzsdkui_item);
      var _0x45f756 = _0x48f2b5['getComponent'](zzsdkui_item);
      _0x45f756['youlikeItem'](_0x44c172, _0x55ac05, _0x318c17[_0x4b583b], {
        'bg': _0x2ae1ef,
        'textcolor': _0x5750fe
      }, _0x5b7bff);
      _0x48f2b5['x'] = _0x17b9dc['glOjS'](_0x17b9dc['HKiks'](0xa, _0x17b9dc['hwLZb'](_0x4b583b, 0x1)), _0x17b9dc['HKiks'](_0x17b9dc['HKiks'](_0x48f2b5['width'], _0x48f2b5['scaleX']), _0x4b583b));
      _0x48f2b5['y'] = _0x17b9dc['HKiks'](-_0x17b9dc['RNAOR'](_0x453ac5['getChildByName'](_0x17b9dc['VGnnf'])['height'], _0x17b9dc['bbzpr'](_0x48f2b5['height'], _0x48f2b5['scaleY'])), 0.5);
      _0x4b764e = _0x17b9dc['WAGuP'](_0x48f2b5['width'], _0x48f2b5['scaleX']);
      _0x453ac5['getChildByName'](_0x17b9dc['VGnnf'])['addChild'](_0x48f2b5);
    }
    _0x453ac5['getChildByName'](_0x17b9dc['VGnnf'])['width'] = _0x17b9dc['OKMzv'](_0x17b9dc['WAGuP'](_0x318c17['length'], _0x4b764e), _0x17b9dc['anxTr'](_0x17b9dc['xQqKl'](_0x318c17['length'], 0x1), 0x14));
    var _0x173f1f = 0x0;
    var _0x19415a = _0x17b9dc['VDzzK'](_0x318c17['length'], 0x4);
    if (_0x17b9dc['DDdvR'](this['z_sign'], 0x1)) {
      _0x19415a = _0x17b9dc['VDzzK'](_0x318c17['length'], 0x7);
    }
    var _0x3eabec = 0x1;
    var _0x329d88 = function _0x329d88() {
      if (!_0x4a9fbe['youlikeSch']) {
        _0x4a9fbe['unschedule'](_0x4a9fbe['youlikeSchArr'][_0x360fd6]);
        return;
      }
      if (_0x17b9dc['vTkWv'](_0x173f1f, -_0x19415a)) {
        _0x3eabec = 0x1;
      } else if (_0x17b9dc['vTkWv'](_0x173f1f, 0x0)) {
        _0x3eabec = -0x1;
      }
      var _0x3c70d2 = cc['moveBy'](0.3, cc['v2'](_0x17b9dc['zqRno'](_0x3eabec, _0x17b9dc['hQYbZ'](_0x4b764e, 0xa)), 0x0));
      _0x453ac5['getChildByName'](_0x17b9dc['VGnnf'])['runAction'](_0x3c70d2);
      _0x173f1f += _0x3eabec;
    };
    _0x4a9fbe['youlikeSchArr'][_0x360fd6] = _0x329d88;
    _0x4a9fbe['schedule'](_0x4a9fbe['youlikeSchArr'][_0x360fd6], 0x2);
    return _0x31b490;
  },
  'youlikeRefresh': function youlikeRefresh(_0x5bd0be) {
    var _0x3dd72f = {
      'ENgvH': 'data_chain_youlike',
      'kjxth': 'scrollView',
      'qRFpK': 'view',
      'Uipwd': 'content',
      'iqVPF': function iqVPF(_0x4f2f8a, _0x5db784) {
        return _0x4f2f8a < _0x5db784;
      },
      'Kouvl': 'item',
      'aroIP': function aroIP(_0x5cf9b4, _0x4ebe93) {
        return _0x5cf9b4 + _0x4ebe93;
      },
      'uxVBA': function uxVBA(_0x7a2b02, _0x41f3d2) {
        return _0x7a2b02 * _0x41f3d2;
      },
      'hZkhk': function hZkhk(_0x14ef9d, _0x25e6c1) {
        return _0x14ef9d + _0x25e6c1;
      },
      'BWOWy': function BWOWy(_0x7361bf, _0x5253ce) {
        return _0x7361bf - _0x5253ce;
      },
      'YbPDd': function YbPDd(_0x4d9906, _0x4a6660) {
        return _0x4d9906 + _0x4a6660;
      },
      'FiAHJ': function FiAHJ(_0x3568e2, _0x4d6da8) {
        return _0x3568e2 * _0x4d6da8;
      }
    };
    var _0x4f7f5f = this;
    if (!_0x5bd0be) return;
    var _0x16288b = '';
    if (window['wx']) {
      if (window['wx']['getStorageSync'](_0x3dd72f['ENgvH'])) {
        _0x16288b = window['wx']['getStorageSync'](_0x3dd72f['ENgvH']);
      }
      window['wx']['removeStorage']({
        'key': _0x3dd72f['ENgvH']
      });
    }
    var _0x285f1a = this['getData_local_others'](_0x16288b);
    var _0x213ee8 = _0x5bd0be['getChildByName'](_0x3dd72f['kjxth'])['getChildByName'](_0x3dd72f['qRFpK'])['getChildByName'](_0x3dd72f['Uipwd']);
    _0x213ee8['removeAllChildren']();
    var _0x389208;
    for (var _0x2bfa54 = 0x0; _0x3dd72f['iqVPF'](_0x2bfa54, _0x285f1a['length']); _0x2bfa54++) {
      var _0x4c22de = new cc['Node'](_0x3dd72f['Kouvl']);
      _0x4c22de['addComponent'](zzsdkui_item);
      var _0x291e5f = _0x4c22de['getComponent'](zzsdkui_item);
      _0x291e5f['youlikeItem'](_0x4f7f5f['youlikeRefData']['adtype'], _0x4f7f5f['youlikeRefData']['tagtype'], _0x285f1a[_0x2bfa54], _0x4f7f5f['youlikeRefData']['itemCon'], _0x4f7f5f['youlikeRefData']['failCb']);
      _0x4c22de['x'] = _0x3dd72f['aroIP'](_0x3dd72f['uxVBA'](0x14, _0x3dd72f['hZkhk'](_0x2bfa54, 0x1)), _0x3dd72f['uxVBA'](_0x4c22de['width'], _0x2bfa54));
      _0x4c22de['y'] = _0x3dd72f['uxVBA'](-_0x3dd72f['BWOWy'](_0x213ee8['height'], _0x4c22de['height']), 0.5);
      _0x389208 = _0x4c22de['width'];
      _0x213ee8['addChild'](_0x4c22de);
    }
    _0x213ee8['width'] = _0x3dd72f['YbPDd'](_0x3dd72f['uxVBA'](_0x285f1a['length'], _0x389208), _0x3dd72f['FiAHJ'](_0x3dd72f['YbPDd'](_0x285f1a['length'], 0x1), 0x14));
  },
  'drawer': function drawer(_0x22daba, _0x4fc728, _0x88c39d, _0x16e2bd, _0x272dd5, _0x4bb0f5, _0x51dcfc, _0x546df7, _0x468a6c, _0x34b68f, _0x35dbb1, _0x2ca233) {
    if (_0x88c39d === void 0) {
      _0x88c39d = null;
    }
    if (_0x16e2bd === void 0) {
      _0x16e2bd = null;
    }
    if (_0x272dd5 === void 0) {
      _0x272dd5 = null;
    }
    if (_0x4bb0f5 === void 0) {
      _0x4bb0f5 = null;
    }
    if (_0x51dcfc === void 0) {
      _0x51dcfc = null;
    }
    if (_0x546df7 === void 0) {
      _0x546df7 = null;
    }
    if (_0x468a6c === void 0) {
      _0x468a6c = [];
    }
    if (_0x34b68f === void 0) {
      _0x34b68f = null;
    }
    if (_0x35dbb1 === void 0) {
      _0x35dbb1 = ![];
    }
    if (_0x2ca233 === void 0) {
      _0x2ca233 = null;
    }
    var _0x516079 = {
      'XBBHC': function XBBHC(_0x477755, _0x31324a) {
        return _0x477755 == _0x31324a;
      },
      'VCits': 'sdk总开关关闭，不展示sdk',
      'jMcTX': 'loadSDK',
      'PlgAq': 'SDK未初始化或初始化失败',
      'jMlkr': function jMlkr(_0x542409, _0x535f78) {
        return _0x542409 + _0x535f78;
      },
      'oasXL': function oasXL(_0x4f761d, _0x4fbf1a) {
        return _0x4f761d + _0x4fbf1a;
      },
      'sZdPC': '后台没有',
      'bMjIM': '广告位'
    };
    if (_0x516079['XBBHC'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x516079['VCits']);
      return;
    }
    if (!window[_0x516079['jMcTX']]) {
      console['log'](_0x516079['PlgAq']);
      return;
    }
    if (!this['checkShow'](_0x4fc728)) {
      console['log'](_0x516079['jMlkr'](_0x516079['oasXL'](_0x516079['sZdPC'], _0x4fc728), _0x516079['bMjIM']));
      return;
    }
    if (_0x516079['XBBHC'](this['z_validAd'], 0x1)) {
      return this['violateDrawer'](_0x22daba, _0x4fc728, _0x88c39d, _0x16e2bd, _0x272dd5, _0x4bb0f5, _0x51dcfc, _0x546df7, _0x468a6c, _0x34b68f, _0x35dbb1, _0x2ca233);
    } else if (_0x516079['XBBHC'](this['z_validAd'], 0x0)) {}
  },
  'drawerOpen': function drawerOpen(_0x5c62fb) {
    var _0x5961c4 = {
      'JglZK': '0|1|5|3|4|2|6',
      'GZlQu': 'box',
      'AXdbx': 'scrollView',
      'mxjBa': 'view',
      'VGxLS': 'content',
      'wzEgA': 'btnbox',
      'OSMNG': 'rect'
    };
    var _0x44345f = _0x5961c4['JglZK']['split']('|'),
      _0x294df4 = 0x0;
    while (!![]) {
      switch (_0x44345f[_0x294df4++]) {
        case '0':
          var _0x3ed5ed = {
            'jkhJx': _0x5961c4['GZlQu']
          };
          continue;
        case '1':
          if (!_0x5c62fb) return;
          continue;
        case '2':
          _0x5c62fb['getChildByName'](_0x5961c4['GZlQu'])['getChildByName'](_0x5961c4['AXdbx'])['getChildByName'](_0x5961c4['mxjBa'])['getChildByName'](_0x5961c4['VGxLS'])['children']['forEach'](function (_0x51cebc) {
            _0x51cebc['active'] = _0x5c62fb['getChildByName'](_0x3ed5ed['jkhJx'])['active'];
          });
          continue;
        case '3':
          _0x5c62fb['getChildByName'](_0x5961c4['GZlQu'])['active'] = !_0x5c62fb['getChildByName'](_0x5961c4['GZlQu'])['active'];
          continue;
        case '4':
          _0x5c62fb['getChildByName'](_0x5961c4['wzEgA'])['active'] = !_0x5c62fb['getChildByName'](_0x5961c4['wzEgA'])['active'];
          continue;
        case '5':
          _0x5c62fb['getChildByName'](_0x5961c4['OSMNG'])['active'] = !_0x5c62fb['getChildByName'](_0x5961c4['OSMNG'])['active'];
          continue;
        case '6':
          if (this['drawerShowCb']) {
            this['drawerShowCb'](_0x5c62fb['getChildByName'](_0x5961c4['OSMNG'])['active']);
          }
          continue;
      }
      break;
    }
  },
  'violateDrawer': function violateDrawer(_0x4914d1, _0x2e0b78, _0x1feedd, _0x3aeadb, _0xdc7ff4, _0x56095b, _0x40d9e8, _0x4819a3, _0x139a35, _0x5ad55a, _0x491ad8, _0x3eec51) {
    if (_0x1feedd === void 0) {
      _0x1feedd = null;
    }
    if (_0x3aeadb === void 0) {
      _0x3aeadb = null;
    }
    if (_0xdc7ff4 === void 0) {
      _0xdc7ff4 = null;
    }
    if (_0x56095b === void 0) {
      _0x56095b = null;
    }
    if (_0x40d9e8 === void 0) {
      _0x40d9e8 = null;
    }
    if (_0x4819a3 === void 0) {
      _0x4819a3 = null;
    }
    if (_0x139a35 === void 0) {
      _0x139a35 = [];
    }
    if (_0x5ad55a === void 0) {
      _0x5ad55a = null;
    }
    if (_0x491ad8 === void 0) {
      _0x491ad8 = ![];
    }
    if (_0x3eec51 === void 0) {
      _0x3eec51 = null;
    }
    var _0x21a162 = {
      'oSupz': 'err:',
      'XBYUh': function XBYUh(_0x3222e8, _0x2a2d87) {
        return _0x3222e8 == _0x2a2d87;
      },
      'aAZDP': function aAZDP(_0x522e38, _0x1955d0) {
        return _0x522e38 + _0x1955d0;
      },
      'fAYkH': function fAYkH(_0x399f0c, _0x48a412) {
        return _0x399f0c * _0x48a412;
      },
      'fDLkD': 'bottom',
      'Esmyb': function Esmyb(_0x298da2, _0xfca533) {
        return _0x298da2 == _0xfca533;
      },
      'ETmfm': 'top',
      'JfZQu': function JfZQu(_0x154114, _0x44e1b0) {
        return _0x154114 <= _0x44e1b0;
      },
      'SQfDM': function SQfDM(_0x50fa31, _0x137c92) {
        return _0x50fa31 >= _0x137c92;
      },
      'qBnhA': function qBnhA(_0x54f9b8, _0x5076ad) {
        return _0x54f9b8 - _0x5076ad;
      },
      'TJJSi': function TJJSi(_0x1b3a4f, _0x5971e7) {
        return _0x1b3a4f >= _0x5971e7;
      },
      'OYikC': function OYikC(_0x1afcb4, _0x5de7db) {
        return _0x1afcb4 > _0x5de7db;
      },
      'dqmgP': function dqmgP(_0xd71513, _0x598273) {
        return _0xd71513 + _0x598273;
      },
      'AGNFn': function AGNFn(_0x106ee8, _0x19fba1) {
        return _0x106ee8 < _0x19fba1;
      },
      'QjeIi': function QjeIi(_0x1d9ae6, _0x20d679) {
        return _0x1d9ae6 + _0x20d679;
      },
      'GUAid': 'adver/',
      'zMyIe': function zMyIe(_0x51aaad, _0x2acb49) {
        return _0x51aaad == _0x2acb49;
      },
      'gQcEC': 'drawer_tit',
      'JSTze': 'drawer_txt',
      'mXZXv': function mXZXv(_0x44b804, _0x5477be) {
        return _0x44b804 != _0x5477be;
      },
      'QFmDd': function QFmDd(_0x2801b7, _0x24949e) {
        return _0x2801b7 - _0x24949e;
      },
      'vtRsF': function vtRsF(_0x475bd0, _0x3b42af) {
        return _0x475bd0 * _0x3b42af;
      },
      'vlHTs': function vlHTs(_0x32fa66, _0x25fd27) {
        return _0x32fa66 + _0x25fd27;
      },
      'KvFhM': function KvFhM(_0x2809a7, _0x4e1837) {
        return _0x2809a7 + _0x4e1837;
      },
      'oCTcP': function oCTcP(_0x1a077f, _0x1994e6) {
        return _0x1a077f * _0x1994e6;
      },
      'qyjOl': function qyjOl(_0x1cb76c, _0xf525da) {
        return _0x1cb76c + _0xf525da;
      },
      'ktTUe': function ktTUe(_0x3e3779, _0x2b949e) {
        return _0x3e3779 != _0x2b949e;
      },
      'CQEco': 'drawer_clos',
      'wumRr': 'scrollView',
      'atCDg': function atCDg(_0x1fc595, _0x425619) {
        return _0x1fc595 == _0x425619;
      },
      'KhcqT': function KhcqT(_0x90c1dd, _0x20d065) {
        return _0x90c1dd - _0x20d065;
      },
      'WovMi': function WovMi(_0x3e8571, _0x2e103f) {
        return _0x3e8571 + _0x2e103f;
      },
      'NhuqC': function NhuqC(_0xb8da4a, _0x32892e) {
        return _0xb8da4a + _0x32892e;
      },
      'EKlyl': function EKlyl(_0x206470, _0x596b78) {
        return _0x206470 - _0x596b78;
      },
      'ATPFO': function ATPFO(_0x52cae6, _0x530e61) {
        return _0x52cae6 + _0x530e61;
      },
      'Xwhss': function Xwhss(_0x47fac8, _0x335014) {
        return _0x47fac8 * _0x335014;
      },
      'zDbZq': function zDbZq(_0x3e1788, _0x17322c) {
        return _0x3e1788 * _0x17322c;
      },
      'VEVnl': 'view',
      'rvmbT': 'content',
      'dZlDE': function dZlDE(_0x2cc646, _0x4be2d2) {
        return _0x2cc646 == _0x4be2d2;
      },
      'bGulo': 'item',
      'yNCRO': function yNCRO(_0x59083c, _0x22fa3e) {
        return _0x59083c / _0x22fa3e;
      },
      'fcRvS': function fcRvS(_0x3c3aa9, _0x5b4250) {
        return _0x3c3aa9 - _0x5b4250;
      },
      'iIZBh': function iIZBh(_0x19d3c9, _0x3ac19f) {
        return _0x19d3c9 * _0x3ac19f;
      },
      'sOdeP': function sOdeP(_0x31cce5, _0x26458) {
        return _0x31cce5 * _0x26458;
      },
      'mwkRS': function mwkRS(_0x59ceab, _0x94220a) {
        return _0x59ceab + _0x94220a;
      },
      'RTGqk': function RTGqk(_0x289834, _0x3b9bcb) {
        return _0x289834 * _0x3b9bcb;
      },
      'CjMqo': function CjMqo(_0x513c42, _0x55a0c5) {
        return _0x513c42 - _0x55a0c5;
      },
      'hfXrm': function hfXrm(_0x2abb4, _0x18ecc4) {
        return _0x2abb4 / _0x18ecc4;
      },
      'LMjPw': function LMjPw(_0x3e7211, _0x378212) {
        return _0x3e7211 + _0x378212;
      },
      'ylqmA': function ylqmA(_0x2ac17c, _0x2d23a5) {
        return _0x2ac17c * _0x2d23a5;
      },
      'kHgwL': function kHgwL(_0x175c07, _0xd5fe53) {
        return _0x175c07 * _0xd5fe53;
      },
      'ROIJx': function ROIJx(_0x39d715, _0x201b38) {
        return _0x39d715 / _0x201b38;
      },
      'EKbbl': function EKbbl(_0x2606bb, _0x252cea) {
        return _0x2606bb + _0x252cea;
      },
      'cqgRN': function cqgRN(_0x517fab, _0x4baa03) {
        return _0x517fab / _0x4baa03;
      },
      'ZzTLD': 'btnicon',
      'dsJTH': 'adver/interB_icon_4',
      'xgxdm': function xgxdm(_0x462c51, _0x18543e) {
        return _0x462c51 - _0x18543e;
      },
      'auAxe': '3|2|1|0|4',
      'bmWsF': '4|3|2|0|1',
      'JzrYy': 'drawer',
      'kroEF': 'rect',
      'GuBBo': function GuBBo(_0x1a0f94, _0x596b6f) {
        return _0x1a0f94 == _0x596b6f;
      },
      'ypBKS': 'adver/blackbg',
      'NxOjG': 'box',
      'wWrtT': function wWrtT(_0xf3c9dd, _0x165ca5) {
        return _0xf3c9dd + _0x165ca5;
      },
      'wkDTa': 'tit',
      'OfRic': 'closebtn',
      'OQjPO': function OQjPO(_0x328ddf, _0x28510d) {
        return _0x328ddf + _0x28510d;
      },
      'kbqYH': function kbqYH(_0x37b12d, _0x546a8d) {
        return _0x37b12d == _0x546a8d;
      },
      'HLXua': 'drawer_bg',
      'YxWeB': 'drawer_bg_1',
      'SMlbG': 'btnbox',
      'YksmV': function YksmV(_0x14d330, _0x1626bb) {
        return _0x14d330 * _0x1626bb;
      },
      'sqFjt': function sqFjt(_0x3b90eb, _0x172c57) {
        return _0x3b90eb == _0x172c57;
      },
      'HwWMr': function HwWMr(_0x5184c4, _0x1ed4a8) {
        return _0x5184c4 == _0x1ed4a8;
      },
      'StpTx': 'drawer_pic',
      'mUExc': 'drawer_icon_jiantou',
      'NtXCw': 'drawer_word',
      'InbYg': 'drawer_icon_more'
    };
    var _0x207aa7 = this;
    var _0x140be0 = _0x207aa7['ad_Data'];
    var _0x43ea7c = new cc['Node'](_0x21a162['JzrYy']);
    _0x43ea7c['scaleX'] = _0x43ea7c['scaleY'] = _0x207aa7['offsetX'];
    _0x207aa7['drawerShowCb'] = _0x5ad55a;
    var _0x3b4bd3 = new cc['Node'](_0x21a162['kroEF']);
    if (!_0x491ad8) {
      _0x3b4bd3['active'] = ![];
    }
    _0x3b4bd3['opacity'] = 0xc8;
    _0x43ea7c['addChild'](_0x3b4bd3);
    var _0x35183a = _0x3b4bd3['addComponent'](cc['Sprite']);
    _0x35183a['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    var _0x20f4b0 = _0x3b4bd3['addComponent'](cc['BlockInputEvents']);
    if (_0x21a162['GuBBo'](_0x207aa7['z_sign'], 0x0)) {
      _0x43ea7c['setContentSize'](0x2ee, 0x536);
      _0x3b4bd3['setContentSize'](0x3e8, 0x7d0);
    } else {
      _0x43ea7c['setContentSize'](0x536, 0x2ee);
      _0x3b4bd3['setContentSize'](0x7d0, 0x3e8);
    }
    cc['loader']['loadRes'](_0x21a162['ypBKS'], cc['SpriteFrame'], function (_0xd7a9a6, _0x4cd2a4) {
      if (_0xd7a9a6) {
        console['log'](_0x21a162['oSupz'], _0xd7a9a6);
        return;
      }
      _0x35183a['spriteFrame'] = _0x4cd2a4;
    });
    var _0x113202 = new cc['Node'](_0x21a162['NxOjG']);
    if (!_0x491ad8) _0x113202['active'] = ![];
    _0x43ea7c['addChild'](_0x113202);
    if (_0x21a162['ktTUe'](_0x3eec51, null)) {
      _0x113202['y'] = _0x21a162['wWrtT'](_0x113202['y'], _0x3eec51);
    }
    _0x113202['scaleX'] = _0x113202['scaleY'] = _0x21a162['OYikC'](_0x207aa7['offsetX'], 0x1) ? 0.85 : 0x1;
    var _0x3815d4 = new cc['Node']('bg');
    _0x113202['addChild'](_0x3815d4);
    var _0x2ff74e = _0x3815d4['addComponent'](cc['Sprite']);
    var _0x24b708 = new cc['Node'](_0x21a162['wkDTa']);
    _0x113202['addChild'](_0x24b708);
    var _0x3fa549 = _0x24b708['addComponent'](cc['Sprite']);
    var _0x160a41 = new cc['Node'](_0x21a162['OfRic']);
    _0x113202['addChild'](_0x160a41);
    var _0x46ff04 = new cc['Node'](_0x21a162['rvmbT']);
    cc['loader']['loadRes'](_0x21a162['OQjPO'](_0x21a162['GUAid'], _0x21a162['ktTUe'](_0x56095b, null) ? _0x56095b : _0x21a162['kbqYH'](_0x207aa7['z_sign'], 0x0) ? _0x21a162['HLXua'] : _0x21a162['YxWeB']), cc['SpriteFrame'], function (_0xe37192, _0x93c91b) {
      var _0x1db92c = {
        'XCZQx': function XCZQx(_0x5ab0bd, _0x35e8f1) {
          return _0x21a162['OYikC'](_0x5ab0bd, _0x35e8f1);
        },
        'yDoJD': function yDoJD(_0xa108f, _0x460691) {
          return _0x21a162['dqmgP'](_0xa108f, _0x460691);
        },
        'AzGcX': function AzGcX(_0x2ef0e9, _0x483c92) {
          return _0x21a162['AGNFn'](_0x2ef0e9, _0x483c92);
        }
      };
      if (_0xe37192) {
        console['log'](_0x21a162['oSupz'], _0xe37192);
        return;
      }
      _0x2ff74e['spriteFrame'] = _0x93c91b;
      _0x113202['setContentSize'](_0x3815d4['width'], _0x3815d4['height']);
      cc['loader']['loadRes'](_0x21a162['QjeIi'](_0x21a162['GUAid'], _0x21a162['zMyIe'](_0x207aa7['z_sign'], 0x0) ? _0x21a162['gQcEC'] : _0x21a162['JSTze']), cc['SpriteFrame'], function (_0x314894, _0x3f5dbf) {
        if (_0x314894) {
          console['log'](_0x21a162['oSupz'], _0x314894);
          return;
        }
        _0x3fa549['spriteFrame'] = _0x3f5dbf;
        if (_0x21a162['XBYUh'](_0x207aa7['z_sign'], 0x0)) {
          _0x24b708['y'] = _0x21a162['aAZDP'](_0x21a162['fAYkH'](_0x3815d4['height'], 0.5), 0xa);
        } else {
          _0x24b708['x'] = _0x21a162['fAYkH'](-_0x3815d4['width'], 0.5);
        }
      });
      if (_0x21a162['zMyIe'](_0x139a35, null)) {
        _0x139a35 = [];
      }
      if (_0x21a162['mXZXv'](_0x139a35['length'], 0x0)) {
        _0x160a41['x'] = _0x139a35[0x0];
        _0x160a41['y'] = _0x139a35[0x1];
      } else {
        if (_0x21a162['zMyIe'](_0x207aa7['z_sign'], 0x0)) {
          _0x160a41['x'] = _0x21a162['QFmDd'](_0x21a162['vtRsF'](_0x3815d4['width'], 0.5), 0x1e);
          _0x160a41['y'] = _0x21a162['vlHTs'](_0x21a162['vtRsF'](_0x3815d4['height'], 0.5), 0x32);
        } else {
          _0x160a41['x'] = _0x21a162['vlHTs'](_0x21a162['vtRsF'](-_0x3815d4['width'], 0.5), 0x1e);
          _0x160a41['y'] = _0x21a162['KvFhM'](_0x21a162['oCTcP'](_0x3815d4['height'], 0.5), 0x1e);
        }
      }
      var _0x14efa0 = _0x160a41['addComponent'](cc['Sprite']);
      cc['loader']['loadRes'](_0x21a162['qyjOl'](_0x21a162['GUAid'], _0x21a162['ktTUe'](_0x4819a3, null) ? _0x4819a3 : _0x21a162['CQEco']), cc['SpriteFrame'], function (_0x37fcf4, _0x287597) {
        if (_0x37fcf4) {
          console['log'](_0x21a162['oSupz'], _0x37fcf4);
          return;
        }
        _0x14efa0['spriteFrame'] = _0x287597;
      });
      var _0x2da334 = new cc['Node'](_0x21a162['wumRr']);
      _0x2da334['anchorY'] = 0x1;
      _0x2da334['anchorX'] = 0x0;
      if (_0x21a162['atCDg'](_0x207aa7['z_sign'], 0x0)) {
        _0x2da334['width'] = _0x113202['width'];
        _0x2da334['height'] = _0x21a162['KhcqT'](_0x113202['height'], 0x64);
        _0x2da334['x'] = _0x21a162['oCTcP'](-_0x2da334['width'], 0.5);
        _0x2da334['y'] = _0x21a162['WovMi'](_0x21a162['NhuqC'](_0x21a162['oCTcP'](-_0x113202['height'], 0.5), _0x2da334['height']), 0xa);
      } else {
        _0x2da334['width'] = _0x21a162['EKlyl'](_0x113202['width'], 0xaa);
        _0x2da334['height'] = _0x21a162['EKlyl'](_0x113202['height'], 0x1e);
        _0x2da334['x'] = _0x21a162['ATPFO'](_0x21a162['Xwhss'](-_0x113202['width'], 0.5), 0xa0);
        _0x2da334['y'] = _0x21a162['zDbZq'](_0x2da334['height'], 0.5);
      }
      _0x113202['addChild'](_0x2da334);
      var _0x57b782 = _0x2da334['addComponent'](cc['ScrollView']);
      _0x57b782['horizontal'] = ![];
      _0x57b782['cancelInnerEvents'] = !![];
      var _0x7a9495 = new cc['Node'](_0x21a162['VEVnl']);
      _0x7a9495['setContentSize'](_0x21a162['EKlyl'](_0x2da334['width'], 0xa), _0x2da334['height']);
      _0x7a9495['anchorY'] = 0x1;
      _0x7a9495['anchorX'] = 0x0;
      var _0x5cf41d = _0x7a9495['addComponent'](cc['Mask']);
      _0x2da334['addChild'](_0x7a9495);
      _0x46ff04['setContentSize'](_0x21a162['EKlyl'](_0x2da334['width'], 0xa), _0x2da334['height']);
      _0x46ff04['anchorX'] = 0x0;
      _0x46ff04['anchorY'] = 0x1;
      _0x46ff04['x'] = 0x0;
      _0x46ff04['y'] = _0x21a162['zDbZq'](_0x46ff04['height'], 0.5);
      _0x7a9495['addChild'](_0x46ff04);
      _0x57b782['content'] = _0x7a9495['getChildByName'](_0x21a162['rvmbT']);
      var _0x300b19;
      var _0x1eee72 = _0x21a162['dZlDE'](_0x207aa7['z_sign'], 0x0) ? 0x3 : 0x4;
      for (var _0x1ee052 = 0x0; _0x21a162['AGNFn'](_0x1ee052, _0x140be0['length']); _0x1ee052++) {
        var _0x5a33a7 = new cc['Node'](_0x21a162['bGulo']);
        _0x5a33a7['addComponent'](zzsdkui_item);
        var _0x405c61 = _0x5a33a7['getComponent'](zzsdkui_item);
        _0x405c61['drawerItem'](_0x2e0b78, _0x1feedd, _0x140be0[_0x1ee052], _0x3aeadb, _0x1ee052);
        var _0x5434f0 = _0x21a162['yNCRO'](_0x21a162['fcRvS'](_0x7a9495['getChildByName'](_0x21a162['rvmbT'])['width'], _0x21a162['iIZBh'](_0x1eee72, _0x5a33a7['width'])), _0x21a162['ATPFO'](_0x1eee72, 0x1));
        _0x5a33a7['x'] = _0x21a162['ATPFO'](_0x21a162['sOdeP'](_0x5434f0, _0x21a162['fcRvS'](_0x21a162['mwkRS'](_0x1ee052, 0x1), _0x21a162['sOdeP'](Math['floor'](_0x21a162['yNCRO'](_0x1ee052, _0x1eee72)), _0x1eee72))), _0x21a162['RTGqk'](_0x21a162['CjMqo'](_0x1ee052, _0x21a162['RTGqk'](Math['floor'](_0x21a162['hfXrm'](_0x1ee052, _0x1eee72)), _0x1eee72)), _0x5a33a7['width']));
        _0x5a33a7['y'] = -_0x21a162['LMjPw'](_0x21a162['ylqmA'](0x14, Math['floor'](_0x21a162['hfXrm'](_0x1ee052, _0x1eee72))), _0x21a162['kHgwL'](_0x5a33a7['height'], Math['floor'](_0x21a162['ROIJx'](_0x1ee052, _0x1eee72))));
        _0x300b19 = _0x5a33a7['height'];
        _0x7a9495['getChildByName'](_0x21a162['rvmbT'])['addChild'](_0x5a33a7);
      }
      _0x7a9495['getChildByName'](_0x21a162['rvmbT'])['height'] = _0x21a162['EKbbl'](_0x21a162['kHgwL'](_0x300b19, Math['ceil'](_0x21a162['ROIJx'](_0x140be0['length'], _0x1eee72))), _0x21a162['kHgwL'](0x14, _0x21a162['EKbbl'](Math['ceil'](_0x21a162['cqgRN'](_0x140be0['length'], _0x1eee72)), 0x1)));
      var _0x30c487 = _0x21a162['ETmfm'];
      var _0x29e0a9 = 0x28;
      var _0x2dd2d8 = function _0x2dd2d8() {
        var _0x34b19f;
        if (_0x21a162['XBYUh'](_0x30c487, _0x21a162['fDLkD'])) {
          _0x34b19f = -0x1;
        } else if (_0x21a162['Esmyb'](_0x30c487, _0x21a162['ETmfm'])) {
          _0x34b19f = 0x1;
        }
        _0x46ff04['y'] += _0x34b19f;
        if (_0x21a162['JfZQu'](_0x46ff04['y'], 0x0)) {
          _0x30c487 = _0x21a162['ETmfm'];
        } else if (_0x21a162['SQfDM'](_0x46ff04['y'], _0x21a162['qBnhA'](_0x46ff04['height'], _0x2da334['height']))) {
          _0x30c487 = _0x21a162['fDLkD'];
        }
        _0x29e0a9++;
        if (_0x21a162['TJJSi'](_0x29e0a9, 0x14)) {
          _0x29e0a9 = 0x0;
          _0x46ff04['children']['forEach'](function (_0x4c0877) {
            if (_0x1db92c['XCZQx'](_0x1db92c['yDoJD'](_0x46ff04['y'], _0x4c0877['y']), _0x300b19) || _0x1db92c['AzGcX'](_0x1db92c['yDoJD'](_0x46ff04['y'], _0x4c0877['y']), -_0x2da334['height'])) {
              _0x4c0877['active'] = ![];
            } else {
              _0x4c0877['active'] = !![];
            }
          });
        }
      };
      _0x207aa7['newDrawerSchArr'][_0x4914d1] = _0x2dd2d8;
      _0x207aa7['schedule'](_0x2dd2d8, 0.005);
    });
    var _0x26f364 = new cc['Node'](_0x21a162['SMlbG']);
    _0x26f364['anchorX'] = 0x0;
    _0x26f364['x'] = _0x21a162['YksmV'](-_0x43ea7c['width'], 0.5);
    if (_0x21a162['sqFjt'](_0x207aa7['z_sign'], 0x1)) {
      if (window['wx']) {
        if (_0x21a162['OYikC'](_0x21a162['YksmV'](window['wx']['getSystemInfoSync']()['windowWidth'], 0x2), 0x5dc)) {
          _0x26f364['x'] += 0x32;
        }
      }
    }
    if (_0x21a162['ktTUe'](_0x40d9e8, null)) {
      _0x26f364['y'] = _0x40d9e8;
    }
    var _0x485338 = _0x26f364['addComponent'](cc['Sprite']);
    var _0x28d279;
    if (_0x21a162['ktTUe'](_0xdc7ff4, null)) {
      _0x28d279 = _0xdc7ff4;
    } else {
      if (_0x21a162['HwWMr'](_0x2e0b78, _0x21a162['StpTx'])) {
        _0x28d279 = _0x21a162['mUExc'];
      } else if (_0x21a162['HwWMr'](_0x2e0b78, _0x21a162['NtXCw'])) {
        _0x28d279 = _0x21a162['InbYg'];
      }
    }
    cc['loader']['loadRes'](_0x21a162['OQjPO'](_0x21a162['GUAid'], _0x28d279), cc['SpriteFrame'], function (_0xf085b0, _0x12a748) {
      var _0x214da5 = {
        'pciit': _0x21a162['oSupz']
      };
      if (_0xf085b0) {
        console['log'](_0x21a162['oSupz'], _0xf085b0);
        return;
      }
      _0x485338['spriteFrame'] = _0x12a748;
      var _0x12aba3 = new cc['Node'](_0x21a162['ZzTLD']);
      var _0x431022 = _0x12aba3['addComponent'](cc['Sprite']);
      cc['loader']['loadRes'](_0x21a162['dsJTH'], cc['SpriteFrame'], function (_0x59e84b, _0x29792e) {
        if (_0x59e84b) {
          console['log'](_0x214da5['pciit'], _0x59e84b);
          return;
        }
        _0x431022['spriteFrame'] = _0x29792e;
      });
      _0x12aba3['x'] = _0x21a162['xgxdm'](_0x26f364['width'], 0x8);
      _0x12aba3['y'] = _0x21a162['xgxdm'](_0x21a162['kHgwL'](_0x26f364['height'], 0.5), 0xa);
      _0x26f364['addChild'](_0x12aba3);
      _0x43ea7c['addChild'](_0x26f364);
      var _0x2aa2cb = cc['scaleTo'](0.6, 0x1);
      var _0x52f38b = cc['scaleTo'](0.6, 1.2);
      var _0x236d76 = cc['sequence']([_0x2aa2cb, _0x52f38b]);
      var _0x34f5d7 = cc['repeatForever'](_0x236d76);
      _0x26f364['runAction'](_0x34f5d7);
      var _0x7ca8f7 = cc['rotateTo'](0.2, -0x14);
      var _0xb99cbf = cc['rotateTo'](0.2, 0x14);
      var _0x12dc4a = cc['rotateTo'](0.2, 0x0);
      var _0x3b47db = cc['rotateTo'](0x1, 0x0);
      var _0x1964a7 = cc['sequence']([_0x7ca8f7, _0xb99cbf, _0x7ca8f7, _0x12dc4a, _0x3b47db]);
      var _0x384f46 = cc['repeatForever'](_0x1964a7);
      _0x12aba3['runAction'](_0x384f46);
      if (_0x491ad8) {
        _0x26f364['active'] = ![];
      }
    });
    if (_0x491ad8) {
      if (this['drawerShowCb']) {
        this['drawerShowCb'](_0x3b4bd3['active']);
      }
    }
    _0x26f364['on'](cc['Node']['EventType']['TOUCH_START'], function () {
      var _0x452357 = _0x21a162['auAxe']['split']('|'),
        _0x3d9fd0 = 0x0;
      while (!![]) {
        switch (_0x452357[_0x3d9fd0++]) {
          case '0':
            _0x46ff04['children']['forEach'](function (_0x30085c) {
              _0x30085c['active'] = _0x113202['active'];
            });
            continue;
          case '1':
            _0x26f364['active'] = !_0x26f364['active'];
            continue;
          case '2':
            _0x113202['active'] = !_0x113202['active'];
            continue;
          case '3':
            _0x3b4bd3['active'] = !_0x3b4bd3['active'];
            continue;
          case '4':
            if (this['drawerShowCb']) {
              this['drawerShowCb'](_0x3b4bd3['active']);
            }
            continue;
        }
        break;
      }
    }, this);
    _0x160a41['on'](cc['Node']['EventType']['TOUCH_START'], function () {
      var _0x4cf428 = _0x21a162['bmWsF']['split']('|'),
        _0x1e3e6b = 0x0;
      while (!![]) {
        switch (_0x4cf428[_0x1e3e6b++]) {
          case '0':
            _0x46ff04['children']['forEach'](function (_0x12b9f3) {
              _0x12b9f3['active'] = _0x113202['active'];
            });
            continue;
          case '1':
            if (this['drawerShowCb']) {
              this['drawerShowCb'](_0x3b4bd3['active']);
            }
            continue;
          case '2':
            _0x26f364['active'] = !_0x26f364['active'];
            continue;
          case '3':
            _0x113202['active'] = !_0x113202['active'];
            continue;
          case '4':
            _0x3b4bd3['active'] = !_0x3b4bd3['active'];
            continue;
        }
        break;
      }
    }, this);
    return _0x43ea7c;
  },
  'drawer_pull': function drawer_pull(_0x4ba1d5, _0x5e0e66, _0x1d0091, _0x2142ef, _0x325821, _0x28fb89, _0xc51065, _0x12ff34, _0xe6796e, _0x58c93e, _0x2ae8ed, _0x252831) {
    if (_0x1d0091 === void 0) {
      _0x1d0091 = null;
    }
    if (_0x2142ef === void 0) {
      _0x2142ef = null;
    }
    if (_0x325821 === void 0) {
      _0x325821 = null;
    }
    if (_0x28fb89 === void 0) {
      _0x28fb89 = null;
    }
    if (_0xc51065 === void 0) {
      _0xc51065 = null;
    }
    if (_0x12ff34 === void 0) {
      _0x12ff34 = null;
    }
    if (_0xe6796e === void 0) {
      _0xe6796e = [];
    }
    if (_0x58c93e === void 0) {
      _0x58c93e = null;
    }
    if (_0x2ae8ed === void 0) {
      _0x2ae8ed = ![];
    }
    if (_0x252831 === void 0) {
      _0x252831 = null;
    }
    var _0xd5136c = {
      'cWKBQ': function cWKBQ(_0xc54bad, _0x57160a) {
        return _0xc54bad == _0x57160a;
      },
      'NMhlR': 'sdk总开关关闭，不展示sdk',
      'OLprJ': 'loadSDK',
      'pdeXi': 'SDK未初始化或初始化失败',
      'yoEYt': function yoEYt(_0x5cf8d4, _0x23bad2) {
        return _0x5cf8d4 + _0x23bad2;
      },
      'rclQp': '后台没有',
      'XqBLf': '广告位',
      'dhhtQ': function dhhtQ(_0x15b79e, _0xb70558) {
        return _0x15b79e == _0xb70558;
      }
    };
    if (_0xd5136c['cWKBQ'](this['z_adSwitch'], 0x0)) {
      console['log'](_0xd5136c['NMhlR']);
      return;
    }
    if (!window[_0xd5136c['OLprJ']]) {
      console['log'](_0xd5136c['pdeXi']);
      return;
    }
    if (!this['checkShow'](_0x5e0e66)) {
      console['log'](_0xd5136c['yoEYt'](_0xd5136c['yoEYt'](_0xd5136c['rclQp'], _0x5e0e66), _0xd5136c['XqBLf']));
      return;
    }
    if (_0xd5136c['dhhtQ'](this['z_validAd'], 0x1)) {
      return this['violateDrawer_pull'](_0x4ba1d5, _0x5e0e66, _0x1d0091, _0x2142ef, _0x325821, _0x28fb89, _0xc51065, _0x12ff34, _0xe6796e, _0x58c93e, _0x2ae8ed, _0x252831);
    } else if (_0xd5136c['dhhtQ'](this['z_validAd'], 0x0)) {}
  },
  'drawerOpen_pull': function drawerOpen_pull(_0x534c23) {
    var _0x44a0ac = {
      'MCSNF': 'box',
      'TFAXP': 'rect',
      'lkojl': 'btnbox',
      'BJcZP': 'scrollView',
      'mvJUv': 'view',
      'rfdYu': 'content',
      'cFADo': function cFADo(_0x4413f2, _0x3ad411) {
        return _0x4413f2 + _0x3ad411;
      },
      'qgJMf': function qgJMf(_0x2b198f, _0x419068) {
        return _0x2b198f * _0x419068;
      },
      'fHCul': function fHCul(_0x3ddee4, _0x4a2041) {
        return _0x3ddee4 - _0x4a2041;
      }
    };
    if (!_0x534c23) return;
    _0x534c23['getChildByName'](_0x44a0ac['TFAXP'])['active'] = !_0x534c23['getChildByName'](_0x44a0ac['TFAXP'])['active'];
    _0x534c23['getChildByName'](_0x44a0ac['MCSNF'])['active'] = !_0x534c23['getChildByName'](_0x44a0ac['MCSNF'])['active'];
    _0x534c23['getChildByName'](_0x44a0ac['lkojl'])['active'] = !_0x534c23['getChildByName'](_0x44a0ac['lkojl'])['active'];
    _0x534c23['getChildByName'](_0x44a0ac['MCSNF'])['getChildByName'](_0x44a0ac['BJcZP'])['getChildByName'](_0x44a0ac['mvJUv'])['getChildByName'](_0x44a0ac['rfdYu'])['children']['forEach'](function (_0x2f3cad) {
      _0x2f3cad['active'] = _0x534c23['getChildByName'](_0x44a0ac['MCSNF'])['active'];
    });
    if (_0x534c23['getChildByName'](_0x44a0ac['MCSNF'])['active']) {
      var _0xca7639 = cc['moveTo'](0.3, cc['v2'](_0x44a0ac['cFADo'](_0x44a0ac['qgJMf'](-_0x534c23['width'], 0.5), _0x44a0ac['qgJMf'](_0x44a0ac['qgJMf'](box['width'], box['scaleX']), 0.5)), box['y']));
      box['runAction'](_0xca7639);
    } else {
      var _0x11a998 = cc['moveTo'](0.3, cc['v2'](_0x44a0ac['fHCul'](-_0x534c23['width'], 0x64), box['y']));
      box['runAction'](_0x11a998);
    }
    if (this['drawerShowCb']) {
      this['drawerShowCb'](_0x534c23['getChildByName'](_0x44a0ac['TFAXP'])['active']);
    }
  },
  'violateDrawer_pull': function violateDrawer_pull(_0x2456f6, _0x284188, _0x464f3a, _0x2bc80d, _0x418cae, _0x485dc9, _0x4ebaf7, _0x217f9b, _0x5885a7, _0x480277, _0x3eeebf, _0x44f672) {
    if (_0x464f3a === void 0) {
      _0x464f3a = null;
    }
    if (_0x2bc80d === void 0) {
      _0x2bc80d = null;
    }
    if (_0x418cae === void 0) {
      _0x418cae = null;
    }
    if (_0x485dc9 === void 0) {
      _0x485dc9 = null;
    }
    if (_0x4ebaf7 === void 0) {
      _0x4ebaf7 = null;
    }
    if (_0x217f9b === void 0) {
      _0x217f9b = null;
    }
    if (_0x5885a7 === void 0) {
      _0x5885a7 = [];
    }
    if (_0x480277 === void 0) {
      _0x480277 = null;
    }
    if (_0x3eeebf === void 0) {
      _0x3eeebf = ![];
    }
    if (_0x44f672 === void 0) {
      _0x44f672 = null;
    }
    var _0x102993 = {
      'mGelO': 'err:',
      'quEJD': function quEJD(_0x3e118d, _0x841f0e) {
        return _0x3e118d - _0x841f0e;
      },
      'omMCu': function omMCu(_0x13cdfa, _0x827290) {
        return _0x13cdfa * _0x827290;
      },
      'pMrsJ': function pMrsJ(_0x1ae335, _0x43e89e) {
        return _0x1ae335 > _0x43e89e;
      },
      'tXoaK': function tXoaK(_0x3ba440, _0x93122e) {
        return _0x3ba440 + _0x93122e;
      },
      'OCGga': function OCGga(_0x184a4e, _0x2393fe) {
        return _0x184a4e < _0x2393fe;
      },
      'PnAqx': function PnAqx(_0x4763a7, _0x449ee7) {
        return _0x4763a7 + _0x449ee7;
      },
      'ubegH': function ubegH(_0xb7314d, _0x11f347) {
        return _0xb7314d == _0x11f347;
      },
      'vhzJS': 'bottom',
      'ISfNh': 'top',
      'kQYIv': function kQYIv(_0x36e3a6, _0x3e8060) {
        return _0x36e3a6 <= _0x3e8060;
      },
      'Bzcyh': function Bzcyh(_0x3ec266, _0x3d1b20) {
        return _0x3ec266 >= _0x3d1b20;
      },
      'JOhFu': function JOhFu(_0x370a5f, _0x24cf77) {
        return _0x370a5f - _0x24cf77;
      },
      'aqYhR': function aqYhR(_0x1ecb1b, _0x26b944) {
        return _0x1ecb1b * _0x26b944;
      },
      'sjthK': function sjthK(_0x4fafb0, _0x1b6cfd) {
        return _0x4fafb0 * _0x1b6cfd;
      },
      'xZmmv': function xZmmv(_0x4a9f1d, _0x58f065) {
        return _0x4a9f1d != _0x58f065;
      },
      'MahYV': function MahYV(_0x430ed9, _0x2a5c85) {
        return _0x430ed9 + _0x2a5c85;
      },
      'GTlat': function GTlat(_0x4c1807, _0x4b0148) {
        return _0x4c1807 * _0x4b0148;
      },
      'jYLpp': function jYLpp(_0xf6bd69, _0x41e784) {
        return _0xf6bd69 + _0x41e784;
      },
      'FtifC': function FtifC(_0x4a286a, _0x339ae5) {
        return _0x4a286a * _0x339ae5;
      },
      'QzEPN': 'adver/',
      'TDHBn': 'hezi2',
      'mafuH': 'scrollView',
      'GkvyL': function GkvyL(_0x29a526, _0x5e5344) {
        return _0x29a526 * _0x5e5344;
      },
      'Dbozb': function Dbozb(_0x5ccc57, _0x377509) {
        return _0x5ccc57 + _0x377509;
      },
      'QtqVp': function QtqVp(_0x2896ff, _0x20721a) {
        return _0x2896ff + _0x20721a;
      },
      'gSDAL': function gSDAL(_0x2d9cc4, _0x4d2582) {
        return _0x2d9cc4 * _0x4d2582;
      },
      'HGKnF': function HGKnF(_0x54b4eb, _0x261de5) {
        return _0x54b4eb + _0x261de5;
      },
      'YAffE': function YAffE(_0x1097c5, _0x23c88a) {
        return _0x1097c5 * _0x23c88a;
      },
      'cqgpO': 'view',
      'EQQFX': function EQQFX(_0x13e72f, _0xf2796a) {
        return _0x13e72f * _0xf2796a;
      },
      'rkskZ': 'content',
      'kkmxx': function kkmxx(_0xab137d, _0x5c3bda) {
        return _0xab137d == _0x5c3bda;
      },
      'QlBrR': 'item',
      'NgDTB': function NgDTB(_0x522a2f, _0xe51992) {
        return _0x522a2f / _0xe51992;
      },
      'FHOSb': function FHOSb(_0x3e7632, _0x4f6e71) {
        return _0x3e7632 * _0x4f6e71;
      },
      'MUoQN': function MUoQN(_0x3c77b6, _0x5ef0ed) {
        return _0x3c77b6 + _0x5ef0ed;
      },
      'cpMgU': function cpMgU(_0x234d29, _0x25b3c7) {
        return _0x234d29 / _0x25b3c7;
      },
      'hOoyQ': function hOoyQ(_0x2e00b2, _0xc54024) {
        return _0x2e00b2 - _0xc54024;
      },
      'TdviU': function TdviU(_0x466291, _0x59fded) {
        return _0x466291 * _0x59fded;
      },
      'blnZE': function blnZE(_0x369ff6, _0x2268f2) {
        return _0x369ff6 / _0x2268f2;
      },
      'tndyt': function tndyt(_0x28079c, _0x3ecb00) {
        return _0x28079c / _0x3ecb00;
      },
      'xcqCj': function xcqCj(_0x193307, _0x4861c9) {
        return _0x193307 * _0x4861c9;
      },
      'cfBAK': function cfBAK(_0x235cc9, _0x5e38a9) {
        return _0x235cc9 * _0x5e38a9;
      },
      'hXLVH': function hXLVH(_0x3927ac, _0x1cb15c) {
        return _0x3927ac + _0x1cb15c;
      },
      'fySip': function fySip(_0x230dc3, _0x4c909d) {
        return _0x230dc3 * _0x4c909d;
      },
      'CGmqE': function CGmqE(_0x1da2c1, _0x1ccc25) {
        return _0x1da2c1 - _0x1ccc25;
      },
      'eXVgd': 'drawer',
      'xOGVn': 'rect',
      'wwIeS': 'adver/blackbg',
      'TNYJr': 'box',
      'lfVRh': 'closebtn',
      'jjazG': 'hezi1111',
      'mpLKz': 'btnbox',
      'tyXuj': function tyXuj(_0x156a3e, _0x5e492e) {
        return _0x156a3e * _0x5e492e;
      },
      'GbzUu': function GbzUu(_0x49b1cd, _0x39c329) {
        return _0x49b1cd > _0x39c329;
      },
      'HgvNp': function HgvNp(_0x482d8a, _0xcea356) {
        return _0x482d8a * _0xcea356;
      },
      'WWPJh': function WWPJh(_0x592cfa, _0x13f3c9) {
        return _0x592cfa != _0x13f3c9;
      },
      'TBxOv': function TBxOv(_0x53a8a5, _0x413350) {
        return _0x53a8a5 != _0x413350;
      },
      'JKjFL': 'ggan',
      'aQrPM': function aQrPM(_0x36d760, _0x54558e) {
        return _0x36d760 + _0x54558e;
      }
    };
    var _0x107029 = this;
    var _0x474c86 = _0x107029['ad_Data'];
    var _0x259af5 = new cc['Node'](_0x102993['eXVgd']);
    _0x259af5['scaleX'] = _0x259af5['scaleY'] = _0x107029['offsetX'];
    _0x107029['drawerShowCb'] = _0x480277;
    var _0x20a24 = new cc['Node'](_0x102993['xOGVn']);
    if (!_0x3eeebf) {
      _0x20a24['active'] = ![];
    }
    _0x20a24['opacity'] = 0xc8;
    _0x259af5['addChild'](_0x20a24);
    var _0xdc8276 = _0x20a24['addComponent'](cc['Sprite']);
    _0xdc8276['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    var _0x1b1d46 = _0x20a24['addComponent'](cc['BlockInputEvents']);
    if (_0x102993['kkmxx'](_0x107029['z_sign'], 0x0)) {
      _0x259af5['setContentSize'](0x2ee, 0x536);
      _0x20a24['setContentSize'](0x3e8, 0x7d0);
    } else {
      _0x259af5['setContentSize'](0x536, 0x2ee);
      _0x20a24['setContentSize'](0x7d0, 0x3e8);
    }
    cc['loader']['loadRes'](_0x102993['wwIeS'], cc['SpriteFrame'], function (_0x3df7b0, _0x22e18f) {
      if (_0x3df7b0) {
        console['log'](_0x102993['mGelO'], _0x3df7b0);
        return;
      }
      _0xdc8276['spriteFrame'] = _0x22e18f;
    });
    var _0x583628 = new cc['Node'](_0x102993['TNYJr']);
    if (!_0x3eeebf) _0x583628['active'] = ![];
    _0x259af5['addChild'](_0x583628);
    if (_0x102993['xZmmv'](_0x44f672, null)) {
      _0x583628['y'] = _0x102993['hXLVH'](_0x583628['y'], _0x44f672);
    }
    _0x583628['scaleX'] = _0x583628['scaleY'] = _0x102993['pMrsJ'](_0x107029['offsetX'], 0x1) ? 0.85 : 0x1;
    var _0x3158b0 = new cc['Node']('bg');
    _0x583628['addChild'](_0x3158b0);
    var _0xa3c6dd = _0x3158b0['addComponent'](cc['Sprite']);
    var _0x48f44b = new cc['Node'](_0x102993['lfVRh']);
    _0x583628['addChild'](_0x48f44b);
    var _0x52d136 = new cc['Node'](_0x102993['rkskZ']);
    cc['loader']['loadRes'](_0x102993['hXLVH'](_0x102993['QzEPN'], _0x102993['xZmmv'](_0x485dc9, null) ? _0x485dc9 : _0x102993['jjazG']), cc['SpriteFrame'], function (_0xdb33ae, _0x4c4e83) {
      var _0x27a4cd = {
        'VVglv': _0x102993['mGelO'],
        'mZlZq': function mZlZq(_0x55b70b, _0x116422) {
          return _0x102993['quEJD'](_0x55b70b, _0x116422);
        },
        'yIuTd': function yIuTd(_0x318b90, _0x53ad98) {
          return _0x102993['omMCu'](_0x318b90, _0x53ad98);
        },
        'ifzmx': function ifzmx(_0x300dc1, _0x96c355) {
          return _0x102993['pMrsJ'](_0x300dc1, _0x96c355);
        },
        'gvVfT': function gvVfT(_0x99a123, _0x1e338f) {
          return _0x102993['tXoaK'](_0x99a123, _0x1e338f);
        },
        'FShRn': function FShRn(_0x1282d5, _0x101e0f) {
          return _0x102993['OCGga'](_0x1282d5, _0x101e0f);
        },
        'agASR': function agASR(_0x4c80df, _0xc84db5) {
          return _0x102993['PnAqx'](_0x4c80df, _0xc84db5);
        },
        'lmEjy': function lmEjy(_0x26a49e, _0x3349bc) {
          return _0x102993['ubegH'](_0x26a49e, _0x3349bc);
        },
        'LAGnq': _0x102993['vhzJS'],
        'qXZxk': function qXZxk(_0x1f0fd2, _0xe35bce) {
          return _0x102993['ubegH'](_0x1f0fd2, _0xe35bce);
        },
        'PUNNp': _0x102993['ISfNh'],
        'NztxH': function NztxH(_0x4e321e, _0x4c61a1) {
          return _0x102993['kQYIv'](_0x4e321e, _0x4c61a1);
        },
        'ixPEZ': function ixPEZ(_0x4b26e9, _0x4b351d) {
          return _0x102993['Bzcyh'](_0x4b26e9, _0x4b351d);
        },
        'XdIry': function XdIry(_0x5e0e6c, _0x5cf37a) {
          return _0x102993['JOhFu'](_0x5e0e6c, _0x5cf37a);
        },
        'IyoYU': function IyoYU(_0x3ba61b, _0x227d75) {
          return _0x102993['Bzcyh'](_0x3ba61b, _0x227d75);
        }
      };
      if (_0xdb33ae) {
        console['log'](_0x102993['mGelO'], _0xdb33ae);
        return;
      }
      _0xa3c6dd['spriteFrame'] = _0x4c4e83;
      _0x583628['setContentSize'](_0x3158b0['width'], _0x3158b0['height']);
      _0x583628['x'] = _0x102993['JOhFu'](-_0x259af5['width'], 0x64);
      if (_0x3eeebf) {
        _0x583628['x'] = _0x102993['PnAqx'](_0x102993['omMCu'](-_0x259af5['width'], 0.5), _0x102993['aqYhR'](_0x102993['sjthK'](_0x583628['width'], _0x583628['scaleX']), 0.5));
      }
      if (_0x102993['ubegH'](_0x5885a7, null)) {
        _0x5885a7 = [];
      }
      if (_0x102993['xZmmv'](_0x5885a7['length'], 0x0)) {
        _0x48f44b['x'] = _0x5885a7[0x0];
        _0x48f44b['y'] = _0x5885a7[0x1];
      } else {
        if (_0x102993['ubegH'](_0x107029['z_sign'], 0x0)) {
          _0x48f44b['x'] = _0x102993['sjthK'](_0x3158b0['width'], 0.5);
          _0x48f44b['y'] = 0x0;
        } else {
          _0x48f44b['x'] = _0x102993['MahYV'](_0x102993['GTlat'](-_0x3158b0['width'], 0.5), 0x1e);
          _0x48f44b['y'] = _0x102993['jYLpp'](_0x102993['FtifC'](_0x3158b0['height'], 0.5), 0x1e);
        }
      }
      var _0x236c40 = _0x48f44b['addComponent'](cc['Sprite']);
      cc['loader']['loadRes'](_0x102993['jYLpp'](_0x102993['QzEPN'], _0x102993['xZmmv'](_0x217f9b, null) ? _0x217f9b : _0x102993['TDHBn']), cc['SpriteFrame'], function (_0x3d368e, _0x453555) {
        if (_0x3d368e) {
          console['log'](_0x27a4cd['VVglv'], _0x3d368e);
          return;
        }
        _0x236c40['spriteFrame'] = _0x453555;
        _0x48f44b['x'] += _0x27a4cd['mZlZq'](_0x27a4cd['yIuTd'](_0x48f44b['width'], 0.5), 0xa);
      });
      var _0x583d32 = new cc['Node'](_0x102993['mafuH']);
      _0x583d32['anchorY'] = 0x1;
      _0x583d32['anchorX'] = 0x0;
      if (_0x102993['ubegH'](_0x107029['z_sign'], 0x0)) {
        _0x583d32['width'] = _0x583628['width'];
        _0x583d32['height'] = _0x102993['JOhFu'](_0x583628['height'], 0x14);
        _0x583d32['x'] = _0x102993['GkvyL'](-_0x583d32['width'], 0.5);
        _0x583d32['y'] = _0x102993['Dbozb'](_0x102993['QtqVp'](_0x102993['gSDAL'](-_0x583628['height'], 0.5), _0x583d32['height']), 0xa);
      } else {
        _0x583d32['width'] = _0x102993['JOhFu'](_0x583628['width'], 0xaa);
        _0x583d32['height'] = _0x102993['JOhFu'](_0x583628['height'], 0x1e);
        _0x583d32['x'] = _0x102993['HGKnF'](_0x102993['YAffE'](-_0x583628['width'], 0.5), 0xa0);
        _0x583d32['y'] = _0x102993['YAffE'](_0x583d32['height'], 0.5);
      }
      _0x583628['addChild'](_0x583d32);
      var _0xf28b70 = _0x583d32['addComponent'](cc['ScrollView']);
      _0xf28b70['horizontal'] = ![];
      _0xf28b70['cancelInnerEvents'] = !![];
      var _0x432340 = new cc['Node'](_0x102993['cqgpO']);
      _0x432340['setContentSize'](_0x102993['JOhFu'](_0x583d32['width'], 0xa), _0x583d32['height']);
      _0x432340['anchorY'] = 0x1;
      _0x432340['anchorX'] = 0x0;
      var _0x503607 = _0x432340['addComponent'](cc['Mask']);
      _0x583d32['addChild'](_0x432340);
      _0x52d136['setContentSize'](_0x102993['JOhFu'](_0x583d32['width'], 0xa), _0x583d32['height']);
      _0x52d136['anchorX'] = 0x0;
      _0x52d136['anchorY'] = 0x1;
      _0x52d136['x'] = 0x0;
      _0x52d136['y'] = _0x102993['EQQFX'](_0x52d136['height'], 0.5);
      _0x432340['addChild'](_0x52d136);
      _0xf28b70['content'] = _0x432340['getChildByName'](_0x102993['rkskZ']);
      var _0x2a0221;
      var _0x7b3b01 = _0x102993['kkmxx'](_0x107029['z_sign'], 0x0) ? 0x3 : 0x4;
      for (var _0x4aadcd = 0x0; _0x102993['OCGga'](_0x4aadcd, _0x474c86['length']); _0x4aadcd++) {
        var _0x4e893f = new cc['Node'](_0x102993['QlBrR']);
        _0x4e893f['addComponent'](zzsdkui_item);
        var _0x4bd847 = _0x4e893f['getComponent'](zzsdkui_item);
        _0x4bd847['drawerItem'](_0x284188, _0x464f3a, _0x474c86[_0x4aadcd], _0x2bc80d, _0x4aadcd);
        _0x4e893f['scaleX'] = _0x4e893f['scaleY'] = 0.8;
        var _0x95b6b7 = _0x102993['NgDTB'](_0x102993['JOhFu'](_0x432340['getChildByName'](_0x102993['rkskZ'])['width'], _0x102993['FHOSb'](_0x102993['FHOSb'](_0x7b3b01, _0x4e893f['width']), 0.8)), _0x102993['HGKnF'](_0x7b3b01, 0x1));
        _0x4e893f['x'] = _0x102993['MUoQN'](_0x102993['FHOSb'](_0x95b6b7, _0x102993['JOhFu'](_0x102993['MUoQN'](_0x4aadcd, 0x1), _0x102993['FHOSb'](Math['floor'](_0x102993['cpMgU'](_0x4aadcd, _0x7b3b01)), _0x7b3b01))), _0x102993['FHOSb'](_0x102993['FHOSb'](_0x102993['hOoyQ'](_0x4aadcd, _0x102993['TdviU'](Math['floor'](_0x102993['blnZE'](_0x4aadcd, _0x7b3b01)), _0x7b3b01)), _0x4e893f['width']), 0.8));
        _0x4e893f['y'] = -_0x102993['MUoQN'](_0x102993['TdviU'](0x14, Math['floor'](_0x102993['blnZE'](_0x4aadcd, _0x7b3b01))), _0x102993['TdviU'](_0x102993['TdviU'](_0x4e893f['height'], 0.8), Math['floor'](_0x102993['tndyt'](_0x4aadcd, _0x7b3b01))));
        _0x2a0221 = _0x102993['xcqCj'](_0x4e893f['height'], 0.8);
        _0x432340['getChildByName'](_0x102993['rkskZ'])['addChild'](_0x4e893f);
      }
      _0x432340['getChildByName'](_0x102993['rkskZ'])['height'] = _0x102993['MUoQN'](_0x102993['xcqCj'](_0x2a0221, Math['ceil'](_0x102993['tndyt'](_0x474c86['length'], _0x7b3b01))), _0x102993['cfBAK'](0x14, _0x102993['hXLVH'](Math['ceil'](_0x102993['tndyt'](_0x474c86['length'], _0x7b3b01)), 0x1)));
      var _0x185ebd = _0x102993['ISfNh'];
      var _0x5ee8fb = 0x28;
      var _0x167c1e = function _0x167c1e() {
        var _0x2ce93c;
        if (_0x27a4cd['lmEjy'](_0x185ebd, _0x27a4cd['LAGnq'])) {
          _0x2ce93c = -0x1;
        } else if (_0x27a4cd['qXZxk'](_0x185ebd, _0x27a4cd['PUNNp'])) {
          _0x2ce93c = 0x1;
        }
        _0x52d136['y'] += _0x2ce93c;
        if (_0x27a4cd['NztxH'](_0x52d136['y'], 0x0)) {
          _0x185ebd = _0x27a4cd['PUNNp'];
        } else if (_0x27a4cd['ixPEZ'](_0x52d136['y'], _0x27a4cd['XdIry'](_0x52d136['height'], _0x583d32['height']))) {
          _0x185ebd = _0x27a4cd['LAGnq'];
        }
        _0x5ee8fb++;
        if (_0x27a4cd['IyoYU'](_0x5ee8fb, 0x14)) {
          _0x5ee8fb = 0x0;
          _0x52d136['children']['forEach'](function (_0x5b1ad1) {
            if (_0x27a4cd['ifzmx'](_0x27a4cd['gvVfT'](_0x52d136['y'], _0x5b1ad1['y']), _0x2a0221) || _0x27a4cd['FShRn'](_0x27a4cd['agASR'](_0x52d136['y'], _0x5b1ad1['y']), -_0x583d32['height'])) {
              _0x5b1ad1['active'] = ![];
            } else {
              _0x5b1ad1['active'] = !![];
            }
          });
        }
      };
      _0x107029['newDrawerSchArr_pull'][_0x2456f6] = _0x167c1e;
      _0x107029['schedule'](_0x167c1e, 0.005);
    });
    var _0x43002f = new cc['Node'](_0x102993['mpLKz']);
    _0x43002f['anchorX'] = 0x0;
    _0x43002f['x'] = _0x102993['tyXuj'](-_0x259af5['width'], 0.5);
    if (_0x102993['kkmxx'](_0x107029['z_sign'], 0x1)) {
      if (window['wx']) {
        if (_0x102993['GbzUu'](_0x102993['HgvNp'](window['wx']['getSystemInfoSync']()['windowWidth'], 0x2), 0x5dc)) {
          _0x43002f['x'] += 0x32;
        }
      }
    }
    if (_0x102993['WWPJh'](_0x4ebaf7, null)) {
      _0x43002f['y'] = _0x4ebaf7;
    }
    var _0xb8a826 = _0x43002f['addComponent'](cc['Sprite']);
    var _0x130f1c;
    if (_0x102993['TBxOv'](_0x418cae, null)) {
      _0x130f1c = _0x418cae;
    } else {
      _0x130f1c = _0x102993['JKjFL'];
    }
    cc['loader']['loadRes'](_0x102993['aQrPM'](_0x102993['QzEPN'], _0x130f1c), cc['SpriteFrame'], function (_0x1529aa, _0x38c6bf) {
      if (_0x1529aa) {
        console['log'](_0x102993['mGelO'], _0x1529aa);
        return;
      }
      _0xb8a826['spriteFrame'] = _0x38c6bf;
      _0x259af5['addChild'](_0x43002f);
      if (_0x3eeebf) {
        _0x43002f['active'] = ![];
      }
    });
    if (_0x3eeebf) {
      if (this['drawerShowCb']) {
        this['drawerShowCb'](_0x20a24['active']);
      }
    }
    _0x43002f['on'](cc['Node']['EventType']['TOUCH_START'], function () {
      _0x20a24['active'] = !_0x20a24['active'];
      _0x583628['active'] = !_0x583628['active'];
      _0x43002f['active'] = !_0x43002f['active'];
      _0x52d136['children']['forEach'](function (_0x32e7ca) {
        _0x32e7ca['active'] = _0x583628['active'];
      });
      var _0x29881c = cc['moveTo'](0.3, cc['v2'](_0x102993['hXLVH'](_0x102993['cfBAK'](-_0x259af5['width'], 0.5), _0x102993['cfBAK'](_0x102993['fySip'](_0x583628['width'], _0x583628['scaleX']), 0.5)), _0x583628['y']));
      _0x583628['runAction'](_0x29881c);
      if (this['drawerShowCb']) {
        this['drawerShowCb'](_0x20a24['active']);
      }
    }, this);
    _0x48f44b['on'](cc['Node']['EventType']['TOUCH_START'], function () {
      _0x107029['scheduleOnce'](function () {
        _0x20a24['active'] = !_0x20a24['active'];
        _0x583628['active'] = !_0x583628['active'];
        _0x43002f['active'] = !_0x43002f['active'];
        _0x52d136['children']['forEach'](function (_0x449417) {
          _0x449417['active'] = _0x583628['active'];
        });
      }, 0.3);
      var _0xf18105 = cc['moveTo'](0.3, cc['v2'](_0x102993['CGmqE'](-_0x259af5['width'], 0x64), _0x583628['y']));
      _0x583628['runAction'](_0xf18105);
      if (this['drawerShowCb']) {
        this['drawerShowCb'](_0x20a24['active']);
      }
    }, this);
    return _0x259af5;
  },
  'float': function float(_0x1b1085, _0x329e9d, _0x32cd93, _0x48e584, _0x17f633, _0x150fdb, _0x38c2be, _0x2b521b, _0x400541, _0x282f66, _0x303f86) {
    if (_0x48e584 === void 0) {
      _0x48e584 = null;
    }
    if (_0x17f633 === void 0) {
      _0x17f633 = null;
    }
    if (_0x150fdb === void 0) {
      _0x150fdb = null;
    }
    if (_0x38c2be === void 0) {
      _0x38c2be = null;
    }
    if (_0x2b521b === void 0) {
      _0x2b521b = !![];
    }
    if (_0x400541 === void 0) {
      _0x400541 = 0x5;
    }
    if (_0x282f66 === void 0) {
      _0x282f66 = null;
    }
    if (_0x303f86 === void 0) {
      _0x303f86 = !![];
    }
    var _0x5a1dfd = {
      'HcDFD': 'item',
      'MDiEg': function MDiEg(_0x8b70f6, _0x6d0a63) {
        return _0x8b70f6 >= _0x6d0a63;
      },
      'GyByV': 'float',
      'uPRob': function uPRob(_0x143d1b, _0x1d33c1) {
        return _0x143d1b == _0x1d33c1;
      },
      'AKRYG': 'sdk总开关关闭，不展示sdk',
      'FZGxF': 'loadSDK',
      'DrQMF': 'SDK未初始化或初始化失败',
      'WQrYh': function WQrYh(_0x30abea, _0x3af399) {
        return _0x30abea + _0x3af399;
      },
      'ftwnX': function ftwnX(_0x1c0e55, _0x4ae4a2) {
        return _0x1c0e55 + _0x4ae4a2;
      },
      'xOWhS': '后台没有',
      'YqYlF': '广告位',
      'SpkpQ': 'floatNode',
      'HUTOC': function HUTOC(_0x5e5eb5, _0xe29fbd) {
        return _0x5e5eb5 != _0xe29fbd;
      },
      'eumsB': 'adbox',
      'CyxoZ': function CyxoZ(_0x3c4de9, _0x55cd8f) {
        return _0x3c4de9 * _0x55cd8f;
      },
      'Wltmv': function Wltmv(_0x2977e8) {
        return _0x2977e8();
      },
      'kCZlM': function kCZlM(_0x58a806, _0x1f9d73) {
        return _0x58a806 != _0x1f9d73;
      },
      'RXbhx': function RXbhx(_0x5a86ad, _0x4228e8) {
        return _0x5a86ad != _0x4228e8;
      }
    };
    var _0x220d91 = _0x5a1dfd['GyByV'];
    if (_0x5a1dfd['uPRob'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x5a1dfd['AKRYG']);
      return;
    }
    if (!window[_0x5a1dfd['FZGxF']]) {
      console['log'](_0x5a1dfd['DrQMF']);
      return;
    }
    ;
    if (!this['checkShow'](_0x220d91)) {
      console['log'](_0x5a1dfd['WQrYh'](_0x5a1dfd['ftwnX'](_0x5a1dfd['xOWhS'], _0x220d91), _0x5a1dfd['YqYlF']));
      return;
    }
    var _0x555d0a = this;
    var _0x163500 = new cc['Node'](_0x5a1dfd['SpkpQ']);
    _0x163500['scaleX'] = _0x163500['scaleY'] = _0x555d0a['offsetX'];
    _0x163500['x'] = _0x5a1dfd['uPRob'](_0x329e9d, null) ? 0x0 : _0x329e9d;
    _0x163500['y'] = _0x5a1dfd['uPRob'](_0x32cd93, null) ? 0x0 : _0x32cd93;
    _0x163500['width'] = 0x78;
    _0x163500['height'] = 0x9e;
    var _0xe2ae83 = _0x5a1dfd['HUTOC'](_0x38c2be, null) ? _0x38c2be : 0x0;
    if (_0x5a1dfd['MDiEg'](_0xe2ae83, _0x555d0a['ad_Data']['length'])) {
      _0xe2ae83 = 0x0;
    }
    var _0x2bb2a5 = new cc['Node'](_0x5a1dfd['eumsB']);
    _0x2bb2a5['width'] = _0x163500['width'];
    _0x2bb2a5['height'] = _0x163500['height'];
    _0x2bb2a5['anchorX'] = 0x0;
    _0x2bb2a5['anchorY'] = 0x1;
    _0x2bb2a5['x'] = _0x5a1dfd['CyxoZ'](-_0x2bb2a5['width'], 0.5);
    _0x2bb2a5['y'] = _0x5a1dfd['CyxoZ'](_0x2bb2a5['height'], 0.5);
    _0x163500['addChild'](_0x2bb2a5);
    _0x555d0a['floatSch'] = !![];
    var _0x2b5bdd = function _0x2b5bdd() {
      if (!_0x555d0a['floatSch'] || !_0x2bb2a5['children']) {
        _0x555d0a['unschedule'](_0x555d0a['floatSchArr'][_0x1b1085]);
        return;
      }
      _0x2bb2a5['removeAllChildren']();
      var _0x76eeef = _0x555d0a['ad_Data'][_0xe2ae83];
      var _0x550b63 = new cc['Node'](_0x5a1dfd['HcDFD']);
      _0x550b63['addComponent'](zzsdkui_item);
      var _0x144a34 = _0x550b63['getComponent'](zzsdkui_item);
      _0x144a34['floatItem'](_0x220d91, _0x48e584, _0x76eeef, {
        '_bgurl': _0x150fdb,
        '_textColor': _0x282f66
      }, _0x17f633);
      _0x2bb2a5['addChild'](_0x550b63);
      _0xe2ae83++;
      if (_0x5a1dfd['MDiEg'](_0xe2ae83, _0x555d0a['ad_Data']['length'])) {
        _0xe2ae83 = 0x0;
      }
    };
    _0x5a1dfd['Wltmv'](_0x2b5bdd);
    if (_0x5a1dfd['HUTOC'](_0x2b521b, ![])) {
      _0x555d0a['floatSchArr'][_0x1b1085] = _0x2b5bdd;
      _0x555d0a['schedule'](_0x555d0a['floatSchArr'][_0x1b1085], _0x5a1dfd['kCZlM'](_0x400541, null) ? _0x400541 : 0x5);
    }
    if (_0x5a1dfd['RXbhx'](_0x303f86, ![])) {
      var _0x1b3eb0 = cc['rotateTo'](0.2, -0xa);
      var _0x31d980 = cc['rotateTo'](0.2, 0xa);
      var _0x5526ef = cc['rotateTo'](0.2, 0x0);
      var _0x227c57 = cc['rotateTo'](0x1, 0x0);
      var _0xab549e = cc['sequence']([_0x1b3eb0, _0x31d980, _0x1b3eb0, _0x5526ef, _0x227c57]);
      var _0x3aa688 = cc['repeatForever'](_0xab549e);
      _0x163500['runAction'](_0x3aa688);
    }
    return _0x163500;
  },
  'inter': function inter(_0x299d81, _0x576cdf, _0x2a06e2, _0x5592cf, _0x2e9847) {
    if (_0x576cdf === void 0) {
      _0x576cdf = null;
    }
    if (_0x2a06e2 === void 0) {
      _0x2a06e2 = null;
    }
    if (_0x5592cf === void 0) {
      _0x5592cf = null;
    }
    if (_0x2e9847 === void 0) {
      _0x2e9847 = null;
    }
    var _0x1c88d1 = {
      'sYdGc': 'err:',
      'tiFAD': 'fingerAni',
      'hHorT': function hHorT(_0x281f3a, _0x3c7526) {
        return _0x281f3a + _0x3c7526;
      },
      'NcpKB': function NcpKB(_0x4d7c03, _0x5a676c) {
        return _0x4d7c03 + _0x5a676c;
      },
      'otMGx': function otMGx(_0x492e86, _0x53ee48) {
        return _0x492e86 + _0x53ee48;
      },
      'pKyzk': function pKyzk(_0x283cb8, _0x5d8639) {
        return _0x283cb8 * _0x5d8639;
      },
      'dkKRI': function dkKRI(_0xc93d9d, _0x3d938b) {
        return _0xc93d9d - _0x3d938b;
      },
      'keuAO': function keuAO(_0x2fbf8b, _0x2e02b9) {
        return _0x2fbf8b - _0x2e02b9;
      },
      'CdDaG': 'adver/finger2',
      'PNKUq': function PNKUq(_0x5d2141, _0x4b73a1) {
        return _0x5d2141 == _0x4b73a1;
      },
      'TaDkz': '3*3',
      'ljkUE': 'inter_nine',
      'ONUPH': '3*2',
      'hMhOW': 'inter_six',
      'fjvkA': 'sdk总开关关闭，不展示sdk',
      'gNTLZ': 'sdk屏蔽接口屏蔽了此广告组件',
      'RzvJU': 'loadSDK',
      'TVubv': 'SDK未初始化或初始化失败',
      'jvdBl': function jvdBl(_0x19a45e, _0x39e1e1) {
        return _0x19a45e + _0x39e1e1;
      },
      'xXHtG': function xXHtG(_0x33eb4a, _0x36f71c) {
        return _0x33eb4a + _0x36f71c;
      },
      'oEjIS': '后台没有',
      'YZCyt': '广告位',
      'hTMYb': 'create_localData',
      'oGnut': function oGnut(_0xf9579e, _0x509d59) {
        return _0xf9579e < _0x509d59;
      },
      'DOZYE': 'create_localNum',
      'ESbVz': function ESbVz(_0x3a24a8, _0x2f250c) {
        return _0x3a24a8 < _0x2f250c;
      },
      'hFjzt': function hFjzt(_0x124e1b, _0x4610c0) {
        return _0x124e1b + _0x4610c0;
      },
      'QNOol': 'data_chain_youlike',
      'XPdIv': 'inter',
      'RVaSt': function RVaSt(_0x294709, _0x14d247) {
        return _0x294709 > _0x14d247;
      },
      'spPjX': function spPjX(_0x10a150, _0x204d96) {
        return _0x10a150 == _0x204d96;
      },
      'QBzkt': 'box',
      'JUJYC': function JUJYC(_0x1d55ee, _0x1ce64a) {
        return _0x1d55ee + _0x1ce64a;
      },
      'dvNIf': function dvNIf(_0x4df077, _0x23fe92) {
        return _0x4df077 * _0x23fe92;
      },
      'RxtOe': function RxtOe(_0x334207, _0x3653f3) {
        return _0x334207 + _0x3653f3;
      },
      'zWRBa': function zWRBa(_0x238801, _0x4b507c) {
        return _0x238801 == _0x4b507c;
      },
      'LFjmz': function LFjmz(_0x28eed3, _0xebd792) {
        return _0x28eed3 + _0xebd792;
      },
      'QLvxn': function QLvxn(_0xf5a864, _0x24d219) {
        return _0xf5a864 * _0x24d219;
      },
      'wjAOO': function wjAOO(_0xf593cb, _0xf1fb4c) {
        return _0xf593cb * _0xf1fb4c;
      },
      'JykEZ': function JykEZ(_0x4b7e2a, _0x53d52b) {
        return _0x4b7e2a == _0x53d52b;
      },
      'DrhuB': function DrhuB(_0x51461f, _0x56cf73) {
        return _0x51461f * _0x56cf73;
      },
      'FyzYn': function FyzYn(_0x310ca9, _0x5a32ba) {
        return _0x310ca9 * _0x5a32ba;
      },
      'jOUQa': function jOUQa(_0x47ad24, _0x74ce19) {
        return _0x47ad24 * _0x74ce19;
      },
      'zvXNg': 'adbox',
      'bBKig': function bBKig(_0x19fa36, _0xa1c4a3) {
        return _0x19fa36 * _0xa1c4a3;
      },
      'UzmJn': function UzmJn(_0x2475b7, _0x1abfb2) {
        return _0x2475b7 * _0x1abfb2;
      },
      'UDfyb': 'finger',
      'Xgqwh': 'item',
      'AJWSP': function AJWSP(_0x3dc26f, _0x2ab7a2) {
        return _0x3dc26f / _0x2ab7a2;
      },
      'bbFiP': function bbFiP(_0x15903a, _0x20432) {
        return _0x15903a - _0x20432;
      },
      'nRcLe': function nRcLe(_0xcfb9c7, _0x17dfaa) {
        return _0xcfb9c7 * _0x17dfaa;
      },
      'tVDDK': function tVDDK(_0xf3b0e5, _0x154312) {
        return _0xf3b0e5 + _0x154312;
      },
      'lfzFk': function lfzFk(_0x55ca72, _0x117203) {
        return _0x55ca72 * _0x117203;
      },
      'hPnYb': function hPnYb(_0x192174, _0x66a0d4) {
        return _0x192174 * _0x66a0d4;
      },
      'wrDFQ': function wrDFQ(_0x2b42cb, _0x1e469a) {
        return _0x2b42cb - _0x1e469a;
      },
      'snXWZ': function snXWZ(_0x2a6529, _0x5e2077) {
        return _0x2a6529 * _0x5e2077;
      },
      'mFxev': function mFxev(_0x31db8b, _0x73a1ed) {
        return _0x31db8b + _0x73a1ed;
      },
      'hynAs': function hynAs(_0x4ec67c, _0x51744c) {
        return _0x4ec67c * _0x51744c;
      },
      'xGDBt': function xGDBt(_0x2bcbf7, _0x32d332) {
        return _0x2bcbf7 + _0x32d332;
      },
      'rIQxM': function rIQxM(_0x5312fd, _0x5225ae) {
        return _0x5312fd * _0x5225ae;
      },
      'mCNBo': function mCNBo(_0x42fa3b, _0x2b5759) {
        return _0x42fa3b / _0x2b5759;
      },
      'BkbcL': function BkbcL(_0x39e2e9, _0x2fb545) {
        return _0x39e2e9 == _0x2fb545;
      },
      'Jxlng': 'adver/finger1'
    };
    var _0x77c48d = _0x1c88d1['PNKUq'](_0x299d81, _0x1c88d1['TaDkz']) ? _0x1c88d1['ljkUE'] : _0x1c88d1['PNKUq'](_0x299d81, _0x1c88d1['ONUPH']) ? _0x1c88d1['hMhOW'] : '';
    if (_0x1c88d1['PNKUq'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x1c88d1['fjvkA']);
      return;
    }
    if (_0x1c88d1['PNKUq'](this['z_validAd'], 0x0)) {
      console['log'](_0x1c88d1['gNTLZ']);
      return;
    }
    if (!window[_0x1c88d1['RzvJU']]) {
      console['log'](_0x1c88d1['TVubv']);
      return;
    }
    ;
    if (!this['checkShow'](_0x77c48d)) {
      console['log'](_0x1c88d1['jvdBl'](_0x1c88d1['xXHtG'](_0x1c88d1['oEjIS'], _0x77c48d), _0x1c88d1['YZCyt']));
      return;
    }
    var _0x3852b5 = this;
    _0x3852b5['interSixRefData'] = {
      'adtype': _0x77c48d,
      'tagtype': _0x5592cf,
      'failCb': _0x2e9847
    };
    var _0x3eab2c;
    if (_0x1c88d1['PNKUq'](_0x77c48d, _0x1c88d1['hMhOW'])) {
      if (window['wx']) {
        if (window['wx']['getStorageSync'](_0x1c88d1['hTMYb'])) {
          _0x3eab2c = _0x3852b5['getData_local'](window['wx']['getStorageSync'](_0x1c88d1['hTMYb']));
          if (_0x1c88d1['oGnut'](_0x3eab2c['length'], 0x6)) {
            _0x3eab2c = _0x3852b5['getData'](0x0, 0x6, _0x1c88d1['DOZYE']);
          }
        } else {
          _0x3eab2c = _0x3852b5['getData'](0x0, 0x6, _0x1c88d1['DOZYE']);
          window['wx']['setStorageSync'](_0x1c88d1['DOZYE'], 0x6);
        }
        var _0x91ffd3 = '';
        for (var _0x562ca6 = 0x0; _0x1c88d1['ESbVz'](_0x562ca6, _0x3eab2c['length']); _0x562ca6++) {
          _0x91ffd3 += _0x1c88d1['hFjzt'](_0x3eab2c[_0x562ca6]['creative_id'], '&');
        }
        window['wx']['setStorageSync'](_0x1c88d1['hTMYb'], _0x91ffd3);
        window['wx']['setStorageSync'](_0x1c88d1['QNOol'], _0x91ffd3);
      } else {
        _0x3eab2c = _0x3852b5['randomGetData'](0x6);
      }
    } else if (_0x1c88d1['PNKUq'](_0x77c48d, _0x1c88d1['ljkUE'])) {
      if (_0x1c88d1['PNKUq'](_0x3852b5['z_sign'], 0x0)) {
        _0x3eab2c = _0x3852b5['randomGetData'](0x9);
      } else {
        _0x3eab2c = _0x3852b5['randomGetData'](0x8);
      }
    }
    _0x3852b5['interNode'] = new cc['Node'](_0x1c88d1['XPdIv']);
    _0x3852b5['interNode']['scaleX'] = _0x3852b5['interNode']['scaleY'] = _0x1c88d1['RVaSt'](_0x3852b5['offsetX'], 0x1) ? 1.3 : _0x3852b5['offsetX'];
    _0x3852b5['interNode']['x'] = _0x1c88d1['PNKUq'](_0x576cdf, null) ? 0x0 : _0x576cdf;
    _0x3852b5['interNode']['y'] = _0x1c88d1['spPjX'](_0x2a06e2, null) ? 0x0 : _0x2a06e2;
    _0x3852b5['interNode']['active'] = ![];
    var _0x2b7fb7 = _0x3852b5['interNode']['addComponent'](cc['BlockInputEvents']);
    var _0x165236 = new cc['Node'](_0x1c88d1['QBzkt']);
    _0x3852b5['interNode']['addChild'](_0x165236);
    var _0x1b17ab = 0xe5;
    var _0x2cebd8 = 0xf8;
    var _0x27518a = _0x1c88d1['spPjX'](_0x3852b5['z_sign'], 0x0) ? 0x3 : 0x4;
    var _0x5a66ba = _0x1c88d1['JUJYC'](_0x1c88d1['dvNIf'](_0x1b17ab, _0x27518a), _0x1c88d1['dvNIf'](_0x1c88d1['RxtOe'](_0x27518a, 0x1), 0xa));
    var _0x14fe9b;
    if (_0x1c88d1['zWRBa'](_0x77c48d, _0x1c88d1['hMhOW'])) {
      _0x27518a = 0x3;
      _0x14fe9b = _0x1c88d1['LFjmz'](_0x1c88d1['QLvxn'](0x2, _0x2cebd8), _0x1c88d1['wjAOO'](0x3, 0x8));
    } else if (_0x1c88d1['zWRBa'](_0x77c48d, _0x1c88d1['ljkUE'])) {
      if (_0x1c88d1['JykEZ'](_0x3852b5['z_sign'], 0x0)) {
        _0x14fe9b = _0x1c88d1['LFjmz'](_0x1c88d1['DrhuB'](0x3, _0x2cebd8), _0x1c88d1['FyzYn'](0x4, 0x8));
      } else {
        _0x14fe9b = _0x1c88d1['LFjmz'](_0x1c88d1['jOUQa'](0x2, _0x2cebd8), _0x1c88d1['jOUQa'](0x3, 0x8));
      }
    }
    var _0x64f130 = new cc['Node'](_0x1c88d1['zvXNg']);
    _0x64f130['anchorX'] = 0x0;
    _0x64f130['anchorY'] = 0x1;
    _0x165236['addChild'](_0x64f130);
    _0x165236['setContentSize'](_0x5a66ba, _0x14fe9b);
    if (_0x1c88d1['JykEZ'](_0x77c48d, _0x1c88d1['hMhOW'])) {
      _0x3852b5['interNode']['setContentSize'](_0x5a66ba, _0x14fe9b);
    }
    _0x64f130['setContentSize'](_0x165236['width'], _0x165236['height']);
    _0x64f130['x'] = _0x1c88d1['bBKig'](-_0x64f130['width'], 0.5);
    _0x64f130['y'] = _0x1c88d1['bBKig'](_0x64f130['height'], 0.5);
    _0x3852b5['interNode']['active'] = !![];
    var _0x56dabe = Math['floor'](_0x1c88d1['UzmJn'](Math['random'](), _0x3eab2c['length']));
    var _0x435af1 = new cc['Node'](_0x1c88d1['UDfyb']);
    var _loop = function _loop() {
      var _0x32cdea = new cc['Node'](_0x1c88d1['Xgqwh']);
      _0x32cdea['addComponent'](zzsdkui_item);
      var _0x5b1cd3 = _0x32cdea['getComponent'](zzsdkui_item);
      _0x5b1cd3['interItem'](_0x77c48d, _0x5592cf, _0x3eab2c[_0x3fa670], _0x2e9847, _0x3fa670, _0x1f2e6b);
      var _0x3c749f = _0x1c88d1['AJWSP'](_0x1c88d1['bbFiP'](_0x64f130['width'], _0x1c88d1['nRcLe'](_0x27518a, _0x32cdea['width'])), _0x1c88d1['LFjmz'](_0x27518a, 0x1));
      _0x32cdea['x'] = _0x1c88d1['tVDDK'](_0x1c88d1['nRcLe'](0xa, _0x1c88d1['bbFiP'](_0x1c88d1['tVDDK'](_0x3fa670, 0x1), _0x1c88d1['lfzFk'](Math['floor'](_0x1c88d1['AJWSP'](_0x3fa670, _0x27518a)), _0x27518a))), _0x1c88d1['hPnYb'](_0x1c88d1['wrDFQ'](_0x3fa670, _0x1c88d1['snXWZ'](Math['floor'](_0x1c88d1['AJWSP'](_0x3fa670, _0x27518a)), _0x27518a)), _0x32cdea['width']));
      _0x32cdea['y'] = -_0x1c88d1['mFxev'](_0x1c88d1['hynAs'](0x8, _0x1c88d1['xGDBt'](Math['floor'](_0x1c88d1['AJWSP'](_0x3fa670, _0x27518a)), 0x1)), _0x1c88d1['rIQxM'](_0x32cdea['height'], Math['floor'](_0x1c88d1['mCNBo'](_0x3fa670, _0x27518a))));
      _0x64f130['addChild'](_0x32cdea);
      var _0x1f2e6b = _0x1c88d1['BkbcL'](_0x56dabe, _0x3fa670) ? !![] : ![];
      if (_0x1f2e6b) {
        var _0x41b935 = [];
        _0x435af1['anchorX'] = 0x1;
        _0x435af1['anchorY'] = 0x0;
        var _0x3148e1 = _0x435af1['addComponent'](cc['Sprite']);
        cc['loader']['loadRes'](_0x1c88d1['Jxlng'], cc['SpriteFrame'], function (_0x4a48bf, _0x108ab8) {
          var _0x1f29ab = {
            'Qcblr': _0x1c88d1['sYdGc'],
            'OfojS': _0x1c88d1['tiFAD']
          };
          if (_0x4a48bf) {
            console['log'](_0x1c88d1['sYdGc'], _0x4a48bf);
            return;
          }
          _0x435af1['x'] = _0x1c88d1['hHorT'](_0x1c88d1['NcpKB'](_0x1c88d1['otMGx'](_0x32cdea['x'], _0x1c88d1['pKyzk'](_0x32cdea['width'], 0.6)), _0x435af1['width']), _0x1c88d1['pKyzk'](_0x32cdea['width'], 0.5));
          _0x435af1['y'] = _0x1c88d1['dkKRI'](_0x1c88d1['keuAO'](_0x32cdea['y'], _0x32cdea['height']), _0x435af1['height']);
          _0x3148e1['spriteFrame'] = _0x108ab8;
          _0x41b935['push'](_0x108ab8);
          cc['loader']['loadRes'](_0x1c88d1['CdDaG'], cc['SpriteFrame'], function (_0x592716, _0x4f29bd) {
            if (_0x592716) {
              console['log'](_0x1f29ab['Qcblr'], _0x592716);
              return;
            }
            _0x41b935['push'](_0x4f29bd);
            var _0x37bf98 = _0x435af1['addComponent'](cc['Animation']);
            var _0x460402 = cc['AnimationClip']['createWithSpriteFrames'](_0x41b935, _0x41b935['length']);
            _0x460402['name'] = _0x1f29ab['OfojS'];
            _0x460402['wrapMode'] = cc['WrapMode']['Loop'];
            _0x460402['speed'] = 0x3;
            _0x37bf98['addClip'](_0x460402);
            _0x37bf98['play'](_0x1f29ab['OfojS']);
          });
        });
      }
    };
    for (var _0x3fa670 = 0x0; _0x1c88d1['ESbVz'](_0x3fa670, _0x3eab2c['length']); _0x3fa670++) {
      _loop();
    }
    _0x64f130['addChild'](_0x435af1);
    return _0x3852b5['interNode'];
  },
  'interSixRefresh': function interSixRefresh(_0xdb1245) {
    var _0x413963 = {
      'Lqlrk': 'err:',
      'LpeGp': 'fingerAni',
      'nZoTK': function nZoTK(_0x57bbe2, _0x56daa0) {
        return _0x57bbe2 + _0x56daa0;
      },
      'rzOCK': function rzOCK(_0x19a3c8, _0x15b797) {
        return _0x19a3c8 + _0x15b797;
      },
      'cxErd': function cxErd(_0x51385c, _0x5ef21b) {
        return _0x51385c + _0x5ef21b;
      },
      'iFBeZ': function iFBeZ(_0x5202d6, _0x258ed7) {
        return _0x5202d6 * _0x258ed7;
      },
      'TYJEm': function TYJEm(_0x4b5bb8, _0x203f62) {
        return _0x4b5bb8 - _0x203f62;
      },
      'PfwpS': function PfwpS(_0x263c34, _0x4610df) {
        return _0x263c34 - _0x4610df;
      },
      'vywBf': 'adver/finger2',
      'HUHij': '=------',
      'MWtBO': function MWtBO(_0x26c035, _0x2e436b) {
        return _0x26c035 == _0x2e436b;
      },
      'wQiwX': '3*3',
      'RIgDz': function RIgDz(_0x298cea, _0x4c25ed) {
        return _0x298cea == _0x4c25ed;
      },
      'duVkU': function duVkU(_0x807515, _0x5dd70d) {
        return _0x807515 == _0x5dd70d;
      },
      'IkpOa': '3*2',
      'duPOz': 'create_localNum',
      'NqgGd': function NqgGd(_0x549727, _0x5af05f) {
        return _0x549727 + _0x5af05f;
      },
      'rzffD': function rzffD(_0x5a86c6, _0x39385a) {
        return _0x5a86c6(_0x39385a);
      },
      'RxiCu': function RxiCu(_0x1bf508, _0x4f676c) {
        return _0x1bf508 < _0x4f676c;
      },
      'mLcZU': function mLcZU(_0x3de12e, _0x31c55d) {
        return _0x3de12e + _0x31c55d;
      },
      'GtZFd': 'create_localData',
      'OsNRY': 'data_chain_youlike',
      'rDyaK': 'box',
      'FWOPI': 'adbox',
      'zsZdZ': function zsZdZ(_0x45b9e4, _0x2a25eb) {
        return _0x45b9e4 * _0x2a25eb;
      },
      'ZTjEa': 'finger',
      'ejIvQ': function ejIvQ(_0x54fd01, _0x4da644) {
        return _0x54fd01 < _0x4da644;
      },
      'JHckj': 'item',
      'WBgTf': function WBgTf(_0x4a1be6, _0xcfe98) {
        return _0x4a1be6 / _0xcfe98;
      },
      'hMSBy': function hMSBy(_0x4c453c, _0xec27c9) {
        return _0x4c453c + _0xec27c9;
      },
      'NXcvw': function NXcvw(_0x25684f, _0x218f8b) {
        return _0x25684f - _0x218f8b;
      },
      'Chuhq': function Chuhq(_0x106de6, _0x46b5fa) {
        return _0x106de6 + _0x46b5fa;
      },
      'tRMsv': function tRMsv(_0x241bb7, _0xf7557d) {
        return _0x241bb7 * _0xf7557d;
      },
      'vJOVi': function vJOVi(_0x1fadab, _0x4bf8bf) {
        return _0x1fadab / _0x4bf8bf;
      },
      'yVIuc': function yVIuc(_0x481f29, _0x514af1) {
        return _0x481f29 * _0x514af1;
      },
      'cRpFm': function cRpFm(_0x3fe9b3, _0x372ce5) {
        return _0x3fe9b3 * _0x372ce5;
      },
      'OaERD': function OaERD(_0x461472, _0x5355ec) {
        return _0x461472 / _0x5355ec;
      },
      'hTJUi': function hTJUi(_0x19b7a0, _0x185932) {
        return _0x19b7a0 + _0x185932;
      },
      'DPZEG': function DPZEG(_0xb09924, _0x52c6d4) {
        return _0xb09924 / _0x52c6d4;
      },
      'gELFO': function gELFO(_0x4e36f6, _0x300dff) {
        return _0x4e36f6 * _0x300dff;
      },
      'HMGCr': function HMGCr(_0x3a3f11, _0x4db72e) {
        return _0x3a3f11 / _0x4db72e;
      },
      'XeEdN': 'showFinger:\x20',
      'AvSQo': 'adver/finger1'
    };
    var _0x5178c3 = this;
    console['log'](_0x413963['HUHij'], _0xdb1245, _0x5178c3['interNode']);
    if (!_0x5178c3['interNode']) return;
    var _0x40529c;
    var _0x4bd271 = 0x6;
    if (_0x413963['MWtBO'](_0xdb1245, _0x413963['wQiwX'])) {
      if (_0x413963['MWtBO'](_0x5178c3['z_sign'], 0x0)) {
        _0x4bd271 = 0x9;
      } else {
        _0x4bd271 = 0x8;
      }
    }
    var _0x4d0274 = _0x413963['RIgDz'](_0x5178c3['z_sign'], 0x0) ? 0x3 : 0x4;
    if (window['wx'] && _0x413963['duVkU'](_0xdb1245, _0x413963['IkpOa'])) {
      if (window['wx']['getStorageSync'](_0x413963['duPOz'])) {
        _0x4bd271 = _0x413963['NqgGd'](_0x413963['rzffD'](Number, window['wx']['getStorageSync'](_0x413963['duPOz'])), 0x6);
      }
      window['wx']['setStorageSync'](_0x413963['duPOz'], _0x4bd271);
      _0x40529c = _0x5178c3['getData'](_0x413963['PfwpS'](_0x4bd271, 0x6), _0x4bd271, _0x413963['duPOz']);
      var _0x12786e = '';
      for (var _0x54d347 = 0x0; _0x413963['RxiCu'](_0x54d347, _0x40529c['length']); _0x54d347++) {
        _0x12786e += _0x413963['mLcZU'](_0x40529c[_0x54d347]['creative_id'], '&');
      }
      window['wx']['setStorageSync'](_0x413963['GtZFd'], _0x12786e);
      window['wx']['setStorageSync'](_0x413963['OsNRY'], _0x12786e);
    } else {
      _0x40529c = _0x5178c3['randomGetData'](_0x4bd271);
    }
    var _0x548071 = _0x5178c3['interNode']['getChildByName'](_0x413963['rDyaK'])['getChildByName'](_0x413963['FWOPI']);
    _0x548071['removeAllChildren']();
    var _0xfb2126 = Math['floor'](_0x413963['zsZdZ'](Math['random'](), _0x40529c['length']));
    var _0x143cd5 = new cc['Node'](_0x413963['ZTjEa']);
    var _loop2 = function _loop2() {
      var _0x4d291f = new cc['Node'](_0x413963['JHckj']);
      _0x4d291f['addComponent'](zzsdkui_item);
      var _0x4960b2 = _0x4d291f['getComponent'](zzsdkui_item);
      _0x4960b2['interItem'](_0x5178c3['interSixRefData']['adtype'], _0x5178c3['interSixRefData']['tagtype'], _0x40529c[_0x172c4c], _0x5178c3['interSixRefData']['failCb'], _0x172c4c);
      var _0x361e52 = _0x413963['WBgTf'](_0x413963['PfwpS'](_0x548071['width'], _0x413963['zsZdZ'](_0x4d0274, _0x4d291f['width'])), _0x413963['hMSBy'](_0x4d0274, 0x1));
      _0x4d291f['x'] = _0x413963['hMSBy'](_0x413963['zsZdZ'](_0x361e52, _0x413963['NXcvw'](_0x413963['Chuhq'](_0x172c4c, 0x1), _0x413963['tRMsv'](Math['floor'](_0x413963['vJOVi'](_0x172c4c, _0x4d0274)), _0x4d0274))), _0x413963['yVIuc'](_0x413963['NXcvw'](_0x172c4c, _0x413963['cRpFm'](Math['floor'](_0x413963['OaERD'](_0x172c4c, _0x4d0274)), _0x4d0274)), _0x4d291f['width']));
      _0x4d291f['y'] = -_0x413963['hTJUi'](_0x413963['cRpFm'](0x14, _0x413963['hTJUi'](Math['floor'](_0x413963['DPZEG'](_0x172c4c, _0x4d0274)), 0x1)), _0x413963['gELFO'](_0x4d291f['height'], Math['floor'](_0x413963['HMGCr'](_0x172c4c, _0x4d0274))));
      _0x548071['addChild'](_0x4d291f);
      var _0x524553 = _0x413963['duVkU'](_0xfb2126, _0x172c4c) ? !![] : ![];
      console['log'](_0x413963['XeEdN'], _0x524553);
      if (_0x524553) {
        _0x446b67 = [];
        _0x143cd5['anchorX'] = 0x1;
        _0x143cd5['anchorY'] = 0x0;
        var _0x359f57 = _0x143cd5['addComponent'](cc['Sprite']);
        cc['loader']['loadRes'](_0x413963['AvSQo'], cc['SpriteFrame'], function (_0x3a9c5e, _0x235a33) {
          if (_0x3a9c5e) {
            console['log'](_0x413963['Lqlrk'], _0x3a9c5e);
            return;
          }
          _0x143cd5['x'] = _0x413963['nZoTK'](_0x413963['rzOCK'](_0x413963['cxErd'](_0x4d291f['x'], _0x413963['iFBeZ'](_0x4d291f['width'], 0.6)), _0x143cd5['width']), _0x413963['iFBeZ'](_0x4d291f['width'], 0.5));
          _0x143cd5['y'] = _0x413963['TYJEm'](_0x413963['PfwpS'](_0x4d291f['y'], _0x4d291f['height']), _0x143cd5['height']);
          _0x359f57['spriteFrame'] = _0x235a33;
          _0x446b67['push'](_0x235a33);
          cc['loader']['loadRes'](_0x413963['vywBf'], cc['SpriteFrame'], function (_0x353c91, _0x29da91) {
            if (_0x353c91) {
              console['log'](_0x413963['Lqlrk'], _0x353c91);
              return;
            }
            _0x446b67['push'](_0x29da91);
            var _0x20612c = _0x143cd5['addComponent'](cc['Animation']);
            var _0x2af95a = cc['AnimationClip']['createWithSpriteFrames'](_0x446b67, _0x446b67['length']);
            _0x2af95a['name'] = _0x413963['LpeGp'];
            _0x2af95a['wrapMode'] = cc['WrapMode']['Loop'];
            _0x2af95a['speed'] = 0x3;
            _0x20612c['addClip'](_0x2af95a);
            _0x20612c['play'](_0x413963['LpeGp']);
          });
        });
      }
    };
    for (var _0x172c4c = 0x0; _0x413963['ejIvQ'](_0x172c4c, _0x40529c['length']); _0x172c4c++) {
      var _0x446b67;
      _loop2();
    }
    _0x548071['addChild'](_0x143cd5);
  },
  'tryplay': function tryplay(_0x186d0f, _0x42b855, _0x56878e, _0x5ba894, _0x5028b8, _0x2915fd, _0x22df64) {
    if (_0x5028b8 === void 0) {
      _0x5028b8 = null;
    }
    if (_0x2915fd === void 0) {
      _0x2915fd = !![];
    }
    if (_0x22df64 === void 0) {
      _0x22df64 = null;
    }
    var _0x442bce = {
      'lIrFW': 'err:',
      'LwJkm': function LwJkm(_0x43e6b0, _0x1c5aa7) {
        return _0x43e6b0 - _0x1c5aa7;
      },
      'iDuuj': function iDuuj(_0x395252, _0x2c3614) {
        return _0x395252 * _0x2c3614;
      },
      'WERbT': function WERbT(_0xba2b5b, _0x337b9b) {
        return _0xba2b5b - _0x337b9b;
      },
      'lYKwp': function lYKwp(_0x2045d1, _0x2fd88a) {
        return _0x2045d1 - _0x2fd88a;
      },
      'gKhGV': function gKhGV(_0x4f13da, _0x1a0e95) {
        return _0x4f13da + _0x1a0e95;
      },
      'vpnXV': function vpnXV(_0x22d38c, _0x1cd801) {
        return _0x22d38c * _0x1cd801;
      },
      'flpGc': function flpGc(_0x1cb830, _0x100180) {
        return _0x1cb830 < _0x100180;
      },
      'JpXKd': 'item',
      'XqyFc': function XqyFc(_0x12e4c5, _0x54bd94) {
        return _0x12e4c5 / _0x54bd94;
      },
      'NtwdC': function NtwdC(_0x3d0b, _0x3b3776) {
        return _0x3d0b * _0x3b3776;
      },
      'NCWAv': function NCWAv(_0x32a832, _0x5573c1) {
        return _0x32a832 + _0x5573c1;
      },
      'VyTQi': function VyTQi(_0x3ef5fb, _0x234122) {
        return _0x3ef5fb * _0x234122;
      },
      'ZOlGO': 'scrollView',
      'VAmtS': 'view',
      'gaiVv': 'content',
      'sJfxt': function sJfxt(_0x204da2, _0x1f46dc) {
        return _0x204da2 < _0x1f46dc;
      },
      'FYmUo': function FYmUo(_0x1b9a35, _0x12c370) {
        return _0x1b9a35 * _0x12c370;
      },
      'nnaRf': function nnaRf(_0x440a1b, _0x8503ab) {
        return _0x440a1b + _0x8503ab;
      },
      'inZgi': function inZgi(_0x3e8d5b, _0x2928f0) {
        return _0x3e8d5b + _0x2928f0;
      },
      'mrrvQ': function mrrvQ(_0x27d012, _0x336be2) {
        return _0x27d012 + _0x336be2;
      },
      'aufpU': 'adver/try_close',
      'yBXyP': function yBXyP(_0x2a1d9c, _0x3ec675) {
        return _0x2a1d9c == _0x3ec675;
      },
      'YSUTb': 'sdk总开关关闭，不展示sdk',
      'AmFzN': function AmFzN(_0x28b7ec, _0x16d701) {
        return _0x28b7ec == _0x16d701;
      },
      'QUJio': 'sdk屏蔽接口屏蔽了此广告组件',
      'MvZUo': 'loadSDK',
      'pKxMh': 'SDK未初始化或初始化失败',
      'vQCCq': function vQCCq(_0x1a207b, _0x192b13) {
        return _0x1a207b + _0x192b13;
      },
      'wdgVK': '后台没有',
      'rXHZN': '广告位',
      'NqFod': function NqFod(_0x4dcaab, _0x1402a3) {
        return _0x4dcaab == _0x1402a3;
      },
      'uegyd': 'tryplay',
      'xSCbx': 'rect',
      'giyIA': 'adver/blackbg',
      'BRsoB': 'bigbox',
      'RPYse': 'closebtn',
      'mdxbF': 'adbox',
      'bKnyA': 'trybox',
      'CxKnQ': 'line',
      'YePhc': 'adver/try_line',
      'pNsgE': 'youlikeBox',
      'qFAzU': 'adver/try_bg'
    };
    if (_0x442bce['yBXyP'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x442bce['YSUTb']);
      return;
    }
    if (_0x442bce['AmFzN'](this['z_validAd'], 0x0)) {
      console['log'](_0x442bce['QUJio']);
      return;
    }
    if (!window[_0x442bce['MvZUo']]) {
      console['log'](_0x442bce['pKxMh']);
      return;
    }
    ;
    if (!this['checkShow'](_0x186d0f)) {
      console['log'](_0x442bce['mrrvQ'](_0x442bce['vQCCq'](_0x442bce['wdgVK'], _0x186d0f), _0x442bce['rXHZN']));
      return;
    }
    var _0xa976f4 = this;
    var _0x32f9d7 = _0xa976f4['ad_Data'];
    var _0x56880b;
    if (_0x442bce['NqFod'](_0x2915fd, null) || _0x2915fd) {
      _0x32f9d7 = _0xa976f4['getData'](0x0, _0x442bce['lYKwp'](_0xa976f4['ad_Data']['length'], 0x4));
      _0x56880b = _0xa976f4['getData'](_0x442bce['lYKwp'](_0xa976f4['ad_Data']['length'], 0x4), _0xa976f4['ad_Data']['length']);
    }
    var _0x5d7448 = new cc['Node'](_0x442bce['uegyd']);
    _0x5d7448['active'] = ![];
    _0x5d7448['setContentSize'](0x2ee, 0x536);
    _0x5d7448['scaleX'] = _0x5d7448['scaleY'] = _0xa976f4['offsetX'];
    var _0x17e04e = new cc['Node'](_0x442bce['xSCbx']);
    _0x17e04e['setContentSize'](0x3e8, 0x7d0);
    _0x17e04e['opacity'] = 0xc8;
    _0x5d7448['addChild'](_0x17e04e);
    var _0x52a3f8 = _0x17e04e['addComponent'](cc['Sprite']);
    _0x52a3f8['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x442bce['giyIA'], cc['SpriteFrame'], function (_0x57b8af, _0x2ed6a3) {
      if (_0x57b8af) {
        console['log'](_0x442bce['lIrFW'], _0x57b8af);
        return;
      }
      _0x52a3f8['spriteFrame'] = _0x2ed6a3;
    });
    var _0xe246f5 = _0x17e04e['addComponent'](cc['BlockInputEvents']);
    var _0x460c64 = new cc['Node'](_0x442bce['BRsoB']);
    _0x460c64['y'] += 0x32;
    _0x5d7448['addChild'](_0x460c64);
    var _0x6c4d87 = _0x460c64['addComponent'](cc['Sprite']);
    var _0x13eb4c = new cc['Node'](_0x442bce['RPYse']);
    _0x460c64['addChild'](_0x13eb4c);
    var _0x399d3d = _0x13eb4c['addComponent'](cc['Sprite']);
    _0x13eb4c['on'](cc['Node']['EventType']['TOUCH_START'], function () {
      _0x5d7448['removeFromParent']();
    }, _0xa976f4);
    var _0x168372 = new cc['Node'](_0x442bce['mdxbF']);
    _0x460c64['addChild'](_0x168372);
    _0x168372['anchorY'] = 0x1;
    var _0xbaf45e = new cc['Node'](_0x442bce['bKnyA']);
    _0x460c64['addChild'](_0xbaf45e);
    var _0x48ec9a;
    var _0x17e558;
    if (_0x2915fd) {
      _0x48ec9a = new cc['Node'](_0x442bce['CxKnQ']);
      _0x460c64['addChild'](_0x48ec9a);
      var _0x1c083f = _0x48ec9a['addComponent'](cc['Sprite']);
      cc['loader']['loadRes'](_0x442bce['YePhc'], cc['SpriteFrame'], function (_0x3ed3c5, _0x15f69d) {
        if (_0x3ed3c5) {
          console['log'](_0x442bce['lIrFW'], _0x3ed3c5);
          return;
        }
        _0x1c083f['spriteFrame'] = _0x15f69d;
      });
      _0x17e558 = new cc['Node'](_0x442bce['pNsgE']);
      _0x17e558['anchorY'] = 0x1;
      _0x17e558['anchorX'] = 0x0;
      _0x460c64['addChild'](_0x17e558);
    }
    cc['loader']['loadRes'](_0x442bce['qFAzU'], cc['SpriteFrame'], function (_0x3c270b, _0x3fd58b) {
      var _0x517250 = {
        'eSlfN': _0x442bce['lIrFW'],
        'asnwH': function asnwH(_0x708ebd, _0x30e010) {
          return _0x442bce['LwJkm'](_0x708ebd, _0x30e010);
        },
        'hZSTB': function hZSTB(_0x185dae, _0x56ec6f) {
          return _0x442bce['iDuuj'](_0x185dae, _0x56ec6f);
        },
        'RzIkF': function RzIkF(_0x41bb2e, _0x2d4ad3) {
          return _0x442bce['iDuuj'](_0x41bb2e, _0x2d4ad3);
        },
        'iYKXA': function iYKXA(_0x1040d1, _0xb9b576) {
          return _0x442bce['WERbT'](_0x1040d1, _0xb9b576);
        },
        'CqJlA': function CqJlA(_0x218695, _0x5e7293) {
          return _0x442bce['WERbT'](_0x218695, _0x5e7293);
        },
        'LcjWW': function LcjWW(_0xbcdcb8, _0x483cba) {
          return _0x442bce['lYKwp'](_0xbcdcb8, _0x483cba);
        },
        'zkZkZ': function zkZkZ(_0x383699, _0xce30cf) {
          return _0x442bce['gKhGV'](_0x383699, _0xce30cf);
        },
        'ZTWtc': function ZTWtc(_0x529e42, _0x57614d) {
          return _0x442bce['vpnXV'](_0x529e42, _0x57614d);
        },
        'huJRd': function huJRd(_0xe90c59, _0x2e6599) {
          return _0x442bce['lYKwp'](_0xe90c59, _0x2e6599);
        },
        'xkYvG': function xkYvG(_0xff2834, _0x2f3728) {
          return _0x442bce['flpGc'](_0xff2834, _0x2f3728);
        },
        'dvwDy': _0x442bce['JpXKd'],
        'MNYNX': function MNYNX(_0x5c2b4f, _0x2c5181) {
          return _0x442bce['XqyFc'](_0x5c2b4f, _0x2c5181);
        },
        'AYzqY': function AYzqY(_0x3202a5, _0x287f1d) {
          return _0x442bce['NtwdC'](_0x3202a5, _0x287f1d);
        },
        'NYheS': function NYheS(_0x3620dc, _0x352c60) {
          return _0x442bce['NtwdC'](_0x3620dc, _0x352c60);
        },
        'kBZtZ': function kBZtZ(_0x119c93, _0x176179) {
          return _0x442bce['NCWAv'](_0x119c93, _0x176179);
        },
        'ZfkUE': function ZfkUE(_0x2f88cc, _0x2ce46e) {
          return _0x442bce['VyTQi'](_0x2f88cc, _0x2ce46e);
        },
        'wdlNd': _0x442bce['ZOlGO'],
        'xTTNP': function xTTNP(_0x260717, _0x27775c) {
          return _0x442bce['VyTQi'](_0x260717, _0x27775c);
        },
        'gnQia': _0x442bce['VAmtS'],
        'phLIt': function phLIt(_0x32ea58, _0x4985ba) {
          return _0x442bce['lYKwp'](_0x32ea58, _0x4985ba);
        },
        'LRwxu': _0x442bce['gaiVv'],
        'ftZPH': function ftZPH(_0x2826b1, _0x3cf331) {
          return _0x442bce['lYKwp'](_0x2826b1, _0x3cf331);
        },
        'bAcYg': function bAcYg(_0x4eaddd, _0x5899c5) {
          return _0x442bce['sJfxt'](_0x4eaddd, _0x5899c5);
        },
        'sFXhT': function sFXhT(_0x127b6b, _0x1c6fe4) {
          return _0x442bce['FYmUo'](_0x127b6b, _0x1c6fe4);
        },
        'NyohT': function NyohT(_0x48ff1c, _0x4017de) {
          return _0x442bce['NCWAv'](_0x48ff1c, _0x4017de);
        },
        'GLDos': function GLDos(_0x42e1ac, _0x27e16b) {
          return _0x442bce['nnaRf'](_0x42e1ac, _0x27e16b);
        },
        'ZsBsL': function ZsBsL(_0x1906db, _0x217a69) {
          return _0x442bce['FYmUo'](_0x1906db, _0x217a69);
        },
        'viEIh': function viEIh(_0x2605e7, _0x11aadd) {
          return _0x442bce['inZgi'](_0x2605e7, _0x11aadd);
        },
        'lgViE': function lgViE(_0x2147b5, _0x580ae8) {
          return _0x442bce['FYmUo'](_0x2147b5, _0x580ae8);
        },
        'NvsUI': function NvsUI(_0x27eae2, _0x23c5e8) {
          return _0x442bce['mrrvQ'](_0x27eae2, _0x23c5e8);
        }
      };
      if (_0x3c270b) {
        console['log'](_0x442bce['lIrFW'], _0x3c270b);
        return;
      }
      _0x6c4d87['spriteFrame'] = _0x3fd58b;
      cc['loader']['loadRes'](_0x442bce['aufpU'], cc['SpriteFrame'], function (_0x240cd2, _0xf4ded8) {
        if (_0x240cd2) {
          console['log'](_0x517250['eSlfN'], _0x240cd2);
          return;
        }
        _0x399d3d['spriteFrame'] = _0xf4ded8;
        _0x13eb4c['x'] = _0x517250['asnwH'](_0x517250['hZSTB'](_0x460c64['width'], 0.5), 0x64);
        _0x13eb4c['y'] = _0x517250['asnwH'](_0x517250['RzIkF'](_0x460c64['height'], 0.5), 0xb4);
        _0x168372['setContentSize'](_0x517250['iYKXA'](_0x460c64['width'], 0x78), _0x517250['CqJlA'](_0x460c64['height'], 0xf5));
        _0x168372['y'] = _0x517250['CqJlA'](_0x13eb4c['y'], 0x3c);
        if (_0x2915fd) {
          _0xbaf45e['setContentSize'](_0x168372['width'], _0x517250['LcjWW'](_0x168372['height'], 0xeb));
        } else {
          _0xbaf45e['setContentSize'](_0x168372['width'], _0x168372['height']);
          _0xbaf45e['y'] -= 0x6e;
        }
        if (_0x48ec9a) {
          _0x48ec9a['y'] = -_0x517250['zkZkZ'](_0x517250['ZTWtc'](_0xbaf45e['height'], 0.5), 0x19);
          _0x17e558['setContentSize'](_0x168372['width'], 0xb4);
          _0x17e558['x'] = _0x517250['ZTWtc'](-_0x17e558['width'], 0.5);
          _0x17e558['y'] = _0x517250['huJRd'](_0x48ec9a['y'], 0x1e);
          for (var _0x589742 = 0x0; _0x517250['xkYvG'](_0x589742, _0x56880b['length']); _0x589742++) {
            var _0x292295 = new cc['Node'](_0x517250['dvwDy']);
            _0x292295['addComponent'](zzsdkui_item);
            var _0x450add = _0x292295['getComponent'](zzsdkui_item);
            _0x450add['tryyoulikeItem'](_0x186d0f, _0x5028b8, _0x56880b[_0x589742], _0x22df64);
            var _0x30d7f2 = _0x517250['MNYNX'](_0x517250['huJRd'](_0x17e558['width'], _0x517250['AYzqY'](_0x292295['width'], 0x4)), 0x5);
            _0x292295['x'] = _0x517250['zkZkZ'](_0x517250['NYheS'](_0x517250['kBZtZ'](_0x589742, 0x1), _0x30d7f2), _0x517250['ZfkUE'](_0x589742, _0x292295['width']));
            _0x292295['y'] = _0x517250['ZfkUE'](-_0x517250['huJRd'](_0x17e558['height'], _0x292295['height']), 0.5);
            _0xb37619 = _0x292295['height'];
            _0x17e558['addChild'](_0x292295);
          }
        }
        var _0x1050da = new cc['Node'](_0x517250['wdlNd']);
        _0x1050da['setContentSize'](_0xbaf45e['width'], _0xbaf45e['height']);
        _0x1050da['anchorY'] = 0x1;
        _0x1050da['anchorX'] = 0x0;
        _0x1050da['x'] = _0x517250['xTTNP'](-_0x1050da['width'], 0.5);
        _0x1050da['y'] = _0x517250['xTTNP'](_0x1050da['height'], 0.5);
        _0xbaf45e['addChild'](_0x1050da);
        var _0x58b4dd = _0x1050da['addComponent'](cc['ScrollView']);
        _0x58b4dd['horizontal'] = ![];
        _0x58b4dd['cancelInnerEvents'] = !![];
        var _0x4e6a43 = new cc['Node'](_0x517250['gnQia']);
        _0x4e6a43['setContentSize'](_0x517250['phLIt'](_0x1050da['width'], 0xa), _0x1050da['height']);
        _0x4e6a43['anchorY'] = 0x1;
        _0x4e6a43['anchorX'] = 0x0;
        var _0x3720e2 = _0x4e6a43['addComponent'](cc['Mask']);
        _0x1050da['addChild'](_0x4e6a43);
        var _0x172c86 = new cc['Node'](_0x517250['LRwxu']);
        _0x172c86['setContentSize'](_0x517250['ftZPH'](_0x1050da['width'], 0xa), _0x1050da['height']);
        _0x172c86['anchorX'] = 0x0;
        _0x172c86['anchorY'] = 0x1;
        _0x172c86['x'] = 0x0;
        _0x172c86['y'] = _0x517250['xTTNP'](_0x172c86['height'], 0.5);
        _0x4e6a43['addChild'](_0x172c86);
        _0x58b4dd['content'] = _0x4e6a43['getChildByName'](_0x517250['LRwxu']);
        var _0xb37619;
        for (var _0x = 0x0; _0x517250['bAcYg'](_0x, _0x32f9d7['length']); _0x++) {
          var _0x2 = new cc['Node'](_0x517250['dvwDy']);
          _0x2['addComponent'](zzsdkui_item);
          var _0x450add2 = _0x2['getComponent'](zzsdkui_item);
          _0x450add2['tryItem'](_0x186d0f, _0x5028b8, _0x32f9d7[_0x], _0x22df64, _0x42b855, _0x56878e, _0x5ba894);
          _0x2['x'] = _0x517250['sFXhT'](_0x517250['ftZPH'](_0x4e6a43['getChildByName'](_0x517250['LRwxu'])['width'], _0x2['width']), 0.5);
          _0x2['y'] = -_0x517250['NyohT'](_0x517250['sFXhT'](0x14, _0x517250['GLDos'](_0x, 0x1)), _0x517250['ZsBsL'](_0x2['height'], _0x));
          _0xb37619 = _0x2['height'];
          _0x4e6a43['getChildByName'](_0x517250['LRwxu'])['addChild'](_0x2);
        }
        _0x4e6a43['getChildByName'](_0x517250['LRwxu'])['height'] = _0x517250['viEIh'](_0x517250['ZsBsL'](_0xb37619, _0x32f9d7['length']), _0x517250['lgViE'](0x14, _0x517250['NvsUI'](_0x32f9d7['length'], 0x1)));
        _0x5d7448['active'] = !![];
      });
    });
    return _0x5d7448;
  },
  'interFull_scroll': function interFull_scroll(_0x3112de, _0x2c4e47, _0x90e6dc, _0x46c5b6, _0x40d2b1, _0x251d93) {
    if (_0x90e6dc === void 0) {
      _0x90e6dc = null;
    }
    if (_0x46c5b6 === void 0) {
      _0x46c5b6 = null;
    }
    if (_0x40d2b1 === void 0) {
      _0x40d2b1 = null;
    }
    if (_0x251d93 === void 0) {
      _0x251d93 = null;
    }
    var _0x4281e6 = {
      'ftFKB': function ftFKB(_0x162a77, _0x797809) {
        return _0x162a77 < _0x797809;
      },
      'AYUho': function AYUho(_0x177c80, _0x2817cc) {
        return _0x177c80 + _0x2817cc;
      },
      'BVyud': 'content',
      'CkxyC': function CkxyC(_0x1d6b05, _0x36d9f8) {
        return _0x1d6b05 - _0x36d9f8;
      },
      'bzaIc': function bzaIc(_0x440472, _0x563c70) {
        return _0x440472 > _0x563c70;
      },
      'NgPCA': 'err:',
      'lInbQ': function lInbQ(_0x2d3b56, _0x2cb2b2) {
        return _0x2d3b56 + _0x2cb2b2;
      },
      'JEjlG': function JEjlG(_0xf73be4, _0x10184e) {
        return _0xf73be4 * _0x10184e;
      },
      'Veomx': function Veomx(_0xbf161e, _0x1178ae) {
        return _0xbf161e * _0x1178ae;
      },
      'VEjIc': function VEjIc(_0x40373e, _0x5b3340) {
        return _0x40373e - _0x5b3340;
      },
      'PuxCc': function PuxCc(_0x4ad0ee, _0x1e61d9) {
        return _0x4ad0ee * _0x1e61d9;
      },
      'AJajy': function AJajy(_0x22b087, _0x17e309) {
        return _0x22b087 * _0x17e309;
      },
      'nNWfs': 'play1',
      'wSxsZ': function wSxsZ(_0x4086b7, _0x4490ea) {
        return _0x4086b7 + _0x4490ea;
      },
      'bRKUA': function bRKUA(_0x1607ad, _0xf433d8) {
        return _0x1607ad * _0xf433d8;
      },
      'oznXy': function oznXy(_0x3875d7, _0x2ea3b2) {
        return _0x3875d7 + _0x2ea3b2;
      },
      'lsXQJ': '个好友玩过',
      'AjXTK': function AjXTK(_0x772f35, _0x15c555) {
        return _0x772f35 + _0x15c555;
      },
      'wYTFS': function wYTFS(_0x154e3c, _0x46fbef) {
        return _0x154e3c + _0x46fbef;
      },
      'TMiin': function TMiin(_0x23b7c5, _0x46bcfa) {
        return _0x23b7c5 * _0x46bcfa;
      },
      'pVPxB': function pVPxB(_0x37977f, _0x3dd8e1) {
        return _0x37977f - _0x3dd8e1;
      },
      'pWfpu': function pWfpu(_0x171032, _0x32f13f) {
        return _0x171032 - _0x32f13f;
      },
      'QzMlW': function QzMlW(_0x3650c1, _0x1ae0c2) {
        return _0x3650c1 * _0x1ae0c2;
      },
      'FmvtF': function FmvtF(_0x4df141, _0x305b0d) {
        return _0x4df141 * _0x305b0d;
      },
      'JEsgV': 'scrollView',
      'cyneL': 'view',
      'yVAjP': function yVAjP(_0x8c82f3, _0x566156) {
        return _0x8c82f3 - _0x566156;
      },
      'jLnuH': 'item',
      'dSQKq': function dSQKq(_0x4f4df4, _0x2f9c22) {
        return _0x4f4df4 + _0x2f9c22;
      },
      'jmGzy': function jmGzy(_0x1424c0, _0x5e2552) {
        return _0x1424c0 * _0x5e2552;
      },
      'lMDUC': function lMDUC(_0x1d48d0, _0x134147) {
        return _0x1d48d0 * _0x134147;
      },
      'gnIvV': function gnIvV(_0x183570, _0x2dc086) {
        return _0x183570 * _0x2dc086;
      },
      'brXXX': function brXXX(_0x428e72, _0x19dd3f) {
        return _0x428e72 + _0x19dd3f;
      },
      'sUjLj': 'left',
      'fOjqm': function fOjqm(_0x5ad5d8, _0x477fe4) {
        return _0x5ad5d8 == _0x477fe4;
      },
      'JOmOm': 'right',
      'hxcWj': function hxcWj(_0x286d9c, _0x5133e9) {
        return _0x286d9c <= _0x5133e9;
      },
      'XCkof': function XCkof(_0x1ac512, _0x335cc0) {
        return _0x1ac512 - _0x335cc0;
      },
      'OVBOW': function OVBOW(_0x4f2b28, _0x147ece) {
        return _0x4f2b28 * _0x147ece;
      },
      'ZePDz': function ZePDz(_0x1d1653, _0x2dd111) {
        return _0x1d1653 >= _0x2dd111;
      },
      'prImz': 'adver/new_icon1',
      'yWoro': function yWoro(_0x16b96a, _0x9ca59f) {
        return _0x16b96a > _0x9ca59f;
      },
      'PJOFQ': function PJOFQ(_0x54aa5d, _0x276833) {
        return _0x54aa5d + _0x276833;
      },
      'uYlgD': 'bottom',
      'rawXc': function rawXc(_0x5aa5bd, _0xa2347) {
        return _0x5aa5bd == _0xa2347;
      },
      'XRHlf': 'top',
      'Tcjza': function Tcjza(_0x5e370f, _0x5e5936) {
        return _0x5e370f >= _0x5e5936;
      },
      'vwWAO': function vwWAO(_0x19baa2, _0x21ccae) {
        return _0x19baa2 * _0x21ccae;
      },
      'nDnLq': function nDnLq(_0x4790ee, _0x3386c1) {
        return _0x4790ee - _0x3386c1;
      },
      'IkDYc': function IkDYc(_0x39a6e7, _0x430f32) {
        return _0x39a6e7 - _0x430f32;
      },
      'HGOUH': function HGOUH(_0x2ecac0, _0x24f339) {
        return _0x2ecac0 * _0x24f339;
      },
      'oXREt': function oXREt(_0x5eeb2d, _0x5c6ac5) {
        return _0x5eeb2d - _0x5c6ac5;
      },
      'DFnSX': function DFnSX(_0x404a90, _0x2b0aff) {
        return _0x404a90 - _0x2b0aff;
      },
      'cCPcM': function cCPcM(_0x145e6f, _0x25c27a) {
        return _0x145e6f - _0x25c27a;
      },
      'sKxmR': function sKxmR(_0x1036e6, _0x2631ef) {
        return _0x1036e6 + _0x2631ef;
      },
      'WUuQi': 'play2',
      'RgDwC': function RgDwC(_0x2ca9a5, _0x5a4269) {
        return _0x2ca9a5 - _0x5a4269;
      },
      'TFaJo': '万人在玩',
      'MiXxP': function MiXxP(_0xe0987, _0x262de9) {
        return _0xe0987 + _0x262de9;
      },
      'YrbhM': function YrbhM(_0x3e30ef, _0x3a61c4) {
        return _0x3e30ef + _0x3a61c4;
      },
      'kaFbZ': function kaFbZ(_0x42bdc3, _0x5726e8) {
        return _0x42bdc3 + _0x5726e8;
      },
      'xPHWN': function xPHWN(_0xd10baa, _0x5237c1) {
        return _0xd10baa - _0x5237c1;
      },
      'yVHRl': 'scroll2',
      'IckDy': 'view2',
      'gEYZT': 'con2',
      'tvpor': 'item_btm',
      'KXtVh': function KXtVh(_0x52189e, _0x1b5bdc) {
        return _0x52189e / _0x1b5bdc;
      },
      'GhVvI': function GhVvI(_0x173b9c, _0x175625) {
        return _0x173b9c - _0x175625;
      },
      'gGApq': function gGApq(_0x1aef79, _0x13a4f9) {
        return _0x1aef79 * _0x13a4f9;
      },
      'TyRjD': function TyRjD(_0x1a2b3d, _0x5c029c) {
        return _0x1a2b3d + _0x5c029c;
      },
      'SGdxS': function SGdxS(_0x226857, _0x1ce120) {
        return _0x226857 + _0x1ce120;
      },
      'kxSYl': function kxSYl(_0x1f694a, _0x407407) {
        return _0x1f694a - _0x407407;
      },
      'BYrEv': function BYrEv(_0x4a35cf, _0x205a4a) {
        return _0x4a35cf + _0x205a4a;
      },
      'ILAuV': function ILAuV(_0x5d1560, _0x5060ec) {
        return _0x5d1560 * _0x5060ec;
      },
      'JeHYW': function JeHYW(_0x41844c, _0x55411f) {
        return _0x41844c * _0x55411f;
      },
      'rqADR': function rqADR(_0x2b2d02, _0x238d60) {
        return _0x2b2d02 * _0x238d60;
      },
      'qfrdi': function qfrdi(_0x53350e, _0x2a6bb0) {
        return _0x53350e * _0x2a6bb0;
      },
      'YuFFA': function YuFFA(_0x34ecd2, _0x279a64) {
        return _0x34ecd2 + _0x279a64;
      },
      'WxqMZ': function WxqMZ(_0x4c940b, _0x6500cc) {
        return _0x4c940b * _0x6500cc;
      },
      'hHBAJ': function hHBAJ(_0x3b28ae, _0x6b12af) {
        return _0x3b28ae / _0x6b12af;
      },
      'znhNz': function znhNz(_0x12a94b, _0x26919c) {
        return _0x12a94b / _0x26919c;
      },
      'ghiLT': function ghiLT(_0x18667f, _0x155eb6) {
        return _0x18667f / _0x155eb6;
      },
      'aPloj': function aPloj(_0x4d5089, _0x3ad1ca) {
        return _0x4d5089 + _0x3ad1ca;
      },
      'zZLAk': function zZLAk(_0x5246b9, _0x2e86c5) {
        return _0x5246b9 == _0x2e86c5;
      },
      'uDCwj': 'sdk总开关关闭，不展示sdk',
      'GDrwJ': 'sdk屏蔽接口屏蔽了此广告组件',
      'eZAvI': 'loadSDK',
      'oigQL': 'SDK未初始化或初始化失败',
      'xcfae': function xcfae(_0x1fb994, _0x2efea8) {
        return _0x1fb994 + _0x2efea8;
      },
      'BjbUt': '后台没有',
      'CarYk': '广告位',
      'Aucft': 'interBox',
      'TYGWk': function TYGWk(_0x42e00d, _0x2dc46a) {
        return _0x42e00d != _0x2dc46a;
      },
      'QCTfh': function QCTfh(_0x597cc6, _0x16520) {
        return _0x597cc6 != _0x16520;
      },
      'nwMXP': 'youlikeBox',
      'TjJYe': function TjJYe(_0x50645d, _0x37ec20) {
        return _0x50645d * _0x37ec20;
      },
      'OQhUo': 'youlikeTitle',
      'jNJVE': 'youlikeAdbox',
      'qnVPL': 'hottag',
      'QORHe': 'adver/new_bg2',
      'EUeDq': 'btmbox',
      'tklop': 'adver/new_icon2'
    };
    if (_0x4281e6['zZLAk'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x4281e6['uDCwj']);
      return;
    }
    if (_0x4281e6['zZLAk'](this['z_validAd'], 0x0)) {
      console['log'](_0x4281e6['GDrwJ']);
      return;
    }
    if (!window[_0x4281e6['eZAvI']]) {
      console['log'](_0x4281e6['oigQL']);
      return;
    }
    ;
    if (!this['checkShow'](_0x2c4e47)) {
      console['log'](_0x4281e6['aPloj'](_0x4281e6['xcfae'](_0x4281e6['BjbUt'], _0x2c4e47), _0x4281e6['CarYk']));
      return;
    }
    var _0x58731d = this;
    _0x58731d['interYouSch'] = !![];
    _0x58731d['interOthSch'] = !![];
    var _0x212cc1 = _0x58731d['ad_Data'];
    var _0x4a7cf5 = new cc['Node'](_0x4281e6['Aucft']);
    _0x4a7cf5['setContentSize'](cc['winSize']['width'], _0x4281e6['TYGWk'](_0x90e6dc, null) ? _0x90e6dc : cc['winSize']['height']);
    if (_0x4281e6['QCTfh'](_0x46c5b6, null)) {
      _0x4a7cf5['y'] = _0x46c5b6;
    }
    var _0x586e13 = new cc['Node'](_0x4281e6['nwMXP']);
    _0x586e13['setContentSize'](_0x4a7cf5['width'], 0xa3);
    _0x4a7cf5['addChild'](_0x586e13);
    _0x586e13['y'] = _0x4281e6['kxSYl'](_0x4281e6['kxSYl'](_0x4281e6['TjJYe'](_0x4a7cf5['height'], 0.5), _0x4281e6['TjJYe'](_0x586e13['height'], 0.5)), 0x32);
    var _0xbef9fe = new cc['Node'](_0x4281e6['OQhUo']);
    _0x586e13['addChild'](_0xbef9fe);
    var _0x5270d3 = _0xbef9fe['addComponent'](cc['Sprite']);
    var _0xa87e1e = new cc['Node'](_0x4281e6['jNJVE']);
    _0x586e13['addChild'](_0xa87e1e);
    _0xa87e1e['anchorX'] = 0x0;
    var _0x223a00 = _0xa87e1e['addComponent'](cc['Sprite']);
    var _0x167d1f = new cc['Node'](_0x4281e6['qnVPL']);
    _0x167d1f['anchorX'] = 0x0;
    _0x167d1f['anchorY'] = 0x1;
    _0x4a7cf5['addChild'](_0x167d1f);
    var _0x1c150e = _0x167d1f['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x4281e6['QORHe'], cc['SpriteFrame'], function (_0x58dc87, _0x401076) {
      var _0x5bb306 = {
        'VwqNC': function VwqNC(_0x20ed09, _0x2a6ad0) {
          return _0x4281e6['fOjqm'](_0x20ed09, _0x2a6ad0);
        },
        'QHUge': _0x4281e6['JOmOm'],
        'aJERr': _0x4281e6['sUjLj'],
        'iUrPj': _0x4281e6['BVyud'],
        'QzSpy': function QzSpy(_0x33ee2a, _0x4b2efa) {
          return _0x4281e6['hxcWj'](_0x33ee2a, _0x4b2efa);
        },
        'WiEjl': function WiEjl(_0x4ed613, _0x2ccfde) {
          return _0x4281e6['XCkof'](_0x4ed613, _0x2ccfde);
        },
        'HIinq': function HIinq(_0x11a7ec, _0x9ce0b) {
          return _0x4281e6['OVBOW'](_0x11a7ec, _0x9ce0b);
        },
        'uqUja': function uqUja(_0x14cc6e, _0x39f865) {
          return _0x4281e6['ZePDz'](_0x14cc6e, _0x39f865);
        }
      };
      if (_0x58dc87) {
        console['log'](_0x4281e6['NgPCA'], _0x58dc87);
        return;
      }
      if (_0x223a00) _0x223a00['spriteFrame'] = _0x401076;
      _0xa87e1e['x'] = _0x4281e6['OVBOW'](-_0xa87e1e['width'], 0.5);
      cc['loader']['loadRes'](_0x4281e6['prImz'], cc['SpriteFrame'], function (_0x50cc08, _0x5d811b) {
        var _0x5b4d78 = {
          'wlIUN': function wlIUN(_0x1c0260, _0x2b0118) {
            return _0x4281e6['ftFKB'](_0x1c0260, _0x2b0118);
          },
          'ajICe': function ajICe(_0x424996, _0x187e50) {
            return _0x4281e6['AYUho'](_0x424996, _0x187e50);
          },
          'EwrII': _0x4281e6['BVyud'],
          'KYVfC': function KYVfC(_0x45b714, _0xd306b) {
            return _0x4281e6['CkxyC'](_0x45b714, _0xd306b);
          },
          'jdxpO': function jdxpO(_0x3edaea, _0x3d34db) {
            return _0x4281e6['bzaIc'](_0x3edaea, _0x3d34db);
          },
          'nvfDv': function nvfDv(_0x3d4e18, _0xcf5460) {
            return _0x4281e6['AYUho'](_0x3d4e18, _0xcf5460);
          }
        };
        if (_0x50cc08) {
          console['log'](_0x4281e6['NgPCA'], _0x50cc08);
          return;
        }
        _0x5270d3['spriteFrame'] = _0x5d811b;
        _0xbef9fe['x'] = _0x4281e6['AYUho'](_0x4281e6['lInbQ'](_0x4281e6['JEjlG'](-_0x586e13['width'], 0.5), _0x4281e6['Veomx'](_0xbef9fe['width'], 0.5)), 0x14);
        _0xbef9fe['y'] = _0x4281e6['lInbQ'](_0x4281e6['VEjIc'](_0x4281e6['PuxCc'](_0x586e13['height'], 0.5), _0x4281e6['AJajy'](_0xbef9fe['height'], 0.5)), 0x2);
        var _0x126e3b = new cc['Node'](_0x4281e6['nNWfs']);
        _0x126e3b['width'] = 0x12c;
        _0x126e3b['height'] = 0x1a;
        var _0x59ff96 = _0x126e3b['addComponent'](cc['Label']);
        _0x59ff96['string'] = _0x4281e6['wSxsZ'](Math['floor'](_0x4281e6['wSxsZ'](_0x4281e6['bRKUA'](Math['random'](), _0x4281e6['oznXy'](_0x4281e6['VEjIc'](0x64, 0x1e), 0x1)), 0x1e)), _0x4281e6['lsXQJ']);
        _0x59ff96['fontSize'] = 0x18;
        _0x59ff96['lineHeight'] = 0x18;
        _0x59ff96['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
        _0x126e3b['x'] = _0x4281e6['AjXTK'](_0x4281e6['wYTFS'](_0xbef9fe['x'], _0x4281e6['bRKUA'](_0xbef9fe['width'], 0.5)), 0x5f);
        _0x126e3b['y'] = _0x4281e6['VEjIc'](_0xbef9fe['y'], _0x4281e6['TMiin'](_0x4281e6['pVPxB'](_0xbef9fe['height'], _0x126e3b['height']), 0.5));
        _0xa87e1e['y'] = _0x4281e6['pVPxB'](_0x4281e6['pVPxB'](_0x4281e6['pWfpu'](_0xbef9fe['y'], _0x4281e6['QzMlW'](_0xbef9fe['height'], 0.5)), _0x4281e6['FmvtF'](_0xa87e1e['height'], 0.5)), 0x14);
        var _0x39aead = new cc['Node'](_0x4281e6['JEsgV']);
        _0x39aead['width'] = _0xa87e1e['width'];
        _0x39aead['height'] = _0xa87e1e['height'];
        _0x39aead['anchorY'] = 0x1;
        _0x39aead['anchorX'] = 0x0;
        _0x39aead['x'] = 0x0;
        _0x39aead['y'] = _0x4281e6['FmvtF'](_0x39aead['height'], 0.5);
        ;
        _0xa87e1e['addChild'](_0x39aead);
        var _0xc4af4b = _0x39aead['addComponent'](cc['ScrollView']);
        _0xc4af4b['vertical'] = ![];
        _0xc4af4b['cancelInnerEvents'] = !![];
        var _0x1a44e8 = new cc['Node'](_0x4281e6['cyneL']);
        _0x1a44e8['setContentSize'](_0x4281e6['yVAjP'](_0x39aead['width'], 0xa), _0x39aead['height']);
        _0x1a44e8['x'] = 0x5;
        _0x1a44e8['anchorY'] = 0x1;
        _0x1a44e8['anchorX'] = 0x0;
        var _0x562c13 = _0x1a44e8['addComponent'](cc['Mask']);
        _0x39aead['addChild'](_0x1a44e8);
        var _0x3e3231 = new cc['Node'](_0x4281e6['BVyud']);
        _0x3e3231['setContentSize'](_0x4281e6['yVAjP'](_0x39aead['width'], 0xa), _0x39aead['height']);
        _0x3e3231['anchorX'] = 0x0;
        _0x3e3231['anchorY'] = 0x1;
        _0x3e3231['x'] = 0x0;
        _0x3e3231['y'] = _0x4281e6['FmvtF'](_0x3e3231['height'], 0.5);
        _0x1a44e8['addChild'](_0x3e3231);
        _0xc4af4b['content'] = _0x1a44e8['getChildByName'](_0x4281e6['BVyud']);
        var _0x430382;
        for (var _0x255c9e = 0x0; _0x4281e6['ftFKB'](_0x255c9e, _0x212cc1['length']); _0x255c9e++) {
          var _0xa2616c = new cc['Node'](_0x4281e6['jLnuH']);
          _0xa2616c['addComponent'](zzsdkui_item);
          var _0x1965e0 = _0xa2616c['getComponent'](zzsdkui_item);
          _0x1965e0['single_icon'](_0x2c4e47, _0x40d2b1, _0x212cc1[_0x255c9e], _0x251d93);
          _0xa2616c['x'] = _0x4281e6['wYTFS'](_0x4281e6['FmvtF'](0x14, _0x4281e6['dSQKq'](_0x255c9e, 0x1)), _0x4281e6['jmGzy'](_0xa2616c['width'], _0x255c9e));
          _0xa2616c['y'] = _0x4281e6['lMDUC'](-_0x4281e6['yVAjP'](_0x1a44e8['getChildByName'](_0x4281e6['BVyud'])['height'], _0xa2616c['height']), 0.5);
          _0x430382 = _0xa2616c['width'];
          _0x1a44e8['getChildByName'](_0x4281e6['BVyud'])['addChild'](_0xa2616c);
        }
        _0x1a44e8['getChildByName'](_0x4281e6['BVyud'])['width'] = _0x4281e6['dSQKq'](_0x4281e6['lMDUC'](_0x212cc1['length'], _0x430382), _0x4281e6['gnIvV'](_0x4281e6['brXXX'](_0x212cc1['length'], 0x1), 0x14));
        var _0x1e06c4 = _0x4281e6['sUjLj'];
        var _0xd19fe8 = 0x0;
        var _0x2fc16b = function _0x2fc16b() {
          if (!_0x58731d['interYouSch']) {
            _0x58731d['unschedule'](_0x2fc16b);
            return;
          }
          var _0x3e9480;
          if (_0x5bb306['VwqNC'](_0x1e06c4, _0x5bb306['QHUge'])) {
            _0x3e9480 = -0x1;
          } else if (_0x5bb306['VwqNC'](_0x1e06c4, _0x5bb306['aJERr'])) {
            _0x3e9480 = 0x1;
          }
          _0x1a44e8['getChildByName'](_0x5bb306['iUrPj'])['x'] += _0x3e9480;
          if (_0x5bb306['QzSpy'](_0x1a44e8['getChildByName'](_0x5bb306['iUrPj'])['x'], -_0x5bb306['WiEjl'](_0x1a44e8['getChildByName'](_0x5bb306['iUrPj'])['width'], _0x5bb306['HIinq'](_0x430382, 0x5)))) {
            _0x1e06c4 = _0x5bb306['aJERr'];
          } else if (_0x5bb306['uqUja'](_0x1a44e8['getChildByName'](_0x5bb306['iUrPj'])['x'], 0x0)) {
            _0x1e06c4 = _0x5bb306['QHUge'];
          }
          _0xd19fe8++;
          if (_0x5bb306['uqUja'](_0xd19fe8, 0x28)) {
            _0xd19fe8 = 0x0;
            _0x1a44e8['getChildByName'](_0x5bb306['iUrPj'])['children']['forEach'](function (_0x8e6b95) {
              if (_0x5b4d78['wlIUN'](_0x5b4d78['ajICe'](_0x1a44e8['getChildByName'](_0x5b4d78['EwrII'])['x'], _0x8e6b95['x']), _0x5b4d78['KYVfC'](-_0x430382, 0x32)) || _0x5b4d78['jdxpO'](_0x5b4d78['ajICe'](_0x1a44e8['getChildByName'](_0x5b4d78['EwrII'])['x'], _0x8e6b95['x']), _0x5b4d78['nvfDv'](_0x39aead['width'], 0x32))) {
                _0x8e6b95['active'] = ![];
              } else {
                _0x8e6b95['active'] = !![];
              }
            });
          }
        };
        _0x58731d['fulltopSchArr'][_0x3112de] = _0x2fc16b;
        _0x58731d['schedule'](_0x2fc16b, 0.005);
      });
    });
    var _0x57976e = new cc['Node'](_0x4281e6['EUeDq']);
    _0x57976e['width'] = _0x4a7cf5['width'];
    _0x4a7cf5['addChild'](_0x57976e);
    _0x57976e['anchorY'] = 0x1;
    cc['loader']['loadRes'](_0x4281e6['tklop'], cc['SpriteFrame'], function (_0x45fe36, _0x426191) {
      if (_0x45fe36) {
        console['log'](_0x4281e6['NgPCA'], _0x45fe36);
        return;
      }
      if (_0x1c150e) _0x1c150e['spriteFrame'] = _0x426191;
      _0x167d1f['x'] = _0x4281e6['PJOFQ'](_0x4281e6['vwWAO'](-_0x4a7cf5['width'], 0.5), 0x14);
      _0x167d1f['y'] = _0x4281e6['nDnLq'](_0x4281e6['IkDYc'](_0x586e13['y'], _0x4281e6['HGOUH'](_0x586e13['height'], 0.5)), 0x50);
      _0x57976e['height'] = _0x4281e6['oXREt'](_0x4281e6['DFnSX'](_0x4281e6['cCPcM'](_0x4a7cf5['height'], _0x586e13['height']), _0x167d1f['height']), 0xa0);
      _0x57976e['y'] = _0x4281e6['PJOFQ'](_0x4281e6['sKxmR'](_0x4281e6['HGOUH'](-_0x4a7cf5['height'], 0.5), _0x57976e['height']), 0x14);
      var _0x189c49 = new cc['Node'](_0x4281e6['WUuQi']);
      _0x189c49['width'] = 0x12c;
      _0x189c49['height'] = 0x1a;
      var _0x581d11 = _0x189c49['addComponent'](cc['Label']);
      _0x581d11['string'] = _0x4281e6['sKxmR'](Math['floor'](_0x4281e6['sKxmR'](_0x4281e6['HGOUH'](Math['random'](), _0x4281e6['sKxmR'](_0x4281e6['RgDwC'](0x64, 0x32), 0x1)), 0x32)), _0x4281e6['TFaJo']);
      _0x581d11['fontSize'] = 0x18;
      _0x581d11['lineHeight'] = 0x18;
      _0x581d11['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
      _0x189c49['x'] = _0x4281e6['MiXxP'](_0x4281e6['YrbhM'](_0x167d1f['x'], _0x167d1f['width']), 0x55);
      _0x189c49['y'] = _0x4281e6['YrbhM'](_0x4281e6['kaFbZ'](_0x4281e6['xPHWN'](_0x167d1f['y'], _0x167d1f['height']), _0x4281e6['HGOUH'](_0x189c49['height'], 0.5)), 0x2);
      var _0xfe358e = new cc['Node'](_0x4281e6['yVHRl']);
      _0xfe358e['height'] = _0x57976e['height'];
      _0xfe358e['width'] = _0x57976e['width'];
      _0xfe358e['anchorX'] = 0x0;
      _0xfe358e['anchorY'] = 0x1;
      _0xfe358e['x'] = _0x4281e6['HGOUH'](-_0xfe358e['width'], 0.5);
      _0xfe358e['y'] = 0x0;
      _0x57976e['addChild'](_0xfe358e);
      var _0x50e3f8 = _0xfe358e['addComponent'](cc['ScrollView']);
      _0x50e3f8['horizontal'] = ![];
      var _0x443292 = new cc['Node'](_0x4281e6['IckDy']);
      _0x443292['width'] = _0xfe358e['width'];
      _0x443292['height'] = _0xfe358e['height'];
      _0x443292['anchorX'] = 0x0;
      _0x443292['anchorY'] = 0x1;
      var _0x5962e7 = _0x443292['addComponent'](cc['Mask']);
      _0xfe358e['addChild'](_0x443292);
      var _0x5bf396 = new cc['Node'](_0x4281e6['gEYZT']);
      _0x5bf396['anchorX'] = 0x0;
      _0x5bf396['anchorY'] = 0x1;
      _0x5bf396['width'] = _0x443292['width'];
      _0x5bf396['x'] = 0x0;
      _0x5bf396['y'] = 0x0;
      _0x443292['addChild'](_0x5bf396);
      _0x50e3f8['content'] = _0x5bf396;
      var _0x21200d;
      for (var _0xfa9a8b = 0x0; _0x4281e6['ftFKB'](_0xfa9a8b, _0x212cc1['length']); _0xfa9a8b++) {
        var _0x5ac460 = new cc['Node'](_0x4281e6['tvpor']);
        _0x5ac460['addComponent'](zzsdkui_item);
        if (_0x4281e6['ftFKB'](cc['winSize']['width'], 0x2ee)) {
          _0x5ac460['scaleY'] = _0x5ac460['scaleX'] = 0.8;
        }
        var _0x3db7c9 = _0x5ac460['getComponent'](zzsdkui_item);
        _0x3db7c9['hotItem'](_0x2c4e47, _0x40d2b1, _0x212cc1[_0xfa9a8b], _0x251d93);
        var _0x3013e5 = _0x4281e6['KXtVh'](_0x4281e6['xPHWN'](_0x4281e6['GhVvI'](_0x5bf396['width'], _0x4281e6['HGOUH'](_0x4281e6['gGApq'](0x3, _0x5ac460['width']), _0x5ac460['scaleX'])), 0xa), _0x4281e6['TyRjD'](0x3, 0x1));
        _0x5ac460['x'] = _0x4281e6['SGdxS'](_0x4281e6['gGApq'](_0x3013e5, _0x4281e6['kxSYl'](_0x4281e6['BYrEv'](_0xfa9a8b, 0x1), _0x4281e6['ILAuV'](Math['floor'](_0x4281e6['KXtVh'](_0xfa9a8b, 0x3)), 0x3))), _0x4281e6['JeHYW'](_0x4281e6['rqADR'](_0x4281e6['kxSYl'](_0xfa9a8b, _0x4281e6['qfrdi'](Math['floor'](_0x4281e6['KXtVh'](_0xfa9a8b, 0x3)), 0x3)), _0x5ac460['width']), _0x5ac460['scaleX']));
        _0x5ac460['y'] = -_0x4281e6['YuFFA'](_0x4281e6['WxqMZ'](0x14, _0x4281e6['YuFFA'](Math['floor'](_0x4281e6['hHBAJ'](_0xfa9a8b, 0x3)), 0x1)), _0x4281e6['WxqMZ'](_0x4281e6['WxqMZ'](_0x5ac460['height'], _0x5ac460['scaleY']), Math['floor'](_0x4281e6['znhNz'](_0xfa9a8b, 0x3))));
        _0x21200d = _0x4281e6['WxqMZ'](_0x5ac460['height'], _0x5ac460['scaleY']);
        _0x5bf396['addChild'](_0x5ac460);
      }
      _0x5bf396['height'] = _0x4281e6['YuFFA'](_0x4281e6['WxqMZ'](_0x21200d, Math['ceil'](_0x4281e6['ghiLT'](_0x212cc1['length'], 0x3))), _0x4281e6['WxqMZ'](0x14, _0x4281e6['aPloj'](Math['ceil'](_0x4281e6['ghiLT'](_0x212cc1['length'], 0x3)), 0x1)));
      var _0x509501 = _0x4281e6['XRHlf'];
      var _0x1a05bb = 0x28;
      var _0x91635c = function _0x91635c() {
        var _0x15bf13 = {
          'rmXdO': function rmXdO(_0x5dfaa0, _0x3632cc) {
            return _0x4281e6['yWoro'](_0x5dfaa0, _0x3632cc);
          },
          'TAGYj': function TAGYj(_0x5da450, _0x1494fc) {
            return _0x4281e6['brXXX'](_0x5da450, _0x1494fc);
          },
          'QqnnA': function QqnnA(_0x133e21, _0x4b0569) {
            return _0x4281e6['ftFKB'](_0x133e21, _0x4b0569);
          },
          'QAMSU': function QAMSU(_0x293428, _0x17f63b) {
            return _0x4281e6['PJOFQ'](_0x293428, _0x17f63b);
          }
        };
        if (!_0x58731d['interOthSch']) {
          _0x58731d['unschedule'](_0x91635c);
          return;
        }
        var _0x300d28;
        if (_0x4281e6['fOjqm'](_0x509501, _0x4281e6['uYlgD'])) {
          _0x300d28 = -0x1;
        } else if (_0x4281e6['rawXc'](_0x509501, _0x4281e6['XRHlf'])) {
          _0x300d28 = 0x1;
        }
        _0x5bf396['y'] += _0x300d28;
        if (_0x4281e6['hxcWj'](_0x5bf396['y'], 0x0)) {
          _0x509501 = _0x4281e6['XRHlf'];
        } else if (_0x4281e6['Tcjza'](_0x5bf396['y'], _0x4281e6['XCkof'](_0x5bf396['height'], _0xfe358e['height']))) {
          _0x509501 = _0x4281e6['uYlgD'];
        }
        _0x1a05bb++;
        if (_0x4281e6['Tcjza'](_0x1a05bb, 0x14)) {
          _0x1a05bb = 0x0;
          _0x5bf396['children']['forEach'](function (_0x380167) {
            if (_0x15bf13['rmXdO'](_0x15bf13['TAGYj'](_0x5bf396['y'], _0x380167['y']), _0x21200d) || _0x15bf13['QqnnA'](_0x15bf13['QAMSU'](_0x5bf396['y'], _0x380167['y']), -_0xfe358e['height'])) {
              _0x380167['active'] = ![];
            } else {
              _0x380167['active'] = !![];
            }
          });
        }
      };
      _0x58731d['fullBotSchArr'][_0x3112de] = _0x91635c;
      _0x58731d['schedule'](_0x91635c, 0.005);
    });
    return _0x4a7cf5;
  },
  'interFull_large': function interFull_large(_0x491c00, _0x49471e, _0x1dd339, _0x43f56d, _0x146b6d, _0x2e74f6) {
    if (_0x1dd339 === void 0) {
      _0x1dd339 = null;
    }
    if (_0x43f56d === void 0) {
      _0x43f56d = null;
    }
    if (_0x146b6d === void 0) {
      _0x146b6d = null;
    }
    if (_0x2e74f6 === void 0) {
      _0x2e74f6 = null;
    }
    var _0x24703b = {
      'PGWyl': function PGWyl(_0x1d503c, _0x3cb04f) {
        return _0x1d503c > _0x3cb04f;
      },
      'Kvyeg': function Kvyeg(_0x53fd26, _0x2e2913) {
        return _0x53fd26 + _0x2e2913;
      },
      'ZqTLU': function ZqTLU(_0x4dd874, _0x5c4600) {
        return _0x4dd874 < _0x5c4600;
      },
      'ohYPH': function ohYPH(_0x281f11, _0x5a2b83) {
        return _0x281f11 == _0x5a2b83;
      },
      'VuwYb': 'bottom',
      'glEDZ': function glEDZ(_0x443076, _0x4e197c) {
        return _0x443076 == _0x4e197c;
      },
      'UtHpb': 'top',
      'dmAWT': function dmAWT(_0x2fb079, _0xaf061c) {
        return _0x2fb079 <= _0xaf061c;
      },
      'FKAji': function FKAji(_0x4b01ff, _0x3cf0e1) {
        return _0x4b01ff >= _0x3cf0e1;
      },
      'xgIzV': function xgIzV(_0x24c7d9, _0x48e2a1) {
        return _0x24c7d9 - _0x48e2a1;
      },
      'MUUqb': function MUUqb(_0x5f15c5, _0x1a7495) {
        return _0x5f15c5 >= _0x1a7495;
      },
      'izVub': function izVub(_0x1a2754, _0x4160ae) {
        return _0x1a2754 == _0x4160ae;
      },
      'IJOQf': 'sdk总开关关闭，不展示sdk',
      'xwzJr': 'sdk屏蔽接口屏蔽了此广告组件',
      'ZJxLa': 'loadSDK',
      'Sssqc': 'SDK未初始化或初始化失败',
      'bvgdj': '后台没有',
      'eEbPj': '广告位',
      'mHaGz': 'fullNode',
      'LKTMv': function LKTMv(_0x339cf3, _0x4eb807) {
        return _0x339cf3 != _0x4eb807;
      },
      'tOmGs': function tOmGs(_0x285e2c, _0xa8b81) {
        return _0x285e2c > _0xa8b81;
      },
      'gRhHN': function gRhHN(_0xf18333, _0x17d1d6) {
        return _0xf18333 != _0x17d1d6;
      },
      'XvlZX': 'bigbox',
      'wcSzs': 'scrollView',
      'aRdnV': function aRdnV(_0x38bed4, _0x56393c) {
        return _0x38bed4 - _0x56393c;
      },
      'rlEUP': 'scrollNode:\x20',
      'jdguy': function jdguy(_0x4eb050, _0x3d72fb) {
        return _0x4eb050 * _0x3d72fb;
      },
      'kurux': 'view',
      'LgopS': 'content',
      'SYjkx': function SYjkx(_0x40184b, _0x1af411) {
        return _0x40184b * _0x1af411;
      },
      'eNOjd': function eNOjd(_0x5ae70d, _0x3e04fe) {
        return _0x5ae70d == _0x3e04fe;
      },
      'wUYVw': 'item',
      'feiZT': function feiZT(_0x24fdb2, _0x204ac6) {
        return _0x24fdb2 * _0x204ac6;
      },
      'BJCiO': function BJCiO(_0x2fec0a, _0x2cecdd) {
        return _0x2fec0a / _0x2cecdd;
      },
      'NCmTS': function NCmTS(_0xb7ae11, _0x44e259) {
        return _0xb7ae11 * _0x44e259;
      },
      'ybUGL': function ybUGL(_0x2b4335, _0x15aa32) {
        return _0x2b4335 * _0x15aa32;
      },
      'vKIub': function vKIub(_0x4165bd, _0x4425b6) {
        return _0x4165bd - _0x4425b6;
      },
      'mHGcx': function mHGcx(_0x3918f9, _0x11eeb2) {
        return _0x3918f9 + _0x11eeb2;
      },
      'lvcJs': function lvcJs(_0x5591d4, _0x12e758) {
        return _0x5591d4 - _0x12e758;
      },
      'HzAwo': function HzAwo(_0x5e650e, _0x6a89f1) {
        return _0x5e650e * _0x6a89f1;
      },
      'UgtzO': function UgtzO(_0x277515, _0x43bc44) {
        return _0x277515 / _0x43bc44;
      },
      'CVvVe': function CVvVe(_0xcb1b5d, _0x15cc07) {
        return _0xcb1b5d * _0x15cc07;
      },
      'weRIA': function weRIA(_0x267789, _0x4bfb29) {
        return _0x267789 / _0x4bfb29;
      }
    };
    if (_0x24703b['izVub'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x24703b['IJOQf']);
      return;
    }
    if (_0x24703b['izVub'](this['z_validAd'], 0x0)) {
      console['log'](_0x24703b['xwzJr']);
      return;
    }
    if (!window[_0x24703b['ZJxLa']]) {
      console['log'](_0x24703b['Sssqc']);
      return;
    }
    ;
    if (!this['checkShow'](_0x49471e)) {
      console['log'](_0x24703b['Kvyeg'](_0x24703b['Kvyeg'](_0x24703b['bvgdj'], _0x49471e), _0x24703b['eEbPj']));
      return;
    }
    var _0x2b40c4 = this;
    var _0x12fe28 = _0x2b40c4['ad_Data'];
    var _0x30483c = new cc['Node'](_0x24703b['mHaGz']);
    _0x30483c['setContentSize'](cc['winSize']['width'], _0x24703b['LKTMv'](_0x1dd339, null) ? _0x24703b['tOmGs'](_0x1dd339, cc['winSize']['height']) ? cc['winSize']['height'] : _0x1dd339 : cc['winSize']['height']);
    if (_0x24703b['gRhHN'](_0x43f56d, null)) {
      _0x30483c['y'] = _0x43f56d;
    }
    var _0x5e37e4 = new cc['Node'](_0x24703b['XvlZX']);
    _0x30483c['addChild'](_0x5e37e4);
    _0x5e37e4['width'] = _0x30483c['width'];
    _0x5e37e4['height'] = _0x30483c['height'];
    var _0x82ada1 = new cc['Node'](_0x24703b['wcSzs']);
    _0x82ada1['width'] = _0x5e37e4['width'];
    _0x82ada1['height'] = _0x24703b['aRdnV'](_0x5e37e4['height'], 0x14);
    console['log'](_0x24703b['rlEUP'], _0x82ada1['height']);
    _0x82ada1['anchorY'] = 0x1;
    _0x82ada1['anchorX'] = 0x0;
    _0x82ada1['x'] = _0x24703b['jdguy'](-_0x82ada1['width'], 0.5);
    _0x82ada1['y'] = _0x24703b['jdguy'](_0x82ada1['height'], 0.5);
    _0x5e37e4['addChild'](_0x82ada1);
    var _0xa151fa = _0x82ada1['addComponent'](cc['ScrollView']);
    _0xa151fa['horizontal'] = ![];
    _0xa151fa['cancelInnerEvents'] = !![];
    var _0x2e1f5c = new cc['Node'](_0x24703b['kurux']);
    _0x2e1f5c['setContentSize'](_0x82ada1['width'], _0x82ada1['height']);
    _0x2e1f5c['x'] = 0x5;
    _0x2e1f5c['anchorY'] = 0x1;
    _0x2e1f5c['anchorX'] = 0x0;
    var _0x46528f = _0x2e1f5c['addComponent'](cc['Mask']);
    _0x82ada1['addChild'](_0x2e1f5c);
    var _0x1537b2 = new cc['Node'](_0x24703b['LgopS']);
    _0x1537b2['setContentSize'](_0x82ada1['width'], _0x82ada1['height']);
    _0x1537b2['anchorX'] = 0x0;
    _0x1537b2['anchorY'] = 0x1;
    _0x1537b2['x'] = 0x0;
    _0x1537b2['y'] = _0x24703b['SYjkx'](_0x1537b2['height'], 0.5);
    _0x2e1f5c['addChild'](_0x1537b2);
    _0xa151fa['content'] = _0x2e1f5c['getChildByName'](_0x24703b['LgopS']);
    var _0x2baa29 = _0x24703b['eNOjd'](_0x2b40c4['z_sign'], 0x0) ? 0x2 : 0x4;
    var _0x5c0c2f;
    for (var _0x3c7943 = 0x0; _0x24703b['ZqTLU'](_0x3c7943, _0x12fe28['length']); _0x3c7943++) {
      var _0x2e8345 = new cc['Node'](_0x24703b['wUYVw']);
      _0x2e8345['addComponent'](zzsdkui_item);
      var _0x347c11 = _0x2e8345['getComponent'](zzsdkui_item);
      _0x347c11['fullLarge_item'](_0x49471e, _0x146b6d, _0x12fe28[_0x3c7943], _0x2e74f6);
      var _0x50ec5e = _0x24703b['feiZT'](_0x2e8345['width'], _0x2e8345['scaleX']);
      var _0x44cf36 = _0x24703b['BJCiO'](_0x24703b['aRdnV'](_0x1537b2['width'], _0x24703b['NCmTS'](_0x50ec5e, _0x2baa29)), _0x24703b['Kvyeg'](_0x2baa29, 0x1));
      _0x2e8345['x'] = _0x24703b['Kvyeg'](_0x24703b['ybUGL'](_0x44cf36, _0x24703b['vKIub'](_0x24703b['mHGcx'](_0x3c7943, 0x1), _0x24703b['ybUGL'](Math['floor'](_0x24703b['BJCiO'](_0x3c7943, _0x2baa29)), _0x2baa29))), _0x24703b['ybUGL'](_0x24703b['lvcJs'](_0x3c7943, _0x24703b['ybUGL'](Math['floor'](_0x24703b['BJCiO'](_0x3c7943, _0x2baa29)), _0x2baa29)), _0x50ec5e));
      _0x2e8345['y'] = -_0x24703b['mHGcx'](_0x24703b['HzAwo'](0x8, _0x24703b['mHGcx'](Math['floor'](_0x24703b['BJCiO'](_0x3c7943, _0x2baa29)), 0x1)), _0x24703b['HzAwo'](_0x2e8345['height'], Math['floor'](_0x24703b['UgtzO'](_0x3c7943, _0x2baa29))));
      _0x5c0c2f = _0x2e8345['height'];
      _0x1537b2['addChild'](_0x2e8345);
    }
    _0x1537b2['height'] = _0x24703b['mHGcx'](_0x24703b['HzAwo'](_0x5c0c2f, Math['ceil'](_0x24703b['UgtzO'](_0x12fe28['length'], _0x2baa29))), _0x24703b['CVvVe'](0x1e, _0x24703b['mHGcx'](Math['ceil'](_0x24703b['weRIA'](_0x12fe28['length'], _0x2baa29)), 0x1)));
    var _0x74ebe4 = _0x24703b['UtHpb'];
    var _0x457400 = 0x28;
    var _0x3fbef1 = function _0x3fbef1() {
      var _0x474b15 = {
        'ORXuN': function ORXuN(_0x2fec99, _0x2c85ae) {
          return _0x24703b['PGWyl'](_0x2fec99, _0x2c85ae);
        },
        'wnlWP': function wnlWP(_0x2f3066, _0x2a78cb) {
          return _0x24703b['Kvyeg'](_0x2f3066, _0x2a78cb);
        },
        'izyoc': function izyoc(_0x5d2d17, _0x385b03) {
          return _0x24703b['ZqTLU'](_0x5d2d17, _0x385b03);
        }
      };
      var _0x4940b2;
      if (_0x24703b['ohYPH'](_0x74ebe4, _0x24703b['VuwYb'])) {
        _0x4940b2 = -0x1;
      } else if (_0x24703b['glEDZ'](_0x74ebe4, _0x24703b['UtHpb'])) {
        _0x4940b2 = 0x1;
      }
      _0x1537b2['y'] += _0x4940b2;
      if (_0x24703b['dmAWT'](_0x1537b2['y'], 0x0)) {
        _0x74ebe4 = _0x24703b['UtHpb'];
      } else if (_0x24703b['FKAji'](_0x1537b2['y'], _0x24703b['xgIzV'](_0x24703b['xgIzV'](_0x1537b2['height'], _0x82ada1['height']), 0x50))) {
        _0x74ebe4 = _0x24703b['VuwYb'];
      }
      _0x457400++;
      if (_0x24703b['MUUqb'](_0x457400, 0x14)) {
        _0x457400 = 0x0;
        _0x1537b2['children']['forEach'](function (_0x42e916) {
          if (_0x474b15['ORXuN'](_0x474b15['wnlWP'](_0x1537b2['y'], _0x42e916['y']), _0x5c0c2f) || _0x474b15['izyoc'](_0x474b15['wnlWP'](_0x1537b2['y'], _0x42e916['y']), -_0x82ada1['height'])) {
            _0x42e916['active'] = ![];
          } else {
            _0x42e916['active'] = !![];
          }
        });
      }
    };
    _0x2b40c4['newLargeSchArr'][_0x491c00] = _0x3fbef1;
    _0x2b40c4['schedule'](_0x3fbef1, 0.005);
    return _0x30483c;
  },
  'inter_scroll': function inter_scroll(_0x554c73, _0x14cb51, _0x598e36, _0x50da6d, _0x5aca2f, _0x3e7d9a, _0x2e9853) {
    if (_0x598e36 === void 0) {
      _0x598e36 = 0x226;
    }
    if (_0x50da6d === void 0) {
      _0x50da6d = null;
    }
    if (_0x5aca2f === void 0) {
      _0x5aca2f = null;
    }
    if (_0x3e7d9a === void 0) {
      _0x3e7d9a = null;
    }
    if (_0x2e9853 === void 0) {
      _0x2e9853 = null;
    }
    var _0x9a6190 = {
      'iYOUG': function iYOUG(_0x365868, _0x4d56bb) {
        return _0x365868 > _0x4d56bb;
      },
      'OsjNt': function OsjNt(_0x3475c0, _0x208be7) {
        return _0x3475c0 + _0x208be7;
      },
      'UvxbA': function UvxbA(_0x235474, _0x158bbd) {
        return _0x235474 < _0x158bbd;
      },
      'sRZpK': function sRZpK(_0x3d939e, _0x3cb5e9) {
        return _0x3d939e == _0x3cb5e9;
      },
      'XBoPr': 'bottom',
      'LSdEL': function LSdEL(_0x5805f3, _0x1525ff) {
        return _0x5805f3 == _0x1525ff;
      },
      'vZLXc': 'top',
      'KrIVn': function KrIVn(_0x56afc8, _0x55657f) {
        return _0x56afc8 <= _0x55657f;
      },
      'Caylx': function Caylx(_0x227a05, _0x18a9ea) {
        return _0x227a05 >= _0x18a9ea;
      },
      'wLbbx': function wLbbx(_0x2d7d49, _0x1f3b53) {
        return _0x2d7d49 - _0x1f3b53;
      },
      'BfYRP': function BfYRP(_0x5b9972, _0x3e42b0) {
        return _0x5b9972 >= _0x3e42b0;
      },
      'gpzSQ': 'sdk总开关关闭，不展示sdk',
      'yNhOQ': function yNhOQ(_0x3befe1, _0x2ce389) {
        return _0x3befe1 == _0x2ce389;
      },
      'bGVmS': 'sdk屏蔽接口屏蔽了此广告组件',
      'SZeJD': 'loadSDK',
      'PWQTt': 'SDK未初始化或初始化失败',
      'wPTwc': function wPTwc(_0x18531b, _0x4a49c0) {
        return _0x18531b + _0x4a49c0;
      },
      'bgvet': '后台没有',
      'nxIrG': '广告位',
      'likLQ': 'interNode',
      'WcdOD': 'scrollView',
      'PupXe': function PupXe(_0x260f2d, _0x992eb9) {
        return _0x260f2d * _0x992eb9;
      },
      'UYmil': 'view',
      'Eyrxe': 'content',
      'IihnF': function IihnF(_0x2ceb3b, _0x12f5cb) {
        return _0x2ceb3b < _0x12f5cb;
      },
      'TTwvs': 'item',
      'BlkfR': function BlkfR(_0x1d7b02, _0x557ab4) {
        return _0x1d7b02 / _0x557ab4;
      },
      'MVIsv': function MVIsv(_0x5c3d34, _0x4b26fe) {
        return _0x5c3d34 + _0x4b26fe;
      },
      'eklUV': function eklUV(_0x2f4dd2, _0x5cb565) {
        return _0x2f4dd2 + _0x5cb565;
      },
      'VCkSd': function VCkSd(_0x25b17c, _0x27c45b) {
        return _0x25b17c - _0x27c45b;
      },
      'ERcyh': function ERcyh(_0x1a7087, _0x4ab987) {
        return _0x1a7087 + _0x4ab987;
      },
      'hQnYH': function hQnYH(_0x47c71a, _0x38274a) {
        return _0x47c71a - _0x38274a;
      },
      'OGVBS': function OGVBS(_0x3a78a2, _0x4b8a6f) {
        return _0x3a78a2 * _0x4b8a6f;
      },
      'mGdRI': function mGdRI(_0x21e278, _0xc17ce8) {
        return _0x21e278 / _0xc17ce8;
      },
      'uoCPC': function uoCPC(_0x412bab, _0x2118a7) {
        return _0x412bab + _0x2118a7;
      },
      'cqEfS': function cqEfS(_0x31956f, _0x44b198) {
        return _0x31956f * _0x44b198;
      },
      'wdTyj': function wdTyj(_0x51d16d, _0x5013a3) {
        return _0x51d16d + _0x5013a3;
      },
      'BysJV': function BysJV(_0x1c2f26, _0x3a2f1b) {
        return _0x1c2f26 * _0x3a2f1b;
      },
      'KIixi': function KIixi(_0x2872c5, _0x247332) {
        return _0x2872c5 * _0x247332;
      },
      'gsRwB': function gsRwB(_0x1d758a, _0xe48773) {
        return _0x1d758a / _0xe48773;
      },
      'VBFho': function VBFho(_0x3d2439, _0x3a1892) {
        return _0x3d2439 * _0x3a1892;
      },
      'Ylkex': function Ylkex(_0x49e446, _0x1c2644) {
        return _0x49e446 + _0x1c2644;
      }
    };
    if (_0x9a6190['LSdEL'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x9a6190['gpzSQ']);
      return;
    }
    if (_0x9a6190['yNhOQ'](this['z_validAd'], 0x0)) {
      console['log'](_0x9a6190['bGVmS']);
      return;
    }
    if (!window[_0x9a6190['SZeJD']]) {
      console['log'](_0x9a6190['PWQTt']);
      return;
    }
    ;
    if (!this['checkShow'](_0x14cb51)) {
      console['log'](_0x9a6190['OsjNt'](_0x9a6190['wPTwc'](_0x9a6190['bgvet'], _0x14cb51), _0x9a6190['nxIrG']));
      return;
    }
    var _0x568585 = this;
    var _0x1610e5 = _0x568585['ad_Data'];
    var _0x3978bf = new cc['Node'](_0x9a6190['likLQ']);
    if (!_0x598e36) {
      _0x598e36 = 0x226;
    }
    _0x3978bf['setContentSize'](0x28a, _0x598e36);
    var _0x4745c8 = new cc['Node'](_0x9a6190['WcdOD']);
    _0x4745c8['width'] = _0x3978bf['width'];
    _0x4745c8['height'] = _0x3978bf['height'];
    _0x4745c8['anchorX'] = 0x0;
    _0x4745c8['anchorY'] = 0x1;
    _0x4745c8['x'] = _0x9a6190['PupXe'](-_0x4745c8['width'], 0.5);
    _0x4745c8['y'] = _0x9a6190['PupXe'](_0x4745c8['height'], 0.5);
    _0x3978bf['addChild'](_0x4745c8);
    var _0x9d7cec = _0x4745c8['addComponent'](cc['ScrollView']);
    _0x9d7cec['horizontal'] = ![];
    _0x9d7cec['cancelInnerEvents'] = !![];
    var _0x4ea0dd = new cc['Node'](_0x9a6190['UYmil']);
    _0x4ea0dd['setContentSize'](_0x9a6190['wLbbx'](_0x4745c8['width'], 0xa), _0x4745c8['height']);
    _0x4ea0dd['anchorY'] = 0x1;
    _0x4ea0dd['anchorX'] = 0x0;
    var _0xa87f14 = _0x4ea0dd['addComponent'](cc['Mask']);
    _0x4745c8['addChild'](_0x4ea0dd);
    var _0x40927a = new cc['Node'](_0x9a6190['Eyrxe']);
    _0x40927a['setContentSize'](_0x9a6190['wLbbx'](_0x4745c8['width'], 0xa), _0x4745c8['height']);
    _0x40927a['anchorX'] = 0x0;
    _0x40927a['anchorY'] = 0x1;
    _0x4ea0dd['addChild'](_0x40927a);
    _0x9d7cec['content'] = _0x4ea0dd['getChildByName'](_0x9a6190['Eyrxe']);
    var _0x23785f;
    var _0x2ecd93;
    for (var _0x40cc7b = 0x0; _0x9a6190['IihnF'](_0x40cc7b, _0x1610e5['length']); _0x40cc7b++) {
      var _0x36ed6f = new cc['Node'](_0x9a6190['TTwvs']);
      _0x36ed6f['addComponent'](zzsdkui_item);
      var _0x5f5df0 = _0x36ed6f['getComponent'](zzsdkui_item);
      _0x5f5df0['interfullItem_bot'](_0x14cb51, _0x3e7d9a, _0x1610e5[_0x40cc7b], null, _0x2e9853, _0x40cc7b);
      var _0x2d2fab = _0x9a6190['BlkfR'](_0x9a6190['wLbbx'](_0x4ea0dd['getChildByName'](_0x9a6190['Eyrxe'])['width'], _0x9a6190['PupXe'](0x3, _0x36ed6f['width'])), _0x9a6190['MVIsv'](0x3, 0x1));
      _0x36ed6f['x'] = _0x9a6190['eklUV'](_0x9a6190['PupXe'](_0x2d2fab, _0x9a6190['VCkSd'](_0x9a6190['ERcyh'](_0x40cc7b, 0x1), _0x9a6190['PupXe'](Math['floor'](_0x9a6190['BlkfR'](_0x40cc7b, 0x3)), 0x3))), _0x9a6190['PupXe'](_0x9a6190['hQnYH'](_0x40cc7b, _0x9a6190['OGVBS'](Math['floor'](_0x9a6190['mGdRI'](_0x40cc7b, 0x3)), 0x3)), _0x36ed6f['width']));
      _0x36ed6f['y'] = -_0x9a6190['uoCPC'](_0x9a6190['cqEfS'](0x4, _0x9a6190['wdTyj'](Math['floor'](_0x9a6190['mGdRI'](_0x40cc7b, 0x3)), 0x1)), _0x9a6190['cqEfS'](_0x36ed6f['height'], Math['floor'](_0x9a6190['mGdRI'](_0x40cc7b, 0x3))));
      _0x4ea0dd['getChildByName'](_0x9a6190['Eyrxe'])['addChild'](_0x36ed6f);
      _0x23785f = _0x36ed6f['height'];
      _0x2ecd93 = _0x9a6190['BysJV'](_0x36ed6f['height'], _0x36ed6f['scaleY']);
    }
    _0x4ea0dd['getChildByName'](_0x9a6190['Eyrxe'])['height'] = _0x9a6190['wdTyj'](_0x9a6190['KIixi'](_0x23785f, Math['ceil'](_0x9a6190['gsRwB'](_0x1610e5['length'], 0x3))), _0x9a6190['VBFho'](0x4, _0x9a6190['Ylkex'](Math['ceil'](_0x9a6190['gsRwB'](_0x1610e5['length'], 0x3)), 0x1)));
    var _0x543fc4 = _0x9a6190['vZLXc'];
    var _0x30bfcd = 0x28;
    var _0x443f31 = function _0x443f31() {
      var _0x113877 = {
        'TymTa': function TymTa(_0x49ecf0, _0x4b3242) {
          return _0x9a6190['iYOUG'](_0x49ecf0, _0x4b3242);
        },
        'ksiLU': function ksiLU(_0xdc2871, _0x1776fc) {
          return _0x9a6190['OsjNt'](_0xdc2871, _0x1776fc);
        },
        'vOZnE': function vOZnE(_0x12502d, _0x4db304) {
          return _0x9a6190['UvxbA'](_0x12502d, _0x4db304);
        },
        'TljMH': function TljMH(_0x151f2b, _0xe8fb44) {
          return _0x9a6190['OsjNt'](_0x151f2b, _0xe8fb44);
        }
      };
      var _0x4571e3;
      if (_0x9a6190['sRZpK'](_0x543fc4, _0x9a6190['XBoPr'])) {
        _0x4571e3 = -0x1;
      } else if (_0x9a6190['LSdEL'](_0x543fc4, _0x9a6190['vZLXc'])) {
        _0x4571e3 = 0x1;
      }
      _0x40927a['y'] += _0x4571e3;
      if (_0x9a6190['KrIVn'](_0x40927a['y'], 0x0)) {
        _0x543fc4 = _0x9a6190['vZLXc'];
      } else if (_0x9a6190['Caylx'](_0x40927a['y'], _0x9a6190['wLbbx'](_0x40927a['height'], _0x4745c8['height']))) {
        _0x543fc4 = _0x9a6190['XBoPr'];
      }
      _0x30bfcd++;
      if (_0x9a6190['BfYRP'](_0x30bfcd, 0x14)) {
        _0x30bfcd = 0x0;
        _0x40927a['children']['forEach'](function (_0x50e424) {
          if (_0x113877['TymTa'](_0x113877['ksiLU'](_0x40927a['y'], _0x50e424['y']), _0x2ecd93) || _0x113877['vOZnE'](_0x113877['TljMH'](_0x40927a['y'], _0x50e424['y']), -_0x4745c8['height'])) {
            _0x50e424['active'] = ![];
          } else {
            _0x50e424['active'] = !![];
          }
        });
      }
    };
    _0x568585['newInterSchArr'][_0x554c73] = _0x443f31;
    _0x568585['schedule'](_0x443f31, 0.005);
    return _0x3978bf;
  },
  'interFull_list': function interFull_list(_0x17002e, _0x48ef22, _0x2251ea, _0x38c798) {
    if (_0x2251ea === void 0) {
      _0x2251ea = null;
    }
    if (_0x38c798 === void 0) {
      _0x38c798 = null;
    }
    var _0xd442c6 = {
      'MCNjm': 'loadSDK',
      'dkDsB': 'SDK未初始化或初始化失败',
      'NFYpo': function NFYpo(_0x183d43, _0x11f459) {
        return _0x183d43 + _0x11f459;
      },
      'IPCWy': function IPCWy(_0x1b7ce5, _0x2209f1) {
        return _0x1b7ce5 + _0x2209f1;
      },
      'IhGxz': '后台没有',
      'xRheS': '广告位',
      'rttiZ': function rttiZ(_0x36e14d, _0x581c12) {
        return _0x36e14d == _0x581c12;
      },
      'vlYNP': function vlYNP(_0x56120f, _0x5a57e3) {
        return _0x56120f == _0x5a57e3;
      }
    };
    if (!window[_0xd442c6['MCNjm']]) {
      console['log'](_0xd442c6['dkDsB']);
      return;
    }
    ;
    if (!this['checkShow'](_0x17002e)) {
      console['log'](_0xd442c6['NFYpo'](_0xd442c6['IPCWy'](_0xd442c6['IhGxz'], _0x17002e), _0xd442c6['xRheS']));
      return;
    }
    if (_0xd442c6['rttiZ'](this['z_sign'], 0x0)) {
      return this['createList'](_0x17002e, _0x48ef22, _0x2251ea, _0x38c798);
    } else if (_0xd442c6['vlYNP'](this['z_sign'], 0x1)) {
      return this['createList_ver'](_0x17002e, _0x48ef22, _0x2251ea, _0x38c798);
    }
  },
  'createList': function createList(_0x417879, _0x57b5b5, _0x942e45, _0x5f4188) {
    var _0x418d5a = {
      'jgBZB': 'err:',
      'mWrBI': function mWrBI(_0xcd62a4, _0x592510) {
        return _0xcd62a4 + _0x592510;
      },
      'efCXM': function efCXM(_0x5556f5, _0x42a846) {
        return _0x5556f5 + _0x42a846;
      },
      'InuUn': function InuUn(_0x106dc4, _0x144eef) {
        return _0x106dc4 * _0x144eef;
      },
      'tgwnf': function tgwnf(_0x3dcd60) {
        return _0x3dcd60();
      },
      'iLDAh': 'interBox',
      'ubssa': 'bigbg',
      'cIhHp': 'adver/item_bg',
      'GRZYN': 'title',
      'UJXca': '小程序',
      'QdOuP': function QdOuP(_0x596ad5, _0x546df1) {
        return _0x596ad5 - _0x546df1;
      },
      'ibrCa': function ibrCa(_0x315569, _0x48b67f) {
        return _0x315569 > _0x48b67f;
      },
      'ZvTrF': function ZvTrF(_0x286bfd, _0x12bf81) {
        return _0x286bfd * _0x12bf81;
      },
      'hVcQg': function hVcQg(_0x3c6e78, _0x519835) {
        return _0x3c6e78 - _0x519835;
      },
      'LddkC': function LddkC(_0x442210, _0x373a7a) {
        return _0x442210 - _0x373a7a;
      },
      'qUfju': function qUfju(_0x132d97, _0xdeb04) {
        return _0x132d97 * _0xdeb04;
      },
      'gWKEP': 'btnback',
      'HYGKn': 'adver/list_arr',
      'BkwYF': 'whitebg',
      'Avhrv': 'textLabel',
      'vfkah': '最近使用',
      'HYWDJ': function HYWDJ(_0x7076f9, _0x56a75a) {
        return _0x7076f9 - _0x56a75a;
      },
      'dBAGh': 'line',
      'oMkYu': function oMkYu(_0xd5dd76, _0x39d7e6) {
        return _0xd5dd76 - _0x39d7e6;
      },
      'hcAyf': 'adver/list_line',
      'xPOjb': 'adbox',
      'pakEz': function pakEz(_0x2433a8, _0x3486a0) {
        return _0x2433a8 - _0x3486a0;
      },
      'TqvBl': function TqvBl(_0x4b26c6, _0x4b93d2) {
        return _0x4b26c6 - _0x4b93d2;
      },
      'QJram': function QJram(_0x251822, _0x1d1006) {
        return _0x251822 * _0x1d1006;
      },
      'GQeCn': 'scrollView',
      'OyaAk': 'view',
      'MQfHX': 'content',
      'vbwSn': function vbwSn(_0x1d0a6e, _0x3ec701) {
        return _0x1d0a6e < _0x3ec701;
      },
      'EkFTV': 'item',
      'rAqSg': function rAqSg(_0x32bb7c, _0x43c7a0) {
        return _0x32bb7c * _0x43c7a0;
      },
      'BajCP': function BajCP(_0x35ddee, _0x4ab829) {
        return _0x35ddee * _0x4ab829;
      },
      'oQquh': function oQquh(_0x2738c7, _0x50f163) {
        return _0x2738c7 + _0x50f163;
      }
    };
    var _0xc5c7b9 = this;
    var _0x417d5b = _0xc5c7b9['ad_Data'];
    var _0x3779ad = new cc['Node'](_0x418d5a['iLDAh']);
    _0x3779ad['setContentSize'](cc['winSize']['width'], cc['winSize']['height']);
    var _0x2efd24 = new cc['Node'](_0x418d5a['ubssa']);
    _0x3779ad['addChild'](_0x2efd24);
    _0x2efd24['setContentSize'](0x3e8, 0x7d0);
    _0x2efd24['color'] = new cc['Color'](0xed, 0xed, 0xed);
    var _0x200b7d = _0x2efd24['addComponent'](cc['BlockInputEvents']);
    var _0x2191da = _0x2efd24['addComponent'](cc['Sprite']);
    _0x2191da['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x418d5a['cIhHp'], cc['SpriteFrame'], function (_0x459704, _0x7ca3dc) {
      if (_0x459704) {
        console['log'](_0x418d5a['jgBZB'], _0x459704);
        return;
      }
      _0x2191da['spriteFrame'] = _0x7ca3dc;
    });
    var _0x456d1a = new cc['Node'](_0x418d5a['GRZYN']);
    _0x456d1a['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x3779ad['addChild'](_0x456d1a);
    var _0x5f0eaa = _0x456d1a['addComponent'](cc['Label']);
    _0x5f0eaa['fontSize'] = 0x28;
    _0x5f0eaa['lineHeight'] = 0x29;
    _0x5f0eaa['string'] = _0x418d5a['UJXca'];
    _0x456d1a['x'] = 0x0;
    _0x456d1a['y'] = _0x418d5a['QdOuP'](_0x418d5a['QdOuP'](_0x418d5a['InuUn'](_0x3779ad['height'], 0.5), _0x456d1a['height']), 0x32);
    if (window['wx']) {
      if (_0x418d5a['ibrCa'](_0x418d5a['ZvTrF'](window['wx']['getSystemInfoSync']()['windowHeight'], 0x2), 0x5dc)) {
        _0x456d1a['y'] = _0x418d5a['hVcQg'](_0x418d5a['LddkC'](_0x418d5a['qUfju'](_0x3779ad['height'], 0.5), _0x456d1a['height']), 0x64);
      }
    }
    var _0x1ef03 = new cc['Node'](_0x418d5a['gWKEP']);
    _0x3779ad['addChild'](_0x1ef03);
    var _0x393c95 = _0x1ef03['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x418d5a['HYGKn'], cc['SpriteFrame'], function (_0x28d722, _0x1583f3) {
      if (_0x28d722) {
        console['log'](_0x418d5a['jgBZB'], _0x28d722);
        return;
      }
      _0x393c95['spriteFrame'] = _0x1583f3;
      _0x1ef03['x'] = _0x418d5a['mWrBI'](_0x418d5a['efCXM'](_0x418d5a['InuUn'](-_0x3779ad['width'], 0.5), _0x1ef03['width']), 0xa);
      _0x1ef03['y'] = _0x456d1a['y'];
    });
    _0x1ef03['on'](cc['Node']['EventType']['TOUCH_START'], function () {
      _0x418d5a['tgwnf'](_0x57b5b5);
    }, _0xc5c7b9);
    var _0x32f702 = new cc['Node'](_0x418d5a['BkwYF']);
    _0x3779ad['addChild'](_0x32f702);
    _0x32f702['y'] = _0x418d5a['LddkC'](_0x456d1a['y'], 0x3c);
    _0x32f702['anchorY'] = 0x1;
    _0x32f702['setContentSize'](0x3e8, 0x7d0);
    _0x32f702['color'] = new cc['Color'](0xff, 0xff, 0xff);
    var _0x6d8cd = _0x32f702['addComponent'](cc['Sprite']);
    _0x6d8cd['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x418d5a['cIhHp'], cc['SpriteFrame'], function (_0x408624, _0x1213ea) {
      if (_0x408624) {
        console['log'](_0x418d5a['jgBZB'], _0x408624);
        return;
      }
      _0x6d8cd['spriteFrame'] = _0x1213ea;
    });
    var _0x28477c = new cc['Node'](_0x418d5a['Avhrv']);
    _0x28477c['color'] = new cc['Color'](0x82, 0x82, 0x82);
    _0x3779ad['addChild'](_0x28477c);
    var _0x5a0530 = _0x28477c['addComponent'](cc['Label']);
    _0x5a0530['fontSize'] = 0x1e;
    _0x5a0530['lineHeight'] = 0x1f;
    _0x5a0530['string'] = _0x418d5a['vfkah'];
    _0x28477c['anchorX'] = 0x0;
    _0x28477c['x'] = _0x418d5a['efCXM'](_0x418d5a['qUfju'](-_0x3779ad['width'], 0.5), 0x1e);
    _0x28477c['y'] = _0x418d5a['HYWDJ'](_0x418d5a['HYWDJ'](_0x32f702['y'], _0x418d5a['qUfju'](_0x28477c['height'], 0.5)), 0x32);
    var _0x180266 = new cc['Node'](_0x418d5a['dBAGh']);
    _0x180266['width'] = _0x3779ad['width'];
    _0x180266['height'] = 0x2;
    _0x180266['anchorX'] = 0x0;
    _0x180266['x'] = _0x28477c['x'];
    _0x180266['y'] = _0x418d5a['oMkYu'](_0x418d5a['oMkYu'](_0x28477c['y'], _0x28477c['height']), 0x23);
    _0x3779ad['addChild'](_0x180266);
    var _0x17ec63 = _0x180266['addComponent'](cc['Sprite']);
    _0x17ec63['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x418d5a['hcAyf'], cc['SpriteFrame'], function (_0x41444e, _0x328552) {
      if (_0x41444e) {
        console['log'](_0x418d5a['jgBZB'], _0x41444e);
        return;
      }
      _0x17ec63['spriteFrame'] = _0x328552;
    });
    var _0x1b4067 = new cc['Node'](_0x418d5a['xPOjb']);
    _0x1b4067['x'] = 0x0;
    _0x1b4067['y'] = _0x418d5a['pakEz'](_0x180266['y'], 0x14);
    _0x1b4067['width'] = _0x3779ad['width'];
    _0x1b4067['height'] = _0x418d5a['TqvBl'](_0x3779ad['height'], _0x418d5a['TqvBl'](_0x418d5a['QJram'](_0x3779ad['height'], 0.5), _0x1b4067['y']));
    _0x1b4067['anchorX'] = 0x0;
    _0x1b4067['anchorY'] = 0x1;
    _0x3779ad['addChild'](_0x1b4067);
    var _0x3fa469 = new cc['Node'](_0x418d5a['GQeCn']);
    _0x3fa469['width'] = _0x1b4067['width'];
    _0x3fa469['height'] = _0x1b4067['height'];
    _0x3fa469['anchorY'] = 0x1;
    _0x3fa469['anchorX'] = 0x0;
    _0x3fa469['x'] = _0x418d5a['QJram'](-_0x3fa469['width'], 0.5);
    _0x3fa469['y'] = 0x0;
    _0x1b4067['addChild'](_0x3fa469);
    var _0x1b163a = _0x3fa469['addComponent'](cc['ScrollView']);
    _0x1b163a['horizontal'] = ![];
    _0x1b163a['cancelInnerEvents'] = !![];
    var _0x479cae = new cc['Node'](_0x418d5a['OyaAk']);
    _0x479cae['setContentSize'](_0x3fa469['width'], _0x3fa469['height']);
    _0x479cae['x'] = 0x5;
    _0x479cae['anchorY'] = 0x1;
    _0x479cae['anchorX'] = 0x0;
    var _0x375af7 = _0x479cae['addComponent'](cc['Mask']);
    _0x3fa469['addChild'](_0x479cae);
    var _0x49cfa6 = new cc['Node'](_0x418d5a['MQfHX']);
    _0x49cfa6['setContentSize'](_0x3fa469['width'], _0x3fa469['height']);
    _0x49cfa6['anchorX'] = 0x0;
    _0x49cfa6['anchorY'] = 0x1;
    _0x49cfa6['x'] = 0x0;
    _0x49cfa6['y'] = _0x418d5a['QJram'](_0x49cfa6['height'], 0.5);
    _0x479cae['addChild'](_0x49cfa6);
    _0x1b163a['content'] = _0x479cae['getChildByName'](_0x418d5a['MQfHX']);
    var _0x4050f0;
    var _0x24b305 = Math['floor'](_0x418d5a['efCXM'](_0x418d5a['QJram'](Math['random'](), 0x3), 0x1));
    for (var _0xf3940c = 0x0; _0x418d5a['vbwSn'](_0xf3940c, _0x417d5b['length']); _0xf3940c++) {
      var _0xcfa2be = new cc['Node'](_0x418d5a['EkFTV']);
      _0xcfa2be['addComponent'](zzsdkui_item);
      var _0x14b39a = _0xcfa2be['getComponent'](zzsdkui_item);
      _0x14b39a['interFullListItem'](_0x417879, _0x942e45, _0x417d5b[_0xf3940c], _0x5f4188, _0xf3940c, _0x24b305);
      _0xcfa2be['x'] = 0x0;
      _0xcfa2be['y'] = -_0x418d5a['efCXM'](_0x418d5a['rAqSg'](0x1e, _0xf3940c), _0x418d5a['BajCP'](_0xcfa2be['height'], _0xf3940c));
      _0x4050f0 = _0xcfa2be['height'];
      _0x49cfa6['addChild'](_0xcfa2be);
    }
    _0x49cfa6['height'] = _0x418d5a['efCXM'](_0x418d5a['BajCP'](_0x4050f0, _0x417d5b['length']), _0x418d5a['BajCP'](0x1e, _0x418d5a['oQquh'](_0x417d5b['length'], 0x1)));
    return _0x3779ad;
  },
  'createList_ver': function createList_ver(_0x10e227, _0x1905f1, _0x37b697, _0x192445) {
    var _0x3d37ae = {
      'aNgSx': 'err:',
      'JDOJe': function JDOJe(_0x1247fa, _0x31c802) {
        return _0x1247fa + _0x31c802;
      },
      'cPkFv': function cPkFv(_0x2d7f0b, _0x4c2904) {
        return _0x2d7f0b * _0x4c2904;
      },
      'MOCcS': function MOCcS(_0x298fb4) {
        return _0x298fb4();
      },
      'Upmtt': 'interBox',
      'CuTYY': 'bigbg',
      'lQoJe': 'adver/item_bg',
      'ykpgE': 'title',
      'dGtEc': '小程序',
      'qMDMA': function qMDMA(_0x29df7e, _0x25a31b) {
        return _0x29df7e + _0x25a31b;
      },
      'tayJy': function tayJy(_0x410918, _0x5e2e9d) {
        return _0x410918 + _0x5e2e9d;
      },
      'ZmKmp': function ZmKmp(_0x162623, _0x1d339d) {
        return _0x162623 > _0x1d339d;
      },
      'ufnys': function ufnys(_0x7bec9b, _0x2e5e7c) {
        return _0x7bec9b + _0x2e5e7c;
      },
      'EtGnl': 'btnback',
      'WFyEA': 'adver/list_arr',
      'DCuFN': 'whitebg',
      'DKbCi': function DKbCi(_0x2106d8, _0x580481) {
        return _0x2106d8 + _0x580481;
      },
      'PzugS': 'textLabel',
      'LVZPY': '最近使用',
      'vhfrX': function vhfrX(_0x5ccf2b, _0x30db4a) {
        return _0x5ccf2b + _0x30db4a;
      },
      'njtyk': function njtyk(_0x1ab9ec, _0x14c2ea) {
        return _0x1ab9ec + _0x14c2ea;
      },
      'hNCnh': function hNCnh(_0x15cfef, _0x57020c) {
        return _0x15cfef + _0x57020c;
      },
      'tBEzh': 'line',
      'yjngG': function yjngG(_0x27b90e, _0xa4558c) {
        return _0x27b90e + _0xa4558c;
      },
      'QacAj': function QacAj(_0x688b81, _0x3ef21a) {
        return _0x688b81 + _0x3ef21a;
      },
      'TXmOk': 'adver/list_line',
      'GmbBq': 'adbox',
      'EvgQn': function EvgQn(_0x2b6528, _0x50e78b) {
        return _0x2b6528 + _0x50e78b;
      },
      'VYoOZ': function VYoOZ(_0x3d54b8, _0x284e02) {
        return _0x3d54b8 - _0x284e02;
      },
      'ctXzF': function ctXzF(_0x310321, _0x1572c0) {
        return _0x310321 - _0x1572c0;
      },
      'BsjTN': function BsjTN(_0x800e73, _0x24d839) {
        return _0x800e73 * _0x24d839;
      },
      'dyknz': 'adbox.width:\x20',
      'TbGEq': 'scrollView',
      'uzyzu': 'view',
      'nNkXb': 'content',
      'bEjqL': function bEjqL(_0x245d89, _0xd5657) {
        return _0x245d89 + _0xd5657;
      },
      'fabTg': function fabTg(_0x92e745, _0x436b14) {
        return _0x92e745 < _0x436b14;
      },
      'pFeGG': 'item',
      'YHWKB': function YHWKB(_0x372b10, _0xca0ec0) {
        return _0x372b10 + _0xca0ec0;
      },
      'imATd': function imATd(_0x1e6353, _0x37285f) {
        return _0x1e6353 * _0x37285f;
      },
      'WfCin': function WfCin(_0x5b2891, _0x4fdc81) {
        return _0x5b2891 * _0x4fdc81;
      },
      'Ybkbn': function Ybkbn(_0x5a8564, _0x42a16f) {
        return _0x5a8564 * _0x42a16f;
      }
    };
    var _0x2961fb = this;
    var _0x49f74c = _0x2961fb['ad_Data'];
    var _0x4e76b9 = new cc['Node'](_0x3d37ae['Upmtt']);
    _0x4e76b9['setContentSize'](cc['winSize']['width'], cc['winSize']['height']);
    var _0x49ea65 = new cc['Node'](_0x3d37ae['CuTYY']);
    _0x4e76b9['addChild'](_0x49ea65);
    _0x49ea65['setContentSize'](0x7d0, 0x3e8);
    _0x49ea65['color'] = new cc['Color'](0xed, 0xed, 0xed);
    var _0x33ca88 = _0x49ea65['addComponent'](cc['BlockInputEvents']);
    var _0x49b0e5 = _0x49ea65['addComponent'](cc['Sprite']);
    _0x49b0e5['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x3d37ae['lQoJe'], cc['SpriteFrame'], function (_0x3fd334, _0x3572cc) {
      if (_0x3fd334) {
        console['log'](_0x3d37ae['aNgSx'], _0x3fd334);
        return;
      }
      _0x49b0e5['spriteFrame'] = _0x3572cc;
    });
    var _0x5ad55c = new cc['Node'](_0x3d37ae['ykpgE']);
    _0x5ad55c['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x4e76b9['addChild'](_0x5ad55c);
    var _0x33a7e5 = _0x5ad55c['addComponent'](cc['Label']);
    _0x33a7e5['fontSize'] = 0x28;
    _0x33a7e5['lineHeight'] = 0x29;
    _0x33a7e5['string'] = _0x3d37ae['dGtEc'];
    _0x5ad55c['rotation'] = -0x5a;
    _0x5ad55c['x'] = _0x3d37ae['qMDMA'](_0x3d37ae['tayJy'](_0x3d37ae['cPkFv'](-_0x4e76b9['width'], 0.5), _0x5ad55c['width']), 0x32);
    _0x5ad55c['y'] = 0x0;
    if (window['wx']) {
      if (_0x3d37ae['ZmKmp'](_0x3d37ae['cPkFv'](window['wx']['getSystemInfoSync']()['windowWidth'], 0x2), 0x5dc)) {
        _0x5ad55c['x'] = _0x3d37ae['tayJy'](_0x3d37ae['ufnys'](_0x3d37ae['cPkFv'](-_0x4e76b9['width'], 0.5), _0x5ad55c['width']), 0x64);
      }
    }
    var _0x4803be = new cc['Node'](_0x3d37ae['EtGnl']);
    _0x4e76b9['addChild'](_0x4803be);
    _0x4803be['rotation'] = -0x5a;
    var _0x350ba1 = _0x4803be['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x3d37ae['WFyEA'], cc['SpriteFrame'], function (_0x55d247, _0x12e01f) {
      if (_0x55d247) {
        console['log'](_0x3d37ae['aNgSx'], _0x55d247);
        return;
      }
      _0x350ba1['spriteFrame'] = _0x12e01f;
      _0x4803be['x'] = _0x5ad55c['x'];
      _0x4803be['y'] = _0x3d37ae['JDOJe'](_0x3d37ae['cPkFv'](-_0x4e76b9['height'], 0.5), 0x32);
    });
    _0x4803be['on'](cc['Node']['EventType']['TOUCH_START'], function () {
      _0x3d37ae['MOCcS'](_0x1905f1);
    }, _0x2961fb);
    var _0x49ad28 = new cc['Node'](_0x3d37ae['DCuFN']);
    _0x4e76b9['addChild'](_0x49ad28);
    _0x49ad28['x'] = _0x3d37ae['DKbCi'](_0x5ad55c['x'], 0x3c);
    _0x49ad28['anchorX'] = 0x0;
    _0x49ad28['setContentSize'](cc['winSize']['width'], cc['winSize']['height']);
    _0x49ad28['color'] = new cc['Color'](0xff, 0xff, 0xff);
    var _0x258182 = _0x49ad28['addComponent'](cc['Sprite']);
    _0x258182['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x3d37ae['lQoJe'], cc['SpriteFrame'], function (_0x29a2e5, _0x207d64) {
      if (_0x29a2e5) {
        console['log'](_0x3d37ae['aNgSx'], _0x29a2e5);
        return;
      }
      _0x258182['spriteFrame'] = _0x207d64;
    });
    var _0x499ba4 = new cc['Node'](_0x3d37ae['PzugS']);
    _0x499ba4['color'] = new cc['Color'](0x82, 0x82, 0x82);
    _0x4e76b9['addChild'](_0x499ba4);
    var _0x5ea94e = _0x499ba4['addComponent'](cc['Label']);
    _0x5ea94e['fontSize'] = 0x1e;
    _0x5ea94e['lineHeight'] = 0x1f;
    _0x5ea94e['string'] = _0x3d37ae['LVZPY'];
    _0x499ba4['anchorX'] = 0x0;
    _0x499ba4['rotation'] = -0x5a;
    _0x499ba4['x'] = _0x3d37ae['vhfrX'](_0x3d37ae['njtyk'](_0x49ad28['x'], _0x3d37ae['cPkFv'](_0x499ba4['width'], 0.5)), 0x1e);
    _0x499ba4['y'] = _0x3d37ae['hNCnh'](_0x3d37ae['cPkFv'](-_0x4e76b9['height'], 0.5), 0x1e);
    var _0x58f6f7 = new cc['Node'](_0x3d37ae['tBEzh']);
    _0x58f6f7['width'] = _0x4e76b9['width'];
    _0x58f6f7['height'] = 0x2;
    _0x58f6f7['rotation'] = -0x5a;
    _0x58f6f7['anchorX'] = 0x0;
    _0x58f6f7['x'] = _0x3d37ae['yjngG'](_0x3d37ae['QacAj'](_0x499ba4['x'], _0x499ba4['width']), 0x23);
    _0x58f6f7['y'] = _0x499ba4['y'];
    _0x4e76b9['addChild'](_0x58f6f7);
    var _0x33e901 = _0x58f6f7['addComponent'](cc['Sprite']);
    _0x33e901['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x3d37ae['TXmOk'], cc['SpriteFrame'], function (_0xf30e6b, _0x1a242b) {
      if (_0xf30e6b) {
        console['log'](_0x3d37ae['aNgSx'], _0xf30e6b);
        return;
      }
      _0x33e901['spriteFrame'] = _0x1a242b;
    });
    var _0x2cc08f = new cc['Node'](_0x3d37ae['GmbBq']);
    _0x2cc08f['x'] = _0x3d37ae['EvgQn'](_0x58f6f7['x'], 0x14);
    _0x2cc08f['width'] = _0x3d37ae['VYoOZ'](_0x3d37ae['ctXzF'](_0x4e76b9['width'], _0x2cc08f['x']), 0xa);
    _0x2cc08f['height'] = _0x4e76b9['height'];
    _0x2cc08f['y'] = _0x3d37ae['BsjTN'](_0x2cc08f['height'], 0.5);
    _0x2cc08f['anchorX'] = 0x0;
    _0x2cc08f['anchorY'] = 0x1;
    _0x4e76b9['addChild'](_0x2cc08f);
    console['log'](_0x3d37ae['dyknz'], _0x2cc08f['width']);
    var _0x1fc367 = new cc['Node'](_0x3d37ae['TbGEq']);
    _0x1fc367['width'] = _0x2cc08f['width'];
    _0x1fc367['height'] = _0x2cc08f['height'];
    _0x1fc367['anchorY'] = 0x1;
    _0x1fc367['anchorX'] = 0x0;
    _0x1fc367['x'] = 0x0;
    _0x1fc367['y'] = 0x0;
    _0x2cc08f['addChild'](_0x1fc367);
    var _0x52a299 = _0x1fc367['addComponent'](cc['ScrollView']);
    _0x52a299['horizontal'] = !![];
    _0x52a299['vertical'] = ![];
    _0x52a299['cancelInnerEvents'] = !![];
    var _0x4d0d03 = new cc['Node'](_0x3d37ae['uzyzu']);
    _0x4d0d03['setContentSize'](_0x1fc367['width'], _0x1fc367['height']);
    _0x4d0d03['x'] = 0x5;
    _0x4d0d03['anchorY'] = 0x1;
    _0x4d0d03['anchorX'] = 0x0;
    var _0x23f400 = _0x4d0d03['addComponent'](cc['Mask']);
    _0x1fc367['addChild'](_0x4d0d03);
    var _0x8ebc69 = new cc['Node'](_0x3d37ae['nNkXb']);
    _0x8ebc69['setContentSize'](_0x1fc367['width'], _0x1fc367['height']);
    _0x8ebc69['anchorX'] = 0x0;
    _0x8ebc69['anchorY'] = 0x1;
    _0x8ebc69['y'] = 0x0;
    _0x8ebc69['x'] = 0x0;
    _0x4d0d03['addChild'](_0x8ebc69);
    _0x52a299['content'] = _0x4d0d03['getChildByName'](_0x3d37ae['nNkXb']);
    var _0xa9d1ff;
    var _0x15053c = Math['floor'](_0x3d37ae['bEjqL'](_0x3d37ae['BsjTN'](Math['random'](), 0x3), 0x1));
    for (var _0x3b30cf = 0x0; _0x3d37ae['fabTg'](_0x3b30cf, _0x49f74c['length']); _0x3b30cf++) {
      var _0x46309d = new cc['Node'](_0x3d37ae['pFeGG']);
      _0x46309d['addComponent'](zzsdkui_item);
      var _0x97e1ca = _0x46309d['getComponent'](zzsdkui_item);
      _0x97e1ca['interFullListItem_ver'](_0x10e227, _0x37b697, _0x49f74c[_0x3b30cf], _0x192445, _0x3b30cf, _0x15053c);
      _0x46309d['y'] = 0x0;
      _0x46309d['x'] = _0x3d37ae['YHWKB'](_0x3d37ae['imATd'](0x1e, _0x3b30cf), _0x3d37ae['WfCin'](_0x46309d['width'], _0x3b30cf));
      _0xa9d1ff = _0x46309d['width'];
      _0x8ebc69['addChild'](_0x46309d);
    }
    _0x8ebc69['width'] = _0x3d37ae['YHWKB'](_0x3d37ae['Ybkbn'](_0xa9d1ff, _0x49f74c['length']), _0x3d37ae['Ybkbn'](0x1e, _0x3d37ae['YHWKB'](_0x49f74c['length'], 0x1)));
    return _0x4e76b9;
  },
  'interFull_scroll_ver': function interFull_scroll_ver(_0x4411bc, _0x504a02, _0x1a85d9, _0x263e04, _0x45ccbe, _0x5a60b4, _0x38e13c, _0x19dbd7) {
    if (_0x1a85d9 === void 0) {
      _0x1a85d9 = null;
    }
    if (_0x263e04 === void 0) {
      _0x263e04 = null;
    }
    if (_0x45ccbe === void 0) {
      _0x45ccbe = null;
    }
    if (_0x5a60b4 === void 0) {
      _0x5a60b4 = null;
    }
    if (_0x38e13c === void 0) {
      _0x38e13c = null;
    }
    if (_0x19dbd7 === void 0) {
      _0x19dbd7 = null;
    }
    var _0xf3d902 = {
      'haxGY': 'err:',
      'WfODO': function WfODO(_0x54df1c) {
        return _0x54df1c();
      },
      'URjWr': function URjWr(_0x86dce3, _0x4a778e) {
        return _0x86dce3 == _0x4a778e;
      },
      'UUwPL': 'right',
      'MMDUl': 'left',
      'lNZNt': 'content',
      'IOGca': function IOGca(_0x1e2ebf, _0x26428a) {
        return _0x1e2ebf <= _0x26428a;
      },
      'jFmlI': function jFmlI(_0x217647, _0x5630a8) {
        return _0x217647 - _0x5630a8;
      },
      'VvyIx': function VvyIx(_0x1c82c3, _0x2584cc) {
        return _0x1c82c3 >= _0x2584cc;
      },
      'rvRnQ': function rvRnQ(_0x5d5228, _0x5d0d4a) {
        return _0x5d5228 < _0x5d0d4a;
      },
      'Ndzto': function Ndzto(_0x391412, _0x23c309) {
        return _0x391412 + _0x23c309;
      },
      'BmJof': function BmJof(_0x5535d9, _0x3be1fa) {
        return _0x5535d9 > _0x3be1fa;
      },
      'ZJJCu': function ZJJCu(_0xab062b, _0x11a8b5) {
        return _0xab062b - _0x11a8b5;
      },
      'CEgkC': function CEgkC(_0x5a235a, _0x3cbfb8) {
        return _0x5a235a * _0x3cbfb8;
      },
      'WwOyR': function WwOyR(_0x254268, _0x5a539d) {
        return _0x254268 + _0x5a539d;
      },
      'VPoNf': 'scrollView',
      'XAwLU': function XAwLU(_0x4fad57, _0x3c4d36) {
        return _0x4fad57 * _0x3c4d36;
      },
      'PEuVI': 'view',
      'icSaQ': 'item',
      'hQUPc': 'zzsdk_item',
      'kqFbk': function kqFbk(_0x1a07e6, _0x4df933) {
        return _0x1a07e6 * _0x4df933;
      },
      'uxErf': function uxErf(_0x42bd90, _0x5f42a0) {
        return _0x42bd90 == _0x5f42a0;
      },
      'Mcpmf': '3|4|2|1|0',
      'wRkGg': 'Custom',
      'mpbBN': 'adver/new_icon1',
      'pOXQw': '1|3|4|0|2',
      'dKaYm': function dKaYm(_0x432a3a, _0x404ff9) {
        return _0x432a3a + _0x404ff9;
      },
      'rRuZh': function rRuZh(_0x2f847d, _0x7ff924) {
        return _0x2f847d / _0x7ff924;
      },
      'CwRrO': function CwRrO(_0x499aa4, _0x2e4c60) {
        return _0x499aa4 - _0x2e4c60;
      },
      'PpDCz': function PpDCz(_0x22e7e1, _0x2da52b) {
        return _0x22e7e1 + _0x2da52b;
      },
      'tYGTv': function tYGTv(_0x483a09, _0x256296) {
        return _0x483a09 < _0x256296;
      },
      'rDKGn': function rDKGn(_0x45e56f, _0x282445) {
        return _0x45e56f + _0x282445;
      },
      'AnGdh': function AnGdh(_0x307574, _0x36be01) {
        return _0x307574 - _0x36be01;
      },
      'xwzSj': function xwzSj(_0x473828, _0x342128) {
        return _0x473828 * _0x342128;
      },
      'zpzbI': function zpzbI(_0x4a582f, _0xb7b388) {
        return _0x4a582f - _0xb7b388;
      },
      'LKnwW': function LKnwW(_0x50f752, _0x32fb8b) {
        return _0x50f752 - _0x32fb8b;
      },
      'JGaXp': function JGaXp(_0x2ba3d5, _0x2825db) {
        return _0x2ba3d5 / _0x2825db;
      },
      'LCHfU': function LCHfU(_0x298cdc, _0x2b456f) {
        return _0x298cdc / _0x2b456f;
      },
      'DepkN': 'top',
      'FlCaN': function FlCaN(_0x3b4c7d, _0x50fb02) {
        return _0x3b4c7d * _0x50fb02;
      },
      'dCbfw': function dCbfw(_0x576c16, _0x1efd81) {
        return _0x576c16 * _0x1efd81;
      },
      'nSOub': function nSOub(_0x349c93, _0x4c63ad) {
        return _0x349c93 * _0x4c63ad;
      },
      'AhJaL': function AhJaL(_0x1d1189, _0xf83459) {
        return _0x1d1189 * _0xf83459;
      },
      'Ropbd': 'adver/new_icon2',
      'QVizf': 'sdk总开关关闭，不展示sdk',
      'ysckl': function ysckl(_0x4fde0f, _0x5bc720) {
        return _0x4fde0f == _0x5bc720;
      },
      'IHWdR': 'sdk屏蔽接口屏蔽了此广告组件',
      'HOLxw': 'loadSDK',
      'KRncq': 'SDK未初始化或初始化失败',
      'yubor': function yubor(_0x3abc21, _0x4800d4) {
        return _0x3abc21 + _0x4800d4;
      },
      'AbPnf': '后台没有',
      'aTNzB': '广告位',
      'mVCRS': 'interBox',
      'oqBVs': function oqBVs(_0x55d46c, _0x313b9e) {
        return _0x55d46c != _0x313b9e;
      },
      'hMneF': function hMneF(_0x10adc5, _0x5a19f3) {
        return _0x10adc5 != _0x5a19f3;
      },
      'LqVjh': 'bgImg',
      'ZwmNL': 'adver/sdk_bg',
      'lPtGB': function lPtGB(_0x474aa4, _0x13a956) {
        return _0x474aa4 == _0x13a956;
      },
      'RDzGb': 'btnback',
      'MnocQ': 'youlikeBox',
      'xDEGf': 'youlikeTitle',
      'zYKbo': 'youlikeAdbox',
      'sZLjt': 'hottag',
      'dCCbv': 'adver/new_bg2',
      'evdAE': 'other',
      'iQQfE': function iQQfE(_0x235fd7, _0x58c852) {
        return _0x235fd7 + _0x58c852;
      },
      'ibbLF': 'adver/',
      'OTgRM': 'sdk_button'
    };
    if (_0xf3d902['uxErf'](this['z_adSwitch'], 0x0)) {
      console['log'](_0xf3d902['QVizf']);
      return;
    }
    if (_0xf3d902['ysckl'](this['z_validAd'], 0x0)) {
      console['log'](_0xf3d902['IHWdR']);
      return;
    }
    if (!window[_0xf3d902['HOLxw']]) {
      console['log'](_0xf3d902['KRncq']);
      return;
    }
    ;
    if (!this['checkShow'](_0x504a02)) {
      console['log'](_0xf3d902['yubor'](_0xf3d902['yubor'](_0xf3d902['AbPnf'], _0x504a02), _0xf3d902['aTNzB']));
      return;
    }
    var _0x27104b = this;
    _0x27104b['interOthSch'] = !![];
    var _0x49aa28 = _0x27104b['ad_Data'];
    _0x27104b['interFullNode_ver'] = new cc['Node'](_0xf3d902['mVCRS']);
    _0x27104b['interFullNode_ver']['setContentSize'](cc['winSize']['width'], _0xf3d902['oqBVs'](_0x263e04, null) ? _0x263e04 : cc['winSize']['height']);
    if (_0xf3d902['hMneF'](_0x45ccbe, null)) {
      _0x27104b['interFullNode_ver']['y'] = _0x45ccbe;
    }
    var _0x44d4fa = new cc['Node'](_0xf3d902['LqVjh']);
    _0x27104b['interFullNode_ver']['addChild'](_0x44d4fa);
    var _0x22b275 = _0x44d4fa['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0xf3d902['ZwmNL'], cc['SpriteFrame'], function (_0x2621bb, _0x51face) {
      if (_0x2621bb) {
        console['log'](_0xf3d902['haxGY'], _0x2621bb);
        return;
      }
      _0x22b275['spriteFrame'] = _0x51face;
    });
    if (_0xf3d902['lPtGB'](this['z_sign'], 0x1)) {
      _0x44d4fa['angle'] = 0x5a;
    }
    var _0x42ffce = _0x44d4fa['addComponent'](cc['BlockInputEvents']);
    var _0x33eaa6 = new cc['Node'](_0xf3d902['RDzGb']);
    _0x27104b['interFullNode_ver']['addChild'](_0x33eaa6);
    var _0x28f30f = _0x33eaa6['addComponent'](cc['Sprite']);
    _0x33eaa6['on'](cc['Node']['EventType']['TOUCH_START'], function () {
      _0xf3d902['WfODO'](_0x1a85d9);
    }, _0x27104b);
    var _0x58ec6e = new cc['Node'](_0xf3d902['MnocQ']);
    _0x58ec6e['setContentSize'](_0x27104b['interFullNode_ver']['width'], 0x64);
    _0x27104b['interFullNode_ver']['addChild'](_0x58ec6e);
    var _0x46b39a = new cc['Node'](_0xf3d902['xDEGf']);
    _0x58ec6e['addChild'](_0x46b39a);
    var _0x3f90e5 = new cc['Node'](_0xf3d902['zYKbo']);
    _0x58ec6e['addChild'](_0x3f90e5);
    _0x3f90e5['anchorX'] = 0x0;
    var _0x351497 = _0x3f90e5['addComponent'](cc['Sprite']);
    var _0x37ca4e = new cc['Node'](_0xf3d902['sZLjt']);
    _0x37ca4e['anchorX'] = 0x0;
    _0x37ca4e['anchorY'] = 0x1;
    _0x27104b['interFullNode_ver']['addChild'](_0x37ca4e);
    var _0x23f8cf = _0x37ca4e['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0xf3d902['dCCbv'], cc['SpriteFrame'], function (_0x552116, _0x375efb) {
      var _0x7efdf = {
        'EZaja': function EZaja(_0x170653, _0x529636) {
          return _0xf3d902['URjWr'](_0x170653, _0x529636);
        },
        'QLQWw': _0xf3d902['UUwPL'],
        'mSQEb': _0xf3d902['MMDUl'],
        'frQsh': _0xf3d902['lNZNt'],
        'kBUXM': function kBUXM(_0x314852, _0x350797) {
          return _0xf3d902['IOGca'](_0x314852, _0x350797);
        },
        'EXZfm': function EXZfm(_0x294cc8, _0x15878b) {
          return _0xf3d902['jFmlI'](_0x294cc8, _0x15878b);
        },
        'pRXBe': function pRXBe(_0x48165c, _0x50f12d) {
          return _0xf3d902['VvyIx'](_0x48165c, _0x50f12d);
        },
        'onBzy': function onBzy(_0x3b3ab8, _0x12d88b) {
          return _0xf3d902['VvyIx'](_0x3b3ab8, _0x12d88b);
        },
        'HZsgl': function HZsgl(_0x44a727, _0x4cb618) {
          return _0xf3d902['rvRnQ'](_0x44a727, _0x4cb618);
        },
        'icbow': function icbow(_0x3f4d6f, _0x3d67ac) {
          return _0xf3d902['Ndzto'](_0x3f4d6f, _0x3d67ac);
        },
        'fiszi': function fiszi(_0x242ef8, _0xd4f969) {
          return _0xf3d902['BmJof'](_0x242ef8, _0xd4f969);
        },
        'ULAIE': function ULAIE(_0x5e1c16, _0x3a03a7) {
          return _0xf3d902['Ndzto'](_0x5e1c16, _0x3a03a7);
        },
        'AMOOe': _0xf3d902['haxGY'],
        'PcmkG': function PcmkG(_0x4ea72e, _0x28abf2) {
          return _0xf3d902['ZJJCu'](_0x4ea72e, _0x28abf2);
        },
        'rMGCJ': function rMGCJ(_0x111a13, _0x15c315) {
          return _0xf3d902['CEgkC'](_0x111a13, _0x15c315);
        },
        'LmeyO': function LmeyO(_0x3efe50, _0x5054f4) {
          return _0xf3d902['CEgkC'](_0x3efe50, _0x5054f4);
        },
        'zeuEy': function zeuEy(_0x591869, _0x23a360) {
          return _0xf3d902['WwOyR'](_0x591869, _0x23a360);
        },
        'DcJos': _0xf3d902['VPoNf'],
        'TdBaK': function TdBaK(_0x3f6b50, _0xf81bfb) {
          return _0xf3d902['XAwLU'](_0x3f6b50, _0xf81bfb);
        },
        'iLBVa': _0xf3d902['PEuVI'],
        'AsDwd': function AsDwd(_0x5c5995, _0x10c1c1) {
          return _0xf3d902['rvRnQ'](_0x5c5995, _0x10c1c1);
        },
        'JyIvy': _0xf3d902['icSaQ'],
        'HfDPE': _0xf3d902['hQUPc'],
        'mRftT': function mRftT(_0x2d8524, _0x34968b) {
          return _0xf3d902['WwOyR'](_0x2d8524, _0x34968b);
        },
        'AKfSz': function AKfSz(_0x1b8f15, _0x5f068f) {
          return _0xf3d902['XAwLU'](_0x1b8f15, _0x5f068f);
        },
        'tLYRs': function tLYRs(_0x596ba6, _0xbd15c8) {
          return _0xf3d902['kqFbk'](_0x596ba6, _0xbd15c8);
        },
        'qNxmP': function qNxmP(_0x5de253, _0x4eb2a5) {
          return _0xf3d902['kqFbk'](_0x5de253, _0x4eb2a5);
        }
      };
      if (_0x552116) {
        console['log'](_0xf3d902['haxGY'], _0x552116);
        return;
      }
      if (_0x351497) _0x351497['spriteFrame'] = _0x375efb;
      if (_0xf3d902['uxErf'](_0x27104b['z_sign'], 0x1)) {
        var _0x579db2 = _0xf3d902['Mcpmf']['split']('|'),
          _0x3531ec = 0x0;
        while (!![]) {
          switch (_0x579db2[_0x3531ec++]) {
            case '0':
              _0x3f90e5['width'] = _0xf3d902['ZJJCu'](_0x27104b['interFullNode_ver']['width'], 0x190);
              continue;
            case '1':
              _0x351497['spriteFrame']['insetRight'] = 0x64;
              continue;
            case '2':
              _0x351497['spriteFrame']['insetLeft'] = 0x64;
              continue;
            case '3':
              _0x351497['type'] = cc['Sprite']['Type']['SLICED'];
              continue;
            case '4':
              _0x351497['sizeMode'] = _0xf3d902['wRkGg'];
              continue;
          }
          break;
        }
      }
      _0x3f90e5['x'] = _0xf3d902['ZJJCu'](_0xf3d902['kqFbk'](-_0x3f90e5['width'], 0.5), 0x96);
      cc['loader']['loadRes'](_0xf3d902['mpbBN'], cc['SpriteFrame'], function (_0x249e45, _0x47c711) {
        var _0x2bec5e = {
          'YeJSY': function YeJSY(_0x49de3a, _0x1ffbdd) {
            return _0x7efdf['HZsgl'](_0x49de3a, _0x1ffbdd);
          },
          'TOggN': function TOggN(_0xa4c4b1, _0x4e49e7) {
            return _0x7efdf['icbow'](_0xa4c4b1, _0x4e49e7);
          },
          'PxDQO': _0x7efdf['frQsh'],
          'xMlFv': function xMlFv(_0x28a1d4, _0x1c174c) {
            return _0x7efdf['EXZfm'](_0x28a1d4, _0x1c174c);
          },
          'XPzDV': function XPzDV(_0x5229ff, _0x3b0f85) {
            return _0x7efdf['fiszi'](_0x5229ff, _0x3b0f85);
          },
          'SbyQw': function SbyQw(_0x230874, _0x52483d) {
            return _0x7efdf['ULAIE'](_0x230874, _0x52483d);
          }
        };
        if (_0x249e45) {
          console['log'](_0x7efdf['AMOOe'], _0x249e45);
          return;
        }
        _0x46b39a['height'] = 0x0;
        _0x46b39a['y'] = _0x7efdf['PcmkG'](_0x7efdf['rMGCJ'](_0x58ec6e['height'], 0.5), _0x7efdf['LmeyO'](_0x46b39a['height'], 0.5));
        _0x3f90e5['y'] = _0x7efdf['zeuEy'](_0x7efdf['PcmkG'](_0x7efdf['PcmkG'](_0x46b39a['y'], _0x7efdf['LmeyO'](_0x46b39a['height'], 0.5)), _0x7efdf['LmeyO'](_0x3f90e5['height'], 0.5)), 0xa);
        var _0x55c744 = new cc['Node'](_0x7efdf['DcJos']);
        _0x55c744['width'] = _0x3f90e5['width'];
        _0x55c744['height'] = _0x3f90e5['height'];
        _0x55c744['anchorY'] = 0x1;
        _0x55c744['anchorX'] = 0x0;
        _0x55c744['x'] = 0x0;
        _0x55c744['y'] = _0x7efdf['TdBaK'](_0x55c744['height'], 0.5);
        _0x3f90e5['addChild'](_0x55c744);
        var _0x344723 = _0x55c744['addComponent'](cc['ScrollView']);
        _0x344723['vertical'] = ![];
        _0x344723['cancelInnerEvents'] = !![];
        var _0x671ba0 = new cc['Node'](_0x7efdf['iLBVa']);
        _0x671ba0['setContentSize'](_0x7efdf['PcmkG'](_0x55c744['width'], 0xa), _0x55c744['height']);
        _0x671ba0['x'] = 0x5;
        _0x671ba0['anchorY'] = 0x1;
        _0x671ba0['anchorX'] = 0x0;
        var _0x1a0569 = _0x671ba0['addComponent'](cc['Mask']);
        _0x55c744['addChild'](_0x671ba0);
        var _0x5ad141 = new cc['Node'](_0x7efdf['frQsh']);
        _0x5ad141['setContentSize'](_0x7efdf['PcmkG'](_0x55c744['width'], 0xa), _0x55c744['height']);
        _0x5ad141['anchorX'] = 0x0;
        _0x5ad141['anchorY'] = 0x1;
        _0x5ad141['x'] = 0x0;
        _0x5ad141['y'] = _0x7efdf['TdBaK'](_0x5ad141['height'], 0.5);
        _0x671ba0['addChild'](_0x5ad141);
        _0x344723['content'] = _0x671ba0['getChildByName'](_0x7efdf['frQsh']);
        var _0x562a53;
        for (var _0x435e0e = 0x0; _0x7efdf['AsDwd'](_0x435e0e, _0x49aa28['length']); _0x435e0e++) {
          var _0x58332b = new cc['Node'](_0x7efdf['JyIvy']);
          _0x58332b['addComponent'](window[_0x7efdf['HfDPE']]);
          var _0x431f81 = _0x58332b['getComponent'](window[_0x7efdf['HfDPE']]);
          _0x431f81['single_icon'](_0x504a02, _0x5a60b4, _0x49aa28[_0x435e0e], _0x38e13c);
          _0x58332b['x'] = _0x7efdf['zeuEy'](_0x7efdf['TdBaK'](0x14, _0x7efdf['mRftT'](_0x435e0e, 0x1)), _0x7efdf['AKfSz'](_0x58332b['width'], _0x435e0e));
          _0x58332b['y'] = _0x7efdf['tLYRs'](-_0x7efdf['PcmkG'](_0x671ba0['getChildByName'](_0x7efdf['frQsh'])['height'], _0x58332b['height']), 0.5);
          _0x562a53 = _0x58332b['width'];
          _0x671ba0['getChildByName'](_0x7efdf['frQsh'])['addChild'](_0x58332b);
        }
        _0x671ba0['getChildByName'](_0x7efdf['frQsh'])['width'] = _0x7efdf['mRftT'](_0x7efdf['qNxmP'](_0x49aa28['length'], _0x562a53), _0x7efdf['qNxmP'](_0x7efdf['mRftT'](_0x49aa28['length'], 0x1), 0x14));
        var _0x2f367e = _0x7efdf['mSQEb'];
        var _0x306856 = 0x0;
        var _0x447a35 = function _0x447a35() {
          var _0x5d9405;
          if (_0x7efdf['EZaja'](_0x2f367e, _0x7efdf['QLQWw'])) {
            _0x5d9405 = -0x1;
          } else if (_0x7efdf['EZaja'](_0x2f367e, _0x7efdf['mSQEb'])) {
            _0x5d9405 = 0x1;
          }
          _0x671ba0['getChildByName'](_0x7efdf['frQsh'])['x'] += _0x5d9405;
          if (_0x7efdf['kBUXM'](_0x671ba0['getChildByName'](_0x7efdf['frQsh'])['x'], -_0x7efdf['EXZfm'](_0x671ba0['getChildByName'](_0x7efdf['frQsh'])['width'], _0x27104b['interFullNode_ver']['width']))) {
            _0x2f367e = _0x7efdf['mSQEb'];
          } else if (_0x7efdf['pRXBe'](_0x671ba0['getChildByName'](_0x7efdf['frQsh'])['x'], 0x0)) {
            _0x2f367e = _0x7efdf['QLQWw'];
          }
          _0x306856++;
          if (_0x7efdf['onBzy'](_0x306856, 0x28)) {
            _0x306856 = 0x0;
            _0x671ba0['getChildByName'](_0x7efdf['frQsh'])['children']['forEach'](function (_0x5383a6) {
              if (_0x2bec5e['YeJSY'](_0x2bec5e['TOggN'](_0x671ba0['getChildByName'](_0x2bec5e['PxDQO'])['x'], _0x5383a6['x']), _0x2bec5e['xMlFv'](-_0x562a53, 0x32)) || _0x2bec5e['XPzDV'](_0x2bec5e['TOggN'](_0x671ba0['getChildByName'](_0x2bec5e['PxDQO'])['x'], _0x5383a6['x']), _0x2bec5e['SbyQw'](_0x55c744['width'], 0x32))) {
                _0x5383a6['active'] = ![];
              } else {
                _0x5383a6['active'] = !![];
              }
            });
          }
        };
        _0x27104b['fulltopSchArr_ver'][_0x4411bc] = _0x447a35;
        _0x27104b['schedule'](_0x447a35, 0.005);
      });
    });
    var _0x4f5ffc = new cc['Node'](_0xf3d902['evdAE']);
    _0x4f5ffc['anchorY'] = 0x1;
    _0x4f5ffc['anchorX'] = 0x0;
    _0x4f5ffc['width'] = _0x27104b['interFullNode_ver']['width'];
    _0x4f5ffc['x'] = _0xf3d902['AhJaL'](-_0x4f5ffc['width'], 0.5);
    _0x27104b['interFullNode_ver']['addChild'](_0x4f5ffc);
    cc['loader']['loadRes'](_0xf3d902['iQQfE'](_0xf3d902['ibbLF'], _0xf3d902['hMneF'](_0x19dbd7, null) ? _0x19dbd7 : _0xf3d902['OTgRM']), cc['SpriteFrame'], function (_0x3700ac, _0x1adddf) {
      var _0x136537 = {
        'ozHrq': function ozHrq(_0x13e79d, _0xfe74f) {
          return _0xf3d902['BmJof'](_0x13e79d, _0xfe74f);
        },
        'JwIco': function JwIco(_0xfb6d76, _0x4dbe14) {
          return _0xf3d902['WwOyR'](_0xfb6d76, _0x4dbe14);
        },
        'hdIco': _0xf3d902['pOXQw'],
        'AHOtx': _0xf3d902['lNZNt'],
        'biQrj': function biQrj(_0x41b26c, _0x4791ce) {
          return _0xf3d902['kqFbk'](_0x41b26c, _0x4791ce);
        },
        'xUZwg': function xUZwg(_0x136ca0, _0x28aa44) {
          return _0xf3d902['ZJJCu'](_0x136ca0, _0x28aa44);
        },
        'EKLvP': function EKLvP(_0x4007c8, _0x27665c) {
          return _0xf3d902['dKaYm'](_0x4007c8, _0x27665c);
        },
        'WksOk': function WksOk(_0x4c1344, _0x5804ec) {
          return _0xf3d902['rRuZh'](_0x4c1344, _0x5804ec);
        },
        'RVsvF': function RVsvF(_0x2c2c73, _0x4ca761) {
          return _0xf3d902['CwRrO'](_0x2c2c73, _0x4ca761);
        },
        'kNqaS': function kNqaS(_0x2a9915, _0x46f507) {
          return _0xf3d902['PpDCz'](_0x2a9915, _0x46f507);
        },
        'nCEvj': function nCEvj(_0x28447a, _0x52c61f) {
          return _0xf3d902['tYGTv'](_0x28447a, _0x52c61f);
        },
        'SUPgV': function SUPgV(_0x54dc00, _0x19ac01) {
          return _0xf3d902['rDKGn'](_0x54dc00, _0x19ac01);
        },
        'qjTsY': function qjTsY(_0x3eff0f, _0x57291e) {
          return _0xf3d902['kqFbk'](_0x3eff0f, _0x57291e);
        },
        'RRzhI': function RRzhI(_0x54ab69, _0x4daa66) {
          return _0xf3d902['rRuZh'](_0x54ab69, _0x4daa66);
        },
        'IAMny': function IAMny(_0x350ba6, _0x19b994) {
          return _0xf3d902['VvyIx'](_0x350ba6, _0x19b994);
        },
        'BNpEM': _0xf3d902['haxGY'],
        'OfsMS': function OfsMS(_0x28db56, _0x54e311) {
          return _0xf3d902['rDKGn'](_0x28db56, _0x54e311);
        },
        'WWfSM': function WWfSM(_0x5f1561, _0x52eeca) {
          return _0xf3d902['CwRrO'](_0x5f1561, _0x52eeca);
        },
        'xlENN': function xlENN(_0x2df4fd, _0x5f3670) {
          return _0xf3d902['AnGdh'](_0x2df4fd, _0x5f3670);
        },
        'qjevP': function qjevP(_0x3a9213, _0x17155c) {
          return _0xf3d902['AnGdh'](_0x3a9213, _0x17155c);
        },
        'MKtAZ': function MKtAZ(_0x26d3d2, _0x4ce322) {
          return _0xf3d902['xwzSj'](_0x26d3d2, _0x4ce322);
        },
        'rYDFO': function rYDFO(_0x3d640a, _0x44769c) {
          return _0xf3d902['uxErf'](_0x3d640a, _0x44769c);
        },
        'pXWad': function pXWad(_0x50fbc0, _0x30aac7) {
          return _0xf3d902['tYGTv'](_0x50fbc0, _0x30aac7);
        },
        'HASVJ': _0xf3d902['icSaQ'],
        'EAkcg': _0xf3d902['hQUPc'],
        'WOOUZ': function WOOUZ(_0x2862de, _0x2bf400) {
          return _0xf3d902['zpzbI'](_0x2862de, _0x2bf400);
        },
        'qAJhd': function qAJhd(_0x15a063, _0x2e07e0) {
          return _0xf3d902['xwzSj'](_0x15a063, _0x2e07e0);
        },
        'VtQDJ': function VtQDJ(_0x51d4a8, _0x5bdfc6) {
          return _0xf3d902['LKnwW'](_0x51d4a8, _0x5bdfc6);
        },
        'ehgXf': function ehgXf(_0x146c94, _0x4d6d90) {
          return _0xf3d902['JGaXp'](_0x146c94, _0x4d6d90);
        },
        'UovQd': function UovQd(_0x225e77, _0x54b46e) {
          return _0xf3d902['xwzSj'](_0x225e77, _0x54b46e);
        },
        'thlqC': function thlqC(_0x401c93, _0x1b34a0) {
          return _0xf3d902['LCHfU'](_0x401c93, _0x1b34a0);
        },
        'hgfzF': _0xf3d902['DepkN']
      };
      if (_0x3700ac) {
        console['log'](_0xf3d902['haxGY'], _0x3700ac);
        return;
      }
      _0x28f30f['spriteFrame'] = _0x1adddf;
      _0x33eaa6['x'] = _0xf3d902['rDKGn'](_0xf3d902['rDKGn'](_0xf3d902['FlCaN'](-_0x27104b['interFullNode_ver']['width'], 0.5), _0xf3d902['dCbfw'](_0x33eaa6['width'], 0.5)), 0x14);
      _0x33eaa6['y'] = _0xf3d902['LKnwW'](_0xf3d902['LKnwW'](_0xf3d902['nSOub'](_0x27104b['interFullNode_ver']['height'], 0.5), _0xf3d902['AhJaL'](_0x33eaa6['height'], 0.5)), 0x1e);
      _0x58ec6e['width'] = _0xf3d902['LKnwW'](_0x27104b['interFullNode_ver']['width'], _0x28f30f['width']);
      _0x58ec6e['x'] = _0x33eaa6['width'];
      _0x58ec6e['y'] = _0x33eaa6['y'];
      var _0x449b76 = new cc['Node'](_0xf3d902['VPoNf']);
      _0x449b76['width'] = _0x4f5ffc['width'];
      _0x449b76['anchorX'] = 0x0;
      _0x449b76['anchorY'] = 0x1;
      _0x449b76['x'] = 0x0;
      _0x449b76['y'] = _0xf3d902['AhJaL'](_0x449b76['height'], 0.5);
      ;
      _0x4f5ffc['addChild'](_0x449b76);
      var _0x3ab46f = _0x449b76['addComponent'](cc['ScrollView']);
      _0x3ab46f['horizontal'] = ![];
      _0x3ab46f['cancelInnerEvents'] = !![];
      var _0x387d86 = new cc['Node'](_0xf3d902['PEuVI']);
      _0x387d86['anchorX'] = 0x0;
      _0x387d86['anchorY'] = 0x1;
      var _0xba44ac = _0x387d86['addComponent'](cc['Mask']);
      _0x449b76['addChild'](_0x387d86);
      var _0x1ded0c = new cc['Node'](_0xf3d902['lNZNt']);
      _0x1ded0c['setContentSize'](_0x449b76['width'], _0x449b76['height']);
      _0x1ded0c['anchorX'] = 0x0;
      _0x1ded0c['anchorY'] = 0x1;
      _0x1ded0c['x'] = 0x0;
      _0x387d86['addChild'](_0x1ded0c);
      _0x3ab46f['content'] = _0x387d86['getChildByName'](_0xf3d902['lNZNt']);
      var _0x4a76a1 = _0x49aa28['length'];
      var _0x1c6600;
      cc['loader']['loadRes'](_0xf3d902['Ropbd'], cc['SpriteFrame'], function (_0x23427c, _0x3c3bd9) {
        var _0x50f157 = {
          'BhsBP': function BhsBP(_0x3302a8, _0x537968) {
            return _0x136537['ozHrq'](_0x3302a8, _0x537968);
          },
          'MTjXg': function MTjXg(_0x3dff11, _0x208069) {
            return _0x136537['JwIco'](_0x3dff11, _0x208069);
          },
          'JvrZG': _0x136537['hdIco'],
          'xUjKq': _0x136537['AHOtx'],
          'PNHXL': function PNHXL(_0x504f84, _0x404439) {
            return _0x136537['biQrj'](_0x504f84, _0x404439);
          },
          'KWxnD': function KWxnD(_0x1cf6bd, _0x5029cd) {
            return _0x136537['JwIco'](_0x1cf6bd, _0x5029cd);
          },
          'KLygf': function KLygf(_0x454d1d, _0x4d6eda) {
            return _0x136537['xUZwg'](_0x454d1d, _0x4d6eda);
          },
          'RBrSe': function RBrSe(_0x41ed9f, _0x235985) {
            return _0x136537['EKLvP'](_0x41ed9f, _0x235985);
          },
          'ucpNk': function ucpNk(_0x2d171c, _0x24397e) {
            return _0x136537['WksOk'](_0x2d171c, _0x24397e);
          },
          'jvGgQ': function jvGgQ(_0x54df71, _0x4a8516) {
            return _0x136537['RVsvF'](_0x54df71, _0x4a8516);
          },
          'MNAFt': function MNAFt(_0x2c494e, _0x42643d) {
            return _0x136537['biQrj'](_0x2c494e, _0x42643d);
          },
          'XmGdk': function XmGdk(_0x928ef8, _0x45f92e) {
            return _0x136537['WksOk'](_0x928ef8, _0x45f92e);
          },
          'PHazi': function PHazi(_0x32dd68, _0x4cd1b3) {
            return _0x136537['kNqaS'](_0x32dd68, _0x4cd1b3);
          },
          'qhHGx': function qhHGx(_0x1b9b41, _0x3765d7) {
            return _0x136537['biQrj'](_0x1b9b41, _0x3765d7);
          },
          'CPhMh': function CPhMh(_0x5c9cbc, _0x318840) {
            return _0x136537['kNqaS'](_0x5c9cbc, _0x318840);
          },
          'jPAjh': function jPAjh(_0x1feec9, _0x1a9073) {
            return _0x136537['nCEvj'](_0x1feec9, _0x1a9073);
          },
          'rTndI': function rTndI(_0x4e692f, _0x320749) {
            return _0x136537['nCEvj'](_0x4e692f, _0x320749);
          },
          'qgRMj': function qgRMj(_0x45a208, _0x1550bc) {
            return _0x136537['SUPgV'](_0x45a208, _0x1550bc);
          },
          'qsIsa': function qsIsa(_0xf07a44, _0x33846b) {
            return _0x136537['SUPgV'](_0xf07a44, _0x33846b);
          },
          'uAkOK': function uAkOK(_0x4f3975, _0x11efd8) {
            return _0x136537['SUPgV'](_0x4f3975, _0x11efd8);
          },
          'cbHdZ': function cbHdZ(_0x13ff40, _0x536b7e) {
            return _0x136537['WksOk'](_0x13ff40, _0x536b7e);
          },
          'NMhmN': function NMhmN(_0x75d71c, _0x18dd81) {
            return _0x136537['qjTsY'](_0x75d71c, _0x18dd81);
          },
          'ZsoYS': function ZsoYS(_0x2a93ff, _0x458b62) {
            return _0x136537['RVsvF'](_0x2a93ff, _0x458b62);
          },
          'SxsXQ': function SxsXQ(_0xe90257, _0x5e3737) {
            return _0x136537['qjTsY'](_0xe90257, _0x5e3737);
          },
          'vUZzE': function vUZzE(_0xfd9358, _0x2732ad) {
            return _0x136537['SUPgV'](_0xfd9358, _0x2732ad);
          },
          'pWscm': function pWscm(_0x2d433c, _0x264d1d) {
            return _0x136537['SUPgV'](_0x2d433c, _0x264d1d);
          },
          'LDSiF': function LDSiF(_0x409e10, _0x109f91) {
            return _0x136537['RRzhI'](_0x409e10, _0x109f91);
          },
          'SDDqd': function SDDqd(_0x116a71, _0x2855e8) {
            return _0x136537['IAMny'](_0x116a71, _0x2855e8);
          },
          'MvBsW': function MvBsW(_0x5c21c1, _0x433920) {
            return _0x136537['IAMny'](_0x5c21c1, _0x433920);
          }
        };
        if (_0x23427c) {
          console['log'](_0x136537['BNpEM'], _0x23427c);
          return;
        }
        if (_0x23f8cf) _0x23f8cf['spriteFrame'] = _0x3c3bd9;
        _0x37ca4e['y'] = _0x136537['RVsvF'](_0x136537['RVsvF'](_0x58ec6e['y'], _0x136537['qjTsY'](_0x58ec6e['height'], 0.5)), _0x37ca4e['height']);
        _0x37ca4e['x'] = _0x136537['OfsMS'](_0x136537['qjTsY'](-_0x27104b['interFullNode_ver']['width'], 0.5), 0x14);
        _0x4f5ffc['height'] = _0x136537['WWfSM'](_0x136537['xlENN'](_0x27104b['interFullNode_ver']['height'], _0x33eaa6['height']), 0x96);
        _0x4f5ffc['y'] = _0x136537['qjevP'](_0x136537['MKtAZ'](_0x27104b['interFullNode_ver']['height'], 0.5), _0x136537['OfsMS'](_0x33eaa6['height'], 0x8c));
        _0x449b76['height'] = _0x4f5ffc['height'];
        _0x387d86['setContentSize'](_0x449b76['width'], _0x449b76['height']);
        var _0x87f6d8;
        var _0x36f7cd = 0x3;
        if (_0x136537['rYDFO'](_0x27104b['z_sign'], 0x1)) {
          _0x36f7cd = 0x5;
        }
        for (var _0x683801 = 0x0; _0x136537['pXWad'](_0x683801, _0x49aa28['length']); _0x683801++) {
          var _0x159543 = new cc['Node'](_0x136537['HASVJ']);
          _0x159543['addComponent'](window[_0x136537['EAkcg']]);
          var _0x1b703e = _0x159543['getComponent'](window[_0x136537['EAkcg']]);
          _0x1b703e['hotItem'](_0x504a02, _0x5a60b4, _0x49aa28[_0x683801], _0x38e13c);
          _0x1c6600 = _0x136537['RRzhI'](_0x136537['WOOUZ'](_0x387d86['getChildByName'](_0x136537['AHOtx'])['width'], _0x136537['qAJhd'](_0x36f7cd, _0x159543['width'])), _0x136537['OfsMS'](_0x36f7cd, 0x1));
          _0x159543['x'] = _0x136537['OfsMS'](_0x136537['qAJhd'](_0x1c6600, _0x136537['VtQDJ'](_0x136537['OfsMS'](_0x683801, 0x1), _0x136537['qAJhd'](Math['floor'](_0x136537['ehgXf'](_0x683801, _0x36f7cd)), _0x36f7cd))), _0x136537['UovQd'](_0x136537['VtQDJ'](_0x683801, _0x136537['UovQd'](Math['floor'](_0x136537['ehgXf'](_0x683801, _0x36f7cd)), _0x36f7cd)), _0x159543['width']));
          _0x159543['y'] = -_0x136537['OfsMS'](_0x136537['UovQd'](0x1e, _0x136537['OfsMS'](Math['floor'](_0x136537['ehgXf'](_0x683801, _0x36f7cd)), 0x1)), _0x136537['UovQd'](_0x159543['height'], Math['floor'](_0x136537['thlqC'](_0x683801, _0x36f7cd))));
          _0x87f6d8 = _0x159543['height'];
          _0x387d86['getChildByName'](_0x136537['AHOtx'])['addChild'](_0x159543);
        }
        var _0x1a2064 = 0x186a0;
        _0x387d86['getChildByName'](_0x136537['AHOtx'])['height'] = _0x1a2064;
        var _0x48bae5 = _0x136537['hgfzF'];
        var _0x1482a6 = 0x0;
        var _0x17d50e = 0x0;
        var _0x429bad = function _0x429bad() {
          var _0x52924c;
          _0x52924c = 0x1;
          _0x1ded0c['y'] += _0x52924c;
          _0x1482a6++;
          if (_0x50f157['SDDqd'](_0x1482a6, 0x28)) {
            _0x1482a6 = 0x0;
            var _0x59f88c;
            if (_0x50f157['MvBsW'](_0x17d50e, _0x1ded0c['y'])) {
              _0x59f88c = ![];
            } else {
              _0x59f88c = !![];
            }
            _0x17d50e = _0x1ded0c['y'];
            _0x1ded0c['children']['forEach'](function (_0x47df34) {
              if (_0x59f88c) {
                if (_0x50f157['BhsBP'](_0x50f157['MTjXg'](_0x1ded0c['y'], _0x47df34['y']), _0x87f6d8)) {
                  var _0x4cb7ed = _0x50f157['JvrZG']['split']('|'),
                    _0x4150d9 = 0x0;
                  while (!![]) {
                    switch (_0x4cb7ed[_0x4150d9++]) {
                      case '0':
                        _0x4a76a1++;
                        continue;
                      case '1':
                        _0x47df34['active'] = ![];
                        continue;
                      case '2':
                        _0x387d86['getChildByName'](_0x50f157['xUjKq'])['height'] = _0x50f157['MTjXg'](_0x1a2064, _0x50f157['PNHXL'](_0x87f6d8, _0x4a76a1));
                        continue;
                      case '3':
                        _0x47df34['x'] = _0x50f157['KWxnD'](_0x50f157['PNHXL'](_0x1c6600, _0x50f157['KLygf'](_0x50f157['RBrSe'](_0x4a76a1, 0x1), _0x50f157['PNHXL'](Math['floor'](_0x50f157['ucpNk'](_0x4a76a1, _0x36f7cd)), _0x36f7cd))), _0x50f157['PNHXL'](_0x50f157['jvGgQ'](_0x4a76a1, _0x50f157['MNAFt'](Math['floor'](_0x50f157['XmGdk'](_0x4a76a1, _0x36f7cd)), _0x36f7cd)), _0x47df34['width']));
                        continue;
                      case '4':
                        _0x47df34['y'] = -_0x50f157['PHazi'](_0x50f157['qhHGx'](0x1e, _0x50f157['CPhMh'](Math['floor'](_0x50f157['XmGdk'](_0x4a76a1, _0x36f7cd)), 0x1)), _0x50f157['qhHGx'](_0x47df34['height'], Math['floor'](_0x50f157['XmGdk'](_0x4a76a1, _0x36f7cd))));
                        continue;
                    }
                    break;
                  }
                } else if (_0x50f157['jPAjh'](_0x50f157['CPhMh'](_0x1ded0c['y'], _0x47df34['y']), -_0x449b76['height'])) {
                  _0x47df34['active'] = ![];
                } else {
                  _0x47df34['active'] = !![];
                }
              } else {
                if (_0x50f157['rTndI'](_0x50f157['qgRMj'](_0x1ded0c['y'], _0x47df34['y']), -_0x449b76['height'])) {
                  _0x47df34['active'] = ![];
                  var _0x241443 = _0x50f157['jvGgQ'](_0x4a76a1, _0x49aa28['length']);
                  _0x47df34['x'] = _0x50f157['qsIsa'](_0x50f157['qhHGx'](_0x1c6600, _0x50f157['jvGgQ'](_0x50f157['uAkOK'](_0x241443, 0x1), _0x50f157['qhHGx'](Math['floor'](_0x50f157['cbHdZ'](_0x241443, _0x36f7cd)), _0x36f7cd))), _0x50f157['NMhmN'](_0x50f157['ZsoYS'](_0x241443, _0x50f157['SxsXQ'](Math['floor'](_0x50f157['cbHdZ'](_0x241443, _0x36f7cd)), _0x36f7cd)), _0x47df34['width']));
                  _0x47df34['y'] = -_0x50f157['vUZzE'](_0x50f157['SxsXQ'](0x1e, _0x50f157['pWscm'](Math['floor'](_0x50f157['LDSiF'](_0x241443, _0x36f7cd)), 0x1)), _0x50f157['SxsXQ'](_0x47df34['height'], Math['floor'](_0x50f157['LDSiF'](_0x241443, _0x36f7cd))));
                  _0x4a76a1--;
                } else if (_0x50f157['BhsBP'](_0x50f157['pWscm'](_0x1ded0c['y'], _0x47df34['y']), _0x87f6d8)) {
                  _0x47df34['active'] = ![];
                } else {
                  _0x47df34['active'] = !![];
                }
              }
            });
          }
        };
        _0x27104b['fullBotSchArr_ver'][_0x4411bc] = _0x429bad;
        _0x27104b['schedule'](_0x429bad, 0.005);
      });
    });
    return _0x27104b['interFullNode_ver'];
  },
  'interBoxNodeOpen': function interBoxNodeOpen() {
    var _0x4840fe = {
      'pLjlw': '1|6|4|0|5|3|2',
      'fzpkx': 'youlikeBox',
      'ghiAb': 'btnbox',
      'weLBj': 'other',
      'ZSahv': 'btnback',
      'QWIJF': 'hottag',
      'YgnAU': 'bgImg'
    };
    var _0x3fede1 = _0x4840fe['pLjlw']['split']('|'),
      _0x12595f = 0x0;
    while (!![]) {
      switch (_0x3fede1[_0x12595f++]) {
        case '0':
          this['interFullNode_ver']['getChildByName'](_0x4840fe['fzpkx'])['active'] = !this['interFullNode_ver']['getChildByName'](_0x4840fe['fzpkx'])['active'];
          continue;
        case '1':
          if (!this['interFullNode_ver']) return;
          continue;
        case '2':
          if (this['interFullNode_ver']['getChildByName'](_0x4840fe['ghiAb'])) {
            this['interFullNode_ver']['getChildByName'](_0x4840fe['ghiAb'])['active'] = !this['interFullNode_ver']['getChildByName'](_0x4840fe['ghiAb'])['active'];
          }
          continue;
        case '3':
          this['interFullNode_ver']['getChildByName'](_0x4840fe['weLBj'])['active'] = !this['interFullNode_ver']['getChildByName'](_0x4840fe['weLBj'])['active'];
          continue;
        case '4':
          this['interFullNode_ver']['getChildByName'](_0x4840fe['ZSahv'])['active'] = !this['interFullNode_ver']['getChildByName'](_0x4840fe['ZSahv'])['active'];
          continue;
        case '5':
          this['interFullNode_ver']['getChildByName'](_0x4840fe['QWIJF'])['active'] = !this['interFullNode_ver']['getChildByName'](_0x4840fe['QWIJF'])['active'];
          continue;
        case '6':
          this['interFullNode_ver']['getChildByName'](_0x4840fe['YgnAU'])['active'] = !this['interFullNode_ver']['getChildByName'](_0x4840fe['YgnAU'])['active'];
          continue;
      }
      break;
    }
  },
  'friPlaying': function friPlaying(_0x5d0e19, _0x8fd66e, _0x411eec, _0x2895db, _0x1dc237, _0x5a188e) {
    if (_0x5d0e19 === void 0) {
      _0x5d0e19 = null;
    }
    if (_0x8fd66e === void 0) {
      _0x8fd66e = null;
    }
    if (_0x411eec === void 0) {
      _0x411eec = null;
    }
    if (_0x2895db === void 0) {
      _0x2895db = null;
    }
    if (_0x1dc237 === void 0) {
      _0x1dc237 = null;
    }
    if (_0x5a188e === void 0) {
      _0x5a188e = null;
    }
    var _0x36a410 = {
      'ipqro': 'err:',
      'MmcrE': 'adbox',
      'sAule': function sAule(_0xe69d50, _0x13bb73) {
        return _0xe69d50 - _0x13bb73;
      },
      'TeTuW': function TeTuW(_0x23b67a, _0x4b4e6a) {
        return _0x23b67a * _0x4b4e6a;
      },
      'UxSfX': function UxSfX(_0x4d13ed, _0x25f9ec) {
        return _0x4d13ed < _0x25f9ec;
      },
      'pdoDd': 'item',
      'OHaSr': function OHaSr(_0x41306a, _0x3135a8) {
        return _0x41306a / _0x3135a8;
      },
      'WlPaq': function WlPaq(_0x75383c, _0x18cda7) {
        return _0x75383c - _0x18cda7;
      },
      'MNUnA': function MNUnA(_0x537fc9, _0x2f5c03) {
        return _0x537fc9 * _0x2f5c03;
      },
      'uOQAB': function uOQAB(_0x2b8598, _0x45f7ce) {
        return _0x2b8598 + _0x45f7ce;
      },
      'WHqUQ': function WHqUQ(_0x209cd9, _0x3b28ec) {
        return _0x209cd9 * _0x3b28ec;
      },
      'eOuns': function eOuns(_0x503ddd, _0x19786a) {
        return _0x503ddd * _0x19786a;
      },
      'vOeEE': function vOeEE(_0xb44e22, _0x2f73fe) {
        return _0xb44e22 * _0x2f73fe;
      },
      'hGKSX': function hGKSX(_0x309f79, _0x343a5f) {
        return _0x309f79 * _0x343a5f;
      },
      'yNKFF': function yNKFF(_0x520f54, _0x4cf0ad) {
        return _0x520f54 + _0x4cf0ad;
      },
      'JASyI': function JASyI(_0xd571b7, _0x5cf4f3) {
        return _0xd571b7 / _0x5cf4f3;
      },
      'LXJqz': function LXJqz(_0x3fcd77, _0x54e121) {
        return _0x3fcd77 / _0x54e121;
      },
      'OfCEZ': 'youlike_couplet',
      'oCfDb': function oCfDb(_0x55ea90, _0x539980) {
        return _0x55ea90 == _0x539980;
      },
      'LNOqz': 'sdk总开关关闭，不展示sdk',
      'YutqD': 'loadSDK',
      'Bgljb': 'SDK未初始化或初始化失败',
      'VlQbt': function VlQbt(_0xe1abe1, _0x439fd0) {
        return _0xe1abe1 + _0x439fd0;
      },
      'DdknO': '后台没有',
      'qRxcW': '广告位',
      'PTBjD': 'create_localData',
      'ARyyv': function ARyyv(_0x3443d8, _0x4ef014) {
        return _0x3443d8 < _0x4ef014;
      },
      'hdUZW': 'create_localNum',
      'QUWkM': 'data_chain_youlike',
      'pciOW': 'playNode',
      'tGATQ': function tGATQ(_0x631162, _0x26d2ab) {
        return _0x631162 == _0x26d2ab;
      },
      'TUkFM': function TUkFM(_0x5d1bd5, _0x439c33) {
        return _0x5d1bd5 == _0x439c33;
      },
      'cgGNN': 'adver/',
      'cGxjm': function cGxjm(_0x38560d, _0x2b33ca) {
        return _0x38560d != _0x2b33ca;
      },
      'XffJd': 'double_bg'
    };
    var _0x4954c0 = _0x36a410['OfCEZ'];
    if (_0x36a410['oCfDb'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x36a410['LNOqz']);
      return;
    }
    if (!window[_0x36a410['YutqD']]) {
      console['log'](_0x36a410['Bgljb']);
      return;
    }
    ;
    if (!this['checkShow'](_0x4954c0)) {
      console['log'](_0x36a410['yNKFF'](_0x36a410['VlQbt'](_0x36a410['DdknO'], _0x4954c0), _0x36a410['qRxcW']));
      return;
    }
    var _0x2dfb9d = this;
    _0x2dfb9d['friPlayRefData'] = {
      'adtype': _0x4954c0,
      'tagtype': _0x2895db,
      'failCb': _0x411eec,
      'itemTextColor': _0x5a188e
    };
    var _0x149f76;
    if (window['wx']) {
      if (window['wx']['getStorageSync'](_0x36a410['PTBjD'])) {
        _0x149f76 = _0x2dfb9d['getData_local'](window['wx']['getStorageSync'](_0x36a410['PTBjD']));
        if (_0x36a410['ARyyv'](_0x149f76['length'], 0x6)) {
          _0x149f76 = _0x2dfb9d['getData'](0x0, 0x6, _0x36a410['hdUZW']);
        }
      } else {
        _0x149f76 = _0x2dfb9d['getData'](0x0, 0x6, _0x36a410['hdUZW']);
        window['wx']['setStorageSync'](_0x36a410['hdUZW'], 0x6);
      }
      var _0x1c788a = '';
      for (var _0x525a83 = 0x0; _0x36a410['ARyyv'](_0x525a83, _0x149f76['length']); _0x525a83++) {
        _0x1c788a += _0x36a410['VlQbt'](_0x149f76[_0x525a83]['creative_id'], '&');
      }
      window['wx']['setStorageSync'](_0x36a410['PTBjD'], _0x1c788a);
      window['wx']['setStorageSync'](_0x36a410['QUWkM'], _0x1c788a);
    } else {
      _0x149f76 = _0x2dfb9d['randomGetData'](0x6);
    }
    _0x2dfb9d['playNode'] = new cc['Node'](_0x36a410['pciOW']);
    _0x2dfb9d['playNode']['x'] = _0x36a410['tGATQ'](_0x5d0e19, null) ? 0x0 : _0x5d0e19;
    _0x2dfb9d['playNode']['y'] = _0x36a410['TUkFM'](_0x8fd66e, null) ? 0x0 : _0x8fd66e;
    _0x2dfb9d['playNode']['scaleX'] = _0x2dfb9d['playNode']['scaleY'] = _0x2dfb9d['offsetX'];
    var _0x2431c8 = new cc['Node']('bg');
    _0x2dfb9d['playNode']['addChild'](_0x2431c8);
    var _0x31665f = _0x2431c8['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x36a410['VlQbt'](_0x36a410['cgGNN'], _0x36a410['cGxjm'](_0x1dc237, null) ? _0x1dc237 : _0x36a410['XffJd']), cc['SpriteFrame'], function (_0x293032, _0x57f2d0) {
      if (_0x293032) {
        console['log'](_0x36a410['ipqro'], _0x293032);
        return;
      }
      _0x31665f['spriteFrame'] = _0x57f2d0;
      _0x2dfb9d['playNode']['setContentSize'](_0x2431c8['width'], _0x2431c8['height']);
      var _0x2e7fca = new cc['Node'](_0x36a410['MmcrE']);
      _0x2dfb9d['playNode']['addChild'](_0x2e7fca);
      _0x2e7fca['anchorX'] = 0x0;
      _0x2e7fca['anchorY'] = 0x1;
      _0x2e7fca['width'] = _0x36a410['sAule'](_0x2dfb9d['playNode']['width'], 0xa);
      _0x2e7fca['height'] = _0x36a410['sAule'](_0x2dfb9d['playNode']['height'], 0x44);
      _0x2e7fca['x'] = _0x36a410['TeTuW'](-_0x2e7fca['width'], 0.5);
      _0x2e7fca['y'] = _0x36a410['sAule'](_0x36a410['TeTuW'](_0x2dfb9d['playNode']['height'], 0.5), 0x3c);
      var _0x5423d2 = _0x2e7fca['addComponent'](cc['Sprite']);
      _0x5423d2['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
      for (var _0x3b6209 = 0x0; _0x36a410['UxSfX'](_0x3b6209, _0x149f76['length']); _0x3b6209++) {
        var _0x33dd95 = new cc['Node'](_0x36a410['pdoDd']);
        _0x33dd95['addComponent'](zzsdkui_item);
        var _0x3443a5 = _0x33dd95['getComponent'](zzsdkui_item);
        _0x3443a5['friPlayItem'](_0x4954c0, _0x2895db, _0x149f76[_0x3b6209], _0x411eec, _0x5a188e);
        var _0x4243bc = _0x36a410['OHaSr'](_0x36a410['sAule'](_0x2e7fca['width'], _0x36a410['TeTuW'](0x2, _0x33dd95['width'])), 0x3);
        var _0x3fb712 = _0x36a410['OHaSr'](_0x36a410['WlPaq'](_0x2e7fca['height'], _0x36a410['MNUnA'](0x3, _0x33dd95['height'])), 0x4);
        _0x33dd95['x'] = _0x36a410['uOQAB'](_0x36a410['WHqUQ'](_0x4243bc, _0x36a410['WlPaq'](_0x36a410['uOQAB'](_0x3b6209, 0x1), _0x36a410['eOuns'](Math['floor'](_0x36a410['OHaSr'](_0x3b6209, 0x2)), 0x2))), _0x36a410['vOeEE'](_0x36a410['WlPaq'](_0x3b6209, _0x36a410['hGKSX'](Math['floor'](_0x36a410['OHaSr'](_0x3b6209, 0x2)), 0x2)), _0x33dd95['width']));
        _0x33dd95['y'] = -_0x36a410['uOQAB'](_0x36a410['hGKSX'](_0x3fb712, _0x36a410['yNKFF'](Math['floor'](_0x36a410['JASyI'](_0x3b6209, 0x2)), 0x1)), _0x36a410['hGKSX'](_0x33dd95['height'], Math['floor'](_0x36a410['LXJqz'](_0x3b6209, 0x2))));
        _0x2e7fca['addChild'](_0x33dd95);
      }
    });
    return _0x2dfb9d['playNode'];
  },
  'friPlayRefresh': function friPlayRefresh() {
    var _0x4f4f41 = {
      'POSgB': 'create_localNum',
      'yVTFq': function yVTFq(_0x4dcf9f, _0x5e761f) {
        return _0x4dcf9f + _0x5e761f;
      },
      'gCXYp': function gCXYp(_0x27bc6e, _0x1a5f71) {
        return _0x27bc6e(_0x1a5f71);
      },
      'hpqBs': function hpqBs(_0x152d02, _0x24d6b8) {
        return _0x152d02 - _0x24d6b8;
      },
      'NmsZg': function NmsZg(_0x2d8d81, _0x1185d1) {
        return _0x2d8d81 < _0x1185d1;
      },
      'XAkUn': function XAkUn(_0x3062a2, _0x35862d) {
        return _0x3062a2 + _0x35862d;
      },
      'bDiVm': 'create_localData',
      'YzWWz': 'data_chain_youlike',
      'GIVAt': 'adbox',
      'ALZFQ': function ALZFQ(_0xe2482, _0x1c0983) {
        return _0xe2482 < _0x1c0983;
      },
      'vUzap': 'item',
      'ZCuWY': function ZCuWY(_0x225d31, _0x231f1b) {
        return _0x225d31 / _0x231f1b;
      },
      'TTOQZ': function TTOQZ(_0xb6949, _0x2bba09) {
        return _0xb6949 - _0x2bba09;
      },
      'qSifK': function qSifK(_0x14b78c, _0x235120) {
        return _0x14b78c * _0x235120;
      },
      'WKAkk': function WKAkk(_0x47c575, _0x3388d3) {
        return _0x47c575 / _0x3388d3;
      },
      'OIBSI': function OIBSI(_0x3cefd1, _0x2b21e7) {
        return _0x3cefd1 - _0x2b21e7;
      },
      'LkZEX': function LkZEX(_0x34879c, _0x2d6dcb) {
        return _0x34879c * _0x2d6dcb;
      },
      'sLUcr': function sLUcr(_0x32fbaf, _0x19e57b) {
        return _0x32fbaf - _0x19e57b;
      },
      'gDsXZ': function gDsXZ(_0x2d9999, _0x5d7950) {
        return _0x2d9999 / _0x5d7950;
      },
      'jdcBB': function jdcBB(_0x5eb9e5, _0x162edc) {
        return _0x5eb9e5 * _0x162edc;
      },
      'WxKhD': function WxKhD(_0x521013, _0x34a09c) {
        return _0x521013 * _0x34a09c;
      },
      'nRNcz': function nRNcz(_0x190008, _0x1c92b0) {
        return _0x190008 / _0x1c92b0;
      }
    };
    var _0x11ec85 = this;
    var _0x14dd5c;
    var _0x5ef5b1 = 0x6;
    if (window['wx']) {
      if (window['wx']['getStorageSync'](_0x4f4f41['POSgB'])) {
        _0x5ef5b1 = _0x4f4f41['yVTFq'](_0x4f4f41['gCXYp'](Number, window['wx']['getStorageSync'](_0x4f4f41['POSgB'])), 0x6);
      }
      window['wx']['setStorageSync'](_0x4f4f41['POSgB'], _0x5ef5b1);
      _0x14dd5c = _0x11ec85['getData'](_0x4f4f41['hpqBs'](_0x5ef5b1, 0x6), _0x5ef5b1, _0x4f4f41['POSgB']);
      var _0x55f27a = '';
      for (var _0x110934 = 0x0; _0x4f4f41['NmsZg'](_0x110934, _0x14dd5c['length']); _0x110934++) {
        _0x55f27a += _0x4f4f41['XAkUn'](_0x14dd5c[_0x110934]['creative_id'], '&');
      }
      window['wx']['setStorageSync'](_0x4f4f41['bDiVm'], _0x55f27a);
      window['wx']['setStorageSync'](_0x4f4f41['YzWWz'], _0x55f27a);
    } else {
      _0x14dd5c = _0x11ec85['randomGetData']('6');
    }
    var _0x5d4002 = _0x11ec85['playNode']['getChildByName'](_0x4f4f41['GIVAt']);
    _0x5d4002['removeAllChildren']();
    for (var _0x4ddf61 = 0x0; _0x4f4f41['ALZFQ'](_0x4ddf61, _0x14dd5c['length']); _0x4ddf61++) {
      var _0x9bd62e = new cc['Node'](_0x4f4f41['vUzap']);
      _0x9bd62e['addComponent'](zzsdkui_item);
      var _0x8e6e17 = _0x9bd62e['getComponent'](zzsdkui_item);
      _0x8e6e17['friPlayItem'](_0x11ec85['friPlayRefData']['adtype'], _0x11ec85['friPlayRefData']['tagtype'], _0x14dd5c[_0x4ddf61], _0x11ec85['friPlayRefData']['failCb'], _0x11ec85['friPlayRefData']['itemTextColor']);
      var _0x4571cb = _0x4f4f41['ZCuWY'](_0x4f4f41['TTOQZ'](_0x5d4002['width'], _0x4f4f41['qSifK'](0x2, _0x9bd62e['width'])), 0x3);
      var _0x442dc1 = _0x4f4f41['WKAkk'](_0x4f4f41['OIBSI'](_0x5d4002['height'], _0x4f4f41['LkZEX'](0x3, _0x9bd62e['height'])), 0x4);
      _0x9bd62e['x'] = _0x4f4f41['XAkUn'](_0x4f4f41['LkZEX'](_0x4571cb, _0x4f4f41['sLUcr'](_0x4f4f41['XAkUn'](_0x4ddf61, 0x1), _0x4f4f41['LkZEX'](Math['floor'](_0x4f4f41['gDsXZ'](_0x4ddf61, 0x2)), 0x2))), _0x4f4f41['jdcBB'](_0x4f4f41['sLUcr'](_0x4ddf61, _0x4f4f41['WxKhD'](Math['floor'](_0x4f4f41['gDsXZ'](_0x4ddf61, 0x2)), 0x2)), _0x9bd62e['width']));
      _0x9bd62e['y'] = -_0x4f4f41['XAkUn'](_0x4f4f41['WxKhD'](_0x442dc1, _0x4f4f41['XAkUn'](Math['floor'](_0x4f4f41['gDsXZ'](_0x4ddf61, 0x2)), 0x1)), _0x4f4f41['WxKhD'](_0x9bd62e['height'], Math['floor'](_0x4f4f41['nRNcz'](_0x4ddf61, 0x2))));
      _0x5d4002['addChild'](_0x9bd62e);
    }
  },
  'singleRow': function singleRow(_0x56547a, _0x5a587c, _0x40da21, _0x4ed85d, _0x4c21b5) {
    if (_0x56547a === void 0) {
      _0x56547a = null;
    }
    if (_0x5a587c === void 0) {
      _0x5a587c = null;
    }
    if (_0x40da21 === void 0) {
      _0x40da21 = null;
    }
    if (_0x4ed85d === void 0) {
      _0x4ed85d = null;
    }
    if (_0x4c21b5 === void 0) {
      _0x4c21b5 = null;
    }
    var _0x190c1a = {
      'pborL': 'err:',
      'znAZt': 'adbox',
      'YuCtg': function YuCtg(_0x3664e5, _0x327959) {
        return _0x3664e5 - _0x327959;
      },
      'ZbXqQ': function ZbXqQ(_0x46b9dc, _0x21f524) {
        return _0x46b9dc - _0x21f524;
      },
      'fgqcP': function fgqcP(_0x1f9cf1, _0x2f0d46) {
        return _0x1f9cf1 * _0x2f0d46;
      },
      'MTDxj': function MTDxj(_0x2847bc, _0x127195) {
        return _0x2847bc - _0x127195;
      },
      'tugOE': function tugOE(_0x52dec7, _0x3b093f) {
        return _0x52dec7 < _0x3b093f;
      },
      'qtUmv': 'item',
      'aYZBO': function aYZBO(_0x8d73ad, _0x5a8edd) {
        return _0x8d73ad / _0x5a8edd;
      },
      'PUSrC': function PUSrC(_0x3ae456, _0x1a9a45) {
        return _0x3ae456 - _0x1a9a45;
      },
      'jbSXO': function jbSXO(_0x46c5da, _0x72d4b4) {
        return _0x46c5da / _0x72d4b4;
      },
      'mUSiZ': function mUSiZ(_0x5a1731, _0x2c5aa7) {
        return _0x5a1731 - _0x2c5aa7;
      },
      'sVbqa': function sVbqa(_0xd41d94, _0x175285) {
        return _0xd41d94 * _0x175285;
      },
      'rGbOM': function rGbOM(_0x32fce4, _0x39a06b) {
        return _0x32fce4 + _0x39a06b;
      },
      'RVPZl': function RVPZl(_0x534951, _0x925411) {
        return _0x534951 * _0x925411;
      },
      'iOwyt': function iOwyt(_0x106984, _0xb3ebb5) {
        return _0x106984 * _0xb3ebb5;
      },
      'yYcNp': 'youlike_couplet',
      'IbcXA': function IbcXA(_0x1aef24, _0x423d04) {
        return _0x1aef24 == _0x423d04;
      },
      'ASouy': 'sdk总开关关闭，不展示sdk',
      'ZprNU': 'loadSDK',
      'MFBbH': 'SDK未初始化或初始化失败',
      'VdJOg': '后台没有',
      'aFeUd': '广告位',
      'XKkKf': 'singleNode',
      'jImrj': function jImrj(_0x11c68e, _0x381206) {
        return _0x11c68e == _0x381206;
      },
      'rcFBP': function rcFBP(_0x47bd51, _0x6228cc) {
        return _0x47bd51 + _0x6228cc;
      },
      'TiAvO': 'adver/',
      'yxkWN': function yxkWN(_0xfbfc38, _0x163342) {
        return _0xfbfc38 != _0x163342;
      },
      'SJagj': 'single_bg'
    };
    var _0x224dc5 = _0x190c1a['yYcNp'];
    if (_0x190c1a['IbcXA'](this['z_adSwitch'], 0x0)) {
      console['log'](_0x190c1a['ASouy']);
      return;
    }
    if (!window[_0x190c1a['ZprNU']]) {
      console['log'](_0x190c1a['MFBbH']);
      return;
    }
    ;
    if (!this['checkShow'](_0x224dc5)) {
      console['log'](_0x190c1a['rGbOM'](_0x190c1a['rGbOM'](_0x190c1a['VdJOg'], _0x224dc5), _0x190c1a['aFeUd']));
      return;
    }
    var _0x364c97 = this;
    var _0x3291fc = _0x364c97['randomGetData'](0x3);
    var _0x463c12 = new cc['Node'](_0x190c1a['XKkKf']);
    _0x463c12['x'] = _0x190c1a['jImrj'](_0x56547a, null) ? 0x0 : _0x56547a;
    _0x463c12['y'] = _0x190c1a['jImrj'](_0x5a587c, null) ? 0x0 : _0x5a587c;
    _0x463c12['scaleX'] = _0x463c12['scaleY'] = _0x364c97['offsetX'];
    var _0xf6a890 = new cc['Node']('bg');
    _0x463c12['addChild'](_0xf6a890);
    var _0x2c5690 = _0xf6a890['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x190c1a['rcFBP'](_0x190c1a['TiAvO'], _0x190c1a['yxkWN'](_0x4c21b5, null) ? _0x4c21b5 : _0x190c1a['SJagj']), cc['SpriteFrame'], function (_0x435be6, _0x203bf3) {
      if (_0x435be6) {
        console['log'](_0x190c1a['pborL'], _0x435be6);
        return;
      }
      _0x2c5690['spriteFrame'] = _0x203bf3;
      _0x463c12['setContentSize'](_0xf6a890['width'], _0xf6a890['height']);
      var _0x4ee936 = new cc['Node'](_0x190c1a['znAZt']);
      _0x463c12['addChild'](_0x4ee936);
      _0x4ee936['anchorX'] = 0x0;
      _0x4ee936['anchorY'] = 0x1;
      _0x4ee936['width'] = _0x190c1a['YuCtg'](_0x463c12['width'], 0xa);
      _0x4ee936['height'] = _0x190c1a['ZbXqQ'](_0x463c12['height'], 0xa);
      _0x4ee936['x'] = _0x190c1a['fgqcP'](-_0x4ee936['width'], 0.5);
      _0x4ee936['y'] = _0x190c1a['MTDxj'](_0x190c1a['fgqcP'](_0x463c12['height'], 0.5), 0x5);
      var _0x2436f2 = _0x4ee936['addComponent'](cc['Sprite']);
      _0x2436f2['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
      for (var _0xad210b = 0x0; _0x190c1a['tugOE'](_0xad210b, _0x3291fc['length']); _0xad210b++) {
        var _0x521a32 = new cc['Node'](_0x190c1a['qtUmv']);
        _0x521a32['addComponent'](zzsdkui_item);
        var _0x4a0d88 = _0x521a32['getComponent'](zzsdkui_item);
        _0x4a0d88['singleItem'](_0x224dc5, _0x40da21, _0x3291fc[_0xad210b], _0x4ed85d);
        var _0x433c2c = _0x190c1a['aYZBO'](_0x190c1a['PUSrC'](_0x4ee936['width'], _0x521a32['width']), 0x2);
        var _0x30aca = _0x190c1a['jbSXO'](_0x190c1a['mUSiZ'](_0x4ee936['height'], _0x190c1a['sVbqa'](0x3, _0x521a32['height'])), 0x4);
        _0x521a32['x'] = _0x433c2c;
        _0x521a32['y'] = -_0x190c1a['rGbOM'](_0x190c1a['RVPZl'](_0x30aca, _0x190c1a['rGbOM'](_0xad210b, 0x1)), _0x190c1a['iOwyt'](_0x521a32['height'], _0xad210b));
        _0x4ee936['addChild'](_0x521a32);
      }
    });
    return _0x463c12;
  },
  'youlikeItem': function youlikeItem(_0x318594, _0x5efd4a, _0x46ad93, _0x1c100a) {
    var _0x361b77 = {
      'nKWRE': 'item'
    };
    var _0x2b3701 = this;
    var _0x16d4fe = new cc['Node'](_0x361b77['nKWRE']);
    _0x16d4fe['addComponent'](zzsdkui_item);
    var _0x50fcb3 = _0x16d4fe['getComponent'](zzsdkui_item);
    _0x50fcb3['youlikeItem'](_0x318594, _0x5efd4a, _0x46ad93, null, _0x1c100a);
    return _0x16d4fe;
  },
  'drawerItem': function drawerItem(_0x13c486, _0x479ad6, _0x561139, _0x320482) {
    var _0x44d182 = {
      'iFfLv': 'item'
    };
    var _0x389589 = this;
    var _0x34c916 = new cc['Node'](_0x44d182['iFfLv']);
    _0x34c916['addComponent'](zzsdkui_item);
    var _0x46ee4f = _0x34c916['getComponent'](zzsdkui_item);
    _0x46ee4f['drawerItem'](_0x13c486, _0x479ad6, _0x561139, _0x320482);
    return _0x34c916;
  },
  'interItem': function interItem(_0x161ae3, _0x1c5fd4, _0x3a00b5, _0x202835) {
    var _0x466389 = {
      'aPLzJ': 'item'
    };
    var _0x29d470 = this;
    var _0x27f44b = new cc['Node'](_0x466389['aPLzJ']);
    _0x27f44b['addComponent'](zzsdkui_item);
    var _0x2b92d0 = _0x27f44b['getComponent'](zzsdkui_item);
    _0x2b92d0['interItem'](_0x161ae3, _0x1c5fd4, _0x3a00b5, _0x202835);
    return _0x27f44b;
  },
  'sendPath': function sendPath(_0x5183ea) {
    var _0x48340d = {
      'ITrFr': function ITrFr(_0xb4e8b, _0x14b54c) {
        return _0xb4e8b != _0x14b54c;
      },
      'pWGZa': 'sendPath',
      'ECZJn': 'https://r.qpzq.net/r.gif'
    };
    var _0x3c719f = {
      'xsl_uuid': this['z_uuid'],
      'xsl_appid': this['z_appid_self'],
      'xsl_from': this['z_from'],
      'xsl_newuser': this['z_newuser']
    };
    if (_0x48340d['ITrFr'](_0x5183ea, null)) {
      for (var _0x464bc5 in _0x5183ea) {
        _0x3c719f[_0x464bc5] = _0x5183ea[_0x464bc5];
      }
    }
    this['httpRequest'](_0x48340d['pWGZa'], _0x48340d['ECZJn'], _0x3c719f, null, null);
  },
  'adlTag': function adlTag(_0xf731b8, _0x5c33ae) {
    if (window['wx']) {
      window['wx']['aldSendEvent'] && window['wx']['aldSendEvent'](_0xf731b8, _0x5c33ae);
    }
  },
  'aliEvent': function aliEvent(_0x3fa578, _0xc5ae2b) {
    var _0x401a84 = {
      'zphHP': function zphHP(_0x23be60, _0x1298bf) {
        return _0x23be60 + _0x1298bf;
      },
      'eySYl': function eySYl(_0x282dda, _0xf6daf4) {
        return _0x282dda + _0xf6daf4;
      },
      'VDmfY': function VDmfY(_0x1d4f15, _0x2012c4) {
        return _0x1d4f15 + _0x2012c4;
      },
      'SvZnn': function SvZnn(_0x5943e6, _0x36e9c2) {
        return _0x5943e6 + _0x36e9c2;
      },
      'xZSfo': 'https://r.qpzq.net/r.gif?xsl_uuid=',
      'LMLCR': 'uuid',
      'PYgus': '&xsl_appid=',
      'SIlkh': '&xsl_from=',
      'ddiqn': '&xsl_newuser=',
      'uotQN': '&xsl_event=',
      'OhYbj': '&xsl_param=',
      'ArXht': 'sendPath'
    };
    var _0x2cb0c7 = _0x401a84['zphHP'](_0x401a84['eySYl'](_0x401a84['eySYl'](_0x401a84['eySYl'](_0x401a84['eySYl'](_0x401a84['VDmfY'](_0x401a84['SvZnn'](_0x401a84['SvZnn'](_0x401a84['SvZnn'](_0x401a84['SvZnn'](_0x401a84['SvZnn'](_0x401a84['xZSfo'], window[_0x401a84['LMLCR']]), _0x401a84['PYgus']), this['z_appid_self']), _0x401a84['SIlkh']), this['z_from']), _0x401a84['ddiqn']), this['z_newuser']), _0x401a84['uotQN']), _0x3fa578), _0x401a84['OhYbj']), JSON['stringify'](_0xc5ae2b));
    this['httpRequest'](_0x401a84['ArXht'], _0x2cb0c7, null, null, null);
  },
  'addLogData': function addLogData(_0x37d971, _0x5179b4) {
    var _0x1aba56 = {
      'vsxCS': function vsxCS(_0x52db1e, _0x386ff9) {
        return _0x52db1e < _0x386ff9;
      },
      'lHnSK': function lHnSK(_0x2c5ec0, _0x138634) {
        return _0x2c5ec0 + _0x138634;
      },
      'AgqdV': 'xsl_'
    };
    if (this['aliyun_log_field']) {
      for (var _0x42c95f = 0x0; _0x1aba56['vsxCS'](_0x42c95f, this['aliyun_log_field']['length']); _0x42c95f++) {
        var _0x15c45f = _0x1aba56['lHnSK'](_0x1aba56['AgqdV'], this['aliyun_log_field'][_0x42c95f]);
        var _0x566780 = _0x5179b4[this['aliyun_log_field'][_0x42c95f]];
        _0x37d971[_0x15c45f] = _0x566780;
      }
    }
    return _0x37d971;
  },
  'create_uuid': function create_uuid() {
    var _0x4b2912 = {
      'aIPLM': function aIPLM(_0x2449ed, _0x11cbe3) {
        return _0x2449ed * _0x11cbe3;
      },
      'ZRHIf': function ZRHIf(_0x2b7082, _0x1cb2b9) {
        return _0x2b7082 + _0x1cb2b9;
      },
      'lojXn': function lojXn(_0x2c2de3, _0x4bab62) {
        return _0x2c2de3 + _0x4bab62;
      },
      'XBUSn': function XBUSn(_0x136cc5, _0x41c182) {
        return _0x136cc5 + _0x41c182;
      },
      'SPGxn': function SPGxn(_0x390d1d, _0x1e86f8) {
        return _0x390d1d + _0x1e86f8;
      },
      'xMIfg': function xMIfg(_0x59f3aa, _0x543d8f) {
        return _0x59f3aa + _0x543d8f;
      },
      'PBIEc': function PBIEc(_0x4bba7c, _0x3413da) {
        return _0x4bba7c + _0x3413da;
      },
      'YWFkW': function YWFkW(_0x1ef15a) {
        return _0x1ef15a();
      },
      'KpeQR': function KpeQR(_0x106637) {
        return _0x106637();
      },
      'wYDAN': function wYDAN(_0x47430e) {
        return _0x47430e();
      },
      'zGpFJ': function zGpFJ(_0x4bf5cf) {
        return _0x4bf5cf();
      },
      'YIOzm': function YIOzm(_0x50ef7f) {
        return _0x50ef7f();
      },
      'CWQMw': function CWQMw(_0x307088) {
        return _0x307088();
      }
    };
    function _0x4f02e0() {
      return Math['floor'](_0x4b2912['aIPLM'](0x10000, _0x4b2912['ZRHIf'](0x1, Math['random']())))['toString'](0x10)['substring'](0x1);
    }
    return _0x4b2912['lojXn'](_0x4b2912['XBUSn'](_0x4b2912['SPGxn'](_0x4b2912['SPGxn'](_0x4b2912['xMIfg'](_0x4b2912['xMIfg'](_0x4b2912['PBIEc'](_0x4b2912['YWFkW'](_0x4f02e0), _0x4b2912['KpeQR'](_0x4f02e0)), _0x4b2912['wYDAN'](_0x4f02e0)), _0x4b2912['wYDAN'](_0x4f02e0)), _0x4b2912['zGpFJ'](_0x4f02e0)), _0x4b2912['zGpFJ'](_0x4f02e0)), _0x4b2912['YIOzm'](_0x4f02e0)), _0x4b2912['CWQMw'](_0x4f02e0));
  },
  'getIP': function getIP() {
    var _0x83dc18 = {
      'KLJGu': 'uuid',
      'eGmuJ': '获取uuid：',
      'rGiEw': 'init'
    };
    var _0x2da448 = this;
    if (window['wx'] && window['wx']['getStorageSync'](_0x83dc18['KLJGu'])) {
      _0x2da448['z_uuid'] = window['wx']['getStorageSync'](_0x83dc18['KLJGu']);
      _0x2da448['z_newuser'] = 0x0;
    } else {
      _0x2da448['z_uuid'] = _0x2da448['create_uuid']();
      if (window['wx']) window['wx']['setStorageSync'](_0x83dc18['KLJGu'], _0x2da448['z_uuid']);
      _0x2da448['z_newuser'] = 0x1;
    }
    window[_0x83dc18['KLJGu']] = _0x2da448['z_uuid'];
    console['log'](_0x83dc18['eGmuJ'], _0x2da448['z_uuid']);
    var _0x2a1e2f = new Date()['getTime']();
    var _0x38a5c5 = {
      'xsl_t': _0x2a1e2f,
      'xsl_action': _0x83dc18['rGiEw']
    };
    _0x2da448['sendPath'](_0x38a5c5);
    _0x2da448['getAdData']();
  },
  'shieldRequest': function shieldRequest() {
    var _0x99093a = {
      'vzHMv': function vzHMv(_0x3ca6fd, _0x9cd750) {
        return _0x3ca6fd == _0x9cd750;
      },
      'lMing': 'shieldData',
      'vNZCN': function vNZCN(_0x55c6d0, _0x1fc0e8) {
        return _0x55c6d0(_0x1fc0e8);
      },
      'CAIzh': 'get\x20屏蔽接口\x20fail:\x20',
      'njXfo': function njXfo(_0x1374a0, _0x59ae1b) {
        return _0x1374a0 + _0x59ae1b;
      },
      'mmAOF': function mmAOF(_0x273612, _0x5e659f) {
        return _0x273612 + _0x5e659f;
      },
      'NBdzi': 'https://wxa.639311.com/api/ban?scene=',
      'zLQfp': '&reviewVer=',
      'UYBXu': '&channel='
    };
    var _0x48cc7b = this;
    this['httpRequest'](null, _0x99093a['njXfo'](_0x99093a['njXfo'](_0x99093a['njXfo'](_0x99093a['njXfo'](_0x99093a['mmAOF'](_0x99093a['NBdzi'], _0x48cc7b['z_scene']), _0x99093a['zLQfp']), _0x48cc7b['z_gameVer']), _0x99093a['UYBXu']), _0x48cc7b['z_channel']), null, function (_0x406ee3) {
      if (_0x99093a['vzHMv'](_0x406ee3['code'], 0xc8)) {
        window[_0x99093a['lMing']] = _0x406ee3['data'];
        _0x48cc7b['z_validAd'] = _0x99093a['vNZCN'](Number, _0x406ee3['data']['validAd']);
        _0x48cc7b['z_adSwitch'] = _0x99093a['vNZCN'](Number, _0x406ee3['data']['adSwitch']);
      }
      _0x48cc7b['getIP']();
    }, function (_0x578eff) {
      console['log'](_0x99093a['CAIzh'], _0x578eff);
    });
  },
  'getAdData': function getAdData() {
    var _0x47d4f8 = {
      'PWUAO': '4|2|3|1|5|6|0',
      'dtraQ': '---------------------sdk初始化完成------------------',
      'CEyNN': 'ad_Data',
      'jUwoP': 'loadSDK',
      'nelUG': '配置加载错误：\x20',
      'HRkTx': '4|1|2|0|3',
      'tlIyJ': 'config.json'
    };
    var _0x37618b = this;
    if (window['wx']) {
      _0x37618b['httpRequest'](null, _0x37618b['z_adurl'], null, function (_0x228281) {
        var _0x50581e = _0x47d4f8['PWUAO']['split']('|'),
          _0x9bf407 = 0x0;
        while (!![]) {
          switch (_0x50581e[_0x9bf407++]) {
            case '0':
              console['log'](_0x47d4f8['dtraQ']);
              continue;
            case '1':
              console['log'](_0x37618b['aliyun_log_field'], _0x37618b['space'], _0x37618b['ad_Data']);
              continue;
            case '2':
              _0x37618b['space'] = _0x228281['data']['space'];
              continue;
            case '3':
              _0x37618b['ad_Data'] = window[_0x47d4f8['CEyNN']] = _0x37618b['handleData'](_0x228281['data']['creative']);
              continue;
            case '4':
              _0x37618b['aliyun_log_field'] = _0x228281['data']['aliyun_log_field'];
              continue;
            case '5':
              window[_0x47d4f8['jUwoP']] = !![];
              continue;
            case '6':
              _0x37618b['loadFinishCb']();
              continue;
          }
          break;
        }
      });
    } else {
      cc['loader']['loadRes'](_0x47d4f8['tlIyJ'], function (_0xa4ef03, _0x5c6603) {
        if (_0xa4ef03) {
          console['log'](_0x47d4f8['nelUG'], _0xa4ef03);
        } else {
          var _0x7f0e1d = _0x47d4f8['HRkTx']['split']('|'),
            _0x5ba63a = 0x0;
          while (!![]) {
            switch (_0x7f0e1d[_0x5ba63a++]) {
              case '0':
                console['log'](_0x37618b['aliyun_log_field'], _0x37618b['space'], _0x37618b['ad_Data']);
                continue;
              case '1':
                _0x37618b['space'] = _0x5c6603['json']['space'];
                continue;
              case '2':
                _0x37618b['ad_Data'] = window[_0x47d4f8['CEyNN']] = _0x37618b['handleData'](_0x5c6603['json']['creative']);
                continue;
              case '3':
                window[_0x47d4f8['jUwoP']] = !![];
                continue;
              case '4':
                _0x37618b['aliyun_log_field'] = _0x5c6603['json']['aliyun_log_field'];
                continue;
            }
            break;
          }
        }
      });
    }
  },
  'uniq': function uniq(_0x2300c1) {
    var _0x1c465d = {
      'QsGQZ': function QsGQZ(_0x1afbaf, _0x16f78c) {
        return _0x1afbaf < _0x16f78c;
      },
      'MjxEI': function MjxEI(_0x30b374, _0x9d82a4) {
        return _0x30b374 == _0x9d82a4;
      }
    };
    var _0xf19bfc = [];
    for (var _0x418021 = 0x0; _0x1c465d['QsGQZ'](_0x418021, _0x2300c1['length']); _0x418021++) {
      if (_0x1c465d['MjxEI'](_0xf19bfc['indexOf'](_0x2300c1[_0x418021]), -0x1)) {
        _0xf19bfc['push'](_0x2300c1[_0x418021]);
      }
    }
    return _0xf19bfc;
  },
  'handleData': function handleData(_0x465046) {
    var _0x173d18 = {
      'AYnkL': function AYnkL(_0x2c770d, _0xcc86a3) {
        return _0x2c770d < _0xcc86a3;
      },
      'jvzJm': function jvzJm(_0x40679b, _0x14da3a) {
        return _0x40679b == _0x14da3a;
      },
      'nQSAX': function nQSAX(_0x554e87, _0x21e575) {
        return _0x554e87 == _0x21e575;
      },
      'pkWYk': 'all',
      'tkEsH': function tkEsH(_0x2a04ef, _0x5b1f4b) {
        return _0x2a04ef == _0x5b1f4b;
      },
      'IiNge': function IiNge(_0x20a060, _0x539661) {
        return _0x20a060 < _0x539661;
      },
      'jVGBK': function jVGBK(_0x5b6b96, _0x47ab0a) {
        return _0x5b6b96 == _0x47ab0a;
      },
      'aYoEw': function aYoEw(_0x189e5b, _0x47f44f) {
        return _0x189e5b < _0x47f44f;
      }
    };
    var _0x3b9874 = [];
    for (var _0x3c19ec = 0x0; _0x173d18['AYnkL'](_0x3c19ec, _0x465046['length']); _0x3c19ec++) {
      if (_0x173d18['jvzJm'](_0x465046[_0x3c19ec]['device'], this['curModel']) || _0x173d18['nQSAX'](_0x465046[_0x3c19ec]['device'], _0x173d18['pkWYk'])) {
        _0x3b9874['push'](_0x465046[_0x3c19ec]);
      }
    }
    var _0x3fda77 = this['sort'](_0x3b9874);
    var _0x5b23f7 = [];
    var _0x5ab078 = [];
    for (var _0x45be2b = 0x0; _0x173d18['AYnkL'](_0x45be2b, _0x3fda77['length']); _0x45be2b++) {
      var _0x36eccc = !![];
      for (var _0x14b8e5 = 0x0; _0x173d18['AYnkL'](_0x14b8e5, _0x5ab078['length']); _0x14b8e5++) {
        if (_0x173d18['tkEsH'](_0x3fda77[_0x45be2b]['weight'], _0x5ab078[_0x14b8e5])) {
          _0x36eccc = ![];
          break;
        }
      }
      if (_0x36eccc) {
        _0x5ab078['push'](_0x3fda77[_0x45be2b]['weight']);
      }
    }
    for (var _0x1db81c = 0x0; _0x173d18['AYnkL'](_0x1db81c, _0x5ab078['length']); _0x1db81c++) {
      _0x5b23f7[_0x1db81c] = [];
    }
    for (var _0x515bb0 = 0x0; _0x173d18['AYnkL'](_0x515bb0, _0x5ab078['length']); _0x515bb0++) {
      for (var _0x14b8e = 0x0; _0x173d18['IiNge'](_0x14b8e, _0x3fda77['length']); _0x14b8e++) {
        if (_0x173d18['jVGBK'](_0x5ab078[_0x515bb0], _0x3fda77[_0x14b8e]['weight'])) {
          _0x5b23f7[_0x515bb0]['push'](_0x3fda77[_0x14b8e]);
        }
      }
    }
    for (var _0x5d9e52 = 0x0; _0x173d18['aYoEw'](_0x5d9e52, _0x5b23f7['length']); _0x5d9e52++) {
      _0x5b23f7[_0x5d9e52] = this['luanxu'](_0x5b23f7[_0x5d9e52]);
    }
    var _0x2ce7f2 = [];
    for (var _0x3d8ca3 = 0x0; _0x173d18['aYoEw'](_0x3d8ca3, _0x5b23f7['length']); _0x3d8ca3++) {
      for (var _0x14b8e2 = 0x0; _0x173d18['aYoEw'](_0x14b8e2, _0x5b23f7[_0x3d8ca3]['length']); _0x14b8e2++) {
        _0x2ce7f2['push'](_0x5b23f7[_0x3d8ca3][_0x14b8e2]);
      }
    }
    return _0x2ce7f2;
  },
  'sort': function sort(_0x4da52e) {
    var _0x2ab3a3 = {
      'oBvKQ': function oBvKQ(_0x4764a2, _0xb5e093) {
        return _0x4764a2 < _0xb5e093;
      },
      'mcrBn': function mcrBn(_0x1b8276, _0x336475) {
        return _0x1b8276 - _0x336475;
      },
      'fCrms': function fCrms(_0x2edfa4, _0x155e80) {
        return _0x2edfa4 < _0x155e80;
      },
      'pCGrt': function pCGrt(_0x249203, _0x28e3cf) {
        return _0x249203 - _0x28e3cf;
      },
      'bPies': function bPies(_0x30ef61, _0x988280) {
        return _0x30ef61 - _0x988280;
      },
      'EWuMi': function EWuMi(_0x430974, _0xcaf10a) {
        return _0x430974 + _0xcaf10a;
      },
      'mjwMl': function mjwMl(_0x3beefb, _0x153665) {
        return _0x3beefb + _0x153665;
      },
      'JUIif': function JUIif(_0x264964, _0x2a1d7f) {
        return _0x264964 + _0x2a1d7f;
      }
    };
    var _0x484216;
    for (var _0x39434e = 0x0; _0x2ab3a3['oBvKQ'](_0x39434e, _0x2ab3a3['mcrBn'](_0x4da52e['length'], 0x1)); _0x39434e++) {
      for (var _0x3c5c37 = 0x0; _0x2ab3a3['fCrms'](_0x3c5c37, _0x2ab3a3['pCGrt'](_0x2ab3a3['bPies'](_0x4da52e['length'], 0x1), _0x39434e)); _0x3c5c37++) if (_0x2ab3a3['fCrms'](_0x4da52e[_0x3c5c37]['weight'], _0x4da52e[_0x2ab3a3['EWuMi'](_0x3c5c37, 0x1)]['weight'])) {
        _0x484216 = _0x4da52e[_0x3c5c37];
        _0x4da52e[_0x3c5c37] = _0x4da52e[_0x2ab3a3['mjwMl'](_0x3c5c37, 0x1)];
        _0x4da52e[_0x2ab3a3['JUIif'](_0x3c5c37, 0x1)] = _0x484216;
      }
    }
    return _0x4da52e;
  },
  'luanxu': function luanxu(_0x1b6ba0) {
    var _0x1587cb = {
      'tXTBK': function tXTBK(_0x4274b3, _0x99a198) {
        return _0x4274b3 > _0x99a198;
      }
    };
    var _0xb1b3f7 = _0x1b6ba0;
    _0xb1b3f7['sort'](function () {
      return _0x1587cb['tXTBK'](Math['random'](), 0.5) ? -0x1 : 0x1;
    });
    return _0xb1b3f7;
  },
  'getData': function getData(_0x58d795, _0x5dce6f, _0x2f393e) {
    var _0xf81ea0 = {
      'OpgaH': function OpgaH(_0x4e3b52, _0x2dac9d) {
        return _0x4e3b52 < _0x2dac9d;
      },
      'gCqMj': function gCqMj(_0x3086a5, _0x1431e0) {
        return _0x3086a5 >= _0x1431e0;
      },
      'LQjGq': 'ad_Data'
    };
    var _0x2b43ad = 0x0;
    var _0x391761 = [];
    for (var _0x9cc3b4 = _0x58d795; _0xf81ea0['OpgaH'](_0x9cc3b4, _0x5dce6f); _0x9cc3b4++) {
      if (_0xf81ea0['gCqMj'](_0x9cc3b4, window[_0xf81ea0['LQjGq']]['length'])) {
        _0x391761['push'](window[_0xf81ea0['LQjGq']][_0x2b43ad]);
        _0x2b43ad++;
        if (_0x2f393e) {
          if (window['wx']) {
            window['wx']['setStorageSync'](_0x2f393e, _0x2b43ad);
          }
        }
      } else {
        _0x391761['push'](window[_0xf81ea0['LQjGq']][_0x9cc3b4]);
      }
    }
    return _0x391761;
  },
  'getData_local': function getData_local(_0x2c8053) {
    var _0x1582cb = {
      'xKbQJ': function xKbQJ(_0x4d9e75, _0x1db1fb) {
        return _0x4d9e75 < _0x1db1fb;
      },
      'utDEG': 'ad_Data',
      'kuYBQ': function kuYBQ(_0x15205f, _0xed3411) {
        return _0x15205f != _0xed3411;
      },
      'EqJAM': function EqJAM(_0x327517, _0x185f20) {
        return _0x327517 == _0x185f20;
      }
    };
    var _0x3ab134 = _0x2c8053['split']('&');
    var _0x5334e6 = [];
    for (var _0x393d98 = 0x0; _0x1582cb['xKbQJ'](_0x393d98, window[_0x1582cb['utDEG']]['length']); _0x393d98++) {
      for (var _0x6c1fc2 = 0x0; _0x1582cb['xKbQJ'](_0x6c1fc2, _0x3ab134['length']); _0x6c1fc2++) {
        if (_0x1582cb['kuYBQ'](_0x3ab134[_0x6c1fc2], '') && _0x1582cb['EqJAM'](window[_0x1582cb['utDEG']][_0x393d98]['creative_id'], _0x3ab134[_0x6c1fc2])) {
          _0x5334e6['push'](window[_0x1582cb['utDEG']][_0x393d98]);
        }
      }
    }
    return _0x5334e6;
  },
  'getData_local_others': function getData_local_others(_0x4f6865) {
    var _0x3f1f27 = {
      'MMSfs': function MMSfs(_0x43c984, _0x1168e2) {
        return _0x43c984 < _0x1168e2;
      },
      'JLMiP': 'ad_Data',
      'sNTAg': function sNTAg(_0x629df4, _0x2db2c7) {
        return _0x629df4 == _0x2db2c7;
      }
    };
    var _0x508aa3 = _0x4f6865['split']('&');
    var _0x222508 = [];
    for (var _0x1ab32f = 0x0; _0x3f1f27['MMSfs'](_0x1ab32f, window[_0x3f1f27['JLMiP']]['length']); _0x1ab32f++) {
      var _0x17d000 = ![];
      for (var _0x3a6e49 = 0x0; _0x3f1f27['MMSfs'](_0x3a6e49, _0x508aa3['length']); _0x3a6e49++) {
        if (_0x3f1f27['sNTAg'](window[_0x3f1f27['JLMiP']][_0x1ab32f]['creative_id'], _0x508aa3[_0x3a6e49])) {
          _0x17d000 = !![];
        }
      }
      if (!_0x17d000) {
        _0x222508['push'](window[_0x3f1f27['JLMiP']][_0x1ab32f]);
      }
    }
    return _0x222508;
  },
  'randomGetData': function randomGetData(_0x104d99) {
    var _0x4118ac = {
      'BiFIi': function BiFIi(_0x42ef42, _0x5ea501) {
        return _0x42ef42 < _0x5ea501;
      },
      'VBwfq': function VBwfq(_0x27ce67, _0x2d79a0) {
        return _0x27ce67 * _0x2d79a0;
      },
      'wAsqZ': 'ad_Data',
      'VMTMe': function VMTMe(_0x1dd254, _0xd19b22) {
        return _0x1dd254 < _0xd19b22;
      },
      'voGHZ': function voGHZ(_0x1d5aa4, _0x1d5a07) {
        return _0x1d5aa4 == _0x1d5a07;
      }
    };
    var _0x31df3d = [];
    while (_0x4118ac['BiFIi'](_0x31df3d['length'], _0x104d99)) {
      var _0x1484d7 = Math['floor'](_0x4118ac['VBwfq'](Math['random'](), window[_0x4118ac['wAsqZ']]['length']));
      for (var _0x3aaf0d = 0x0; _0x4118ac['VMTMe'](_0x3aaf0d, _0x31df3d['length']); _0x3aaf0d++) {
        if (_0x4118ac['voGHZ'](_0x31df3d[_0x3aaf0d], _0x1484d7)) {
          break;
        }
      }
      if (_0x4118ac['voGHZ'](_0x3aaf0d, _0x31df3d['length'])) {
        _0x31df3d['push'](_0x1484d7);
      }
    }
    var _0x288f8b = [];
    for (var _0x11cea2 = 0x0; _0x4118ac['VMTMe'](_0x11cea2, _0x31df3d['length']); _0x11cea2++) {
      _0x288f8b['push'](window[_0x4118ac['wAsqZ']][_0x31df3d[_0x11cea2]]);
    }
    return _0x288f8b;
  },
  'checkShow': function checkShow(_0x444655) {
    var _0xaf4a32 = {
      'blEAT': 'ad_Data',
      'AmBQt': function AmBQt(_0x22157a, _0x277a6d) {
        return _0x22157a < _0x277a6d;
      },
      'KPFpk': function KPFpk(_0x24a738, _0x4148a4) {
        return _0x24a738 == _0x4148a4;
      },
      'HfCzg': function HfCzg(_0x2d1695, _0x6dffe4) {
        return _0x2d1695 == _0x6dffe4;
      },
      'LwurU': function LwurU(_0x5bc984, _0x5bd5af) {
        return _0x5bc984 == _0x5bd5af;
      },
      'cqURZ': 'all'
    };
    if (!window[_0xaf4a32['blEAT']]) {
      return ![];
    }
    var _0x57822d = ![];
    for (var _0x5cea2d = 0x0; _0xaf4a32['AmBQt'](_0x5cea2d, this['space']['length']); _0x5cea2d++) {
      if (_0xaf4a32['KPFpk'](this['space'][_0x5cea2d]['type'], _0x444655)) {
        if (_0xaf4a32['HfCzg'](this['curModel'], this['space'][_0x5cea2d]['device']) || _0xaf4a32['LwurU'](this['space'][_0x5cea2d]['device'], _0xaf4a32['cqURZ'])) {
          _0x57822d = !![];
          break;
        }
      }
    }
    return _0x57822d;
  },
  'openGame': function openGame(_0x2e4bb6, _0x5b8ce5, _0x3361d6, _0x9056cf) {
    var _0x327f03 = {
      'UwiPH': '0|5|4|2|3|1',
      'nzWrM': 'zzsdkui',
      'RRQzr': 'clickTry',
      'BNnXD': 'clickTryTime',
      'FxnEi': 'clickok',
      'mvspQ': function mvspQ(_0xef99e6) {
        return _0xef99e6();
      },
      'bUXhn': 'click',
      'MGecy': function MGecy(_0x89a3b4, _0x2b1483) {
        return _0x89a3b4 != _0x2b1483;
      },
      'gDlpy': 'iPhone'
    };
    var _0x20eac4 = this;
    var _0x5bbd9d = new Date()['getTime']();
    var _0x51a6ab = {
      'xsl_unit': _0x5b8ce5,
      'xsl_unit_type': _0x3361d6,
      'xsl_creative': _0x2e4bb6['appname'],
      'xsl_t': _0x5bbd9d,
      'xsl_action': _0x327f03['bUXhn']
    };
    _0x51a6ab = _0x20eac4['addLogData'](_0x51a6ab, _0x2e4bb6);
    _0x20eac4['sendPath'](_0x51a6ab);
    try {
      var _0x581038 = _0x2e4bb6['appid'];
      var _0x4c0600 = _0x2e4bb6['path'];
      if (window['wx']) {
        var _0x594be9 = window['wx']['getSystemInfoSync']()['model'];
        if (_0x327f03['MGecy'](_0x594be9['indexOf'](_0x327f03['gDlpy']), -0x1)) {} else {
          if (_0x2e4bb6['android_appid']) {
            _0x581038 = _0x2e4bb6['android_appid'];
            _0x4c0600 = _0x2e4bb6['android_path'];
          }
        }
      }
      if (!window['wx']) return;
      window['wx']['navigateToMiniProgram']({
        'appId': _0x581038,
        'path': _0x4c0600,
        'success': function success(_0x5c98a3) {
          var _0x559773 = _0x327f03['UwiPH']['split']('|'),
            _0x5da564 = 0x0;
          while (!![]) {
            switch (_0x559773[_0x5da564++]) {
              case '0':
                var _0x5bbd9d = new Date()['getTime']();
                continue;
              case '1':
                window[_0x327f03['nzWrM']]['game_open_tip'] = ![];
                continue;
              case '2':
                _0x20eac4['sendPath'](_0x51a6ab);
                continue;
              case '3':
                if (window[_0x327f03['RRQzr']]) {
                  window[_0x327f03['RRQzr']] = ![];
                  window[_0x327f03['BNnXD']] = new Date()['getTime']();
                }
                continue;
              case '4':
                _0x51a6ab = _0x20eac4['addLogData'](_0x51a6ab, _0x2e4bb6);
                continue;
              case '5':
                var _0x51a6ab = {
                  'xsl_unit': _0x5b8ce5,
                  'xsl_unit_type': _0x3361d6,
                  'xsl_creative': _0x2e4bb6['appname'],
                  'xsl_t': _0x5bbd9d,
                  'xsl_action': _0x327f03['FxnEi']
                };
                continue;
            }
            break;
          }
        },
        'fail': function fail() {
          window[_0x327f03['nzWrM']]['game_open_tip'] = ![];
          _0x9056cf && _0x327f03['mvspQ'](_0x9056cf);
        }
      });
    } catch (_0x669b1d) {
      console['log'](_0x669b1d);
    }
  },
  'httpRequest': function httpRequest(_0x3bdf18, _0x3d7a06, _0x2e1bcf, _0x44da19) {
    if (_0x2e1bcf === void 0) {
      _0x2e1bcf = null;
    }
    var _0x1639ff = {
      'hYRLw': function hYRLw(_0x1e5324, _0x271c8f) {
        return _0x1e5324 == _0x271c8f;
      },
      'rROQa': function rROQa(_0x36109e, _0x28c282) {
        return _0x36109e != _0x28c282;
      },
      'fBaoa': 'sendPath',
      'DaVBB': function DaVBB(_0x355aec, _0x19c259) {
        return _0x355aec === _0x19c259;
      },
      'sLVHw': function sLVHw(_0x12680c, _0x379ee2) {
        return _0x12680c(_0x379ee2);
      },
      'OdHnv': 'There\x20was\x20a\x20problem\x20with\x20the\x20request.',
      'ggmAO': 'Giving\x20up\x20:(\x20Cannot\x20create\x20an\x20XMLHTTP\x20instance',
      'jHKhv': 'GET',
      'YlRCP': function YlRCP(_0x53934a, _0x276566) {
        return _0x53934a != _0x276566;
      }
    };
    var _0x3b7a99 = new XMLHttpRequest();
    if (!_0x3b7a99) {
      _0x1639ff['sLVHw'](alert, _0x1639ff['ggmAO']);
      return;
    }
    _0x3b7a99['onreadystatechange'] = function () {
      if (_0x1639ff['hYRLw'](_0x3b7a99['readyState'], XMLHttpRequest['DONE'])) {
        if (_0x1639ff['rROQa'](_0x3bdf18, _0x1639ff['fBaoa'])) {
          if (_0x1639ff['DaVBB'](_0x3b7a99['status'], 0xc8)) {
            var _0x27e461 = _0x3b7a99['responseText'];
            try {
              _0x27e461 = JSON['parse'](_0x27e461);
            } catch (_0x3bf36c) {
              _0x27e461 = _0x3b7a99['responseText'];
            }
            _0x1639ff['sLVHw'](_0x44da19, _0x27e461);
          } else {
            console['log'](_0x1639ff['OdHnv']);
          }
        }
      }
    };
    _0x3b7a99['open'](_0x1639ff['jHKhv'], _0x3d7a06);
    if (_0x1639ff['YlRCP'](_0x2e1bcf, null)) {
      _0x3b7a99['send'](_0x2e1bcf);
    } else {
      _0x3b7a99['send']();
    }
  }
});
module['exports'] = zzsdkui;
window['zzsdkui'] = zzsdkui['getInstance']();

cc._RF.pop();