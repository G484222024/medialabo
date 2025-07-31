
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
console.log("1件名の検索結果");
console.log("店名: " + data.results.shop[0].name);
console.log("住所: " + data.results.shop[0].address);
console.log("予算: " + data.results.shop[0].budget.name);
console.log("キャッチコピー: " + data.results.shop[0].catch);
console.log("ジャンル: " + data.results.shop[0].genre.name);
console.log("営業日時: " + data.results.shop[0].open);
console.log("アクセス: " + data.results.shop[0].access);
console.log("最寄り駅: " + data.results.shop[0].station_name);
console.log("写真: " + data.results.shop[0].photo.pc.m);

console.log("2件名の検索結果");
console.log("店名: " + data.results.shop[1].name);
console.log("住所: " + data.results.shop[1].address);
console.log("予算: " + data.results.shop[1].budget.name);
console.log("キャッチコピー: " + data.results.shop[1].catch);
console.log("ジャンル: " + data.results.shop[1].genre.name);
console.log("営業日時: " + data.results.shop[1].open);
console.log("アクセス: " + data.results.shop[1].access);
console.log("最寄り駅: " + data.results.shop[1].station_name);
console.log("写真: " + data.results.shop[1].photo.pc.m);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
    // div#result 要素を作成
    let old= document.querySelector('#result');
    if (old) {
        old.remove();
    }
    let resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.body.insertAdjacentElement('beforeend', resultDiv);

    for (let i = 0; i < data.results.shop.length; i++) {
        let shop = data.results.shop[i];
        
        let title = document.createElement('h2');
        title.textContent = `${i+1}件目の検索結果`;
        resultDiv.insertAdjacentElement('beforeend', title);
    
        let shopDiv = document.createElement('div');
        resultDiv.insertAdjacentElement('beforeend', shopDiv);
        
        let p = document.createElement('p');
        p.innerHTML = `<strong>店名:</strong> ${shop.name}`;
        shopDiv.insertAdjacentElement('beforeend', p);
        
        p = document.createElement('p');
        p.innerHTML = `<strong>住所:</strong> ${shop.address}`;
        shopDiv.insertAdjacentElement('beforeend', p);
        
        p = document.createElement('p');
        p.innerHTML = `<strong>予算:</strong> ${shop.budget.name}`;
        shopDiv.insertAdjacentElement('beforeend', p);
        
        p = document.createElement('p');
        p.innerHTML = `<strong>キャッチコピー:</strong> ${shop.catch}`;
        shopDiv.insertAdjacentElement('beforeend', p);
        
        p = document.createElement('p');
        p.innerHTML = `<strong>ジャンル:</strong> ${shop.genre.name}`;
        shopDiv.insertAdjacentElement('beforeend', p);
        
        p = document.createElement('p');
        p.innerHTML = `<strong>営業日時:</strong> ${shop.open}`;
        shopDiv.insertAdjacentElement('beforeend', p);
        
        p = document.createElement('p');
        p.innerHTML = `<strong>アクセス:</strong> ${shop.access}`;
        shopDiv.insertAdjacentElement('beforeend', p);
        
        p = document.createElement('p');
        p.innerHTML = `<strong>最寄り駅:</strong> ${shop.station_name}`;
        shopDiv.insertAdjacentElement('beforeend', p);
        
        p = document.createElement('p');
        p.innerHTML = '<strong>写真:</strong>';
        shopDiv.insertAdjacentElement('beforeend', p);
        
        let img = document.createElement('img');
        img.src = shop.photo.pc.m;
        img.alt = shop.name;
        shopDiv.insertAdjacentElement('beforeend', img);
    }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述//
let b =document.querySelector('#send');
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let genre = document.querySelector('#genre').value;
  let url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${genre}.json`;
  axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if(typeof data === 'string') {
    data = JSON.parse(data);
  }
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること


