function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "showdown") {
        result.textContent = "暇なんですね！";
    } else if (answerInput === "？？") {
        result.textContent = "そうじゃないっす";
    } else {
        result.textContent = "残念,,,";
    }
}
