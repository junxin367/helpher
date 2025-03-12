
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/core/easing.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb37cTMzy1FE7s38uP5RmKL', 'easing');
// framework/core/easing.js

"use strict";

var easing = {
  constant: function constant() {
    return 0;
  },
  linear: function linear(k) {
    return k;
  },
  // quad
  //  easing equation function for a quadratic (t^2)
  //  @param t: Current time (in frames or seconds).
  //  @return: The correct value.

  /**
   * !#en Easing in with quadratic formula. From slow to fast.
   * !#zh 平方曲线缓入函数。运动由慢到快。
   * @method quadIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value
   */
  quadIn: function quadIn(k) {
    return k * k;
  },
  /**
   * !#en Easing out with quadratic formula. From fast to slow.
   * !#zh 平方曲线缓出函数。运动由快到慢。
   * @method quadOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value
   */
  quadOut: function quadOut(k) {
    return k * (2 - k);
  },
  /**
   * !#en Easing in and out with quadratic formula. From slow to fast, then back to slow.
   * !#zh 平方曲线缓入缓出函数。运动由慢到快再到慢。
   * @method quadInOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value
   */
  quadInOut: function quadInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k;
    }
    return -0.5 * (--k * (k - 2) - 1);
  },
  // cubic
  //  easing equation function for a cubic (t^3)
  //  @param t: Current time (in frames or seconds).
  //  @return: The correct value.

  /**
   * !#en Easing in with cubic formula. From slow to fast.
   * !#zh 立方曲线缓入函数。运动由慢到快。
   * @method cubicIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  cubicIn: function cubicIn(k) {
    return k * k * k;
  },
  /**
   * !#en Easing out with cubic formula. From slow to fast.
   * !#zh 立方曲线缓出函数。运动由快到慢。
   * @method cubicOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  cubicOut: function cubicOut(k) {
    return --k * k * k + 1;
  },
  /**
   * !#en Easing in and out with cubic formula. From slow to fast, then back to slow.
   * !#zh 立方曲线缓入缓出函数。运动由慢到快再到慢。
   * @method cubicInOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  cubicInOut: function cubicInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k;
    }
    return 0.5 * ((k -= 2) * k * k + 2);
  },
  // quart
  //  easing equation function for a quartic (t^4)
  //  @param t: Current time (in frames or seconds).
  //  @return: The correct value.

  /**
   * !#en Easing in with quartic formula. From slow to fast.
   * !#zh 四次方曲线缓入函数。运动由慢到快。
   * @method quartIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  quartIn: function quartIn(k) {
    return k * k * k * k;
  },
  /**
   * !#en Easing out with quartic formula. From fast to slow.
   * !#zh 四次方曲线缓出函数。运动由快到慢。
   * @method quartOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  quartOut: function quartOut(k) {
    return 1 - --k * k * k * k;
  },
  /**
   * !#en Easing in and out with quartic formula. From slow to fast, then back to slow.
   * !#zh 四次方曲线缓入缓出函数。运动由慢到快再到慢。
   * @method quartInOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  quartInOut: function quartInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k;
    }
    return -0.5 * ((k -= 2) * k * k * k - 2);
  },
  // quint
  //  easing equation function for a quintic (t^5)
  //  @param t: Current time (in frames or seconds).
  //  @return: The correct value.

  /**
   * !#en Easing in with quintic formula. From slow to fast.
   * !#zh 五次方曲线缓入函数。运动由慢到快。
   * @method quintIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  quintIn: function quintIn(k) {
    return k * k * k * k * k;
  },
  /**
   * !#en Easing out with quintic formula. From fast to slow.
   * !#zh 五次方曲线缓出函数。运动由快到慢。
   * @method quintOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  quintOut: function quintOut(k) {
    return --k * k * k * k * k + 1;
  },
  /**
   * !#en Easing in and out with quintic formula. From slow to fast, then back to slow.
   * !#zh 五次方曲线缓入缓出函数。运动由慢到快再到慢。
   * @method quintInOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  quintInOut: function quintInOut(k) {
    if ((k *= 2) < 1) {
      return 0.5 * k * k * k * k * k;
    }
    return 0.5 * ((k -= 2) * k * k * k * k + 2);
  },
  // sine
  //  easing equation function for a sinusoidal (sin(t))
  //  @param t: Current time (in frames or seconds).
  //  @return: The correct value.

  /**
   * !#en Easing in and out with sine formula. From slow to fast.
   * !#zh 正弦曲线缓入函数。运动由慢到快。
   * @method sineIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  sineIn: function sineIn(k) {
    return 1 - Math.cos(k * Math.PI / 2);
  },
  /**
   * !#en Easing in and out with sine formula. From fast to slow.
   * !#zh 正弦曲线缓出函数。运动由快到慢。
   * @method sineOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  sineOut: function sineOut(k) {
    return Math.sin(k * Math.PI / 2);
  },
  /**
   * !#en Easing in and out with sine formula. From slow to fast, then back to slow.
   * !#zh 正弦曲线缓入缓出函数。运动由慢到快再到慢。
   * @method sineInOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  sineInOut: function sineInOut(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  },
  // expo
  //  easing equation function for an exponential (2^t)
  //  param t: Current time (in frames or seconds).
  //  return: The correct value.

  /**
   * !#en Easing in and out with exponential formula. From slow to fast.
   * !#zh 指数曲线缓入函数。运动由慢到快。
   * @method expoIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  expoIn: function expoIn(k) {
    return k === 0 ? 0 : Math.pow(1024, k - 1);
  },
  /**
   * !#en Easing in and out with exponential formula. From fast to slow.
   * !#zh 指数曲线缓出函数。运动由快到慢。
   * @method expoOu
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  expoOut: function expoOut(k) {
    return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
  },
  /**
   * !#en Easing in and out with exponential formula. From slow to fast.
   * !#zh 指数曲线缓入和缓出函数。运动由慢到很快再到慢。
   * @method expoInOut
   * @param {Number} t The current time as a percentage of the total time, then back to slow.
   * @return The correct value.
   */
  expoInOut: function expoInOut(k) {
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if ((k *= 2) < 1) {
      return 0.5 * Math.pow(1024, k - 1);
    }
    return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
  },
  // circ
  //  easing equation function for a circular (sqrt(1-t^2))
  //  @param t: Current time (in frames or seconds).
  //  @return:	The correct value.

  /**
   * !#en Easing in and out with circular formula. From slow to fast.
   * !#zh 循环公式缓入函数。运动由慢到快。
   * @method circIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  circIn: function circIn(k) {
    return 1 - Math.sqrt(1 - k * k);
  },
  /**
   * !#en Easing in and out with circular formula. From fast to slow.
   * !#zh 循环公式缓出函数。运动由快到慢。
   * @method circOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  circOut: function circOut(k) {
    return Math.sqrt(1 - --k * k);
  },
  /**
   * !#en Easing in and out with circular formula. From slow to fast.
   * !#zh 指数曲线缓入缓出函数。运动由慢到很快再到慢。
   * @method circInOut
   * @param {Number} t The current time as a percentage of the total time, then back to slow.
   * @return The correct value.
   */
  circInOut: function circInOut(k) {
    if ((k *= 2) < 1) {
      return -0.5 * (Math.sqrt(1 - k * k) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
  },
  // elastic
  //  easing equation function for an elastic (exponentially decaying sine wave)
  //  @param t: Current time (in frames or seconds).
  //  @return: The correct value.
  //  recommand value: elastic (t)

  /**
   * !#en Easing in action with a spring oscillating effect.
   * !#zh 弹簧回震效果的缓入函数。
   * @method elasticIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  elasticIn: function elasticIn(k) {
    var s,
      a = 0.1,
      p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI);
    }
    return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
  },
  /**
   * !#en Easing out action with a spring oscillating effect.
   * !#zh 弹簧回震效果的缓出函数。
   * @method elasticOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  elasticOut: function elasticOut(k) {
    var s,
      a = 0.1,
      p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI);
    }
    return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
  },
  /**
   * !#en Easing in and out action with a spring oscillating effect.
   * !#zh 弹簧回震效果的缓入缓出函数。
   * @method elasticInOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  elasticInOut: function elasticInOut(k) {
    var s,
      a = 0.1,
      p = 0.4;
    if (k === 0) {
      return 0;
    }
    if (k === 1) {
      return 1;
    }
    if (!a || a < 1) {
      a = 1;
      s = p / 4;
    } else {
      s = p * Math.asin(1 / a) / (2 * Math.PI);
    }
    if ((k *= 2) < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    }
    return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
  },
  // back
  //  easing equation function for a back (overshooting cubic easing: (s+1)*t^3 - s*t^2)
  //  @param t: Current time (in frames or seconds).
  //  @return: The correct value.

  /**
   * !#en Easing in action with "back up" behavior.
   * !#zh 回退效果的缓入函数。
   * @method backIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  backIn: function backIn(k) {
    var s = 1.70158;
    return k * k * ((s + 1) * k - s);
  },
  /**
   * !#en Easing out action with "back up" behavior.
   * !#zh 回退效果的缓出函数。
   * @method backOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  backOut: function backOut(k) {
    var s = 1.70158;
    return --k * k * ((s + 1) * k + s) + 1;
  },
  /**
   * !#en Easing in and out action with "back up" behavior.
   * !#zh 回退效果的缓入缓出函数。
   * @method backInOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  backInOut: function backInOut(k) {
    var s = 1.70158 * 1.525;
    if ((k *= 2) < 1) {
      return 0.5 * (k * k * ((s + 1) * k - s));
    }
    return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
  },
  // bounce
  //  easing equation function for a bounce (exponentially decaying parabolic bounce)
  //  @param t: Current time (in frames or seconds).
  //  @return: The correct value.

  /**
   * !#en Easing in action with bouncing effect.
   * !#zh 弹跳效果的缓入函数。
   * @method bounceIn
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  bounceIn: function bounceIn(k) {
    return 1 - easing.bounceOut(1 - k);
  },
  /**
   * !#en Easing out action with bouncing effect.
   * !#zh 弹跳效果的缓出函数。
   * @method bounceOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  bounceOut: function bounceOut(k) {
    if (k < 1 / 2.75) {
      return 7.5625 * k * k;
    } else if (k < 2 / 2.75) {
      return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
    } else if (k < 2.5 / 2.75) {
      return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
    } else {
      return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
    }
  },
  /**
   * !#en Easing in and out action with bouncing effect.
   * !#zh 弹跳效果的缓入缓出函数。
   * @method bounceInOut
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  bounceInOut: function bounceInOut(k) {
    if (k < 0.5) {
      return easing.bounceIn(k * 2) * 0.5;
    }
    return easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
  },
  /**
   * !#en Target will run action with smooth effect.
   * !#zh 平滑效果函数。
   * @method smooth
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  // t<=0: 0 | 0<t<1: 3*t^2 - 2*t^3 | t>=1: 1
  smooth: function smooth(t) {
    if (t <= 0) {
      return 0;
    }
    if (t >= 1) {
      return 1;
    }
    return t * t * (3 - 2 * t);
  },
  /**
   * !#en Target will run action with fade effect.
   * !#zh 渐褪效果函数。
   * @method fade
   * @param {Number} t The current time as a percentage of the total time.
   * @return The correct value.
   */
  // t<=0: 0 | 0<t<1: 6*t^5 - 15*t^4 + 10*t^3 | t>=1: 1
  fade: function fade(t) {
    if (t <= 0) {
      return 0;
    }
    if (t >= 1) {
      return 1;
    }
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
};
function _makeOutIn(fnIn, fnOut) {
  return function (k) {
    if (k < 0.5) {
      return fnOut(k * 2) / 2;
    }
    return fnIn(2 * k - 1) / 2 + 0.5;
  };
}
easing.quadOutIn = _makeOutIn(easing.quadIn, easing.quadOut);
easing.cubicOutIn = _makeOutIn(easing.cubicIn, easing.cubicOut);
easing.quartOutIn = _makeOutIn(easing.quartIn, easing.quartOut);
easing.quintOutIn = _makeOutIn(easing.quintIn, easing.quintOut);
easing.sineOutIn = _makeOutIn(easing.sineIn, easing.sineOut);
easing.expoOutIn = _makeOutIn(easing.expoIn, easing.expoOut);
easing.circOutIn = _makeOutIn(easing.circIn, easing.circOut);
easing.backOutIn = _makeOutIn(easing.backIn, easing.backOut);
easing.bounceIn = function (k) {
  return 1 - easing.bounceOut(1 - k);
};
easing.bounceInOut = function (k) {
  if (k < 0.5) {
    return easing.bounceIn(k * 2) * 0.5;
  }
  return easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
};
easing.bounceOutIn = _makeOutIn(easing.bounceIn, easing.bounceOut);

/**
 * @module cc
 */

/**
 * !#en This is a Easing instance.
 * !#zh 这是一个 Easing 类实例。
 * @property easing
 * @type Easing
 */

cc.easing = easing;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFxjb3JlXFxlYXNpbmcuanMiXSwibmFtZXMiOlsiZWFzaW5nIiwiY29uc3RhbnQiLCJsaW5lYXIiLCJrIiwicXVhZEluIiwicXVhZE91dCIsInF1YWRJbk91dCIsImN1YmljSW4iLCJjdWJpY091dCIsImN1YmljSW5PdXQiLCJxdWFydEluIiwicXVhcnRPdXQiLCJxdWFydEluT3V0IiwicXVpbnRJbiIsInF1aW50T3V0IiwicXVpbnRJbk91dCIsInNpbmVJbiIsIk1hdGgiLCJjb3MiLCJQSSIsInNpbmVPdXQiLCJzaW4iLCJzaW5lSW5PdXQiLCJleHBvSW4iLCJwb3ciLCJleHBvT3V0IiwiZXhwb0luT3V0IiwiY2lyY0luIiwic3FydCIsImNpcmNPdXQiLCJjaXJjSW5PdXQiLCJlbGFzdGljSW4iLCJzIiwiYSIsInAiLCJhc2luIiwiZWxhc3RpY091dCIsImVsYXN0aWNJbk91dCIsImJhY2tJbiIsImJhY2tPdXQiLCJiYWNrSW5PdXQiLCJib3VuY2VJbiIsImJvdW5jZU91dCIsImJvdW5jZUluT3V0Iiwic21vb3RoIiwidCIsImZhZGUiLCJfbWFrZU91dEluIiwiZm5JbiIsImZuT3V0IiwicXVhZE91dEluIiwiY3ViaWNPdXRJbiIsInF1YXJ0T3V0SW4iLCJxdWludE91dEluIiwic2luZU91dEluIiwiZXhwb091dEluIiwiY2lyY091dEluIiwiYmFja091dEluIiwiYm91bmNlT3V0SW4iLCJjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUc7RUFDVEMsUUFBUSxFQUFFLFNBQUFBLFNBQUEsRUFBWTtJQUFFLE9BQU8sQ0FBQztFQUFFLENBQUM7RUFDbkNDLE1BQU0sRUFBRSxTQUFBQSxPQUFVQyxDQUFDLEVBQUU7SUFBRSxPQUFPQSxDQUFDO0VBQUUsQ0FBQztFQUVsQztFQUNBO0VBQ0E7RUFDQTs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxNQUFN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eUMsUUFBUSxHQUFHLFVBQVV0QyxDQUFDLEVBQUU7RUFBRSxPQUFPLENBQUMsR0FBR0gsTUFBTSxDQUFDMEMsU0FBUyxDQUFDLENBQUMsR0FBR3ZDLENBQUMsQ0FBQztBQUFFLENBQUM7QUFDdEVILE1BQU0sQ0FBQzJDLFdBQVcsR0FBRyxVQUFVeEMsQ0FBQyxFQUFFO0VBQzlCLElBQUlBLENBQUMsR0FBRyxHQUFHLEVBQUU7SUFDVCxPQUFPSCxNQUFNLENBQUN5QyxRQUFRLENBQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRztFQUN2QztFQUNBLE9BQU9ILE1BQU0sQ0FBQzBDLFNBQVMsQ0FBQ3ZDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDbEQsQ0FBQztBQUNESCxNQUFNLENBQUMwRCxXQUFXLEdBQUdYLFVBQVUsQ0FBQy9DLE1BQU0sQ0FBQ3lDLFFBQVEsRUFBRXpDLE1BQU0sQ0FBQzBDLFNBQVMsQ0FBQzs7QUFFbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQWlCLEVBQUUsQ0FBQzNELE1BQU0sR0FBSUEsTUFBTSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGVhc2luZyA9IHtcclxuICAgIGNvbnN0YW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxyXG4gICAgbGluZWFyOiBmdW5jdGlvbiAoaykgeyByZXR1cm4gazsgfSxcclxuXHJcbiAgICAvLyBxdWFkXHJcbiAgICAvLyAgZWFzaW5nIGVxdWF0aW9uIGZ1bmN0aW9uIGZvciBhIHF1YWRyYXRpYyAodF4yKVxyXG4gICAgLy8gIEBwYXJhbSB0OiBDdXJyZW50IHRpbWUgKGluIGZyYW1lcyBvciBzZWNvbmRzKS5cclxuICAgIC8vICBAcmV0dXJuOiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gRWFzaW5nIGluIHdpdGggcXVhZHJhdGljIGZvcm11bGEuIEZyb20gc2xvdyB0byBmYXN0LlxyXG4gICAgICogISN6aCDlubPmlrnmm7Lnur/nvJPlhaXlh73mlbDjgILov5DliqjnlLHmhaLliLDlv6vjgIJcclxuICAgICAqIEBtZXRob2QgcXVhZEluXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcXVhZEluOiBmdW5jdGlvbiAoaykgeyByZXR1cm4gayAqIGs7IH0sXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gRWFzaW5nIG91dCB3aXRoIHF1YWRyYXRpYyBmb3JtdWxhLiBGcm9tIGZhc3QgdG8gc2xvdy5cclxuICAgICAqICEjemgg5bmz5pa55puy57q/57yT5Ye65Ye95pWw44CC6L+Q5Yqo55Sx5b+r5Yiw5oWi44CCXHJcbiAgICAgKiBAbWV0aG9kIHF1YWRPdXRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRoZSBjdXJyZW50IHRpbWUgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCB0aW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBxdWFkT3V0OiBmdW5jdGlvbiAoaykgeyByZXR1cm4gayAqICgyIC0gayk7IH0sXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gRWFzaW5nIGluIGFuZCBvdXQgd2l0aCBxdWFkcmF0aWMgZm9ybXVsYS4gRnJvbSBzbG93IHRvIGZhc3QsIHRoZW4gYmFjayB0byBzbG93LlxyXG4gICAgICogISN6aCDlubPmlrnmm7Lnur/nvJPlhaXnvJPlh7rlh73mlbDjgILov5DliqjnlLHmhaLliLDlv6vlho3liLDmhaLjgIJcclxuICAgICAqIEBtZXRob2QgcXVhZEluT3V0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWVcclxuICAgICAqL1xyXG4gICAgcXVhZEluT3V0OiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIGsgKiBrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTAuNSAqICgtLWsgKiAoayAtIDIpIC0gMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGN1YmljXHJcbiAgICAvLyAgZWFzaW5nIGVxdWF0aW9uIGZ1bmN0aW9uIGZvciBhIGN1YmljICh0XjMpXHJcbiAgICAvLyAgQHBhcmFtIHQ6IEN1cnJlbnQgdGltZSAoaW4gZnJhbWVzIG9yIHNlY29uZHMpLlxyXG4gICAgLy8gIEByZXR1cm46IFRoZSBjb3JyZWN0IHZhbHVlLlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgaW4gd2l0aCBjdWJpYyBmb3JtdWxhLiBGcm9tIHNsb3cgdG8gZmFzdC5cclxuICAgICAqICEjemgg56uL5pa55puy57q/57yT5YWl5Ye95pWw44CC6L+Q5Yqo55Sx5oWi5Yiw5b+r44CCXHJcbiAgICAgKiBAbWV0aG9kIGN1YmljSW5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRoZSBjdXJyZW50IHRpbWUgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCB0aW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgY3ViaWNJbjogZnVuY3Rpb24gKGspIHsgcmV0dXJuIGsgKiBrICogazsgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgb3V0IHdpdGggY3ViaWMgZm9ybXVsYS4gRnJvbSBzbG93IHRvIGZhc3QuXHJcbiAgICAgKiAhI3poIOeri+aWueabsue6v+e8k+WHuuWHveaVsOOAgui/kOWKqOeUseW/q+WIsOaFouOAglxyXG4gICAgICogQG1ldGhvZCBjdWJpY091dFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBjdWJpY091dDogZnVuY3Rpb24gKGspIHsgcmV0dXJuIC0tayAqIGsgKiBrICsgMTsgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgaW4gYW5kIG91dCB3aXRoIGN1YmljIGZvcm11bGEuIEZyb20gc2xvdyB0byBmYXN0LCB0aGVuIGJhY2sgdG8gc2xvdy5cclxuICAgICAqICEjemgg56uL5pa55puy57q/57yT5YWl57yT5Ye65Ye95pWw44CC6L+Q5Yqo55Sx5oWi5Yiw5b+r5YaN5Yiw5oWi44CCXHJcbiAgICAgKiBAbWV0aG9kIGN1YmljSW5PdXRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRoZSBjdXJyZW50IHRpbWUgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCB0aW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgY3ViaWNJbk91dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiBrICogayAqIGs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayArIDIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBxdWFydFxyXG4gICAgLy8gIGVhc2luZyBlcXVhdGlvbiBmdW5jdGlvbiBmb3IgYSBxdWFydGljICh0XjQpXHJcbiAgICAvLyAgQHBhcmFtIHQ6IEN1cnJlbnQgdGltZSAoaW4gZnJhbWVzIG9yIHNlY29uZHMpLlxyXG4gICAgLy8gIEByZXR1cm46IFRoZSBjb3JyZWN0IHZhbHVlLlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgaW4gd2l0aCBxdWFydGljIGZvcm11bGEuIEZyb20gc2xvdyB0byBmYXN0LlxyXG4gICAgICogISN6aCDlm5vmrKHmlrnmm7Lnur/nvJPlhaXlh73mlbDjgILov5DliqjnlLHmhaLliLDlv6vjgIJcclxuICAgICAqIEBtZXRob2QgcXVhcnRJblxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBxdWFydEluOiBmdW5jdGlvbiAoaykgeyByZXR1cm4gayAqIGsgKiBrICogazsgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgb3V0IHdpdGggcXVhcnRpYyBmb3JtdWxhLiBGcm9tIGZhc3QgdG8gc2xvdy5cclxuICAgICAqICEjemgg5Zub5qyh5pa55puy57q/57yT5Ye65Ye95pWw44CC6L+Q5Yqo55Sx5b+r5Yiw5oWi44CCXHJcbiAgICAgKiBAbWV0aG9kIHF1YXJ0T3V0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHF1YXJ0T3V0OiBmdW5jdGlvbiAoaykgeyByZXR1cm4gMSAtICgtLWsgKiBrICogayAqIGspOyB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBpbiBhbmQgb3V0IHdpdGggcXVhcnRpYyBmb3JtdWxhLiBGcm9tIHNsb3cgdG8gZmFzdCwgdGhlbiBiYWNrIHRvIHNsb3cuXHJcbiAgICAgKiAhI3poIOWbm+asoeaWueabsue6v+e8k+WFpee8k+WHuuWHveaVsOOAgui/kOWKqOeUseaFouWIsOW/q+WGjeWIsOaFouOAglxyXG4gICAgICogQG1ldGhvZCBxdWFydEluT3V0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHF1YXJ0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgaWYgKChrICo9IDIpIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogayAqIGsgKiBrICogaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgLSAyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gcXVpbnRcclxuICAgIC8vICBlYXNpbmcgZXF1YXRpb24gZnVuY3Rpb24gZm9yIGEgcXVpbnRpYyAodF41KVxyXG4gICAgLy8gIEBwYXJhbSB0OiBDdXJyZW50IHRpbWUgKGluIGZyYW1lcyBvciBzZWNvbmRzKS5cclxuICAgIC8vICBAcmV0dXJuOiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gRWFzaW5nIGluIHdpdGggcXVpbnRpYyBmb3JtdWxhLiBGcm9tIHNsb3cgdG8gZmFzdC5cclxuICAgICAqICEjemgg5LqU5qyh5pa55puy57q/57yT5YWl5Ye95pWw44CC6L+Q5Yqo55Sx5oWi5Yiw5b+r44CCXHJcbiAgICAgKiBAbWV0aG9kIHF1aW50SW5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRoZSBjdXJyZW50IHRpbWUgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCB0aW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcXVpbnRJbjogZnVuY3Rpb24gKGspIHsgcmV0dXJuIGsgKiBrICogayAqIGsgKiBrOyB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBvdXQgd2l0aCBxdWludGljIGZvcm11bGEuIEZyb20gZmFzdCB0byBzbG93LlxyXG4gICAgICogISN6aCDkupTmrKHmlrnmm7Lnur/nvJPlh7rlh73mlbDjgILov5DliqjnlLHlv6vliLDmhaLjgIJcclxuICAgICAqIEBtZXRob2QgcXVpbnRPdXRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRoZSBjdXJyZW50IHRpbWUgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCB0aW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcXVpbnRPdXQ6IGZ1bmN0aW9uIChrKSB7IHJldHVybiAtLWsgKiBrICogayAqIGsgKiBrICsgMTsgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgaW4gYW5kIG91dCB3aXRoIHF1aW50aWMgZm9ybXVsYS4gRnJvbSBzbG93IHRvIGZhc3QsIHRoZW4gYmFjayB0byBzbG93LlxyXG4gICAgICogISN6aCDkupTmrKHmlrnmm7Lnur/nvJPlhaXnvJPlh7rlh73mlbDjgILov5DliqjnlLHmhaLliLDlv6vlho3liLDmhaLjgIJcclxuICAgICAqIEBtZXRob2QgcXVpbnRJbk91dFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBxdWludEluT3V0OiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGsgKiBrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrICogayArIDIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzaW5lXHJcbiAgICAvLyAgZWFzaW5nIGVxdWF0aW9uIGZ1bmN0aW9uIGZvciBhIHNpbnVzb2lkYWwgKHNpbih0KSlcclxuICAgIC8vICBAcGFyYW0gdDogQ3VycmVudCB0aW1lIChpbiBmcmFtZXMgb3Igc2Vjb25kcykuXHJcbiAgICAvLyAgQHJldHVybjogVGhlIGNvcnJlY3QgdmFsdWUuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBpbiBhbmQgb3V0IHdpdGggc2luZSBmb3JtdWxhLiBGcm9tIHNsb3cgdG8gZmFzdC5cclxuICAgICAqICEjemgg5q2j5bym5puy57q/57yT5YWl5Ye95pWw44CC6L+Q5Yqo55Sx5oWi5Yiw5b+r44CCXHJcbiAgICAgKiBAbWV0aG9kIHNpbmVJblxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzaW5lSW46IGZ1bmN0aW9uIChrKSB7IHJldHVybiAxIC0gTWF0aC5jb3MoayAqIE1hdGguUEkgLyAyKTsgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgaW4gYW5kIG91dCB3aXRoIHNpbmUgZm9ybXVsYS4gRnJvbSBmYXN0IHRvIHNsb3cuXHJcbiAgICAgKiAhI3poIOato+W8puabsue6v+e8k+WHuuWHveaVsOOAgui/kOWKqOeUseW/q+WIsOaFouOAglxyXG4gICAgICogQG1ldGhvZCBzaW5lT3V0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHNpbmVPdXQ6IGZ1bmN0aW9uIChrKSB7IHJldHVybiBNYXRoLnNpbihrICogTWF0aC5QSSAvIDIpOyB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBpbiBhbmQgb3V0IHdpdGggc2luZSBmb3JtdWxhLiBGcm9tIHNsb3cgdG8gZmFzdCwgdGhlbiBiYWNrIHRvIHNsb3cuXHJcbiAgICAgKiAhI3poIOato+W8puabsue6v+e8k+WFpee8k+WHuuWHveaVsOOAgui/kOWKqOeUseaFouWIsOW/q+WGjeWIsOaFouOAglxyXG4gICAgICogQG1ldGhvZCBzaW5lSW5PdXRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRoZSBjdXJyZW50IHRpbWUgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCB0aW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgc2luZUluT3V0OiBmdW5jdGlvbiAoaykgeyByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpOyB9LFxyXG5cclxuICAgIC8vIGV4cG9cclxuICAgIC8vICBlYXNpbmcgZXF1YXRpb24gZnVuY3Rpb24gZm9yIGFuIGV4cG9uZW50aWFsICgyXnQpXHJcbiAgICAvLyAgcGFyYW0gdDogQ3VycmVudCB0aW1lIChpbiBmcmFtZXMgb3Igc2Vjb25kcykuXHJcbiAgICAvLyAgcmV0dXJuOiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gRWFzaW5nIGluIGFuZCBvdXQgd2l0aCBleHBvbmVudGlhbCBmb3JtdWxhLiBGcm9tIHNsb3cgdG8gZmFzdC5cclxuICAgICAqICEjemgg5oyH5pWw5puy57q/57yT5YWl5Ye95pWw44CC6L+Q5Yqo55Sx5oWi5Yiw5b+r44CCXHJcbiAgICAgKiBAbWV0aG9kIGV4cG9JblxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBleHBvSW46IGZ1bmN0aW9uIChrKSB7IHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIGsgLSAxKTsgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgaW4gYW5kIG91dCB3aXRoIGV4cG9uZW50aWFsIGZvcm11bGEuIEZyb20gZmFzdCB0byBzbG93LlxyXG4gICAgICogISN6aCDmjIfmlbDmm7Lnur/nvJPlh7rlh73mlbDjgILov5DliqjnlLHlv6vliLDmhaLjgIJcclxuICAgICAqIEBtZXRob2QgZXhwb091XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGV4cG9PdXQ6IGZ1bmN0aW9uIChrKSB7IHJldHVybiBrID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtMTAgKiBrKTsgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgaW4gYW5kIG91dCB3aXRoIGV4cG9uZW50aWFsIGZvcm11bGEuIEZyb20gc2xvdyB0byBmYXN0LlxyXG4gICAgICogISN6aCDmjIfmlbDmm7Lnur/nvJPlhaXlkoznvJPlh7rlh73mlbDjgILov5DliqjnlLHmhaLliLDlvojlv6vlho3liLDmhaLjgIJcclxuICAgICAqIEBtZXRob2QgZXhwb0luT3V0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZSwgdGhlbiBiYWNrIHRvIHNsb3cuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBleHBvSW5PdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgaWYgKGsgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGsgKj0gMikgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIChrIC0gMSkpICsgMik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNpcmNcclxuICAgIC8vICBlYXNpbmcgZXF1YXRpb24gZnVuY3Rpb24gZm9yIGEgY2lyY3VsYXIgKHNxcnQoMS10XjIpKVxyXG4gICAgLy8gIEBwYXJhbSB0OiBDdXJyZW50IHRpbWUgKGluIGZyYW1lcyBvciBzZWNvbmRzKS5cclxuICAgIC8vICBAcmV0dXJuOlx0VGhlIGNvcnJlY3QgdmFsdWUuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBpbiBhbmQgb3V0IHdpdGggY2lyY3VsYXIgZm9ybXVsYS4gRnJvbSBzbG93IHRvIGZhc3QuXHJcbiAgICAgKiAhI3poIOW+queOr+WFrOW8j+e8k+WFpeWHveaVsOOAgui/kOWKqOeUseaFouWIsOW/q+OAglxyXG4gICAgICogQG1ldGhvZCBjaXJjSW5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRoZSBjdXJyZW50IHRpbWUgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCB0aW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgY2lyY0luOiBmdW5jdGlvbiAoaykgeyByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gayAqIGspOyB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBpbiBhbmQgb3V0IHdpdGggY2lyY3VsYXIgZm9ybXVsYS4gRnJvbSBmYXN0IHRvIHNsb3cuXHJcbiAgICAgKiAhI3poIOW+queOr+WFrOW8j+e8k+WHuuWHveaVsOOAgui/kOWKqOeUseW/q+WIsOaFouOAglxyXG4gICAgICogQG1ldGhvZCBjaXJjT3V0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNpcmNPdXQ6IGZ1bmN0aW9uIChrKSB7IHJldHVybiBNYXRoLnNxcnQoMSAtICgtLWsgKiBrKSk7IH0sXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gRWFzaW5nIGluIGFuZCBvdXQgd2l0aCBjaXJjdWxhciBmb3JtdWxhLiBGcm9tIHNsb3cgdG8gZmFzdC5cclxuICAgICAqICEjemgg5oyH5pWw5puy57q/57yT5YWl57yT5Ye65Ye95pWw44CC6L+Q5Yqo55Sx5oWi5Yiw5b6I5b+r5YaN5Yiw5oWi44CCXHJcbiAgICAgKiBAbWV0aG9kIGNpcmNJbk91dFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUsIHRoZW4gYmFjayB0byBzbG93LlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgY2lyY0luT3V0OiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSBrICogaykgLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChrIC09IDIpICogaykgKyAxKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gZWxhc3RpY1xyXG4gICAgLy8gIGVhc2luZyBlcXVhdGlvbiBmdW5jdGlvbiBmb3IgYW4gZWxhc3RpYyAoZXhwb25lbnRpYWxseSBkZWNheWluZyBzaW5lIHdhdmUpXHJcbiAgICAvLyAgQHBhcmFtIHQ6IEN1cnJlbnQgdGltZSAoaW4gZnJhbWVzIG9yIHNlY29uZHMpLlxyXG4gICAgLy8gIEByZXR1cm46IFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgLy8gIHJlY29tbWFuZCB2YWx1ZTogZWxhc3RpYyAodClcclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gRWFzaW5nIGluIGFjdGlvbiB3aXRoIGEgc3ByaW5nIG9zY2lsbGF0aW5nIGVmZmVjdC5cclxuICAgICAqICEjemgg5by557Cn5Zue6ZyH5pWI5p6c55qE57yT5YWl5Ye95pWw44CCXHJcbiAgICAgKiBAbWV0aG9kIGVsYXN0aWNJblxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBlbGFzdGljSW46IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgdmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XHJcbiAgICAgICAgaWYgKGsgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWEgfHwgYSA8IDEpIHtcclxuICAgICAgICAgICAgYSA9IDE7XHJcbiAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHMgPSBwICogTWF0aC5hc2luKDEgLyBhKSAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqIChrIC09IDEpKSAqIE1hdGguc2luKChrIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgb3V0IGFjdGlvbiB3aXRoIGEgc3ByaW5nIG9zY2lsbGF0aW5nIGVmZmVjdC5cclxuICAgICAqICEjemgg5by557Cn5Zue6ZyH5pWI5p6c55qE57yT5Ye65Ye95pWw44CCXHJcbiAgICAgKiBAbWV0aG9kIGVsYXN0aWNPdXRcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRoZSBjdXJyZW50IHRpbWUgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCB0aW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZWxhc3RpY091dDogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICB2YXIgcywgYSA9IDAuMSwgcCA9IDAuNDtcclxuICAgICAgICBpZiAoayA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGsgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYSB8fCBhIDwgMSkge1xyXG4gICAgICAgICAgICBhID0gMTtcclxuICAgICAgICAgICAgcyA9IHAgLyA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcyA9IHAgKiBNYXRoLmFzaW4oMSAvIGEpIC8gKDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhICogTWF0aC5wb3coMiwgLTEwICogaykgKiBNYXRoLnNpbigoayAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICsgMSk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBpbiBhbmQgb3V0IGFjdGlvbiB3aXRoIGEgc3ByaW5nIG9zY2lsbGF0aW5nIGVmZmVjdC5cclxuICAgICAqICEjemgg5by557Cn5Zue6ZyH5pWI5p6c55qE57yT5YWl57yT5Ye65Ye95pWw44CCXHJcbiAgICAgKiBAbWV0aG9kIGVsYXN0aWNJbk91dFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBlbGFzdGljSW5PdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgdmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XHJcbiAgICAgICAgaWYgKGsgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWEgfHwgYSA8IDEpIHtcclxuICAgICAgICAgICAgYSA9IDE7XHJcbiAgICAgICAgICAgIHMgPSBwIC8gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHMgPSBwICogTWF0aC5hc2luKDEgLyBhKSAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoayAqPSAyKSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKlxyXG4gICAgICAgICAgICAgICAgKGEgKiBNYXRoLnBvdygyLCAxMCAqIChrIC09IDEpKSAqIE1hdGguc2luKChrIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIChrIC09IDEpKSAqIE1hdGguc2luKChrIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKiAwLjUgKyAxO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBiYWNrXHJcbiAgICAvLyAgZWFzaW5nIGVxdWF0aW9uIGZ1bmN0aW9uIGZvciBhIGJhY2sgKG92ZXJzaG9vdGluZyBjdWJpYyBlYXNpbmc6IChzKzEpKnReMyAtIHMqdF4yKVxyXG4gICAgLy8gIEBwYXJhbSB0OiBDdXJyZW50IHRpbWUgKGluIGZyYW1lcyBvciBzZWNvbmRzKS5cclxuICAgIC8vICBAcmV0dXJuOiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gRWFzaW5nIGluIGFjdGlvbiB3aXRoIFwiYmFjayB1cFwiIGJlaGF2aW9yLlxyXG4gICAgICogISN6aCDlm57pgIDmlYjmnpznmoTnvJPlhaXlh73mlbDjgIJcclxuICAgICAqIEBtZXRob2QgYmFja0luXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGJhY2tJbjogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XHJcbiAgICAgICAgcmV0dXJuIGsgKiBrICogKChzICsgMSkgKiBrIC0gcyk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBvdXQgYWN0aW9uIHdpdGggXCJiYWNrIHVwXCIgYmVoYXZpb3IuXHJcbiAgICAgKiAhI3poIOWbnumAgOaViOaenOeahOe8k+WHuuWHveaVsOOAglxyXG4gICAgICogQG1ldGhvZCBiYWNrT3V0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGJhY2tPdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgdmFyIHMgPSAxLjcwMTU4O1xyXG4gICAgICAgIHJldHVybiAtLWsgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAxO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgaW4gYW5kIG91dCBhY3Rpb24gd2l0aCBcImJhY2sgdXBcIiBiZWhhdmlvci5cclxuICAgICAqICEjemgg5Zue6YCA5pWI5p6c55qE57yT5YWl57yT5Ye65Ye95pWw44CCXHJcbiAgICAgKiBAbWV0aG9kIGJhY2tJbk91dFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBiYWNrSW5PdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgdmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XHJcbiAgICAgICAgaWYgKChrICo9IDIpIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMC41ICogKGsgKiBrICogKChzICsgMSkgKiBrIC0gcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMC41ICogKChrIC09IDIpICogayAqICgocyArIDEpICogayArIHMpICsgMik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGJvdW5jZVxyXG4gICAgLy8gIGVhc2luZyBlcXVhdGlvbiBmdW5jdGlvbiBmb3IgYSBib3VuY2UgKGV4cG9uZW50aWFsbHkgZGVjYXlpbmcgcGFyYWJvbGljIGJvdW5jZSlcclxuICAgIC8vICBAcGFyYW0gdDogQ3VycmVudCB0aW1lIChpbiBmcmFtZXMgb3Igc2Vjb25kcykuXHJcbiAgICAvLyAgQHJldHVybjogVGhlIGNvcnJlY3QgdmFsdWUuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBpbiBhY3Rpb24gd2l0aCBib3VuY2luZyBlZmZlY3QuXHJcbiAgICAgKiAhI3poIOW8uei3s+aViOaenOeahOe8k+WFpeWHveaVsOOAglxyXG4gICAgICogQG1ldGhvZCBib3VuY2VJblxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBib3VuY2VJbjogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICByZXR1cm4gMSAtIGVhc2luZy5ib3VuY2VPdXQoMSAtIGspO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogISNlbiBFYXNpbmcgb3V0IGFjdGlvbiB3aXRoIGJvdW5jaW5nIGVmZmVjdC5cclxuICAgICAqICEjemgg5by56Lez5pWI5p6c55qE57yT5Ye65Ye95pWw44CCXHJcbiAgICAgKiBAbWV0aG9kIGJvdW5jZU91dFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBib3VuY2VPdXQ6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgaWYgKGsgPCAoMSAvIDIuNzUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA3LjU2MjUgKiBrICogaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoayA8ICgyIC8gMi43NSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIChrIC09ICgxLjUgLyAyLjc1KSkgKiBrICsgMC43NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoayA8ICgyLjUgLyAyLjc1KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuMjUgLyAyLjc1KSkgKiBrICsgMC45Mzc1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDcuNTYyNSAqIChrIC09ICgyLjYyNSAvIDIuNzUpKSAqIGsgKyAwLjk4NDM3NTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEVhc2luZyBpbiBhbmQgb3V0IGFjdGlvbiB3aXRoIGJvdW5jaW5nIGVmZmVjdC5cclxuICAgICAqICEjemgg5by56Lez5pWI5p6c55qE57yT5YWl57yT5Ye65Ye95pWw44CCXHJcbiAgICAgKiBAbWV0aG9kIGJvdW5jZUluT3V0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdCBUaGUgY3VycmVudCB0aW1lIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgdG90YWwgdGltZS5cclxuICAgICAqIEByZXR1cm4gVGhlIGNvcnJlY3QgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGJvdW5jZUluT3V0OiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIGlmIChrIDwgMC41KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlYXNpbmcuYm91bmNlSW4oayAqIDIpICogMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWFzaW5nLmJvdW5jZU91dChrICogMiAtIDEpICogMC41ICsgMC41O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gVGFyZ2V0IHdpbGwgcnVuIGFjdGlvbiB3aXRoIHNtb290aCBlZmZlY3QuXHJcbiAgICAgKiAhI3poIOW5s+a7keaViOaenOWHveaVsOOAglxyXG4gICAgICogQG1ldGhvZCBzbW9vdGhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRoZSBjdXJyZW50IHRpbWUgYXMgYSBwZXJjZW50YWdlIG9mIHRoZSB0b3RhbCB0aW1lLlxyXG4gICAgICogQHJldHVybiBUaGUgY29ycmVjdCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgLy8gdDw9MDogMCB8IDA8dDwxOiAzKnReMiAtIDIqdF4zIHwgdD49MTogMVxyXG4gICAgc21vb3RoOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGlmICh0IDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ICogdCAqICgzIC0gMiAqIHQpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gVGFyZ2V0IHdpbGwgcnVuIGFjdGlvbiB3aXRoIGZhZGUgZWZmZWN0LlxyXG4gICAgICogISN6aCDmuJDopKrmlYjmnpzlh73mlbDjgIJcclxuICAgICAqIEBtZXRob2QgZmFkZVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHQgVGhlIGN1cnJlbnQgdGltZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBjb3JyZWN0IHZhbHVlLlxyXG4gICAgICovXHJcbiAgICAvLyB0PD0wOiAwIHwgMDx0PDE6IDYqdF41IC0gMTUqdF40ICsgMTAqdF4zIHwgdD49MTogMVxyXG4gICAgZmFkZTogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBpZiAodCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdCAqIHQgKiB0ICogKHQgKiAodCAqIDYgLSAxNSkgKyAxMCk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gX21ha2VPdXRJbihmbkluLCBmbk91dCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgaWYgKGsgPCAwLjUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuT3V0KGsgKiAyKSAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbkluKDIgKiBrIC0gMSkgLyAyICsgMC41O1xyXG4gICAgfTtcclxufVxyXG5lYXNpbmcucXVhZE91dEluID0gX21ha2VPdXRJbihlYXNpbmcucXVhZEluLCBlYXNpbmcucXVhZE91dCk7XHJcbmVhc2luZy5jdWJpY091dEluID0gX21ha2VPdXRJbihlYXNpbmcuY3ViaWNJbiwgZWFzaW5nLmN1YmljT3V0KTtcclxuZWFzaW5nLnF1YXJ0T3V0SW4gPSBfbWFrZU91dEluKGVhc2luZy5xdWFydEluLCBlYXNpbmcucXVhcnRPdXQpO1xyXG5lYXNpbmcucXVpbnRPdXRJbiA9IF9tYWtlT3V0SW4oZWFzaW5nLnF1aW50SW4sIGVhc2luZy5xdWludE91dCk7XHJcbmVhc2luZy5zaW5lT3V0SW4gPSBfbWFrZU91dEluKGVhc2luZy5zaW5lSW4sIGVhc2luZy5zaW5lT3V0KTtcclxuZWFzaW5nLmV4cG9PdXRJbiA9IF9tYWtlT3V0SW4oZWFzaW5nLmV4cG9JbiwgZWFzaW5nLmV4cG9PdXQpO1xyXG5lYXNpbmcuY2lyY091dEluID0gX21ha2VPdXRJbihlYXNpbmcuY2lyY0luLCBlYXNpbmcuY2lyY091dCk7XHJcbmVhc2luZy5iYWNrT3V0SW4gPSBfbWFrZU91dEluKGVhc2luZy5iYWNrSW4sIGVhc2luZy5iYWNrT3V0KTtcclxuZWFzaW5nLmJvdW5jZUluID0gZnVuY3Rpb24gKGspIHsgcmV0dXJuIDEgLSBlYXNpbmcuYm91bmNlT3V0KDEgLSBrKTsgfTtcclxuZWFzaW5nLmJvdW5jZUluT3V0ID0gZnVuY3Rpb24gKGspIHtcclxuICAgIGlmIChrIDwgMC41KSB7XHJcbiAgICAgICAgcmV0dXJuIGVhc2luZy5ib3VuY2VJbihrICogMikgKiAwLjU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWFzaW5nLmJvdW5jZU91dChrICogMiAtIDEpICogMC41ICsgMC41O1xyXG59O1xyXG5lYXNpbmcuYm91bmNlT3V0SW4gPSBfbWFrZU91dEluKGVhc2luZy5ib3VuY2VJbiwgZWFzaW5nLmJvdW5jZU91dCk7XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBjY1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiAhI2VuIFRoaXMgaXMgYSBFYXNpbmcgaW5zdGFuY2UuXHJcbiAqICEjemgg6L+Z5piv5LiA5LiqIEVhc2luZyDnsbvlrp7kvovjgIJcclxuICogQHByb3BlcnR5IGVhc2luZ1xyXG4gKiBAdHlwZSBFYXNpbmdcclxuICovXHJcblxyXG5jYy5lYXNpbmcgPSAgZWFzaW5nOyJdfQ==