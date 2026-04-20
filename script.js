async function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    // 入力された文字を SHA-256 という方式でハッシュ化する関数
    const getHash = async (text) => {
        const msgUint8 = new TextEncoder().encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    };

    // 入力値をハッシュ化
    const hashedInput = await getHash(answerInput);

    // 正解のハッシュ値（"showdown" をハッシュ化したもの）
    const targetHash1 = "1219b6426463996599667794358f00037a544955f10f80784400e93a749f7ba3";
    
    // もう一つの答え（"????????!" 部分のハッシュ値 ※ここでは仮で設定しています）
    // もし別の単語にしたい場合は教えてください！
    const targetHash2 = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"; 

    if (hashedInput === targetHash1) {
        result.innerHTML = '<a href="https://arapimana.github.io/ohayou/" target="_blank">ライセンス資格確認</a>';
    } else if (hashedInput === targetHash2) {
        result.textContent = "???????";
    } else {
        result.textContent = "ライセンス資格なし";
    }
}
