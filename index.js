(function () {
    //使用するメソッドを読み込む
    var Engine = Matter.Engine,
        Gui = Matter.Gui,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        Constraint = Matter.Constraint,
        RenderPixi = Matter.RenderPixi,
        Events = Matter.Events,
        Bounds = Matter.Bounds,
        Vector = Matter.Vector,
        Vertices = Matter.Vertices,
        MouseConstraint = Matter.MouseConstraint;

    var STARGE = {};

    var _engine,
        _gui;

    //初期化
    STARGE.init = function () {

        //描画するDOMを取得
        var container = document.getElementById('stage');

        var options = {
            positionIterations: 6,
            velocityIterations: 4,
            enableSleeping: false
        };

        //描画域を作成(描画したいDOM,オプションを読み込む)
        _engine = Engine.create(container, options);

        //実行
        Engine.run(_engine);

        STARGE.ballSample();
    };

    //ページの読み込みが終わったらSTARGE.initを実行
    if (window.addEventListener) {
        window.addEventListener('load', STARGE.init);
    } else if (window.attachEvent) {
        window.attachEvent('load', STARGE.init);
    }

    STARGE.ballSample = function () {
        var _world = _engine.world;

        STARGE.reset();

        //circle(x座標,y座標,大きさ,オプション)
        var ball = Bodies.circle(530, 100, 50, {render: {fillStyle: '#d04030'}
        });

        //World.add(追加)
        World.add(_world, [ball]);
    };

    //描画域の設定
    STARGE.reset = function () {

        var _world = _engine.world;

        //描画クリア
        World.clear(_world);
        Engine.clear(_engine);

        //重力値
        _engine.world.gravity.y = 1;

        var offset = 0;

        //矩形で枠線を作る(rectangle(x座標,y座標,横幅,縦幅,option))
        World.add(_world, [
            Bodies.rectangle(400, 0, 800, 1, {isStatic: true}),
            Bodies.rectangle(800, 300, 1, 600, {isStatic: true}),
            Bodies.rectangle(0, 0, 1, 600, {isStatic: true}),
            Bodies.rectangle(400, 600, 800, 1, {isStatic: true})
        ]);
        //renderのオプション(各種renderのオプション)
        var renderOptions = _engine.render.options;
        renderOptions.wireframes = false;
    };
})();
