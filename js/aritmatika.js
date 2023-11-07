document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const answers = [4, 2, 24]; // Jawaban dari pertanyaan

        const userAnswers = [
            parseInt(form.q1.value),
            parseInt(form.q2.value),
            parseInt(form.q3.value)
        ];

        let correctAnswers = 0;

        for (let i = 0; i < answers.length; i++) {
            if (userAnswers[i] === answers[i]) {
                correctAnswers++;
            }
        }

        const resultPercentage = (correctAnswers / answers.length) * 100;

        resultDiv.innerHTML = `Anda benar ${correctAnswers} dari ${answers.length} pertanyaan (${resultPercentage}%)`;
    });
});
