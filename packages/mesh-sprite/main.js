// origin: http://lamyoung.com/
// modified: mimgame.com

// api: https://docs.cocos.com/creator/manual/zh/extension/api/editor-framework/renderer/gizmo.html
class PointsPolygonGizmo extends Editor.Gizmo {
  init() {
    // 初始化一些参数
  }

  onCreateMoveCallbacks() {
    // 创建 gizmo 操作回调

    // 申明一些局部变量
    let start_vertex;        // 按下鼠标时记录的位置
    let pressx, pressy;     // 按下鼠标时记录的鼠标位置

    let startpos;

    return {
      /**
       * 在 gizmo 上按下鼠标时触发
       * @param x 按下点的 x 坐标
       * @param y 按下点的 y 坐标
       * @param event mousedown dom event
       */
      start: (x, y, event, which) => {
        start_vertex = null;
        pressx = x;
        pressy = y;
        startpos = this.node.position
        let target = this.target;
        if (typeof (which) == 'string') {
          if (which.indexOf('line') != -1) {
            let [s, i] = which.split('.')
            i = parseInt(i);
            let winsize = cc.winSize;
            // 高度- y 转换为cocos的坐标，再转到世界坐标，
            let newp = this.pixelToScene(cc.v2(x, winsize.height - y))
            //相当于当前节点的本地坐标
            newp = this.node.convertToNodeSpaceAR(newp);
            this.recordChanges();
            //插入当前坐标
            target.vertexes.splice(i + 1, 0, newp)
            target.vertexes = target.vertexes;
            this.commitChanges();
          }
        } else {
          //number 
          //按住 ctrl 键时
          this.recordChanges();
          if (target.deleteMode || event.ctrlKey) {
            target.vertexes.splice(which, 1);
            target.vertexes = target.vertexes;
            // this.adjustValue(target, 'vertexes');
          }
        }
      },

      /**
       * 在 gizmo 上按下鼠标移动时触发
       * @param dx 鼠标移动的 x 位移
       * @param dy 鼠标移动的 y 位移
       * @param event mousedown dom event
       */
      update: (dx, dy, event, i) => {
        // 获取 gizmo 依附的组件
        if (typeof (i) == 'number') {
          let target = this.target;
          if (!start_vertex) {
            start_vertex = target.vertexes[i].clone();
          }
          target.vertexes[i].x = start_vertex.x + dx / this._view.scale;
          target.vertexes[i].y = start_vertex.y + dy / this._view.scale;
          target.vertexes = target.vertexes;
          // this.adjustValue(target, 'vertexes');
        } else {
          this.node.setPosition(startpos.x + dx / this._view.scale, startpos.y + dy / this._view.scale)
        }
        // this.adjustValue(target);
      },

      /**
       * 在 gizmo 抬起鼠标时触发
       * @param event mousedown dom event
       */
      end: (updated, event) => {
        this.commitChanges();
      }
    };
  }

  onCreateRoot() {
    // 创建 svg 根节点的回调，可以在这里创建你的 svg 工具
    // this._root 可以获取到 Editor.Gizmo 创建的 svg 根节点

    // 实例：

    // 创建一个 svg 工具
    // group 函数文档 : http://documentup.com/wout/svg.js#groups
    this._tool = this._root.group();
    let target = this.target;
    const circles = [];
    const lines = [];
    let polygon = this._tool.polyline()
      .fill({ color: 'rgba(0,128,255,0.2' })
      .stroke({ width: 1, color: "rgba(0,255,0,1)" })
      .style('pointer-events', 'fill')
      .style('cursor', 'move')

    // 接下来要定义绘画函数
    this._tool.plot = (points, position) => {

      // 移动到节点位置
      this._tool.move(position.x, position.y);
      // 清除原来的点
      lines.forEach(v => v.remove());
      circles.forEach(v => v.radius(0));
      if (points.length == 0) return;

      let polyPoints = points.map(v => [v.x * this._view.scale, -v.y * this._view.scale]);
      let p = points[0];
      polyPoints.push([p.x * this._view.scale, -p.y * this._view.scale])
      polygon.plot(polyPoints);
      this.registerMoveSvg(polygon, 'polygon', { cursor: 'move' });
      // 画圆点
      points.map((v, i) => {
        // this._view.scale 编辑器缩放系数
        v = Editor.GizmosUtils.snapPixelWihVec2(v.mul(this._view.scale));
        let circle = circles[i];
        //var text = this._tool.text("Lorem ipsum dolor sit amet consectetur.\nCras sodales imperdiet auctor.")
        let c = 'rgba(0,128,255,0.8)'
        if (target.deleteMode) {
          c = '#f00'
        }
        if (!circle) {
          circles[i] = circle = this._tool.circle()
            // 设置 fill 样式
            .fill({ color: c })
            // 设置点击区域，这里设置的是根据 fill 模式点击
            .style('pointer-events', 'fill')
            // 设置鼠标样式
            .style('cursor', 'pointer')
          // 注册点击事件
          this.registerMoveSvg(circle, i, { cursor: 'pointer' });
        }
        circle.center(v.x, -v.y).radius(6).fill({ color: c });
        let np = points[i + 1];
        if (i == points.length - 1) {
          np = points[0];
        }
        np = Editor.GizmosUtils.snapPixelWihVec2(np.mul(this._view.scale));
        let l = [v.x, - v.y, np.x, -np.y]
        let line = this._tool.line(...l).stroke({ width: 2, color: '#0f5' }).style('cursor', "crosshair")
        lines[i] = line;
        this.registerMoveSvg(line, 'line.' + i, { cursor: 'crosshair' });

      })

    };
  }


  onUpdate() {
    // 更新 svg 工具
    // 获取 gizmo 依附的组件
    let target = this.target;

    // 获取 gizmo 依附的节点
    let node = this.node;

    // // 获取节点世界坐标
    let position = node.convertToWorldSpaceAR(cc.v2(0, 0));

    // 转换世界坐标到 svg view 上
    // svg view 的坐标体系和节点坐标体系不太一样，这里使用内置函数来转换坐标
    position = this.worldToPixel(position);

    // 对齐坐标，防止 svg 因为精度问题产生抖动
    position = Editor.GizmosUtils.snapPixelWihVec2(position);

    // 移动 svg 工具到坐标
    this._tool.plot(target.vertexes, position);

  }
}

module.exports = PointsPolygonGizmo;


// 欢迎关注公众号【白玉无冰】