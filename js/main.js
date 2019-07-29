let action_num = 0;
let canvas_num = 1;
let capture_num = 1;

function action_btn() {
    switch (action_num) {
        case 0:
            console.log("case 0\n開始します");
            if (document.getElementById("times").value > 0 && document.getElementById("interval").value > 0) {
                setCamera();
                action_num += 1;
                document.getElementById("btn_img").src = "./img/button01.png";
                document.getElementById("message").innerHTML = "準備ができたら、「撮影開始」ボタンを押してください。";
                break;
            }
            window.alert("テキストボックスに0以上の数を入れてください。")
            break;
        case 1:
            console.log("case 1\n撮影開始");
            action_num += 1;
            document.getElementById("btn_img").src = "./img/button02.png";
            startCapture();
            document.getElementById("message").innerHTML = "現在撮影中です。「一時停止」ボタンを押すと一時停止できます。";
            break;
        case 2:
            console.log("case 2\n一時停止します");
            action_num += 1;
            document.getElementById("btn_img").src = "./img/button03.png";
            clearInterval(cnt01);
            document.getElementById("message").innerHTML = "現在一時停止中です。「再開」ボタンを押すと再開します。";
            break;
        case 3:
            console.log("case 3\n再開します");
            action_num -= 1;
            document.getElementById("btn_img").src = "./img/button02.png";
            startCapture();
            document.getElementById("message").innerHTML = "現在撮影中です。「一時停止」ボタンを押すと一時停止できます。";
            break;
        case 4:
            console.log("case 4\n動画生成");
            document.getElementById("message").innerHTML = "動画を生成中です。しばらくお待ちください。";
            makeWebM();
            break;
        case 5:
            console.log("case 5\nダウンロード");
            break;
    }
}

function draw() {
    let time = document.getElementById('times').value;
    let canvas = document.getElementById('capt' + capture_num);
    let ctx = canvas.getContext('2d');
    let va = document.getElementById('video_area');
    ctx.width = va.videoWidth;
    ctx.height = va.videoHeight;
    ctx.drawImage(va, 0, 0);
    if (capture_num >= time && cnt01 != null) {
        clearInterval(cnt01);
        action_num = 4;
        document.getElementById("btn_img").src = "./img/button04.png";
        document.getElementById("message").innerHTML = "撮影が終了しました。「動画生成」ボタンを押すと画像から動画を作成します。";
    }
    capture_num += 1;
}

function setCamera() {
    let time = document.getElementById('times').value;
    for (var i = 0; i < time; i++) {
        let nsdv = '<canvas id="capt' + canvas_num + '" class="capt_frame" width=640 height=480>';
        $('div').append(nsdv);
        canvas_num += 1;
    }
    const $video = document.getElementById('video_area');
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => $video.srcObject = stream)
        .catch(err => alert(`${err.name} ${err.message}`));
}

function startCapture() {
    let interval = document.getElementById('interval').value;
    cnt01 = setInterval("draw()", interval * 1000);
}

function makeWebM() {
    let fps = document.getElementById("fps").value;
    if (fps > 0) {
        video = new Whammy.Video(fps);
    } else {
        video = new Whammy.Video(30);
    }
    let time = document.getElementById('times').value;
    for (var i = 1; i <= time; i++) {
        let nsdv = 'capt' + i;
        canvas = document.getElementById(nsdv);

        ctx = canvas.getContext('2d');
        video.add(ctx);
    }
    let output = video.compile();
    let url = webkitURL.createObjectURL(output);
    console.log(url);
    document.getElementById('videoItem').src = url;
    document.getElementById("message").innerHTML = '<a style="" id="download" download="capture.webm" href="' + url + '">ダウンロード</a>';
    document.getElementById("btn_img").src = "./img/button05.png";
}

$('.capt_frame').on('click', function () {
    let canvas_id = $(this).attr('id');
    console.log(canvas_id);
    let canvasElm = document.getElementById(canvas_id);
    let link = document.createElement("a");
    link.href = canvasElm.toDataURL("image/png");
    link.download = canvas_id + ".png";
    link.click();
})
