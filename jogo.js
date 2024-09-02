let score = 0;
let timeLeft = 90;
let currentAnswer;
let timer;

function startGame() {
    generateQuestion();
    timer = setInterval(updateTimer, 1000);
}

function generateQuestion() {
    const operations = ['+', '-', '*', '/'];
    const op = operations[Math.floor(Math.random() * operations.length)];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    
    switch (op) {
        case '+':
            currentAnswer = num1 + num2;
            document.getElementById('question').textContent = `${num1} + ${num2} = ?`;
            break;
        case '-':
            currentAnswer = num1 - num2;
            document.getElementById('question').textContent = `${num1} - ${num2} = ?`;
            break;
        case '*':
            currentAnswer = num1 * num2;
            document.getElementById('question').textContent = `${num1} * ${num2} = ?`;
            break;
        case '/':
            currentAnswer = num1 / num2;
            document.getElementById('question').textContent = `${num1} / ${num2} = ?`;
            break;
    }
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    if (userAnswer === currentAnswer) {
        score++;
        document.getElementById('score').textContent = `Pontuação: ${score}`;
    }
    document.getElementById('answer').value = '';
    generateQuestion();
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = `Tempo: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timer);

        if (score <= 5) {
            document.getElementById('question').textContent = `Pode melhorar! Sua pontuação final é ${score}.`;
        } 
        if (score > 5 && score <= 9) {
            document.getElementById('question').textContent = `Muito bem! Sua pontuação final é ${score}.`;
        } 
        if (score > 9) {
            document.getElementById('question').textContent = `Parabéns! Sua pontuação final é ${score}.`;
        }
        
        document.getElementById('answer').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    }
}

startGame();
