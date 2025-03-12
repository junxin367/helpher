
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/framework/ui/UIFunctions.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10205trRZVOELcrvc3TW2mW', 'UIFunctions');
// framework/ui/UIFunctions.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UIFunctions = /** @class */ (function () {
    function UIFunctions() {
    }
    UIFunctions.getChildrenAnimations = function (node) {
        var animations = [];
        var anim = node.getComponent(cc.Animation);
        if (anim)
            animations.push(anim);
        for (var i = 0; i < node.childrenCount; i++) {
            var child = node.children[i];
            var anim = child.getComponent(cc.Animation);
            if (anim)
                animations.push(anim);
        }
        return animations;
    };
    UIFunctions.stopAnimations = function (animations) {
        animations.forEach(function (anim) {
            anim.stop();
        });
    };
    UIFunctions.doShowAnimations = function (animations, finishCallback, target) {
        var maxDuration = 0;
        var maxDurationAnimation;
        animations.forEach(function (anim) {
            var clips = anim.getClips();
            if (clips.length > 0) {
                var clip = clips[0];
                var animState = anim.play(clip.name);
                animState.wrapMode = cc.WrapMode.Normal;
                if (clip.duration > maxDuration) {
                    maxDuration = clip.duration;
                    maxDurationAnimation = anim;
                }
            }
        });
        if (finishCallback) {
            var func_1 = function () {
                // console.log("finish animations")
                if (maxDurationAnimation)
                    maxDurationAnimation.off("finished", func_1);
                finishCallback.call(target);
            };
            if (maxDurationAnimation)
                maxDurationAnimation.on("finished", func_1);
            else
                finishCallback.call(target);
        }
    };
    // static getLongestAnimation(animations)
    // {
    //     animations.forEach((anim:cc.Animation)=>{
    //         let clips = anim.getClips()
    //         for (clips)
    //         //以最长的为准
    //     }
    // }
    //TODO:还未实现
    UIFunctions.isAnimationRunning = function (animations) {
        return false;
    };
    UIFunctions.doHideAnimations = function (animations, finishCallback, target) {
        var hasHideAnimation = false;
        var maxDuration = 0;
        var maxDurationAnimation;
        animations.forEach(function (anim) {
            var clips = anim.getClips();
            if (clips.length == 2) {
                var clip = clips[clips.length - 1];
                // anim.on("finished",onHideAnimationFinished)
                hasHideAnimation = true;
                anim.play(clip.name);
                if (clip.duration > maxDuration) {
                    maxDuration = clip.duration;
                    maxDurationAnimation = anim;
                }
            }
            else if (clips.length == 1) {
                var clip = clips[0];
                // clip.wrapMode = cc.WrapMode.Reverse;
                hasHideAnimation = true;
                var animState = anim.play(clip.name);
                animState.wrapMode = cc.WrapMode.Reverse;
                if (clip.duration > maxDuration) {
                    maxDuration = clip.duration;
                    maxDurationAnimation = anim;
                }
            }
        });
        if (maxDurationAnimation && finishCallback) {
            var func_2 = function () {
                // console.log("finish animations")
                maxDurationAnimation.off("finished", func_2);
                finishCallback.call(target);
            };
            maxDurationAnimation.on("finished", func_2);
        }
        return hasHideAnimation;
    };
    UIFunctions.getToggleIndex = function (toggle) {
        var container = toggle.node.getParent();
        for (var i = 0; i < container.childrenCount; i++) {
            var child = container.children[i];
            if (toggle.node == child) {
                return i;
            }
        }
        return -1;
    };
    UIFunctions.selectToggleIndex = function (toggleContainer, index) {
        if (toggleContainer == null) {
            console.warn("[UIFunction.selectToggleIndex] : invalid toggleContainer :");
            return;
        }
        var toggleNode = toggleContainer.children[index];
        if (toggleNode) {
            var toggle = toggleNode.getComponent(cc.Toggle);
            if (toggle) {
                console.log("[UIFunction.selectToggleIndex] :" + index);
                toggle.check();
            }
        }
        else {
            console.warn("[UIFunction.selectToggleIndex] :cannot find toggle with index:" + index);
        }
    };
    // set btn 
    UIFunctions.setTouchEnabled = function (node, b) {
        g.foreachNode(node, function (child) {
            var btn = child.getComponent(cc.Button);
            if (btn) {
                console.log("[UIFunction] " + child.name + " touch : " + b);
                btn.interactable = b;
            }
        });
    };
    return UIFunctions;
}());
exports.default = UIFunctions;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWV3b3JrXFx1aVxcVUlGdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBeUtBLENBQUM7SUF0S1UsaUNBQXFCLEdBQTVCLFVBQTZCLElBQUk7UUFDN0IsSUFBSSxVQUFVLEdBQWtCLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMxQyxJQUFHLElBQUk7WUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUMxQztZQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDM0MsSUFBRyxJQUFJO2dCQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDNUI7UUFDRCxPQUFPLFVBQVUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sMEJBQWMsR0FBckIsVUFBc0IsVUFBVTtRQUU1QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBaUI7WUFDakMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLDRCQUFnQixHQUF2QixVQUF3QixVQUFVLEVBQUMsY0FBd0IsRUFBQyxNQUFPO1FBRS9ELElBQUksV0FBVyxHQUFHLENBQUMsQ0FBRTtRQUNyQixJQUFJLG9CQUFpQyxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFpQjtZQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJ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R0FBRyxDQUFDLGtDQUFrQyxHQUFHLEtBQUssQ0FBQyxDQUFBO2dCQUN2RCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7YUFDakI7U0FDSjthQUFJO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxnRUFBZ0UsR0FBRSxLQUFLLENBQUMsQ0FBQTtTQUN4RjtJQUNMLENBQUM7SUFFRCxXQUFXO0lBQ0osMkJBQWUsR0FBdEIsVUFBdUIsSUFBSSxFQUFDLENBQUM7UUFFekIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUMsVUFBQSxLQUFLO1lBQ3BCLElBQUksR0FBRyxHQUFhLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2pELElBQUcsR0FBRyxFQUNOO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUMzRCxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzthQUN4QjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUlMLGtCQUFDO0FBQUQsQ0F6S0EsQUF5S0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJRnVuY3Rpb25zXHJcbntcclxuICAgIFxyXG4gICAgc3RhdGljIGdldENoaWxkcmVuQW5pbWF0aW9ucyhub2RlKTogY2MuQW5pbWF0aW9uW10ge1xyXG4gICAgICAgIGxldCBhbmltYXRpb25zOmNjLkFuaW1hdGlvbltdID0gW11cclxuICAgICAgICB2YXIgYW5pbSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICBpZihhbmltKVxyXG4gICAgICAgICAgICBhbmltYXRpb25zLnB1c2goYW5pbSlcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaTwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICB2YXIgYW5pbSA9IGNoaWxkLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXHJcbiAgICAgICAgICAgIGlmKGFuaW0pXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zLnB1c2goYW5pbSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3RvcEFuaW1hdGlvbnMoYW5pbWF0aW9ucylcclxuICAgIHtcclxuICAgICAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW06Y2MuQW5pbWF0aW9uKT0+e1xyXG4gICAgICAgICAgICBhbmltLnN0b3AoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb1Nob3dBbmltYXRpb25zKGFuaW1hdGlvbnMsZmluaXNoQ2FsbGJhY2s/OkZ1bmN0aW9uLHRhcmdldD8pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uID0gMCA7XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uQW5pbWF0aW9uOmNjLkFuaW1hdGlvbjtcclxuICAgICAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW06Y2MuQW5pbWF0aW9uKT0+e1xyXG4gICAgICAgICAgICBsZXQgY2xpcHMgPSBhbmltLmdldENsaXBzKClcclxuICAgICAgICAgICAgaWYoY2xpcHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaXAgPSBjbGlwc1swXVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IGFuaW0ucGxheShjbGlwLm5hbWUpXHJcbiAgICAgICAgICAgICAgICBhbmltU3RhdGUud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Ob3JtYWxcclxuICAgICAgICAgICAgICAgIGlmIChjbGlwLmR1cmF0aW9uID4gbWF4RHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4RHVyYXRpb24gID0gY2xpcC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbkFuaW1hdGlvbiA9IGFuaW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChmaW5pc2hDYWxsYmFjaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmdW5jID0gZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImZpbmlzaCBhbmltYXRpb25zXCIpXHJcbiAgICAgICAgICAgICAgICBpZihtYXhEdXJhdGlvbkFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbkFuaW1hdGlvbi5vZmYoXCJmaW5pc2hlZFwiLGZ1bmMpO1xyXG4gICAgICAgICAgICAgICAgZmluaXNoQ2FsbGJhY2suY2FsbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG1heER1cmF0aW9uQW5pbWF0aW9uKVxyXG4gICAgICAgICAgICAgICAgbWF4RHVyYXRpb25BbmltYXRpb24ub24oXCJmaW5pc2hlZFwiLGZ1bmMpO1xyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgZmluaXNoQ2FsbGJhY2suY2FsbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhdGljIGdldExvbmdlc3RBbmltYXRpb24oYW5pbWF0aW9ucylcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW06Y2MuQW5pbWF0aW9uKT0+e1xyXG4gICAgLy8gICAgICAgICBsZXQgY2xpcHMgPSBhbmltLmdldENsaXBzKClcclxuICAgIC8vICAgICAgICAgZm9yIChjbGlwcylcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIC8v5Lul5pyA6ZW/55qE5Li65YeGXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vVE9ETzrov5jmnKrlrp7njrBcclxuICAgIHN0YXRpYyBpc0FuaW1hdGlvblJ1bm5pbmcoYW5pbWF0aW9uczogY2MuQW5pbWF0aW9uW10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG9IaWRlQW5pbWF0aW9ucyhhbmltYXRpb25zLGZpbmlzaENhbGxiYWNrPzpGdW5jdGlvbix0YXJnZXQ/KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBoYXNIaWRlQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uID0gMCA7XHJcbiAgICAgICAgbGV0IG1heER1cmF0aW9uQW5pbWF0aW9uOmNjLkFuaW1hdGlvbjtcclxuICAgICAgICBhbmltYXRpb25zLmZvckVhY2goKGFuaW06Y2MuQW5pbWF0aW9uKT0+e1xyXG4gICAgICAgICAgICBsZXQgY2xpcHMgPSBhbmltLmdldENsaXBzKClcclxuICAgICAgICAgICAgaWYoY2xpcHMubGVuZ3RoID09IDIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbY2xpcHMubGVuZ3RoLTFdXHJcbiAgICAgICAgICAgICAgICAvLyBhbmltLm9uKFwiZmluaXNoZWRcIixvbkhpZGVBbmltYXRpb25GaW5pc2hlZClcclxuICAgICAgICAgICAgICAgIGhhc0hpZGVBbmltYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYW5pbS5wbGF5KGNsaXAubmFtZSlcclxuICAgICAgICAgICAgICAgIGlmIChjbGlwLmR1cmF0aW9uID4gbWF4RHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4RHVyYXRpb24gID0gY2xpcC5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbkFuaW1hdGlvbiA9IGFuaW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNsaXBzLmxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpcCA9IGNsaXBzWzBdO1xyXG4gICAgICAgICAgICAgICAgLy8gY2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLlJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICBoYXNIaWRlQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBhbmltU3RhdGUgPSBhbmltLnBsYXkoY2xpcC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgYW5pbVN0YXRlLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuUmV2ZXJzZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNsaXAuZHVyYXRpb24gPiBtYXhEdXJhdGlvbilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbiAgPSBjbGlwLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heER1cmF0aW9uQW5pbWF0aW9uID0gYW5pbTtcclxuICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKG1heER1cmF0aW9uQW5pbWF0aW9uICYmIGZpbmlzaENhbGxiYWNrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGZ1bmMgPSBmdW5jdGlvbigpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmluaXNoIGFuaW1hdGlvbnNcIilcclxuICAgICAgICAgICAgICAgIG1heER1cmF0aW9uQW5pbWF0aW9uLm9mZihcImZpbmlzaGVkXCIsZnVuYyk7XHJcbiAgICAgICAgICAgICAgICBmaW5pc2hDYWxsYmFjay5jYWxsKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF4RHVyYXRpb25BbmltYXRpb24ub24oXCJmaW5pc2hlZFwiLGZ1bmMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzSGlkZUFuaW1hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0VG9nZ2xlSW5kZXgodG9nZ2xlOmNjLlRvZ2dsZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gdG9nZ2xlLm5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgO2kgPCBjb250YWluZXIuY2hpbGRyZW5Db3VudDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjb250YWluZXIuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgaWYodG9nZ2xlLm5vZGUgPT0gY2hpbGQgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNlbGVjdFRvZ2dsZUluZGV4KHRvZ2dsZUNvbnRhaW5lcjpjYy5Ob2RlLGluZGV4KVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRvZ2dsZUNvbnRhaW5lciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltVSUZ1bmN0aW9uLnNlbGVjdFRvZ2dsZUluZGV4XSA6IGludmFsaWQgdG9nZ2xlQ29udGFpbmVyIDpcIiApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvZ2dsZU5vZGUgPSB0b2dnbGVDb250YWluZXIuY2hpbGRyZW5baW5kZXhdXHJcbiAgICAgICAgaWYodG9nZ2xlTm9kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0b2dnbGUgPSB0b2dnbGVOb2RlLmdldENvbXBvbmVudChjYy5Ub2dnbGUpXHJcbiAgICAgICAgICAgIGlmKHRvZ2dsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbVUlGdW5jdGlvbi5zZWxlY3RUb2dnbGVJbmRleF0gOlwiICsgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2hlY2soKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltVSUZ1bmN0aW9uLnNlbGVjdFRvZ2dsZUluZGV4XSA6Y2Fubm90IGZpbmQgdG9nZ2xlIHdpdGggaW5kZXg6XCIrIGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgYnRuIFxyXG4gICAgc3RhdGljIHNldFRvdWNoRW5hYmxlZChub2RlLGIpXHJcbiAgICB7XHJcbiAgICAgICAgZy5mb3JlYWNoTm9kZShub2RlLGNoaWxkPT57XHJcbiAgICAgICAgICAgIGxldCBidG46Y2MuQnV0dG9uID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICAgICAgaWYoYnRuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltVSUZ1bmN0aW9uXSBcIiArIGNoaWxkLm5hbWUgKyBcIiB0b3VjaCA6IFwiICsgYilcclxuICAgICAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdfQ==