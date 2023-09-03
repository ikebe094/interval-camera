# interval-camera

学校の課題で制作したものです。
Google Chromeで動作します。iPhone、iPadではうまく動かないかもしれません。
パソコンのWEBカメラを使用して連続した画像を撮影することができます。
ノートPCの場合は、三脚が無くても画面の開き方によって位置を固定できるので、雲などの撮影に便利です。

カメラで撮影された映像を一旦videoの領域に表示し、ここから1コマ取得することによって画像にしています。
撮影された画像は画面の下に一覧表示されます。
撮影された画像を動画で保存する際のファイル形式はWebM/VP8になります。
フレームレートを指定しない場合は30fpsになります。
撮影時間が長い場合には端末が熱くなることがあります。また動画の生成には時間がかかることがあります。


こちらで試すことができます
<https://ikebe094.github.io/interval-camera/>

下記のサイトから一部のコードを利用しています。


I made this on a school assignment.
Works with Google Chrome, but may not work well on iPhone or iPad.
You can use the web camera on your computer to take continuous pictures.
In the case of a laptop PC, the position can be fixed depending on how the screen is opened, which is useful for shooting clouds such as the sky.

You can try it here
<https://ikebe094.github.io/interval-camera/>

The image captured by the camera is once displayed in the `<video>` area, from which a single frame is acquired to create the image.
The captured images are listed at the bottom of the screen.
The file format for saving the captured images as a movie is WebM/VP8.
If the frame rate is not specified, the frame rate will be 30 fps.
The device may become hot if the recording time is long. It may also take some time to generate video.


Some codes are used from the following sites.


# 参考にしたサイト

Canvas API - Web API | MDN
<https://developer.mozilla.org/ja/docs/Web/API/Canvas_API>

<video>: 動画埋め込み要素 - HTML: ハイパーテキストマークアップ言語 | MDN
<https://developer.mozilla.org/ja/docs/Web/HTML/Element/video>

HTML5のWebRTCでPCに接続されたカメラ映像をウェブブラウザー上に表示してコマ画像を保存したい - Qiita
<https://qiita.com/qiita_mona/items/e58943cf74c40678050a>

Canvasに描画するとWebM動画を作ってくれる「Whammy」を使ってみた - Qiita
<https://qiita.com/kjunichi/items/b45b564f24b4a2be83b7>

antimatter15/whammy: A real time javascript webm encoder based on a canvas hack
<https://github.com/antimatter15/whammy>
