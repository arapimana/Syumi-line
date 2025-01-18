function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "showdown") {
        result.textContent = "......";
    } else if (answerInput === "????????!") {
        result.textContent = "???????";
    } else {
        result.textContent = "ライセンス資格なし";
    }
}
