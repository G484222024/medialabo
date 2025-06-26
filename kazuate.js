// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let gameEnd = false;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
b = document.querySelector('button#guess');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input#seisu');
  let yoso = parseInt(i.value); 
  kaisu++;
  let k = document.querySelector('span#kaisu');
  k.textContent = kaisu;
  let a = document.querySelector('span#answer');
  a.textContent = yoso;
  let r = document.querySelector('p#result');
  if (gameEnd) {
  r.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  return;
  }
  if (yoso === kotae) {
    r.textContent = "正解です．おめでとう！";
    gameEnd = true;
  } else {
    if (kaisu >= 3) {
      r.textContent = "まちがい．残念でした答えは " + kotae + " です．";
      gameEnd = true;
    } else if (yoso < kotae) {
      r.textContent = "まちがい．答えはもっと大きいですよ";
    } else {
      r.textContent = "まちがい．答えはもっと小さいですよ";
    }
  }

}