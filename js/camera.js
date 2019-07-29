if (typeof navigator.mediaDevices.getUserMedia !== 'function') {
    const err = new Error('getUserMedia()が利用できないブラウザです！');
    alert(`${err.name} ${err.message}`);
    throw err;
}

const $video = document.getElementById('video_area');  // 映像表示エリア

function copyFrame() {
    let canvas_capture_image = document.getElementById('capture_image');
    let cci = canvas_capture_image.getContext('2d');
    let va = document.getElementById('video_area');

    canvas_capture_image.width = va.videoWidth;
    canvas_capture_image.height = va.videoHeight;
    cci.drawImage(va, 0, 0);  // canvasに『「静止画取得」ボタン』押下時点の画像を描画。
}
