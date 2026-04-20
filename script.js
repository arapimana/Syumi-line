function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value.trim().toLowerCase();
    const result = document.getElementById('result');

    const hashedInput = CryptoJS.MD5(answerInput).toString();

    const targetHash1 = "115c87258963fd94d34e6a96a9c4d27d";

    if (hashedInput === targetHash1) {
       
        result.innerHTML = '<a href="https://arapimana.github.io/ohayou/" target="_blank" style="color: #0000cd; font-weight: bold; font-size: 20px; text-decoration: underline;">ライセンス資格確認</a>';
    } else {
        result.textContent = "ライセンス資格なし";
        result.style.color = "red";
    }
}
