/*
 * @Author: your name
 * @Date: 2021-12-08 16:02:30
 * @LastEditTime: 2021-12-09 14:56:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ccit-webe:\创正2021年\创正11月\拼音小游戏\js\main.js
 */
document.addEventListener('DOMContentLoaded', musicInWeixinHandler);

function musicInWeixinHandler() {
    musicPlay(true);
    document.addEventListener("WeixinJSBridgeReady", function () {
        musicPlay(true);
    }, false);
    document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
}

function musicPlay(isPlay) {
    var media = document.querySelector('#bg-music');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}
    // 获取画布的宽和高，后面计算使用



    function handleComplete() {
        document.querySelector('.start-game').style.display = 'block';
        document.querySelector('table').style.display = 'none';
        var canvas = document.getElementById('canvas')
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //创建舞台
        // var container = new createjs.Container(); //绘制外部容器
        // // stage.addChild(container);
        // var stage = new createjs.Stage(canvas);
        // //创建一个Shape对象，此处也可以创建文字Text,创建图片Bitmap
        // var rect = new createjs.Shape();
        // //用画笔设置颜色，调用方法画矩形，矩形参数：x,y,w,h
        // rect.graphics.beginFill("#f00").drawRect(0, 0, 100, 105);
        // //添加到舞台
        // stage.addChild(rect);
        // //刷新舞台
        // stage.update();
        // bg = new createjs.Bitmap("./images/btn.png");
        // bg.x = 11;
        // bg.y = 0;
        // //遮罩图形

        // stage.addChild(bg);
        // stage.update();

    };

    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);

    // 加载资源
    queue.loadManifest(manifestList);
    queue.on("fileload", function (e) {
        // console.log(manifestList[0].src);
        document.getElementById('aas').innerHTML = window.proNum + '%';
    });
    //监听进度事件
    queue.on("progress", function (e) {
        window.proNum = Math.ceil(e.progress * 100);
        $("#progress").html(proNum + "%");
        // console.log(proNum);
    });
    // 添加"资源加载完成"事件
    queue.on("complete", handleComplete, this);