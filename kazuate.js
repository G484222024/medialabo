// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let gameEnd = false;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let yoso = 4;
    if (gameEnd) {
        console.log(kaisu + "回目の予想: " + yoso);
        console.log("答えは " + kotae + " でした．すでにゲームは終わっています");
        return; 
    }
    kaisu++;

    console.log(kaisu + "回目の予想: " + yoso);
    if (yoso === kotae) {
        console.log("正解です．おめでとう！");
        gameEnded = true;
    } else {
    if (kaisu >= 3) {
      console.log("まちがい．残念でした答えは " + kotae + " です．");
      gameEnd = true;
    } else if (yoso < kotae) {
      console.log("まちがい．答えはもっと大きいですよ");
    } else {
      console.log("まちがい．答えはもっと小さいですよ");
    }
    } 
}