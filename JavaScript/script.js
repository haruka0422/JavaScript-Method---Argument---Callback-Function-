document.write("<p><b><big>課題</big></b></p>");

document.write(
  "<p>1.プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。</p>"
);

document.write(
  "<p>プロパティーとは、オブジェクト指向プログラミングにおけるオブジェクトの属性や状態を表す要素です。</p><p>プロパティの主な特徴は、オブジェクトの状態や属性を保持することです。</p>"
);

document.write(
  "<p>一方、メソッドとは、オブジェクトが取りうるアクションや振る舞いを実装したもので、特定のタスクを実行するためのコードの集まりです。</p><p>オブジェクトの振る舞いを定義するプログラムの一部であり、オブジェクトのプロパティに対する操作を行います。</p>"
);

let obj1 = {
  showText: function () {
    console.log("おはようございます！");
  },
};

obj1.showText();

let obj2 = {
  showText: function (name) {
    console.log("こんにちは、" + name + "さん！");
  },
};

obj2.showText("A");

let obj3 = {
  showText: function () {
    console.log("ありがとうございます");
  },
};

obj3.showText();

document.write(
  "<p>2.下記の関数を実行してその結果をコンソールに表示してください。(スコープ内に書く方法はだめです。)</p>"
);

function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。";
  return result;
}

const fruitprice = fruit("りんご", 300);

console.log(fruitprice);

document.write(
  "<p>3.下記の関数を経由して2つの関数を実行するような処理を作ってください。</p>"
);

function addTax(price, func) {
  // priceは値段
  // funcは実行する関数名
  // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)

  const taxPrice = Math.round(price * 1.1);
  func(taxPrice);
}

// トマトの税込み価格をコンソールに表示させる処理

function tomatoPrice(taxPrice) {
  console.log("トマトの税込み価格は" + taxPrice + "円です");
}
addTax(200, tomatoPrice);

// 玉ねぎの税込み価格をコンソールに表示させる処理

function tamanegiPrice(taxPrice) {
  console.log("玉ねぎの税込み価格は" + taxPrice + "円です");
}
addTax(100, tamanegiPrice);
