"use strict";
cc._RF.push(module, '399e20P2xhD5ax/pizj4jfL', 'zzsdkui_item');
// Game/Scripts/sdk/zzsdkui_item.js

"use strict";

var zzsdkui_item = cc['Class']({
  'extends': cc['Component'],
  'properties': {
    '_frames': [],
    '_framesindex': 0x0,
    '_framestime': 0x0
  },
  'statics': {
    'self': null,
    'getInstance': function getInstance() {
      var _0x349470 = {
        'RAzwr': function RAzwr(_0x19f6a6, _0x8ab26c) {
          return _0x19f6a6 == _0x8ab26c;
        }
      };
      if (_0x349470['RAzwr'](zzsdkui_item['self'], null)) {
        zzsdkui_item['self'] = new zzsdkui_item();
      }
      return zzsdkui_item['self'];
    }
  },
  'start': function start() {},
  'youlikeItem': function youlikeItem(_0xd531de, _0x3563dc, _0xe6b323, _0x438bd5, _0x5779ea) {
    var _0x34457c = {
      'KqghX': 'err:',
      'xzIBF': function xzIBF(_0x38f1e7, _0x32e612) {
        return _0x38f1e7 == _0x32e612;
      },
      'bkHyQ': 'zzsdkui',
      'qymmd': function qymmd(_0xd71496, _0x228401) {
        return _0xd71496 + _0x228401;
      },
      'gszNG': 'adver/',
      'rYTPj': 'youlike_item_bg',
      'DlrCb': 'mask',
      'MGmfP': function MGmfP(_0x56d11c, _0x253ca5) {
        return _0x56d11c * _0x253ca5;
      },
      'UfVfF': function UfVfF(_0x518176, _0x2ef962) {
        return _0x518176 - _0x2ef962;
      },
      'XgxPW': function XgxPW(_0x30524f, _0x36a685) {
        return _0x30524f + _0x36a685;
      },
      'xHQdP': 'icon'
    };
    this['adtype'] = _0xd531de;
    this['tagtype'] = _0x3563dc;
    this['data'] = _0xe6b323;
    this['itemChange'] = _0x438bd5;
    this['failCb'] = _0x5779ea;
    var _0x10a092 = this;
    _0x10a092['node']['width'] = 0xac;
    _0x10a092['node']['height'] = 0xac;
    _0x10a092['node']['anchorX'] = 0x0;
    _0x10a092['node']['anchorY'] = 0x1;
    if (_0x34457c['xzIBF'](window[_0x34457c['bkHyQ']]['z_sign'], 0x1)) {
      _0x10a092['node']['scaleX'] = _0x10a092['node']['scaleY'] = 0.9;
    }
    var _0x3bfd25 = new cc['Node']('bg');
    var _0x20ddd = _0x3bfd25['addComponent'](cc['Sprite']);
    _0x3bfd25['width'] = _0x10a092['node']['width'];
    _0x3bfd25['height'] = _0x10a092['node']['height'];
    _0x3bfd25['anchorX'] = 0x0;
    _0x3bfd25['anchorY'] = 0x1;
    _0x10a092['node']['addChild'](_0x3bfd25);
    cc['loader']['loadRes'](_0x34457c['qymmd'](_0x34457c['gszNG'], _0x10a092['itemChange'] && _0x10a092['itemChange']['bg'] ? _0x10a092['itemChange']['bg'] : _0x34457c['rYTPj']), cc['SpriteFrame'], function (_0x443ab9, _0x2bf585) {
      if (_0x443ab9) {
        console['log'](_0x34457c['KqghX'], _0x443ab9);
        return;
      }
      if (_0x20ddd) _0x20ddd['spriteFrame'] = _0x2bf585;
    });
    var _0x526778 = new cc['Node'](_0x34457c['DlrCb']);
    _0x526778['width'] = _0x526778['height'] = 0x8e;
    _0x526778['anchorX'] = 0x0;
    _0x526778['anchorY'] = 0x1;
    _0x526778['x'] = _0x34457c['MGmfP'](_0x34457c['UfVfF'](_0x10a092['node']['width'], _0x526778['width']), 0.5);
    _0x526778['y'] = _0x34457c['XgxPW'](-_0x526778['x'], 0x2);
    _0x10a092['node']['addChild'](_0x526778);
    var _0x234122 = _0x526778['addComponent'](cc['Mask']);
    this['updateMask'](0.08, _0x234122);
    var _0x4b4f37 = new cc['Node'](_0x34457c['xHQdP']);
    _0x4b4f37['setContentSize'](_0x526778['width'], _0x526778['height']);
    _0x4b4f37['anchorX'] = 0x0;
    _0x4b4f37['anchorY'] = 0x1;
    _0x526778['addChild'](_0x4b4f37);
    var _0x3cc335 = _0x4b4f37['addComponent'](cc['Sprite']);
    _0x3cc335['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x10a092['loadImg'](_0x3cc335);
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'drawerItem': function drawerItem(_0x373949, _0x4bbfc3, _0x143565, _0x49c998, _0x24021c) {
    if (_0x24021c === void 0) {
      _0x24021c = null;
    }
    var _0x1a0145 = {
      'PzxWo': 'err:',
      'dVero': 'adver/drawer_itembg',
      'FsfGO': 'mask',
      'PNgSx': function PNgSx(_0x2fc34e, _0x57da66) {
        return _0x2fc34e * _0x57da66;
      },
      'OTaFo': function OTaFo(_0x35fe44, _0x13406a) {
        return _0x35fe44 - _0x13406a;
      },
      'KYRGw': function KYRGw(_0x1732a1, _0x33ee13) {
        return _0x1732a1 + _0x33ee13;
      },
      'ASQgJ': 'icon',
      'aHcVt': 'text',
      'yllEa': function yllEa(_0x143f21, _0x2145df) {
        return _0x143f21 - _0x2145df;
      },
      'WgAoL': function WgAoL(_0xa63871, _0x2e59ec) {
        return _0xa63871 * _0x2e59ec;
      }
    };
    this['adtype'] = _0x373949;
    this['tagtype'] = _0x4bbfc3;
    this['data'] = _0x143565;
    this['failCb'] = _0x49c998;
    this['index'] = _0x24021c;
    var _0x5a2aa1 = this;
    _0x5a2aa1['node']['width'] = 0xc8;
    _0x5a2aa1['node']['height'] = 0x101;
    _0x5a2aa1['node']['anchorX'] = 0x0;
    _0x5a2aa1['node']['anchorY'] = 0x1;
    var _0x57a7b8 = new cc['Node']('bg');
    _0x57a7b8['width'] = _0x5a2aa1['node']['width'];
    _0x57a7b8['height'] = _0x5a2aa1['node']['height'];
    _0x57a7b8['anchorX'] = 0x0;
    _0x57a7b8['anchorY'] = 0x1;
    _0x5a2aa1['node']['addChild'](_0x57a7b8);
    var _0x393a98 = _0x57a7b8['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x1a0145['dVero'], cc['SpriteFrame'], function (_0x51b356, _0x2f70d4) {
      if (_0x51b356) {
        console['log'](_0x1a0145['PzxWo'], _0x51b356);
        return;
      }
      if (_0x393a98) _0x393a98['spriteFrame'] = _0x2f70d4;
    });
    var _0x41c738 = new cc['Node'](_0x1a0145['FsfGO']);
    _0x41c738['width'] = _0x41c738['height'] = 0xa6;
    _0x41c738['anchorX'] = 0x0;
    _0x41c738['anchorY'] = 0x1;
    _0x41c738['x'] = _0x1a0145['PNgSx'](_0x1a0145['OTaFo'](_0x5a2aa1['node']['width'], _0x41c738['width']), 0.5);
    _0x41c738['y'] = _0x1a0145['KYRGw'](-_0x41c738['x'], 0x2);
    _0x5a2aa1['node']['addChild'](_0x41c738);
    var _0x5990c8 = _0x41c738['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x5990c8);
    var _0x139486 = new cc['Node'](_0x1a0145['ASQgJ']);
    _0x139486['setContentSize'](_0x41c738['width'], _0x41c738['height']);
    _0x139486['anchorX'] = 0x0;
    _0x139486['anchorY'] = 0x1;
    _0x41c738['addChild'](_0x139486);
    var _0x2fa216 = _0x139486['addComponent'](cc['Sprite']);
    _0x2fa216['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x5a2aa1['loadImg'](_0x2fa216);
    var _0x94b78c = new cc['Node'](_0x1a0145['aHcVt']);
    _0x94b78c['width'] = _0x5a2aa1['node']['width'];
    _0x94b78c['height'] = 0x1a;
    _0x94b78c['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x94b78c['y'] = _0x1a0145['yllEa'](_0x1a0145['yllEa'](_0x41c738['y'], _0x41c738['height']), 0x1e);
    _0x94b78c['x'] = _0x1a0145['WgAoL'](_0x5a2aa1['node']['width'], 0.5);
    _0x5a2aa1['node']['addChild'](_0x94b78c);
    var _0x169176 = _0x94b78c['addComponent'](cc['Label']);
    _0x169176['fontSize'] = 0x18;
    _0x169176['lineHeight'] = 0x19;
    _0x169176['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x169176['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x169176['string'] = _0x5a2aa1['data']['appname'];
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'floatItem': function floatItem(_0x1121ef, _0x440804, _0xc8a13b, _0x44a665, _0x23e573) {
    var _0x33b91b = {
      'wQgiV': 'err:',
      'XYiQa': function XYiQa(_0x3034f1, _0x3141be) {
        return _0x3034f1 < _0x3141be;
      },
      'wDwHE': 'float_bg1',
      'eFjcH': 'float_bg2',
      'VDEFp': function VDEFp(_0x3e2f7a, _0x5e11d0) {
        return _0x3e2f7a + _0x5e11d0;
      },
      'GTQLN': 'adver/',
      'tRJLY': 'mask',
      'mzQVu': function mzQVu(_0x5c35bc, _0x5ca2f4) {
        return _0x5c35bc * _0x5ca2f4;
      },
      'FZaBI': function FZaBI(_0x3b20fe, _0x5ad416) {
        return _0x3b20fe - _0x5ad416;
      },
      'eDeVa': function eDeVa(_0x30f1c0, _0x2770e2) {
        return _0x30f1c0 + _0x2770e2;
      },
      'ohdTw': 'icon',
      'keWce': 'text',
      'eWkMV': function eWkMV(_0x44dfce, _0x43d88e) {
        return _0x44dfce != _0x43d88e;
      },
      'mGXdL': function mGXdL(_0x319977, _0x1b4698) {
        return _0x319977 - _0x1b4698;
      },
      'smrul': function smrul(_0x423e50, _0x46110c) {
        return _0x423e50 * _0x46110c;
      }
    };
    this['adtype'] = _0x1121ef;
    this['tagtype'] = _0x440804;
    this['data'] = _0xc8a13b;
    this['itemChange'] = _0x44a665;
    this['failCb'] = _0x23e573;
    var _0x42d3b3 = this;
    _0x42d3b3['node']['width'] = 0x78;
    _0x42d3b3['node']['height'] = 0x9e;
    _0x42d3b3['node']['anchorX'] = 0x0;
    _0x42d3b3['node']['anchorY'] = 0x1;
    var _0x16b3d8 = new cc['Node']('bg');
    var _0x347ba9 = _0x16b3d8['addComponent'](cc['Sprite']);
    _0x16b3d8['width'] = _0x42d3b3['node']['width'];
    _0x16b3d8['height'] = _0x42d3b3['node']['height'];
    _0x16b3d8['anchorX'] = 0x0;
    _0x16b3d8['anchorY'] = 0x1;
    _0x42d3b3['node']['addChild'](_0x16b3d8);
    var _0x322bf9;
    if (_0x42d3b3['itemChange'] && _0x42d3b3['itemChange']['_bgurl']) {
      _0x322bf9 = _0x42d3b3['itemChange']['_bgurl'];
    } else {
      if (_0x33b91b['XYiQa'](Math['random'](), 0.5)) {
        _0x322bf9 = _0x33b91b['wDwHE'];
      } else {
        _0x322bf9 = _0x33b91b['eFjcH'];
      }
    }
    cc['loader']['loadRes'](_0x33b91b['VDEFp'](_0x33b91b['GTQLN'], _0x322bf9), cc['SpriteFrame'], function (_0x524ede, _0x150d67) {
      if (_0x524ede) {
        console['log'](_0x33b91b['wQgiV'], _0x524ede);
        return;
      }
      if (_0x347ba9) _0x347ba9['spriteFrame'] = _0x150d67;
    });
    var _0x939c04 = new cc['Node'](_0x33b91b['tRJLY']);
    _0x939c04['width'] = _0x939c04['height'] = 0x6a;
    _0x939c04['anchorX'] = 0x0;
    _0x939c04['anchorY'] = 0x1;
    _0x939c04['x'] = _0x33b91b['mzQVu'](_0x33b91b['FZaBI'](_0x42d3b3['node']['width'], _0x939c04['width']), 0.5);
    _0x939c04['y'] = _0x33b91b['eDeVa'](-_0x939c04['x'], 0x2);
    _0x42d3b3['node']['addChild'](_0x939c04);
    var _0x372fe1 = _0x939c04['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x372fe1);
    var _0x226b7d = new cc['Node'](_0x33b91b['ohdTw']);
    _0x226b7d['setContentSize'](_0x939c04['width'], _0x939c04['height']);
    _0x226b7d['anchorX'] = 0x0;
    _0x226b7d['anchorY'] = 0x1;
    _0x939c04['addChild'](_0x226b7d);
    var _0x31782e = _0x226b7d['addComponent'](cc['Sprite']);
    _0x31782e['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x42d3b3['loadImg'](_0x31782e);
    var _0x3f19bb = new cc['Node'](_0x33b91b['keWce']);
    if (_0x42d3b3['itemChange'] && _0x33b91b['eWkMV'](_0x42d3b3['itemChange']['_textColor'], null)) {
      var _0x4db7a8 = _0x42d3b3['itemChange']['_textColor']['split'](',');
      _0x3f19bb['color'] = new cc['Color'](_0x4db7a8[0x0], _0x4db7a8[0x1], _0x4db7a8[0x2]);
    }
    _0x3f19bb['width'] = _0x42d3b3['node']['width'];
    _0x3f19bb['height'] = 0x16;
    _0x3f19bb['y'] = _0x33b91b['mGXdL'](_0x33b91b['mGXdL'](_0x939c04['y'], _0x939c04['height']), 0x15);
    _0x3f19bb['x'] = _0x33b91b['smrul'](_0x42d3b3['node']['width'], 0.5);
    _0x42d3b3['node']['addChild'](_0x3f19bb);
    var _0xafb695 = _0x3f19bb['addComponent'](cc['Label']);
    _0xafb695['fontSize'] = 0x14;
    _0xafb695['lineHeight'] = 0x15;
    _0xafb695['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0xafb695['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0xafb695['string'] = _0x42d3b3['data']['appname'];
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'interItem': function interItem(_0x58710a, _0xaf2c5b, _0x2507bc, _0x4af672, _0x4b50d4) {
    if (_0x4b50d4 === void 0) {
      _0x4b50d4 = null;
    }
    var _0x3b2e23 = {
      'YINbd': 'err:',
      'LXNQg': 'adver/inter_itembg',
      'zTfke': 'mask',
      'xBERi': function xBERi(_0x45d2b5, _0x73487c) {
        return _0x45d2b5 * _0x73487c;
      },
      'Jsyvg': function Jsyvg(_0xce33be, _0x2f51e2) {
        return _0xce33be - _0x2f51e2;
      },
      'HYkcf': function HYkcf(_0x1042c7, _0x30c142) {
        return _0x1042c7 + _0x30c142;
      },
      'pPpwD': 'icon'
    };
    this['adtype'] = _0x58710a;
    this['tagtype'] = _0xaf2c5b;
    this['data'] = _0x2507bc;
    this['failCb'] = _0x4af672;
    this['index'] = _0x4b50d4;
    var _0x34657c = this;
    _0x34657c['node']['width'] = 0xe5;
    _0x34657c['node']['height'] = 0xf8;
    _0x34657c['node']['anchorX'] = 0x0;
    _0x34657c['node']['anchorY'] = 0x1;
    var _0x5a90d1 = new cc['Node']('bg');
    _0x5a90d1['anchorX'] = 0x0;
    _0x5a90d1['anchorY'] = 0x1;
    _0x34657c['node']['addChild'](_0x5a90d1);
    var _0x2b0bac = _0x5a90d1['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x3b2e23['LXNQg'], cc['SpriteFrame'], function (_0x56f75c, _0x419341) {
      if (_0x56f75c) {
        console['log'](_0x3b2e23['YINbd'], _0x56f75c);
        return;
      }
      if (_0x2b0bac) _0x2b0bac['spriteFrame'] = _0x419341;
    });
    var _0x17eb4f = new cc['Node'](_0x3b2e23['zTfke']);
    _0x17eb4f['width'] = _0x17eb4f['height'] = 0xb4;
    _0x17eb4f['anchorX'] = 0x0;
    _0x17eb4f['anchorY'] = 0x1;
    _0x17eb4f['x'] = _0x3b2e23['xBERi'](_0x3b2e23['Jsyvg'](_0x34657c['node']['width'], _0x17eb4f['width']), 0.5);
    _0x17eb4f['y'] = _0x3b2e23['HYkcf'](-_0x17eb4f['x'], 0x5);
    _0x34657c['node']['addChild'](_0x17eb4f);
    var _0x53d621 = _0x17eb4f['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x53d621);
    var _0x394429 = new cc['Node'](_0x3b2e23['pPpwD']);
    _0x394429['setContentSize'](_0x17eb4f['width'], _0x17eb4f['height']);
    _0x394429['anchorX'] = 0x0;
    _0x394429['anchorY'] = 0x1;
    _0x17eb4f['addChild'](_0x394429);
    var _0x51ed17 = _0x394429['addComponent'](cc['Sprite']);
    _0x51ed17['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x34657c['loadImg'](_0x51ed17);
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'interfullItem_top': function interfullItem_top(_0x1d784f, _0x309461, _0x3e3579, _0x221239, _0x409f66) {
    var _0x556b43 = {
      'bHBdG': 'err:',
      'hITcU': function hITcU(_0x5e397d, _0x20e0a2) {
        return _0x5e397d + _0x20e0a2;
      },
      'yalPP': 'adver/',
      'JoPfR': function JoPfR(_0x155d01, _0x1fa3f5) {
        return _0x155d01 != _0x1fa3f5;
      },
      'ZghPG': 'newInter_rect1',
      'OidOr': 'mask',
      'tiTIa': 'icon',
      'ssFjl': 'text',
      'fQhEl': function fQhEl(_0x4126ea, _0xac6311) {
        return _0x4126ea - _0xac6311;
      },
      'gjWbv': function gjWbv(_0x76d702, _0x413fa8) {
        return _0x76d702 - _0x413fa8;
      },
      'yYYCi': function yYYCi(_0x6b28f, _0x50b766) {
        return _0x6b28f - _0x50b766;
      },
      'YsrUV': function YsrUV(_0x39bb71, _0x981271) {
        return _0x39bb71 + _0x981271;
      },
      'LKKUV': function LKKUV(_0x18ad1e, _0x1dc792) {
        return _0x18ad1e + _0x1dc792;
      },
      'MbhjU': function MbhjU(_0x43af4e, _0x3a9229) {
        return _0x43af4e * _0x3a9229;
      },
      'iFZlm': function iFZlm(_0x26a84e, _0x44d838) {
        return _0x26a84e - _0x44d838;
      },
      'MxqyU': 'playNum',
      'VdaND': function VdaND(_0x1515ab, _0x5bccdb) {
        return _0x1515ab * _0x5bccdb;
      },
      'ZPqmB': function ZPqmB(_0x2fdd53, _0x5cf9ab) {
        return _0x2fdd53 + _0x5cf9ab;
      },
      'WNMhX': '万人在玩',
      'CcMXG': 'score',
      'dPkuE': function dPkuE(_0x65453a, _0x2c7457) {
        return _0x65453a + _0x2c7457;
      },
      'GVnPh': function GVnPh(_0x3fe59b, _0x4de216) {
        return _0x3fe59b + _0x4de216;
      },
      'iSaLq': function iSaLq(_0x1d9f6d, _0x43dde3) {
        return _0x1d9f6d(_0x43dde3);
      },
      'BKLNW': function BKLNW(_0xe6952a, _0x1cc7e7) {
        return _0xe6952a - _0x1cc7e7;
      },
      'rTQzz': function rTQzz(_0xadd19b, _0x197639) {
        return _0xadd19b + _0x197639;
      },
      'hexis': function hexis(_0x28f131, _0x45a2ad) {
        return _0x28f131 + _0x45a2ad;
      },
      'dDfLk': '评分：'
    };
    this['adtype'] = _0x1d784f;
    this['tagtype'] = _0x309461;
    this['data'] = _0x3e3579;
    this['failCb'] = _0x409f66;
    var _0x5a7832 = this;
    _0x5a7832['node']['width'] = 0x16d;
    _0x5a7832['node']['height'] = 0xb9;
    _0x5a7832['node']['anchorX'] = 0x0;
    _0x5a7832['node']['anchorY'] = 0x1;
    var _0x55edd5 = new cc['Node']('bg');
    var _0x194e23 = _0x55edd5['addComponent'](cc['Sprite']);
    _0x55edd5['width'] = _0x5a7832['node']['width'];
    _0x55edd5['height'] = _0x5a7832['node']['height'];
    _0x55edd5['anchorX'] = 0x0;
    _0x55edd5['anchorY'] = 0x1;
    _0x5a7832['node']['addChild'](_0x55edd5);
    cc['loader']['loadRes'](_0x556b43['hITcU'](_0x556b43['yalPP'], _0x556b43['JoPfR'](_0x221239, null) ? _0x221239 : _0x556b43['ZghPG']), cc['SpriteFrame'], function (_0x2f51b0, _0x2c4065) {
      if (_0x2f51b0) {
        console['log'](_0x556b43['bHBdG'], _0x2f51b0);
        return;
      }
      if (_0x194e23) _0x194e23['spriteFrame'] = _0x2c4065;
    });
    var _0x71e218 = new cc['Node'](_0x556b43['OidOr']);
    _0x71e218['width'] = _0x71e218['height'] = 0x8c;
    _0x71e218['anchorX'] = 0x0;
    _0x71e218['anchorY'] = 0x1;
    _0x71e218['x'] = 0x14;
    _0x71e218['y'] = -0xa;
    _0x5a7832['node']['addChild'](_0x71e218);
    var _0x17daf4 = _0x71e218['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x17daf4);
    var _0x257dfb = new cc['Node'](_0x556b43['tiTIa']);
    _0x257dfb['setContentSize'](_0x71e218['width'], _0x71e218['height']);
    _0x257dfb['anchorX'] = 0x0;
    _0x257dfb['anchorY'] = 0x1;
    _0x71e218['addChild'](_0x257dfb);
    var _0x110e7a = _0x257dfb['addComponent'](cc['Sprite']);
    _0x110e7a['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x5a7832['loadImg'](_0x110e7a);
    var _0x2a545c = new cc['Node'](_0x556b43['ssFjl']);
    _0x2a545c['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x2a545c['width'] = _0x556b43['fQhEl'](_0x556b43['gjWbv'](_0x556b43['yYYCi'](_0x5a7832['node']['width'], _0x71e218['width']), _0x71e218['x']), 0xa);
    _0x2a545c['height'] = 0x1a;
    _0x2a545c['x'] = _0x556b43['YsrUV'](_0x556b43['YsrUV'](_0x556b43['LKKUV'](_0x556b43['MbhjU'](_0x2a545c['width'], 0.5), _0x71e218['x']), _0x71e218['width']), 0x5);
    _0x2a545c['y'] = _0x556b43['iFZlm'](_0x71e218['y'], 0x14);
    _0x5a7832['node']['addChild'](_0x2a545c);
    var _0x2fd1cc = _0x2a545c['addComponent'](cc['Label']);
    _0x2fd1cc['fontSize'] = 0x18;
    _0x2fd1cc['lineHeight'] = 0x19;
    _0x2fd1cc['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x2fd1cc['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
    _0x2fd1cc['string'] = _0x5a7832['data']['appname'];
    var _0x6ec0b = new cc['Node'](_0x556b43['MxqyU']);
    _0x6ec0b['width'] = _0x2a545c['width'];
    _0x6ec0b['height'] = 0x19;
    _0x6ec0b['x'] = _0x2a545c['x'];
    _0x6ec0b['y'] = _0x556b43['iFZlm'](_0x556b43['iFZlm'](_0x2a545c['y'], _0x556b43['VdaND'](_0x2a545c['height'], 0.5)), 0x14);
    _0x6ec0b['color'] = new cc['Color'](0x9c, 0x9c, 0x9c);
    _0x5a7832['node']['addChild'](_0x6ec0b);
    var _0x3bf6b6 = _0x6ec0b['addComponent'](cc['Label']);
    var _0x29ee8b = Math['floor'](_0x556b43['LKKUV'](_0x556b43['VdaND'](Math['random'](), 0xc9), 0xc8));
    _0x3bf6b6['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x3bf6b6['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
    _0x3bf6b6['fontSize'] = 0x17;
    _0x3bf6b6['lineHeight'] = 0x18;
    _0x3bf6b6['string'] = _0x556b43['ZPqmB'](_0x29ee8b, _0x556b43['WNMhX']);
    var _0x32e740 = new cc['Node'](_0x556b43['CcMXG']);
    _0x32e740['color'] = new cc['Color'](0x9c, 0x9c, 0x9c);
    _0x32e740['anchorX'] = 0x0;
    _0x32e740['width'] = _0x6ec0b['width'];
    _0x32e740['height'] = 0x19;
    _0x32e740['x'] = _0x556b43['ZPqmB'](_0x556b43['dPkuE'](_0x71e218['x'], _0x71e218['width']), 0x5);
    _0x32e740['y'] = _0x556b43['dPkuE'](-_0x5a7832['node']['height'], 0x3c);
    _0x5a7832['node']['addChild'](_0x32e740);
    var _0x5018d7 = _0x32e740['addComponent'](cc['Label']);
    _0x5018d7['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
    _0x5018d7['fontSize'] = 0x17;
    _0x5018d7['lineHeight'] = 0x18;
    var _0x2366fc;
    if (window['wx']) {
      if (window['wx']['getStorageSync'](_0x5a7832['data']['appname'])) {
        _0x2366fc = window['wx']['getStorageSync'](_0x5a7832['data']['appname']);
      } else {
        _0x2366fc = _0x556b43['iFZlm'](_0x556b43['GVnPh'](0x4, _0x556b43['iSaLq'](Number, Math['random']()['toFixed'](0x1))), 0.1)['toFixed'](0x1);
        window['wx']['setStorageSync'](_0x5a7832['data']['appname'], _0x2366fc);
      }
    } else {
      _0x2366fc = _0x556b43['BKLNW'](_0x556b43['rTQzz'](0x4, _0x556b43['iSaLq'](Number, Math['random']()['toFixed'](0x1))), 0.1)['toFixed'](0x1);
    }
    _0x5018d7['string'] = _0x556b43['rTQzz'](_0x556b43['hexis'](_0x556b43['dDfLk'], _0x2366fc), '分');
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'interfullItem_bot': function interfullItem_bot(_0x1e27e2, _0x1e794c, _0x3c13c9, _0x4abce8, _0x4939d3) {
    var _0x4f4599 = {
      'fisgE': 'err:',
      'JgFLT': function JgFLT(_0x45ebf9, _0x42562e) {
        return _0x45ebf9 + _0x42562e;
      },
      'QBdyV': 'adver/',
      'eoehX': function eoehX(_0x1c111c, _0x158bd9) {
        return _0x1c111c != _0x158bd9;
      },
      'Ygwkf': 'newInter_itembg',
      'YLnZi': 'mask',
      'LaBdT': function LaBdT(_0x52e145, _0x1c465b) {
        return _0x52e145 * _0x1c465b;
      },
      'vrMFb': function vrMFb(_0x98d347, _0x392d0a) {
        return _0x98d347 - _0x392d0a;
      },
      'qCWev': 'icon',
      'aWZMZ': 'text',
      'rQYDg': function rQYDg(_0x2488c9, _0x39ad3f) {
        return _0x2488c9 - _0x39ad3f;
      },
      'fglwk': function fglwk(_0x2836f0, _0x1b62d6) {
        return _0x2836f0 - _0x1b62d6;
      }
    };
    this['adtype'] = _0x1e27e2;
    this['tagtype'] = _0x1e794c;
    this['data'] = _0x3c13c9;
    this['failCb'] = _0x4939d3;
    var _0x37a235 = this;
    _0x37a235['node']['width'] = 0xb6;
    _0x37a235['node']['height'] = 0xdd;
    _0x37a235['node']['anchorX'] = 0x0;
    _0x37a235['node']['anchorY'] = 0x1;
    var _0xe52196 = new cc['Node']('bg');
    var _0x47ad05 = _0xe52196['addComponent'](cc['Sprite']);
    _0xe52196['width'] = _0x37a235['node']['width'];
    _0xe52196['height'] = _0x37a235['node']['height'];
    _0xe52196['anchorX'] = 0x0;
    _0xe52196['anchorY'] = 0x1;
    _0x37a235['node']['addChild'](_0xe52196);
    cc['loader']['loadRes'](_0x4f4599['JgFLT'](_0x4f4599['QBdyV'], _0x4f4599['eoehX'](_0x4abce8, null) ? _0x4abce8 : _0x4f4599['Ygwkf']), cc['SpriteFrame'], function (_0x8cf3d1, _0x3a2d9a) {
      if (_0x8cf3d1) {
        console['log'](_0x4f4599['fisgE'], _0x8cf3d1);
        return;
      }
      if (_0x47ad05) _0x47ad05['spriteFrame'] = _0x3a2d9a;
    });
    var _0x29b326 = new cc['Node'](_0x4f4599['YLnZi']);
    _0x29b326['width'] = _0x29b326['height'] = 0x8c;
    _0x29b326['anchorX'] = 0x0;
    _0x29b326['anchorY'] = 0x1;
    _0x29b326['x'] = _0x4f4599['LaBdT'](_0x4f4599['vrMFb'](_0x37a235['node']['width'], _0x29b326['width']), 0.5);
    _0x29b326['y'] = -0xa;
    _0x37a235['node']['addChild'](_0x29b326);
    var _0x761fa6 = _0x29b326['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x761fa6);
    var _0x538230 = new cc['Node'](_0x4f4599['qCWev']);
    _0x538230['setContentSize'](_0x29b326['width'], _0x29b326['height']);
    _0x538230['anchorX'] = 0x0;
    _0x538230['anchorY'] = 0x1;
    _0x29b326['addChild'](_0x538230);
    var _0x52fe6f = _0x538230['addComponent'](cc['Sprite']);
    _0x52fe6f['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x37a235['loadImg'](_0x52fe6f);
    var _0x5ddcaf = new cc['Node'](_0x4f4599['aWZMZ']);
    _0x5ddcaf['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x5ddcaf['width'] = _0x4f4599['rQYDg'](_0x37a235['node']['width'], 0x28);
    _0x5ddcaf['height'] = 0x1a;
    _0x5ddcaf['anchorX'] = 0x0;
    _0x5ddcaf['x'] = _0x4f4599['LaBdT'](_0x4f4599['fglwk'](_0x37a235['node']['width'], _0x5ddcaf['width']), 0.5);
    _0x5ddcaf['y'] = _0x4f4599['fglwk'](_0x4f4599['fglwk'](_0x29b326['y'], _0x29b326['height']), 0x19);
    _0x37a235['node']['addChild'](_0x5ddcaf);
    var _0x4abcbb = _0x5ddcaf['addComponent'](cc['Label']);
    _0x4abcbb['fontSize'] = 0x18;
    _0x4abcbb['lineHeight'] = 0x19;
    _0x4abcbb['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x4abcbb['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x4abcbb['string'] = _0x37a235['data']['appname'];
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'tryItem': function tryItem(_0x3839ed, _0x20793b, _0x5e28e0, _0x2adc35, _0x3aa718, _0x5c31de, _0x509b02) {
    var _0x142079 = {
      'nskwb': 'err:',
      'NEnRh': '1|2|4|0|3',
      'IEsKA': function IEsKA(_0x342baa, _0x461cf7) {
        return _0x342baa * _0x461cf7;
      },
      'UJKpD': function UJKpD(_0x20d032, _0x1a1227) {
        return _0x20d032 - _0x1a1227;
      },
      'fiWFU': '1|2|3|0|4',
      'iZAhd': function iZAhd(_0x1fc89f, _0x1d5be3) {
        return _0x1fc89f + _0x1d5be3;
      },
      'wWlaw': '0|2|5|6|1|4|3',
      'gMQzH': function gMQzH(_0x10c2c0, _0x1e71e2) {
        return _0x10c2c0 + _0x1e71e2;
      },
      'hdqFe': 'adver/',
      'RTXFg': function RTXFg(_0x35a27a, _0x10de38) {
        return _0x35a27a - _0x10de38;
      },
      'KzZel': 'adver/try_itembg',
      'HYrQT': 'mask',
      'YacYT': function YacYT(_0x52f41d, _0x19b427) {
        return _0x52f41d * _0x19b427;
      },
      'ooJVw': 'icon',
      'qZIzA': 'text',
      'jEKOg': function jEKOg(_0x46e8f8, _0xf6227b) {
        return _0x46e8f8 - _0xf6227b;
      },
      'jwbZH': function jwbZH(_0x329360, _0x57327e) {
        return _0x329360 + _0x57327e;
      },
      'KEQnX': 'rebox',
      'kdQUg': 'reicon',
      'ccrTb': 'renum',
      'oIVZx': 'getre',
      'XWZBK': function XWZBK(_0xbf54e, _0x150f2a) {
        return _0xbf54e < _0x150f2a;
      },
      'PKgQA': function PKgQA(_0x558be4, _0x1eaf92) {
        return _0x558be4 == _0x1eaf92;
      },
      'HwHGt': 'yilinqu',
      'ynRmX': '已领取',
      'omDVk': 'trybtn',
      'kraLv': 'try_tryplay',
      'MGJZu': 'try_goplay',
      'ozgSq': function ozgSq(_0x5ca2e8, _0x2a6dac) {
        return _0x5ca2e8 + _0x2a6dac;
      },
      'VgeRJ': 'adver/try_rewardbg'
    };
    this['adtype'] = _0x3839ed;
    this['tagtype'] = _0x20793b;
    this['data'] = _0x5e28e0;
    this['failCb'] = _0x2adc35;
    this['getRewardCb'] = _0x509b02;
    var _0x336ad7 = this;
    _0x336ad7['node']['width'] = 0x233;
    _0x336ad7['node']['height'] = 0x78;
    _0x336ad7['node']['anchorX'] = 0x0;
    _0x336ad7['node']['anchorY'] = 0x1;
    _0x336ad7['node']['active'] = ![];
    var _0x30a998 = new cc['Node']('bg');
    var _0x57c85c = _0x30a998['addComponent'](cc['Sprite']);
    _0x30a998['width'] = _0x336ad7['node']['width'];
    _0x30a998['height'] = _0x336ad7['node']['height'];
    _0x30a998['anchorX'] = 0x0;
    _0x30a998['anchorY'] = 0x1;
    _0x336ad7['node']['addChild'](_0x30a998);
    cc['loader']['loadRes'](_0x142079['KzZel'], cc['SpriteFrame'], function (_0x16818d, _0x27a959) {
      if (_0x16818d) {
        console['log'](_0x142079['nskwb'], _0x16818d);
        return;
      }
      if (_0x57c85c) _0x57c85c['spriteFrame'] = _0x27a959;
    });
    var _0x4cfc88 = new cc['Node'](_0x142079['HYrQT']);
    _0x4cfc88['width'] = _0x4cfc88['height'] = 0x64;
    _0x4cfc88['anchorX'] = 0x0;
    _0x4cfc88['anchorY'] = 0x1;
    _0x4cfc88['x'] = 0xa;
    _0x4cfc88['y'] = _0x142079['YacYT'](-_0x142079['RTXFg'](_0x336ad7['node']['height'], _0x4cfc88['height']), 0.5);
    _0x336ad7['node']['addChild'](_0x4cfc88);
    var _0x2acf54 = _0x4cfc88['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x2acf54);
    var _0x4ddc0a = new cc['Node'](_0x142079['ooJVw']);
    _0x4ddc0a['setContentSize'](_0x4cfc88['width'], _0x4cfc88['height']);
    _0x4ddc0a['anchorX'] = 0x0;
    _0x4ddc0a['anchorY'] = 0x1;
    _0x4cfc88['addChild'](_0x4ddc0a);
    var _0x2f5a7d = _0x4ddc0a['addComponent'](cc['Sprite']);
    _0x2f5a7d['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x336ad7['loadImg'](_0x2f5a7d);
    var _0x38a843 = new cc['Node'](_0x142079['qZIzA']);
    _0x38a843['anchorX'] = 0x0;
    _0x38a843['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x38a843['width'] = _0x142079['RTXFg'](_0x142079['jEKOg'](_0x336ad7['node']['width'], _0x4cfc88['width']), 0x14);
    _0x38a843['height'] = 0x1e;
    _0x38a843['y'] = _0x142079['jEKOg'](_0x4cfc88['y'], 0x1c);
    _0x38a843['x'] = _0x142079['gMQzH'](_0x142079['jwbZH'](_0x4cfc88['width'], _0x4cfc88['x']), 0x14);
    _0x336ad7['node']['addChild'](_0x38a843);
    var _0x48b65b = _0x38a843['addComponent'](cc['Label']);
    _0x48b65b['fontSize'] = 0x1c;
    _0x48b65b['lineHeight'] = 0x1d;
    _0x48b65b['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x48b65b['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
    _0x48b65b['string'] = _0x336ad7['data']['appname'];
    var _0x4efdc1 = new cc['Node'](_0x142079['KEQnX']);
    _0x4efdc1['anchorX'] = 0x0;
    _0x336ad7['node']['addChild'](_0x4efdc1);
    var _0x3dfb2d = _0x4efdc1['addComponent'](cc['Sprite']);
    var _0x16b4e7 = new cc['Node'](_0x142079['kdQUg']);
    _0x4efdc1['addChild'](_0x16b4e7);
    var _0x4bf0b2 = _0x16b4e7['addComponent'](cc['Sprite']);
    var _0x5138c1 = new cc['Node'](_0x142079['ccrTb']);
    _0x5138c1['anchorX'] = 0x0;
    _0x4efdc1['addChild'](_0x5138c1);
    var _0x9eba59 = _0x5138c1['addComponent'](cc['Label']);
    _0x9eba59['string'] = _0x5c31de;
    _0x5138c1['height'] = _0x9eba59['fontSize'] = _0x9eba59['lineHeight'] = 0x16;
    _0x9eba59['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
    this['isGet'] = ![];
    var _0x23522c;
    if (window['wx']) {
      if (window['wx']['getStorageSync'](_0x142079['oIVZx'])) {
        _0x23522c = window['wx']['getStorageSync'](_0x142079['oIVZx'])['split']('&');
        for (var _0x40635e = 0x0; _0x142079['XWZBK'](_0x40635e, _0x23522c['length']); _0x40635e++) {
          if (_0x142079['PKgQA'](_0x23522c[_0x40635e], _0x336ad7['data']['creative_id'])) {
            this['isGet'] = !![];
            break;
          }
        }
      }
    }
    var _0x5188d2 = new cc['Node'](_0x142079['HwHGt']);
    _0x5188d2['anchorX'] = 0x0;
    _0x5188d2['color'] = new cc['Color'](0x6c, 0x82, 0xac);
    _0x336ad7['node']['addChild'](_0x5188d2);
    var _0x2f406b = _0x5188d2['addComponent'](cc['Label']);
    _0x2f406b['string'] = _0x142079['ynRmX'];
    _0x2f406b['fontSize'] = 0x16;
    _0x2f406b['lineHeight'] = 0x17;
    _0x2f406b['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
    var _0x249e9c = new cc['Node'](_0x142079['omDVk']);
    _0x249e9c['anchorX'] = 0x0;
    _0x336ad7['node']['addChild'](_0x249e9c);
    var _0x35123e = _0x249e9c['addComponent'](cc['Sprite']);
    _0x249e9c['on'](cc['Node']['EventType']['TOUCH_END'], this['onTryplay'], this);
    var _0x2cb7c4;
    if (!this['isGet']) {
      _0x2cb7c4 = _0x142079['kraLv'];
      _0x5188d2['active'] = ![];
    } else {
      _0x2cb7c4 = _0x142079['MGJZu'];
    }
    cc['loader']['loadRes'](_0x142079['ozgSq'](_0x142079['hdqFe'], _0x2cb7c4), cc['SpriteFrame'], function (_0x210e34, _0x2bd457) {
      var _0x3d0fc8 = _0x142079['NEnRh']['split']('|'),
        _0xace183 = 0x0;
      while (!![]) {
        switch (_0x3d0fc8[_0xace183++]) {
          case '0':
            ;
            continue;
          case '1':
            if (_0x210e34) {
              console['log'](_0x142079['nskwb'], _0x210e34);
              return;
            }
            continue;
          case '2':
            if (_0x35123e) _0x35123e['spriteFrame'] = _0x2bd457;
            continue;
          case '3':
            _0x249e9c['y'] = _0x142079['IEsKA'](-_0x336ad7['node']['height'], 0.5);
            continue;
          case '4':
            _0x249e9c['x'] = _0x142079['UJKpD'](_0x142079['UJKpD'](_0x336ad7['node']['width'], _0x249e9c['width']), 0x1e);
            continue;
        }
        break;
      }
    });
    cc['loader']['loadRes'](_0x142079['VgeRJ'], cc['SpriteFrame'], function (_0xeac70b, _0x1b2a26) {
      var _0x216852 = _0x142079['wWlaw']['split']('|'),
        _0x5a8e55 = 0x0;
      while (!![]) {
        switch (_0x216852[_0x5a8e55++]) {
          case '0':
            if (_0xeac70b) {
              console['log'](_0x142079['nskwb'], _0xeac70b);
              return;
            }
            continue;
          case '1':
            _0x5188d2['x'] = _0x142079['iZAhd'](_0x142079['gMQzH'](_0x4efdc1['width'], _0x4efdc1['x']), 0x1e);
            continue;
          case '2':
            _0x3dfb2d['spriteFrame'] = _0x1b2a26;
            continue;
          case '3':
            cc['loader']['loadRes'](_0x142079['gMQzH'](_0x142079['hdqFe'], _0x3aa718), cc['SpriteFrame'], function (_0x513b77, _0x1c29f8) {
              var _0x5b435e = _0x142079['fiWFU']['split']('|'),
                _0x37af6d = 0x0;
              while (!![]) {
                switch (_0x5b435e[_0x37af6d++]) {
                  case '0':
                    _0x5138c1['x'] = _0x142079['iZAhd'](_0x142079['iZAhd'](_0x16b4e7['x'], _0x16b4e7['width']), 0x8);
                    continue;
                  case '1':
                    if (_0x513b77) {
                      console['log'](_0x142079['nskwb'], _0x513b77);
                      return;
                    }
                    continue;
                  case '2':
                    if (_0x4bf0b2) _0x4bf0b2['spriteFrame'] = _0x1c29f8;
                    continue;
                  case '3':
                    _0x16b4e7['x'] = _0x142079['iZAhd'](_0x142079['IEsKA'](_0x16b4e7['width'], 0.5), 0xf);
                    continue;
                  case '4':
                    _0x336ad7['node']['active'] = !![];
                    continue;
                }
                break;
              }
            });
            continue;
          case '4':
            _0x5188d2['y'] = _0x4efdc1['y'];
            continue;
          case '5':
            _0x4efdc1['x'] = _0x38a843['x'];
            continue;
          case '6':
            _0x4efdc1['y'] = _0x142079['RTXFg'](_0x38a843['y'], 0x32);
            continue;
        }
        break;
      }
    });
    this['schedule'](this['updateImg'], 0.008);
  },
  'changeTrybtn': function changeTrybtn() {
    var _0x9376df = {
      'RFcWe': 'err:',
      'OScXu': 'try_tryplay',
      'CmTlr': 'try_goplay',
      'mQevK': 'tryitem',
      'kTeIo': 'yilinqu',
      'ySXPL': 'trybtn',
      'Kpwen': function Kpwen(_0x11bd4b, _0x372b6a) {
        return _0x11bd4b + _0x372b6a;
      },
      'WbvQQ': 'adver/'
    };
    this['getRewardCb'] && this['getRewardCb']();
    this['isGet'] = !![];
    var _0x306ac1;
    if (!this['isGet']) {
      _0x306ac1 = _0x9376df['OScXu'];
      yilinqu['active'] = ![];
    } else {
      _0x306ac1 = _0x9376df['CmTlr'];
    }
    window[_0x9376df['mQevK']]['node']['getChildByName'](_0x9376df['kTeIo'])['active'] = !![];
    var _0x56b9bd = window[_0x9376df['mQevK']]['node']['getChildByName'](_0x9376df['ySXPL'])['getComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x9376df['Kpwen'](_0x9376df['WbvQQ'], _0x306ac1), cc['SpriteFrame'], function (_0x238637, _0x2ef8b9) {
      if (_0x238637) {
        console['log'](_0x9376df['RFcWe'], _0x238637);
        return;
      }
      if (_0x56b9bd) _0x56b9bd['spriteFrame'] = _0x2ef8b9;
    });
  },
  'tryyoulikeItem': function tryyoulikeItem(_0x51d07f, _0x47251f, _0x2f4a2d, _0x559df6) {
    var _0x5c43f0 = {
      'wWhBm': 'err:',
      'CXvYO': 'adver/try_iconbg',
      'amrzm': 'mask',
      'JFrov': function JFrov(_0x2a5a5b, _0x355075) {
        return _0x2a5a5b * _0x355075;
      },
      'WndsJ': function WndsJ(_0x16b5b9, _0x2422da) {
        return _0x16b5b9 - _0x2422da;
      },
      'Uwoaz': function Uwoaz(_0x3e1734, _0x11360c) {
        return _0x3e1734 + _0x11360c;
      },
      'gLVKr': 'icon',
      'soegd': 'text',
      'CmVGr': function CmVGr(_0x5bd62c, _0xf895a0) {
        return _0x5bd62c - _0xf895a0;
      },
      'tuUTy': function tuUTy(_0x3180fc, _0x4453c1) {
        return _0x3180fc - _0x4453c1;
      },
      'aysHo': function aysHo(_0x3080f1, _0xc804d1) {
        return _0x3080f1 * _0xc804d1;
      }
    };
    this['adtype'] = _0x51d07f;
    this['tagtype'] = _0x47251f;
    this['data'] = _0x2f4a2d;
    this['failCb'] = _0x559df6;
    var _0x36abdb = this;
    _0x36abdb['node']['width'] = 0x87;
    _0x36abdb['node']['height'] = 0xa5;
    _0x36abdb['node']['anchorX'] = 0x0;
    _0x36abdb['node']['anchorY'] = 0x1;
    var _0x38cdd9 = new cc['Node']('bg');
    _0x38cdd9['width'] = _0x36abdb['node']['width'];
    _0x38cdd9['height'] = _0x36abdb['node']['height'];
    _0x38cdd9['anchorX'] = 0x0;
    _0x38cdd9['anchorY'] = 0x1;
    _0x36abdb['node']['addChild'](_0x38cdd9);
    var _0x11fa3f = _0x38cdd9['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x5c43f0['CXvYO'], cc['SpriteFrame'], function (_0x4f51ff, _0x580944) {
      if (_0x4f51ff) {
        console['log'](_0x5c43f0['wWhBm'], _0x4f51ff);
        return;
      }
      if (_0x11fa3f) _0x11fa3f['spriteFrame'] = _0x580944;
    });
    var _0x5af307 = new cc['Node'](_0x5c43f0['amrzm']);
    _0x5af307['width'] = _0x5af307['height'] = 0x76;
    _0x5af307['anchorX'] = 0x0;
    _0x5af307['anchorY'] = 0x1;
    _0x5af307['x'] = _0x5c43f0['JFrov'](_0x5c43f0['WndsJ'](_0x36abdb['node']['width'], _0x5af307['width']), 0.5);
    _0x5af307['y'] = _0x5c43f0['Uwoaz'](-_0x5af307['x'], 0x2);
    _0x36abdb['node']['addChild'](_0x5af307);
    var _0x38fd8b = _0x5af307['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x38fd8b);
    var _0x3ae0aa = new cc['Node'](_0x5c43f0['gLVKr']);
    _0x3ae0aa['setContentSize'](_0x5af307['width'], _0x5af307['height']);
    _0x3ae0aa['anchorX'] = 0x0;
    _0x3ae0aa['anchorY'] = 0x1;
    _0x5af307['addChild'](_0x3ae0aa);
    var _0x50edd7 = _0x3ae0aa['addComponent'](cc['Sprite']);
    _0x50edd7['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x36abdb['loadImg'](_0x50edd7);
    var _0x5e793c = new cc['Node'](_0x5c43f0['soegd']);
    _0x5e793c['color'] = new cc['Color'](0x33, 0x33, 0x33);
    _0x5e793c['width'] = _0x5c43f0['CmVGr'](_0x36abdb['node']['width'], 0x5);
    _0x5e793c['height'] = 0x16;
    _0x5e793c['y'] = _0x5c43f0['tuUTy'](_0x5c43f0['tuUTy'](_0x5af307['y'], _0x5af307['height']), 0xf);
    _0x5e793c['x'] = _0x5c43f0['aysHo'](_0x36abdb['node']['width'], 0.5);
    _0x36abdb['node']['addChild'](_0x5e793c);
    var _0x520717 = _0x5e793c['addComponent'](cc['Label']);
    _0x520717['fontSize'] = 0x14;
    _0x520717['lineHeight'] = 0x15;
    _0x520717['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x520717['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x520717['string'] = _0x36abdb['data']['appname'];
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'onTryplay': function onTryplay() {
    var _0x442882 = {
      'nBQAG': 'tryitem',
      'DeoHX': 'clickTry'
    };
    if (!this['isGet']) {
      window[_0x442882['nBQAG']] = this;
      window[_0x442882['DeoHX']] = !![];
    }
    this['ontap']();
  },
  'box_youlikeItem': function box_youlikeItem(_0x3cf7dd, _0x2b9a53, _0xfd8153, _0x420e44) {
    var _0x403678 = {
      'ONThl': 'err:',
      'dcWVB': 'adver/sdk_kuang',
      'SemeP': 'mask',
      'fHfSS': function fHfSS(_0x2ac479, _0x4e45e4) {
        return _0x2ac479 * _0x4e45e4;
      },
      'wcZFU': function wcZFU(_0x581b68, _0x4408da) {
        return _0x581b68 - _0x4408da;
      },
      'YsrKW': 'icon',
      'KqMju': 'text',
      'dymeH': function dymeH(_0x46d25a, _0x468bef) {
        return _0x46d25a - _0x468bef;
      },
      'kPzWy': function kPzWy(_0x489a33, _0x1ff35a) {
        return _0x489a33 - _0x1ff35a;
      },
      'sOMXt': function sOMXt(_0x2ee7de, _0x44fa53) {
        return _0x2ee7de * _0x44fa53;
      }
    };
    this['adtype'] = _0x3cf7dd;
    this['tagtype'] = _0x2b9a53;
    this['data'] = _0xfd8153;
    this['failCb'] = _0x420e44;
    var _0x38ce32 = this;
    _0x38ce32['node']['width'] = 0x78;
    _0x38ce32['node']['height'] = 0xa0;
    _0x38ce32['node']['anchorX'] = 0x0;
    _0x38ce32['node']['anchorY'] = 0x1;
    var _0x4257cf = new cc['Node']('bg');
    _0x4257cf['anchorX'] = 0x0;
    _0x4257cf['anchorY'] = 0x1;
    _0x38ce32['node']['addChild'](_0x4257cf);
    var _0x2b8a61 = _0x4257cf['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x403678['dcWVB'], cc['SpriteFrame'], function (_0x1dcb75, _0x5b4dee) {
      if (_0x1dcb75) {
        console['log'](_0x403678['ONThl'], _0x1dcb75);
        return;
      }
      if (_0x2b8a61) _0x2b8a61['spriteFrame'] = _0x5b4dee;
    });
    var _0x308ef0 = new cc['Node'](_0x403678['SemeP']);
    _0x308ef0['width'] = _0x308ef0['height'] = 0x6e;
    _0x308ef0['anchorX'] = 0x0;
    _0x308ef0['anchorY'] = 0x1;
    _0x308ef0['x'] = _0x403678['fHfSS'](_0x403678['wcZFU'](_0x38ce32['node']['width'], _0x308ef0['width']), 0.5);
    _0x308ef0['y'] = -_0x308ef0['x'];
    _0x38ce32['node']['addChild'](_0x308ef0);
    var _0xe2db1b = _0x308ef0['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0xe2db1b);
    var _0x33542b = new cc['Node'](_0x403678['YsrKW']);
    _0x33542b['setContentSize'](_0x308ef0['width'], _0x308ef0['height']);
    _0x33542b['anchorX'] = 0x0;
    _0x33542b['anchorY'] = 0x1;
    _0x308ef0['addChild'](_0x33542b);
    var _0x75933d = _0x33542b['addComponent'](cc['Sprite']);
    _0x75933d['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x38ce32['loadImg'](_0x75933d);
    var _0x767d4b = new cc['Node'](_0x403678['KqMju']);
    _0x767d4b['color'] = new cc['Color'](0x33, 0x33, 0x33);
    _0x767d4b['width'] = _0x403678['dymeH'](_0x38ce32['node']['width'], 0x5);
    _0x767d4b['height'] = 0x16;
    _0x767d4b['y'] = _0x403678['kPzWy'](_0x403678['kPzWy'](_0x308ef0['y'], _0x308ef0['height']), 0x19);
    _0x767d4b['x'] = _0x403678['sOMXt'](_0x38ce32['node']['width'], 0.5);
    _0x38ce32['node']['addChild'](_0x767d4b);
    var _0x34f37f = _0x767d4b['addComponent'](cc['Label']);
    _0x34f37f['fontSize'] = 0x14;
    _0x34f37f['lineHeight'] = 0x15;
    _0x34f37f['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x34f37f['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x34f37f['string'] = _0x38ce32['data']['appname'];
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'box_hotItem': function box_hotItem(_0xadee25, _0x5c9e88, _0x4f3ebe, _0x5e85f8) {
    var _0x299f06 = {
      'dmRFG': 'err:',
      'GMvju': 'adver/sdk_kuang_1',
      'FNgrA': 'mask',
      'oiVbG': 'icon',
      'Zeena': 'text',
      'YFlAq': function YFlAq(_0x35f771, _0x463ef6) {
        return _0x35f771 - _0x463ef6;
      },
      'jGTnY': function jGTnY(_0x4e71ec, _0x1981ee) {
        return _0x4e71ec * _0x1981ee;
      }
    };
    this['adtype'] = _0xadee25;
    this['tagtype'] = _0x5c9e88;
    this['data'] = _0x4f3ebe;
    this['failCb'] = _0x5e85f8;
    var _0x253896 = this;
    _0x253896['node']['width'] = 0xfa;
    _0x253896['node']['height'] = 0x12c;
    _0x253896['node']['anchorX'] = 0x0;
    _0x253896['node']['anchorY'] = 0x1;
    var _0x205157 = new cc['Node']('bg');
    _0x205157['anchorX'] = 0x0;
    _0x205157['anchorY'] = 0x1;
    _0x253896['node']['addChild'](_0x205157);
    var _0x430ec8 = _0x205157['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x299f06['GMvju'], cc['SpriteFrame'], function (_0x5810ea, _0x43084b) {
      if (_0x5810ea) {
        console['log'](_0x299f06['dmRFG'], _0x5810ea);
        return;
      }
      if (_0x430ec8) _0x430ec8['spriteFrame'] = _0x43084b;
    });
    var _0x568c4e = new cc['Node'](_0x299f06['FNgrA']);
    _0x568c4e['width'] = 0xfa;
    _0x568c4e['height'] = 0xeb;
    _0x568c4e['anchorX'] = 0x0;
    _0x568c4e['anchorY'] = 0x1;
    _0x253896['node']['addChild'](_0x568c4e);
    var _0x44d116 = _0x568c4e['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x44d116);
    var _0xbfe657 = new cc['Node'](_0x299f06['oiVbG']);
    _0xbfe657['setContentSize'](_0x568c4e['width'], _0x568c4e['height']);
    _0xbfe657['anchorX'] = 0x0;
    _0xbfe657['anchorY'] = 0x1;
    _0x568c4e['addChild'](_0xbfe657);
    var _0x39c67a = _0xbfe657['addComponent'](cc['Sprite']);
    _0x39c67a['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x253896['loadImg'](_0x39c67a);
    var _0x47ef9a = new cc['Node'](_0x299f06['Zeena']);
    _0x47ef9a['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x47ef9a['width'] = _0x299f06['YFlAq'](_0x253896['node']['width'], 0x5);
    _0x47ef9a['height'] = 0x1e;
    _0x47ef9a['y'] = _0x299f06['YFlAq'](_0x299f06['YFlAq'](_0x568c4e['y'], _0x568c4e['height']), 0x2d);
    _0x47ef9a['x'] = _0x299f06['jGTnY'](_0x253896['node']['width'], 0.5);
    _0x253896['node']['addChild'](_0x47ef9a);
    var _0x58d265 = _0x47ef9a['addComponent'](cc['Label']);
    _0x58d265['fontSize'] = 0x1c;
    _0x58d265['lineHeight'] = 0x1d;
    _0x58d265['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x58d265['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x58d265['string'] = _0x253896['data']['appname'];
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'box_tjItem': function box_tjItem(_0x233fed, _0x21cc01, _0x306f5d, _0x5c0119) {
    var _0x593010 = {
      'GdYWo': 'mask',
      'PXxau': 'icon',
      'djRxY': 'text',
      'sGBRK': function sGBRK(_0x1dc064, _0x5e96f5) {
        return _0x1dc064 - _0x5e96f5;
      },
      'upvzB': function upvzB(_0x14312a, _0x3b15a2) {
        return _0x14312a - _0x3b15a2;
      },
      'pBRmd': function pBRmd(_0x35d7d5, _0x157c0a) {
        return _0x35d7d5 * _0x157c0a;
      }
    };
    this['adtype'] = _0x233fed;
    this['tagtype'] = _0x21cc01;
    this['data'] = _0x306f5d;
    this['failCb'] = _0x5c0119;
    var _0x5c64e8 = this;
    _0x5c64e8['node']['width'] = 0x96;
    _0x5c64e8['node']['height'] = 0xc8;
    _0x5c64e8['node']['anchorX'] = 0x0;
    _0x5c64e8['node']['anchorY'] = 0x1;
    var _0x3831a0 = new cc['Node'](_0x593010['GdYWo']);
    _0x3831a0['width'] = 0x96;
    _0x3831a0['height'] = 0x96;
    _0x3831a0['anchorX'] = 0x0;
    _0x3831a0['anchorY'] = 0x1;
    _0x5c64e8['node']['addChild'](_0x3831a0);
    var _0xb8a957 = _0x3831a0['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0xb8a957);
    var _0x49eec8 = new cc['Node'](_0x593010['PXxau']);
    _0x49eec8['setContentSize'](_0x3831a0['width'], _0x3831a0['height']);
    _0x49eec8['anchorX'] = 0x0;
    _0x49eec8['anchorY'] = 0x1;
    _0x3831a0['addChild'](_0x49eec8);
    var _0x2e9b25 = _0x49eec8['addComponent'](cc['Sprite']);
    _0x2e9b25['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x5c64e8['loadImg'](_0x2e9b25);
    var _0x355295 = new cc['Node'](_0x593010['djRxY']);
    _0x355295['color'] = new cc['Color'](0xff, 0xff, 0xff);
    _0x355295['width'] = _0x593010['sGBRK'](_0x5c64e8['node']['width'], 0x5);
    _0x355295['height'] = 0x1a;
    _0x355295['y'] = _0x593010['upvzB'](_0x593010['upvzB'](_0x3831a0['y'], _0x3831a0['height']), 0x14);
    _0x355295['x'] = _0x593010['pBRmd'](_0x5c64e8['node']['width'], 0.5);
    _0x5c64e8['node']['addChild'](_0x355295);
    var _0x32383c = _0x355295['addComponent'](cc['Label']);
    _0x32383c['fontSize'] = 0x18;
    _0x32383c['lineHeight'] = 0x19;
    _0x32383c['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x32383c['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x32383c['string'] = _0x5c64e8['data']['appname'];
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'fullLarge_item': function fullLarge_item(_0xa94194, _0x2fc132, _0x339043, _0x4e59f0) {
    var _0x475e93 = {
      'QCEZP': 'err:',
      'oSsVS': '1|0|3|4|2|5',
      'AQMtf': function AQMtf(_0x425eb5, _0x339dee) {
        return _0x425eb5 - _0x339dee;
      },
      'zXdPr': function zXdPr(_0x1aeb2e, _0x263632) {
        return _0x1aeb2e * _0x263632;
      },
      'EpxDJ': function EpxDJ(_0x6fbdea, _0x2c9822) {
        return _0x6fbdea * _0x2c9822;
      },
      'bORLa': function bORLa(_0xcc76a2, _0x51468f) {
        return _0xcc76a2 + _0x51468f;
      },
      'KKjpf': function KKjpf(_0x5cc795, _0x3e2508) {
        return _0x5cc795 < _0x3e2508;
      },
      'OMDxJ': 'adver/large_itembg_1',
      'sPRrK': 'mask',
      'bKtLS': function bKtLS(_0xc3db19, _0x34fc8b) {
        return _0xc3db19 - _0x34fc8b;
      },
      'igzZr': 'icon',
      'gNWTR': 'labelBg',
      'OFGcL': 'text',
      'iXqDB': function iXqDB(_0x8be3d1, _0x2d4829) {
        return _0x8be3d1 - _0x2d4829;
      },
      'zNLZh': function zNLZh(_0x2f8dae, _0x509a5b) {
        return _0x2f8dae + _0x509a5b;
      },
      'ZCNWd': 'adver/large_box_'
    };
    this['adtype'] = _0xa94194;
    this['tagtype'] = _0x2fc132;
    this['data'] = _0x339043;
    this['failCb'] = _0x4e59f0;
    var _0x5075c4 = this;
    _0x5075c4['node']['width'] = 0x139;
    _0x5075c4['node']['height'] = 0x184;
    _0x5075c4['node']['anchorX'] = 0x0;
    _0x5075c4['node']['anchorY'] = 0x1;
    if (_0x475e93['KKjpf'](cc['winSize']['width'], 0x294)) {
      _0x5075c4['node']['scaleX'] = _0x5075c4['node']['scaleY'] = 0.95;
    }
    var _0x2ccc99 = new cc['Node']('bg');
    var _0x348eac = _0x2ccc99['addComponent'](cc['Sprite']);
    _0x2ccc99['width'] = _0x5075c4['node']['width'];
    _0x2ccc99['height'] = _0x5075c4['node']['height'];
    _0x2ccc99['anchorX'] = 0x0;
    _0x2ccc99['anchorY'] = 0x1;
    _0x5075c4['node']['addChild'](_0x2ccc99);
    cc['loader']['loadRes'](_0x475e93['OMDxJ'], cc['SpriteFrame'], function (_0x27509e, _0x5b57d8) {
      if (_0x27509e) {
        console['log'](_0x475e93['QCEZP'], _0x27509e);
        return;
      }
      if (_0x348eac) _0x348eac['spriteFrame'] = _0x5b57d8;
    });
    var _0x3b68fd = new cc['Node'](_0x475e93['sPRrK']);
    _0x3b68fd['width'] = 0x122;
    _0x3b68fd['height'] = 0x12c;
    _0x3b68fd['anchorX'] = 0x0;
    _0x3b68fd['anchorY'] = 0x1;
    _0x3b68fd['x'] = _0x475e93['EpxDJ'](_0x475e93['bKtLS'](_0x5075c4['node']['width'], _0x3b68fd['width']), 0.5);
    _0x5075c4['node']['addChild'](_0x3b68fd);
    var _0x45c0e6 = _0x3b68fd['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x45c0e6);
    var _0x271094 = new cc['Node'](_0x475e93['igzZr']);
    _0x271094['setContentSize'](_0x3b68fd['width'], _0x3b68fd['height']);
    _0x271094['anchorX'] = 0x0;
    _0x271094['anchorY'] = 0x1;
    _0x3b68fd['addChild'](_0x271094);
    var _0x44151f = _0x271094['addComponent'](cc['Sprite']);
    _0x44151f['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x5075c4['loadImg'](_0x44151f);
    var _0x20bed0 = new cc['Node'](_0x475e93['gNWTR']);
    _0x20bed0['anchorX'] = 0x0;
    _0x20bed0['anchorY'] = 0x1;
    _0x5075c4['node']['addChild'](_0x20bed0);
    var _0x550569 = _0x20bed0['addComponent'](cc['Sprite']);
    var _0x3e131d = new cc['Node'](_0x475e93['OFGcL']);
    _0x3e131d['color'] = new cc['Color'](0xff, 0xff, 0xff);
    _0x3e131d['width'] = _0x475e93['iXqDB'](_0x5075c4['node']['width'], 0x5);
    _0x3e131d['height'] = 0x1e;
    _0x3e131d['x'] = _0x475e93['EpxDJ'](_0x5075c4['node']['width'], 0.5);
    var _0x4beae8 = _0x3e131d['addComponent'](cc['Label']);
    _0x4beae8['fontSize'] = 0x1c;
    _0x4beae8['lineHeight'] = 0x1d;
    _0x4beae8['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x4beae8['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x4beae8['string'] = _0x5075c4['data']['appname'];
    var _0x57c7f0 = Math['floor'](_0x475e93['zNLZh'](_0x475e93['EpxDJ'](Math['random'](), 0x4), 0x1));
    cc['loader']['loadRes'](_0x475e93['zNLZh'](_0x475e93['ZCNWd'], _0x57c7f0), cc['SpriteFrame'], function (_0x13cc48, _0x6e862) {
      var _0x56320c = _0x475e93['oSsVS']['split']('|'),
        _0xfc4c1a = 0x0;
      while (!![]) {
        switch (_0x56320c[_0xfc4c1a++]) {
          case '0':
            if (_0x550569) _0x550569['spriteFrame'] = _0x6e862;
            continue;
          case '1':
            if (_0x13cc48) {
              console['log'](_0x475e93['QCEZP'], _0x13cc48);
              return;
            }
            continue;
          case '2':
            _0x3e131d['y'] = _0x475e93['AQMtf'](_0x475e93['AQMtf'](_0x20bed0['y'], _0x475e93['zXdPr'](_0x475e93['AQMtf'](_0x20bed0['height'], _0x3e131d['height']), 0.5)), _0x475e93['EpxDJ'](_0x3e131d['height'], 0.5));
            continue;
          case '3':
            _0x20bed0['x'] = _0x475e93['EpxDJ'](_0x475e93['AQMtf'](_0x5075c4['node']['width'], _0x20bed0['width']), 0.5);
            continue;
          case '4':
            _0x20bed0['y'] = _0x475e93['AQMtf'](_0x475e93['bORLa'](-_0x5075c4['node']['height'], _0x475e93['EpxDJ'](_0x20bed0['height'], 1.5)), 0x5);
            continue;
          case '5':
            _0x5075c4['node']['addChild'](_0x3e131d);
            continue;
        }
        break;
      }
    });
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'single_icon': function single_icon(_0x4e625, _0x5b56e1, _0x1ba8cc, _0xf862ed, _0x29a673, _0x1fd1b) {
    if (_0x29a673 === void 0) {
      _0x29a673 = null;
    }
    if (_0x1fd1b === void 0) {
      _0x1fd1b = null;
    }
    var _0x109d4f = {
      'YMBPk': function YMBPk(_0x34d9b7, _0x2a2b83) {
        return _0x34d9b7 == _0x2a2b83;
      },
      'hCjds': 'mask',
      'Ravco': function Ravco(_0xe99783, _0x1377bd) {
        return _0xe99783 == _0x1377bd;
      },
      'zCuow': function zCuow(_0x539f1b, _0x2467d8) {
        return _0x539f1b * _0x2467d8;
      },
      'arrCJ': function arrCJ(_0x212ad4, _0x2ddcfd) {
        return _0x212ad4 - _0x2ddcfd;
      },
      'XPtoC': 'icon'
    };
    this['adtype'] = _0x4e625;
    this['tagtype'] = _0x5b56e1;
    this['data'] = _0x1ba8cc;
    this['failCb'] = _0xf862ed;
    var _0x49c75a = this;
    _0x49c75a['node']['width'] = _0x109d4f['YMBPk'](_0x29a673, null) ? 0x78 : _0x29a673;
    _0x49c75a['node']['height'] = _0x109d4f['YMBPk'](_0x1fd1b, null) ? 0x78 : _0x1fd1b;
    _0x49c75a['node']['anchorX'] = 0x0;
    _0x49c75a['node']['anchorY'] = 0x1;
    var _0x4f7e0e = new cc['Node'](_0x109d4f['hCjds']);
    _0x4f7e0e['width'] = _0x4f7e0e['height'] = _0x109d4f['Ravco'](_0x29a673, null) ? 0x6e : _0x29a673;
    _0x4f7e0e['anchorX'] = 0x0;
    _0x4f7e0e['anchorY'] = 0x1;
    _0x4f7e0e['x'] = _0x109d4f['zCuow'](_0x109d4f['arrCJ'](_0x49c75a['node']['width'], _0x4f7e0e['width']), 0.5);
    _0x4f7e0e['y'] = -_0x4f7e0e['x'];
    _0x49c75a['node']['addChild'](_0x4f7e0e);
    var _0x33dbeb = _0x4f7e0e['addComponent'](cc['Mask']);
    this['updateMask'](0.2, _0x33dbeb);
    var _0x2fe770 = new cc['Node'](_0x109d4f['XPtoC']);
    _0x2fe770['setContentSize'](_0x4f7e0e['width'], _0x4f7e0e['height']);
    _0x2fe770['anchorX'] = 0x0;
    _0x2fe770['anchorY'] = 0x1;
    _0x4f7e0e['addChild'](_0x2fe770);
    var _0x1aa11b = _0x2fe770['addComponent'](cc['Sprite']);
    _0x1aa11b['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x49c75a['loadImg'](_0x1aa11b);
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'hotItem': function hotItem(_0xd3b2e, _0xb766e9, _0x26d7f5, _0x46a125) {
    var _0x45d653 = {
      'msQyz': 'err:',
      'kfbYb': function kfbYb(_0x50951a, _0x15f96b) {
        return _0x50951a - _0x15f96b;
      },
      'lzMaG': function lzMaG(_0x151651, _0x495b9d) {
        return _0x151651 * _0x495b9d;
      },
      'uuliX': function uuliX(_0x2a2718, _0x1d117c) {
        return _0x2a2718 * _0x1d117c;
      },
      'nefuD': 'adver/new_bg1',
      'OhOsV': 'mask',
      'yRhYY': 'icon',
      'PEnZE': function PEnZE(_0x28607a, _0x47756c) {
        return _0x28607a + _0x47756c;
      },
      'ojdJg': function ojdJg(_0x14b78d, _0x21fbc4) {
        return _0x14b78d * _0x21fbc4;
      },
      'XVJIQ': 'namebg',
      'ogHoN': function ogHoN(_0x23d326, _0xfa5a16) {
        return _0x23d326 * _0xfa5a16;
      },
      'zMxME': function zMxME(_0x3ab6bb, _0x3581a5) {
        return _0x3ab6bb + _0x3581a5;
      },
      'UCWvU': function UCWvU(_0x3334b7, _0x112fa3) {
        return _0x3334b7 * _0x112fa3;
      },
      'HHtUK': function HHtUK(_0x5a837b, _0x938c35) {
        return _0x5a837b + _0x938c35;
      },
      'PUuSD': 'adver/new_rect_',
      'sdYHC': 'text',
      'NJrpP': function NJrpP(_0x265f16, _0x5eda1f) {
        return _0x265f16 != _0x5eda1f;
      },
      'FSUQx': 'icontag',
      'cnapZ': function cnapZ(_0x4f9cf2, _0x246e48) {
        return _0x4f9cf2 == _0x246e48;
      },
      'cnWlA': 'interB_icon_1',
      'pAsQy': function pAsQy(_0x155698, _0xc70e66) {
        return _0x155698 == _0xc70e66;
      },
      'eRDCK': 'interB_icon_2',
      'FlffX': 'interB_icon_3',
      'dMBnl': 'interB_icon_4',
      'oqtvp': 'adver/'
    };
    this['adtype'] = _0xd3b2e;
    this['tagtype'] = _0xb766e9;
    this['data'] = _0x26d7f5;
    this['failCb'] = _0x46a125;
    var _0x52d53f = this;
    _0x52d53f['node']['width'] = 0xdc;
    _0x52d53f['node']['height'] = 0x10c;
    _0x52d53f['node']['anchorX'] = 0x0;
    _0x52d53f['node']['anchorY'] = 0x1;
    var _0x4fd6a7 = new cc['Node']('bg');
    _0x4fd6a7['width'] = _0x52d53f['node']['width'];
    _0x4fd6a7['height'] = _0x52d53f['node']['height'];
    _0x4fd6a7['anchorX'] = 0x0;
    _0x4fd6a7['anchorY'] = 0x1;
    _0x52d53f['node']['addChild'](_0x4fd6a7);
    var _0x37a267 = _0x4fd6a7['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x45d653['nefuD'], cc['SpriteFrame'], function (_0x199103, _0x2af952) {
      if (_0x199103) {
        console['log'](_0x45d653['msQyz'], _0x199103);
        return;
      }
      if (_0x37a267) _0x37a267['spriteFrame'] = _0x2af952;
    });
    var _0x5b86e9 = new cc['Node'](_0x45d653['OhOsV']);
    _0x5b86e9['width'] = _0x5b86e9['height'] = 0xd0;
    _0x5b86e9['anchorX'] = 0x0;
    _0x5b86e9['anchorY'] = 0x1;
    _0x5b86e9['x'] = _0x45d653['uuliX'](_0x45d653['kfbYb'](_0x52d53f['node']['width'], _0x5b86e9['width']), 0.5);
    _0x5b86e9['y'] = -_0x5b86e9['x'];
    _0x52d53f['node']['addChild'](_0x5b86e9);
    var _0x4186b5 = _0x5b86e9['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x4186b5);
    var _0x1f887a = new cc['Node'](_0x45d653['yRhYY']);
    _0x1f887a['setContentSize'](_0x5b86e9['width'], _0x5b86e9['height']);
    _0x1f887a['anchorX'] = 0x0;
    _0x1f887a['anchorY'] = 0x1;
    _0x5b86e9['addChild'](_0x1f887a);
    var _0x5f4f00 = _0x1f887a['addComponent'](cc['Sprite']);
    _0x5f4f00['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x52d53f['loadImg'](_0x5f4f00);
    var _0x2af765 = Math['floor'](_0x45d653['PEnZE'](_0x45d653['ojdJg'](Math['random'](), 0x6), 0x1));
    var _0xccc8bb = new cc['Node'](_0x45d653['XVJIQ']);
    _0xccc8bb['width'] = 0xd0;
    _0xccc8bb['height'] = 0x31;
    _0xccc8bb['x'] = _0x45d653['PEnZE'](_0x5b86e9['x'], _0x45d653['ogHoN'](_0xccc8bb['width'], 0.5));
    _0xccc8bb['y'] = _0x45d653['PEnZE'](_0x45d653['zMxME'](-_0x52d53f['node']['height'], _0x45d653['UCWvU'](_0xccc8bb['height'], 0.5)), _0x5b86e9['x']);
    _0x52d53f['node']['addChild'](_0xccc8bb);
    var _0x4a17ed = _0xccc8bb['addComponent'](cc['Sprite']);
    cc['loader']['loadRes'](_0x45d653['HHtUK'](_0x45d653['PUuSD'], _0x2af765), cc['SpriteFrame'], function (_0x1e0f03, _0x271c71) {
      if (_0x1e0f03) {
        console['log'](_0x45d653['msQyz'], _0x1e0f03);
        return;
      }
      if (_0x4a17ed) _0x4a17ed['spriteFrame'] = _0x271c71;
    });
    var _0x2bb02c = new cc['Node'](_0x45d653['sdYHC']);
    _0x2bb02c['width'] = _0xccc8bb['width'];
    _0x2bb02c['height'] = _0xccc8bb['height'];
    _0xccc8bb['addChild'](_0x2bb02c);
    var _0x4f8c69 = _0x2bb02c['addComponent'](cc['Label']);
    _0x4f8c69['fontSize'] = 0x18;
    _0x4f8c69['lineHeight'] = 0x19;
    _0x4f8c69['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x4f8c69['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x4f8c69['verticalAlign'] = cc['Label']['VerticalAlign']['CENTER'];
    _0x4f8c69['string'] = _0x52d53f['data']['appname'];
    if (_0x45d653['NJrpP'](_0x52d53f['data']['heat'], '0')) {
      var _0x2e9d4b = new cc['Node'](_0x45d653['FSUQx']);
      _0x2e9d4b['anchorX'] = 0x0;
      _0x2e9d4b['anchorY'] = 0x0;
      _0x2e9d4b['scaleX'] = _0x2e9d4b['scaleY'] = 1.3;
      _0x52d53f['node']['addChild'](_0x2e9d4b);
      var _0x1a2127 = _0x2e9d4b['addComponent'](cc['Sprite']);
      var _0x4caf30;
      if (_0x45d653['cnapZ'](_0x52d53f['data']['heat'], '1')) {
        _0x4caf30 = _0x45d653['cnWlA'];
      } else if (_0x45d653['pAsQy'](_0x52d53f['data']['heat'], '2')) {
        _0x4caf30 = _0x45d653['eRDCK'];
      } else if (_0x45d653['pAsQy'](_0x52d53f['data']['heat'], '3')) {
        _0x4caf30 = _0x45d653['FlffX'];
      } else if (_0x45d653['pAsQy'](_0x52d53f['data']['heat'], '4')) {
        _0x4caf30 = _0x45d653['dMBnl'];
      }
      cc['loader']['loadRes'](_0x45d653['HHtUK'](_0x45d653['oqtvp'], _0x4caf30), cc['SpriteFrame'], function (_0x4e263b, _0x1bd21f) {
        if (_0x4e263b) {
          console['log'](_0x45d653['msQyz'], _0x4e263b);
          return;
        }
        if (_0x1a2127) _0x1a2127['spriteFrame'] = _0x1bd21f;
        _0x2e9d4b['x'] = _0x45d653['kfbYb'](_0x52d53f['node']['width'], _0x45d653['lzMaG'](_0x45d653['lzMaG'](_0x2e9d4b['width'], _0x2e9d4b['scaleX']), 0.5));
        _0x2e9d4b['y'] = _0x45d653['kfbYb'](_0x45d653['uuliX'](_0x45d653['uuliX'](-_0x2e9d4b['height'], _0x2e9d4b['scaleY']), 0.5), 0x6);
      });
    }
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'interFullListItem': function interFullListItem(_0x5b36f6, _0x13c7bc, _0x2c578f, _0x562dbb, _0x2524c1, _0x3b36cd) {
    var _0x1e6388 = {
      'HOEsV': 'err:',
      'olfbv': function olfbv(_0x22b47e, _0x4e2535) {
        return _0x22b47e == _0x4e2535;
      },
      'LfYyQ': 'zzsdkui',
      'RDiou': 'mask',
      'GpZHc': function GpZHc(_0x3dd8ad, _0x230b48) {
        return _0x3dd8ad * _0x230b48;
      },
      'wybjw': function wybjw(_0x140256, _0xbceff5) {
        return _0x140256 - _0xbceff5;
      },
      'yWegH': 'icon',
      'acTEL': 'text',
      'XxyMi': function XxyMi(_0x57eb89, _0xba48aa) {
        return _0x57eb89 + _0xba48aa;
      },
      'biNlA': function biNlA(_0x2734cc, _0x57bd18) {
        return _0x2734cc + _0x57bd18;
      },
      'ljtvX': function ljtvX(_0x5c9dfd, _0x11ddf0) {
        return _0x5c9dfd * _0x11ddf0;
      },
      'ZiSTV': function ZiSTV(_0x2d5ef9, _0x516caf) {
        return _0x2d5ef9 + _0x516caf;
      },
      'LmSwf': function LmSwf(_0x3f4cf1, _0xb833a4) {
        return _0x3f4cf1 + _0xb833a4;
      },
      'ViSVC': 'line',
      'nHpyf': function nHpyf(_0x22b181, _0x3a5ba7) {
        return _0x22b181 + _0x3a5ba7;
      },
      'dRWgt': 'adver/list_line',
      'gkigO': function gkigO(_0x1f0ef1, _0x3db3f9) {
        return _0x1f0ef1 % _0x3db3f9;
      },
      'DodrV': function DodrV(_0x249bb4, _0xfdc4aa) {
        return _0x249bb4 + _0xfdc4aa;
      },
      'NIuOU': 'star',
      'QoVyQ': function QoVyQ(_0x2d471d, _0x2dc4ad) {
        return _0x2d471d * _0x2dc4ad;
      },
      'hWLXN': 'adver/list_star'
    };
    this['adtype'] = _0x5b36f6;
    this['tagtype'] = _0x13c7bc;
    this['data'] = _0x2c578f;
    this['failCb'] = _0x562dbb;
    var _0x3b9d8e = this;
    if (_0x1e6388['olfbv'](window[_0x1e6388['LfYyQ']]['z_sign'], 0x0)) {
      _0x3b9d8e['node']['width'] = cc['winSize']['width'];
      _0x3b9d8e['node']['height'] = 0x96;
    } else {
      _0x3b9d8e['node']['width'] = cc['winSize']['height'];
      _0x3b9d8e['node']['height'] = 0x96;
    }
    _0x3b9d8e['node']['anchorX'] = 0x0;
    _0x3b9d8e['node']['anchorY'] = 0x1;
    var _0x526ec6 = new cc['Node'](_0x1e6388['RDiou']);
    _0x526ec6['width'] = _0x526ec6['height'] = 0x5b;
    _0x526ec6['anchorX'] = 0x0;
    _0x526ec6['anchorY'] = 0x1;
    _0x526ec6['x'] = 0x1e;
    _0x526ec6['y'] = _0x1e6388['GpZHc'](-_0x1e6388['wybjw'](_0x3b9d8e['node']['height'], _0x526ec6['height']), 0.5);
    ;
    _0x3b9d8e['node']['addChild'](_0x526ec6);
    var _0x803a1c = _0x526ec6['addComponent'](cc['Mask']);
    this['updateMask'](0.5, _0x803a1c);
    var _0x136d27 = new cc['Node'](_0x1e6388['yWegH']);
    _0x136d27['setContentSize'](_0x526ec6['width'], _0x526ec6['height']);
    _0x136d27['anchorX'] = 0x0;
    _0x136d27['anchorY'] = 0x1;
    _0x526ec6['addChild'](_0x136d27);
    var _0xe80f2 = _0x136d27['addComponent'](cc['Sprite']);
    _0xe80f2['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x3b9d8e['loadImg'](_0xe80f2);
    var _0x5c43df = new cc['Node'](_0x1e6388['acTEL']);
    _0x5c43df['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x5c43df['width'] = _0x1e6388['wybjw'](_0x3b9d8e['node']['width'], _0x1e6388['XxyMi'](_0x1e6388['biNlA'](_0x526ec6['x'], _0x526ec6['width']), 0x1e));
    _0x5c43df['anchorX'] = 0x0;
    _0x5c43df['anchorY'] = 0x1;
    _0x5c43df['height'] = 0x20;
    _0x5c43df['y'] = _0x1e6388['ljtvX'](-_0x1e6388['wybjw'](_0x3b9d8e['node']['height'], _0x5c43df['height']), 0.5);
    _0x5c43df['x'] = _0x1e6388['ZiSTV'](_0x1e6388['LmSwf'](_0x526ec6['x'], _0x526ec6['width']), 0x1e);
    _0x3b9d8e['node']['addChild'](_0x5c43df);
    var _0x19cc51 = _0x5c43df['addComponent'](cc['Label']);
    _0x19cc51['fontSize'] = 0x1d;
    _0x19cc51['lineHeight'] = 0x1e;
    _0x19cc51['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x19cc51['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
    _0x19cc51['string'] = _0x3b9d8e['data']['appname'];
    var _0x2d6467 = new cc['Node'](_0x1e6388['ViSVC']);
    _0x3b9d8e['node']['addChild'](_0x2d6467);
    _0x2d6467['width'] = _0x3b9d8e['node']['width'];
    _0x2d6467['height'] = 0x2;
    _0x2d6467['anchorY'] = 0x1;
    _0x2d6467['anchorX'] = 0x0;
    _0x2d6467['x'] = _0x1e6388['LmSwf'](_0x1e6388['nHpyf'](_0x526ec6['x'], _0x526ec6['width']), 0x1e);
    _0x2d6467['y'] = _0x1e6388['nHpyf'](-_0x3b9d8e['node']['height'], 0x14);
    var _0x21d581 = _0x2d6467['addComponent'](cc['Sprite']);
    _0x21d581['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x1e6388['dRWgt'], cc['SpriteFrame'], function (_0x35125a, _0x1d85df) {
      if (_0x35125a) {
        console['log'](_0x1e6388['HOEsV'], _0x35125a);
        return;
      }
      if (_0x21d581) _0x21d581['spriteFrame'] = _0x1d85df;
    });
    if (_0x1e6388['olfbv'](_0x1e6388['gkigO'](_0x2524c1, _0x1e6388['DodrV'](_0x3b36cd, 0x1)), 0x0)) {
      var _0x25aec8 = new cc['Node'](_0x1e6388['NIuOU']);
      _0x25aec8['width'] = 0x35;
      _0x25aec8['height'] = 0x32;
      this['node']['addChild'](_0x25aec8);
      _0x25aec8['y'] = _0x1e6388['QoVyQ'](-_0x1e6388['wybjw'](_0x3b9d8e['node']['height'], _0x25aec8['height']), 0.5);
      _0x25aec8['x'] = _0x1e6388['wybjw'](_0x1e6388['wybjw'](_0x3b9d8e['node']['width'], _0x25aec8['width']), 0x50);
      _0x25aec8['anchorX'] = 0x0;
      _0x25aec8['anchorY'] = 0x1;
      var _0x1fd0e8 = _0x25aec8['addComponent'](cc['Sprite']);
      cc['loader']['loadRes'](_0x1e6388['hWLXN'], cc['SpriteFrame'], function (_0x3fde68, _0x10d333) {
        if (_0x3fde68) {
          console['log'](_0x1e6388['HOEsV'], _0x3fde68);
          return;
        }
        if (_0x1fd0e8) _0x1fd0e8['spriteFrame'] = _0x10d333;
      });
    }
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'interFullListItem_ver': function interFullListItem_ver(_0x4fb8e1, _0xcf1e3e, _0x599e22, _0x41b1e8, _0x35fb0d, _0x51b64b) {
    var _0x27bb4b = {
      'cGtMq': 'err:',
      'esfjD': function esfjD(_0x2e90a6, _0x2933be) {
        return _0x2e90a6 * _0x2933be;
      },
      'ZWkDO': 'mask',
      'OzSDz': function OzSDz(_0x45ecff, _0x3bb4c5) {
        return _0x45ecff + _0x3bb4c5;
      },
      'qpLwC': function qpLwC(_0x464ece, _0x23a71c) {
        return _0x464ece * _0x23a71c;
      },
      'llQsD': function llQsD(_0x148867, _0xc3fcef) {
        return _0x148867 - _0xc3fcef;
      },
      'LNVqb': function LNVqb(_0x27b662, _0x3b7562) {
        return _0x27b662 * _0x3b7562;
      },
      'yrhCO': 'icon',
      'CCTqw': 'text',
      'htVMU': function htVMU(_0x4d170a, _0x205c47) {
        return _0x4d170a * _0x205c47;
      },
      'NfEqy': 'line',
      'NbqpO': function NbqpO(_0x39037a, _0x31e1ad) {
        return _0x39037a + _0x31e1ad;
      },
      'vZkcw': 'adver/list_line',
      'FHSvZ': function FHSvZ(_0x894b2b, _0x4101cf) {
        return _0x894b2b == _0x4101cf;
      },
      'HbKOx': function HbKOx(_0x5d50fb, _0x8bb105) {
        return _0x5d50fb % _0x8bb105;
      },
      'meepa': function meepa(_0x4e383e, _0x52d41b) {
        return _0x4e383e + _0x52d41b;
      },
      'OrVaC': 'star',
      'yDsLi': 'adver/list_star'
    };
    this['adtype'] = _0x4fb8e1;
    this['tagtype'] = _0xcf1e3e;
    this['data'] = _0x599e22;
    this['failCb'] = _0x41b1e8;
    var _0x4ef423 = this;
    _0x4ef423['node']['height'] = cc['winSize']['height'];
    _0x4ef423['node']['width'] = 0x96;
    _0x4ef423['node']['anchorX'] = 0x0;
    _0x4ef423['node']['anchorY'] = 0x1;
    var _0x182142 = new cc['Node'](_0x27bb4b['ZWkDO']);
    _0x182142['width'] = _0x182142['height'] = 0x5b;
    _0x182142['rotation'] = -0x5a;
    _0x182142['y'] = _0x27bb4b['OzSDz'](_0x27bb4b['OzSDz'](-_0x4ef423['node']['height'], _0x182142['height']), 0xa);
    _0x182142['x'] = _0x27bb4b['OzSDz'](_0x27bb4b['qpLwC'](_0x27bb4b['llQsD'](_0x4ef423['node']['width'], _0x182142['width']), 0.5), _0x27bb4b['LNVqb'](_0x182142['width'], 0.5));
    _0x4ef423['node']['addChild'](_0x182142);
    var _0xc3e359 = _0x182142['addComponent'](cc['Mask']);
    this['updateMask'](0.5, _0xc3e359);
    var _0x25b11b = new cc['Node'](_0x27bb4b['yrhCO']);
    _0x25b11b['setContentSize'](_0x182142['width'], _0x182142['height']);
    _0x182142['addChild'](_0x25b11b);
    var _0x43307d = _0x25b11b['addComponent'](cc['Sprite']);
    _0x43307d['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x4ef423['loadImg'](_0x43307d);
    var _0x40bf1e = new cc['Node'](_0x27bb4b['CCTqw']);
    _0x40bf1e['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x40bf1e['rotation'] = -0x5a;
    _0x40bf1e['width'] = 0x190;
    _0x40bf1e['x'] = _0x27bb4b['htVMU'](_0x4ef423['node']['width'], 0.5);
    _0x40bf1e['y'] = _0x27bb4b['OzSDz'](_0x182142['y'], 0x96);
    _0x4ef423['node']['addChild'](_0x40bf1e);
    var _0x20d136 = _0x40bf1e['addComponent'](cc['Label']);
    _0x20d136['fontSize'] = 0x1d;
    _0x20d136['lineHeight'] = 0x1e;
    _0x20d136['horizontalAlign'] = cc['Label']['HorizontalAlign']['LEFT'];
    _0x20d136['string'] = _0x4ef423['data']['appname'];
    var _0x2b7aa3 = new cc['Node'](_0x27bb4b['NfEqy']);
    _0x4ef423['node']['addChild'](_0x2b7aa3);
    _0x2b7aa3['height'] = cc['winSize']['width'];
    _0x2b7aa3['width'] = 0x2;
    _0x2b7aa3['anchorY'] = 0x1;
    _0x2b7aa3['anchorX'] = 0x0;
    _0x2b7aa3['y'] = _0x27bb4b['NbqpO'](_0x182142['height'], 0x1e);
    _0x2b7aa3['x'] = _0x4ef423['node']['width'];
    var _0x104174 = _0x2b7aa3['addComponent'](cc['Sprite']);
    _0x104174['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x27bb4b['vZkcw'], cc['SpriteFrame'], function (_0xb9a32d, _0x54118a) {
      if (_0xb9a32d) {
        console['log'](_0x27bb4b['cGtMq'], _0xb9a32d);
        return;
      }
      if (_0x104174) _0x104174['spriteFrame'] = _0x54118a;
    });
    if (_0x27bb4b['FHSvZ'](_0x27bb4b['HbKOx'](_0x35fb0d, _0x27bb4b['meepa'](_0x51b64b, 0x1)), 0x0)) {
      var _0x343499 = new cc['Node'](_0x27bb4b['OrVaC']);
      _0x343499['width'] = 0x35;
      _0x343499['height'] = 0x32;
      this['node']['addChild'](_0x343499);
      _0x343499['rotation'] = -0x5a;
      _0x343499['x'] = _0x27bb4b['htVMU'](_0x27bb4b['llQsD'](_0x4ef423['node']['width'], _0x343499['width']), 0.5);
      _0x343499['y'] = _0x27bb4b['llQsD'](-_0x343499['width'], 0x50);
      _0x343499['anchorX'] = 0x0;
      _0x343499['anchorY'] = 0x1;
      var _0x35b657 = _0x343499['addComponent'](cc['Sprite']);
      cc['loader']['loadRes'](_0x27bb4b['yDsLi'], cc['SpriteFrame'], function (_0x406919, _0x50dc97) {
        if (_0x406919) {
          console['log'](_0x27bb4b['cGtMq'], _0x406919);
          return;
        }
        if (_0x35b657) _0x35b657['spriteFrame'] = _0x50dc97;
        _0x343499['y'] -= _0x27bb4b['esfjD'](_0x343499['height'], 0.5);
      });
    }
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'friPlayItem': function friPlayItem(_0x33d56e, _0x42e140, _0x4f6e66, _0x4a1568, _0xf2a79c) {
    var _0xfdbdd1 = {
      'xHTEW': function xHTEW(_0x1ac791, _0x290118) {
        return _0x1ac791 < _0x290118;
      },
      'YVFYt': 'mask',
      'jMpgU': 'icon',
      'fjxaF': 'text',
      'nLXPr': function nLXPr(_0x48b307, _0x564929) {
        return _0x48b307 != _0x564929;
      },
      'ZuNET': function ZuNET(_0x2627e9, _0x6b8d44) {
        return _0x2627e9(_0x6b8d44);
      },
      'uvIKh': function uvIKh(_0x380375, _0x31505f) {
        return _0x380375(_0x31505f);
      },
      'pwqPO': function pwqPO(_0x23ed25, _0x16781f) {
        return _0x23ed25(_0x16781f);
      },
      'XIkLL': function XIkLL(_0x5a00cc, _0x5978e8) {
        return _0x5a00cc - _0x5978e8;
      },
      'gDlfw': function gDlfw(_0x2f3929, _0x30af55) {
        return _0x2f3929 * _0x30af55;
      },
      'wVvkX': function wVvkX(_0x53ae08, _0x5e2c65) {
        return _0x53ae08 - _0x5e2c65;
      },
      'JfTzM': function JfTzM(_0x5efe64, _0x15baac) {
        return _0x5efe64 - _0x15baac;
      }
    };
    this['adtype'] = _0x33d56e;
    this['tagtype'] = _0x42e140;
    this['data'] = _0x4f6e66;
    this['failCb'] = _0x4a1568;
    var _0x254a5d = this;
    _0x254a5d['node']['width'] = 0x6e;
    _0x254a5d['node']['height'] = 0x96;
    _0x254a5d['node']['anchorX'] = 0x0;
    _0x254a5d['node']['anchorY'] = 0x1;
    if (_0xfdbdd1['xHTEW'](cc['winSize']['width'], 0x294)) {
      _0x254a5d['node']['scaleX'] = _0x254a5d['node']['scaleY'] = 0.88;
    }
    var _0x580a57 = new cc['Node'](_0xfdbdd1['YVFYt']);
    _0x580a57['width'] = _0x580a57['height'] = 0x6e;
    _0x580a57['anchorX'] = 0x0;
    _0x580a57['anchorY'] = 0x1;
    _0x254a5d['node']['addChild'](_0x580a57);
    var _0x47e310 = _0x580a57['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x47e310);
    var _0x32fb88 = new cc['Node'](_0xfdbdd1['jMpgU']);
    _0x32fb88['setContentSize'](_0x580a57['width'], _0x580a57['height']);
    _0x32fb88['anchorX'] = 0x0;
    _0x32fb88['anchorY'] = 0x1;
    _0x580a57['addChild'](_0x32fb88);
    var _0x2b75b6 = _0x32fb88['addComponent'](cc['Sprite']);
    _0x2b75b6['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x254a5d['loadImg'](_0x2b75b6);
    var _0x278c2c = new cc['Node'](_0xfdbdd1['fjxaF']);
    var _0x256559;
    if (_0xfdbdd1['nLXPr'](_0xf2a79c, null)) {
      _0x256559 = _0xf2a79c['split'](',');
    } else {
      _0x256559 = [0x0, 0x0, 0x0];
    }
    _0x278c2c['color'] = new cc['Color'](_0xfdbdd1['ZuNET'](Number, _0x256559[0x0]), _0xfdbdd1['uvIKh'](Number, _0x256559[0x1]), _0xfdbdd1['pwqPO'](Number, _0x256559[0x2]));
    _0x278c2c['width'] = _0xfdbdd1['XIkLL'](_0x254a5d['node']['width'], 0x5);
    _0x278c2c['height'] = 0x16;
    _0x278c2c['x'] = _0xfdbdd1['gDlfw'](_0x254a5d['node']['width'], 0.5);
    _0x278c2c['y'] = _0xfdbdd1['wVvkX'](_0xfdbdd1['JfTzM'](_0x580a57['y'], _0x580a57['height']), 0x12);
    _0x254a5d['node']['addChild'](_0x278c2c);
    var _0x115e37 = _0x278c2c['addComponent'](cc['Label']);
    _0x115e37['fontSize'] = 0x14;
    _0x115e37['lineHeight'] = 0x15;
    _0x115e37['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x115e37['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x115e37['string'] = _0x254a5d['data']['appname'];
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'singleItem': function singleItem(_0x5362fd, _0x46bb47, _0x1a54e0, _0x138993) {
    var _0x3505af = {
      'ZZLFT': 'err:',
      'arTad': 'adver/youlike_item_bg2',
      'sxTMH': 'mask',
      'EIvth': function EIvth(_0x5d8775, _0x52d677) {
        return _0x5d8775 * _0x52d677;
      },
      'ZfHHz': function ZfHHz(_0x459af8, _0x4ea718) {
        return _0x459af8 - _0x4ea718;
      },
      'YnxVy': 'icon',
      'woito': 'text',
      'MFZVu': function MFZVu(_0x4d393b, _0x3fae30) {
        return _0x4d393b * _0x3fae30;
      }
    };
    this['adtype'] = _0x5362fd;
    this['tagtype'] = _0x46bb47;
    this['data'] = _0x1a54e0;
    this['failCb'] = _0x138993;
    var _0x57e0d1 = this;
    _0x57e0d1['node']['width'] = 0x96;
    _0x57e0d1['node']['height'] = 0xaf;
    _0x57e0d1['node']['anchorX'] = 0x0;
    _0x57e0d1['node']['anchorY'] = 0x1;
    var _0x26d734 = new cc['Node']('bg');
    var _0x5d2654 = _0x26d734['addComponent'](cc['Sprite']);
    _0x26d734['width'] = _0x57e0d1['node']['width'];
    _0x26d734['height'] = _0x57e0d1['node']['height'];
    _0x26d734['anchorX'] = 0x0;
    _0x26d734['anchorY'] = 0x1;
    _0x57e0d1['node']['addChild'](_0x26d734);
    _0x5d2654['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    cc['loader']['loadRes'](_0x3505af['arTad'], cc['SpriteFrame'], function (_0x7b3162, _0x139454) {
      if (_0x7b3162) {
        console['log'](_0x3505af['ZZLFT'], _0x7b3162);
        return;
      }
      if (_0x5d2654) _0x5d2654['spriteFrame'] = _0x139454;
    });
    var _0x42051c = new cc['Node'](_0x3505af['sxTMH']);
    _0x42051c['width'] = _0x42051c['height'] = 0x8c;
    _0x42051c['anchorX'] = 0x0;
    _0x42051c['anchorY'] = 0x1;
    _0x42051c['x'] = _0x3505af['EIvth'](_0x3505af['ZfHHz'](_0x57e0d1['node']['width'], _0x42051c['width']), 0.5);
    _0x42051c['y'] = -_0x42051c['x'];
    _0x57e0d1['node']['addChild'](_0x42051c);
    var _0x170044 = _0x42051c['addComponent'](cc['Mask']);
    this['updateMask'](0.05, _0x170044);
    var _0x156ec6 = new cc['Node'](_0x3505af['YnxVy']);
    _0x156ec6['setContentSize'](_0x42051c['width'], _0x42051c['height']);
    _0x156ec6['anchorX'] = 0x0;
    _0x156ec6['anchorY'] = 0x1;
    _0x42051c['addChild'](_0x156ec6);
    var _0x86673f = _0x156ec6['addComponent'](cc['Sprite']);
    _0x86673f['sizeMode'] = cc['Sprite']['SizeMode']['CUSTOM'];
    _0x57e0d1['loadImg'](_0x86673f);
    var _0x38f82a = new cc['Node'](_0x3505af['woito']);
    _0x38f82a['color'] = new cc['Color'](0x0, 0x0, 0x0);
    _0x38f82a['width'] = _0x57e0d1['node']['width'];
    _0x38f82a['height'] = 0x16;
    _0x38f82a['y'] = _0x3505af['ZfHHz'](_0x3505af['ZfHHz'](_0x42051c['y'], _0x42051c['height']), 0xf);
    _0x38f82a['x'] = _0x3505af['MFZVu'](_0x57e0d1['node']['width'], 0.5);
    _0x57e0d1['node']['addChild'](_0x38f82a);
    var _0x3a8175 = _0x38f82a['addComponent'](cc['Label']);
    _0x3a8175['fontSize'] = 0x14;
    _0x3a8175['lineHeight'] = 0x15;
    _0x3a8175['overflow'] = cc['Label']['Overflow']['SHRINK'];
    _0x3a8175['horizontalAlign'] = cc['Label']['HorizontalAlign']['CENTER'];
    _0x3a8175['string'] = _0x57e0d1['data']['appname'];
    this['schedule'](this['updateImg'], 0.008);
    this['node']['on'](cc['Node']['EventType']['TOUCH_END'], this['ontap'], this);
  },
  'updateMask': function updateMask(_0x7c68a8, _0x1b003e) {
    var _0x55c4fe = {
      'SgCqY': function SgCqY(_0xc0222, _0x3f40b3) {
        return _0xc0222 >= _0x3f40b3;
      },
      'BkYqP': function BkYqP(_0x45ad72, _0x5b0cef) {
        return _0x45ad72 < _0x5b0cef;
      },
      'dUHqC': function dUHqC(_0x27a947, _0x429986) {
        return _0x27a947 * _0x429986;
      },
      'llgTu': 'radius',
      'rliaZ': 'onDraw',
      'uvXNp': '_updateGraphics'
    };
    var _0x1c2d5d = _0x55c4fe['SgCqY'](_0x7c68a8, 0x0) ? _0x7c68a8 : 0x0;
    if (_0x55c4fe['BkYqP'](_0x1c2d5d, 0x1)) {
      _0x1c2d5d = _0x55c4fe['dUHqC'](Math['min'](this['node']['width'], this['node']['height']), _0x1c2d5d);
    }
    this['radius'] = _0x1c2d5d;
    _0x1b003e[_0x55c4fe['llgTu']] = _0x1c2d5d;
    _0x1b003e[_0x55c4fe['rliaZ']] = this['onDraw']['bind'](_0x1b003e);
    _0x1b003e[_0x55c4fe['uvXNp']] = this['_updateGraphics']['bind'](_0x1b003e);
    _0x1b003e['type'] = cc['Mask']['Type']['RECT'];
  },
  'onDraw': function onDraw(_0x2b1e6e) {
    var _0x31d760 = {
      'xOyrP': function xOyrP(_0x4c1848, _0x57e88b) {
        return _0x4c1848 * _0x57e88b;
      },
      'mFlBV': function mFlBV(_0x4750f1, _0x372588) {
        return _0x4750f1 * _0x372588;
      },
      'xEiir': function xEiir(_0x23921d, _0x2f3a38) {
        return _0x23921d === _0x2f3a38;
      }
    };
    _0x2b1e6e['clear'](![]);
    var _0x527407 = this['node'];
    var _0x32d980 = _0x527407['width'];
    var _0x28b193 = _0x527407['height'];
    var _0x5d52e3 = _0x31d760['xOyrP'](-_0x32d980, _0x527407['anchorX']);
    var _0x321b9b = _0x31d760['mFlBV'](-_0x28b193, _0x527407['anchorY']);
    _0x2b1e6e['roundRect'](_0x5d52e3, _0x321b9b, _0x32d980, _0x28b193, this['radius'] || 0x0);
    if (_0x31d760['xEiir'](cc['game']['renderType'], cc['game']['RENDER_TYPE_CANVAS'])) {
      _0x2b1e6e['stroke']();
    } else {
      _0x2b1e6e['fill']();
    }
  },
  '_updateGraphics': function _updateGraphics() {
    var _0x380e8e = this['_graphics'];
    if (!_0x380e8e) {
      return;
    }
    this['onDraw'](_0x380e8e);
  },
  'ontap': function ontap(_0x5ad63d) {
    var _0x402356 = {
      'XyvAG': 'zzsdkui'
    };
    if (window[_0x402356['XyvAG']]['game_open_tip']) return;
    window[_0x402356['XyvAG']]['game_open_tip'] = !![];
    _0x5ad63d['stopPropagation']();
    window[_0x402356['XyvAG']]['openGame'](this['data'], this['adtype'], this['tagtype'], this['failCb']);
  },
  'loadImg': function loadImg(_0xa770d4) {
    var _0xf76d1d = {
      'ISITl': function ISITl(_0x165512, _0x3df777) {
        return _0x165512 < _0x3df777;
      },
      'PdqZI': function PdqZI(_0x20cb7c, _0x266635) {
        return _0x20cb7c < _0x266635;
      },
      'zEwDB': function zEwDB(_0x1fb40a, _0xbd3833) {
        return _0x1fb40a * _0xbd3833;
      },
      'SCthL': function SCthL(_0x35e479, _0x1de115) {
        return _0x35e479 * _0x1de115;
      }
    };
    var _0x1647d6 = this;
    cc['loader']['load'](_0x1647d6['data']['image'], function (_0x164968, _0x3724fb) {
      var _0x2fa1bb = [];
      for (var _0x38de16 = 0x0; _0xf76d1d['ISITl'](_0x38de16, 0x3); _0x38de16++) {
        for (var _0x223f15 = 0x0; _0xf76d1d['PdqZI'](_0x223f15, 0x3); _0x223f15++) {
          if (!_0x1647d6['data']) break;
          if (_0xf76d1d['PdqZI'](_0x2fa1bb['length'], _0x1647d6['data']['frame'])) {
            _0x2fa1bb['push']([_0xf76d1d['zEwDB'](0xa0, _0x223f15), _0xf76d1d['SCthL'](0xa0, _0x38de16)]);
          }
        }
      }
      for (var _0x38de16 = 0x0; _0xf76d1d['PdqZI'](_0x38de16, _0x2fa1bb['length']); _0x38de16++) {
        var _0x489746 = new cc['SpriteFrame'](_0x3724fb, new cc['Rect'](_0x2fa1bb[_0x38de16][0x0], _0x2fa1bb[_0x38de16][0x1], 0xa0, 0xa0), ![], cc['Vec2']['ZERO'], new cc['Size'](0x438, 0x3e8));
        _0x1647d6['_frames']['push'](_0x489746);
      }
      if (_0xa770d4 && _0x1647d6['_frames']) _0xa770d4['spriteFrame'] = _0x1647d6['_frames'][0x0];
    });
  },
  'updateImg': function updateImg() {
    var _0x33ab18 = {
      'SNcBp': function SNcBp(_0x9e8d7, _0x19104b) {
        return _0x9e8d7 == _0x19104b;
      },
      'fHZrp': function fHZrp(_0x5c54d9, _0x13ad66) {
        return _0x5c54d9 > _0x13ad66;
      },
      'FUjHT': function FUjHT(_0x32622d, _0x2d6afb) {
        return _0x32622d >= _0x2d6afb;
      },
      'pKVaA': 'mask',
      'GrHcM': 'icon'
    };
    if (_0x33ab18['SNcBp'](this['_frames']['length'], 0x0)) return;
    this['_framestime']++;
    if (_0x33ab18['fHZrp'](this['_framestime'], 0x8)) {
      this['_framestime'] = 0x0;
      this['_framesindex']++;
      if (_0x33ab18['FUjHT'](this['_framesindex'], this['_frames']['length'])) {
        this['_framesindex'] = 0x0;
      }
      if (this['node']['getChildByName'](_0x33ab18['pKVaA'])['getChildByName'](_0x33ab18['GrHcM'])['getComponent'](cc['Sprite'])) this['node']['getChildByName'](_0x33ab18['pKVaA'])['getChildByName'](_0x33ab18['GrHcM'])['getComponent'](cc['Sprite'])['spriteFrame'] = this['_frames'][this['_framesindex']];
    }
  },
  'update': function update(_0x4bfc33) {}
});
module['exports'] = zzsdkui_item;
window['zzsdk_item'] = zzsdkui_item;

cc._RF.pop();