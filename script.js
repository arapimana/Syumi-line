function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "showdown") {
        result.innerHTML = '<a href="https://arapimana.github.io/ohayou/" target="_blank">ライセンス資格確認</a>';
    } else if (answerInput === "????????!") {
        result.textContent = "???????";
    } else {
        result.textContent = "ライセンス資格なし";
    }
}
