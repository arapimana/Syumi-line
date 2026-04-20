function checkAnswer() {

    const answerInput = document.getElementById('answerInput').value.trim().toLowerCase();
    const result = document.getElementById('result');

    const hashedInput = CryptoJS.MD5(answerInput).toString();


    const targetHash1 = "772f44c4ca008985390979379637890b";

    if (hashedInput === targetHash1) {
        result.innerHTML = '<a href="https://arapimana.github.io/ohayou/" target="_blank">ライセンス資格確認</a>';
    } else {
        result.textContent = "ライセンス資格なし";
    }
}
