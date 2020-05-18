(function (doc, win) {
    //获取html标签
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;

            //适配iphone6 
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;

    //监听横竖屏和resize事件变化
    win.addEventListener(resizeEvt, recalc, false);
    //页面一加载，就会动态设置html字号 
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);