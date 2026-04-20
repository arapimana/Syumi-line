function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');


    
    const hashedInput = CryptoJS.MD5(answerInput).toString();


    const targetHash1 = "772f44c4ca008985390979379637890b";
    

    const targetHash2 = "87b3a4a16223592186717a6f23023a1d"; 

    if (hashedInput === targetHash1) {
        result.innerHTML = '<a href="https://arapimana.github.io/ohayou/" target="_blank">ライセンス資格確認</a>';
    } else if (hashedInput === targetHash2) {
        result.textContent = "???????";
    } else {
        result.textContent = "ライセンス資格なし";
    }
}
