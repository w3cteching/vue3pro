import Vue from 'vue'
// 全局自定义指令
Vue.directive('focus', {
  inserted (el) {
    console.log('当前自定义指令绑定的dom:', el)
    el.focus();
  }
})

/**
   * Vue.directive('自定义指令名',{自定义指令选项})
   * 参考官方：https://cn.vuejs.org/v2/guide/custom-directive.html
   */

Vue.directive('drag', {
  inserted (dv) {
    // console.log('拖拽：', dv)
    // var dv = document.getElementById('dv');
    dv.style.position = 'absolute';
    var x = 0;
    var y = 0;
    var l = 0;
    var t = 0;
    var isDown = false;
    // 鼠标按下事件
    dv.onmousedown = function (e) {
      console.log('onmousedown')
      // 获取x坐标和y坐标
      x = e.clientX;
      y = e.clientY;

      // 获取左部和顶部的偏移量
      l = dv.offsetLeft;
      t = dv.offsetTop;
      // 开关打开
      isDown = true;
      // 设置样式
      dv.style.cursor = 'move';
    }
    // 鼠标移动
    window.onmousemove = function (e) {
      if (isDown === false) {
        return;
      }
      // 获取x和y
      var nx = e.clientX;
      var ny = e.clientY;
      // 计算移动后的左偏移量和顶部的偏移量
      var nl = nx - (x - l);
      var nt = ny - (y - t);

      dv.style.left = nl + 'px';
      dv.style.top = nt + 'px';
    }
    // 鼠标抬起事件
    dv.onmouseup = function () {
      // 开关关闭
      isDown = false;
      dv.style.cursor = 'default';
    }
  }
})
