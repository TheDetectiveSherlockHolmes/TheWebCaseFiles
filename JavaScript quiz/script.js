const quizQuestion = [
    { question: "What is the capital of India?", answer: "new delhi" },
    { question: "Which planet is known as Blue Planet?", answer: "earth" },
    { question: "What is 23 * 3?", answer: "69" },
    { question: "Who is the Prime Minister of India?", answer: "narendra modi" },
    { question: "Which language is primarily used in USA?", answer: "english" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestion.length; i++) {
        const userAnswer = prompt(quizQuestion[i].question);

        if (
            userAnswer &&
            userAnswer.toLowerCase().trim() ===
            quizQuestion[i].answer.toLowerCase().trim()
        ) {
            alert("Correct");
            score++;
        } else {
            alert(`Wrong Answer... The correct answer is ${quizQuestion[i].answer}`);
        }
    }

    alert(`Here is your total score ${score} out of ${quizQuestion.length}`);
}

runQuiz();
