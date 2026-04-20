function checkAnswer() {

    const answerInput = document.getElementById('answerInput').value.trim().toLowerCase();
    const result = document.getElementById('result');

    if (answerInput === "showdown") {
        result.innerHTML = '<a href="https://arapimana.github.io/Syumi-line/" target="_blank" style="color: #00ff00; font-weight: bold; font-size: 20px;">ライセンス資格確認</a>';
    } else {
        result.textContent = "ライセンス資格なし";
    }
}
