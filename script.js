const quizData = [
    {
        question: "Which of the following is a client-side language?",
        options: ["Java", "C", "Python", "JavaScript"],
        correctIndex: 3,
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Cascading Style Sheet", "Jason Object Notation", "Helicopters Terminals Motorboats Lamborghinis"],
        correctIndex: 0,
    },
    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "none of the above"],
        correctIndex: 1,
    },
    {
        question: "What does CSS stand for?",
        options: ["Hypertext Markup Language", "Cascading Style Sheet", "Jason Object Notation", "Helicopters Terminals Motorboats Lamborghinis"],
        correctIndex: 1,
    },
];

let index = 0;
let correct = 0;
let incorrect = 0;
const total = quizData.length;
const questionBox = document.getElementById("questionBox");
const options = document.querySelectorAll("input[type='radio']");
const submitButton = document.querySelector("#submit");

const loadQuestion = () => {
    if (index === total) {
        return quizEnd();
    }

    reset();
    const data = quizData[index];
    questionBox.textContent = `${index + 1}) ${data.question}`;

    options.forEach((input, i) => {
        const label = input.nextElementSibling;
        label.textContent = data.options[i];
        input.value = i.toString();
    });
};

submitButton.addEventListener("click", () => {
    const data = quizData[index];
    const ans = getAnswer();

    if (ans === data.correctIndex.toString()) {
        correct++;
    } else {
        incorrect++;
    }

    index++;
    loadQuestion();
});

const getAnswer = () => {
    return Array.from(options).find((input) => input.checked)?.value;
};

const reset = () => {
    options.forEach((input) => {
        input.checked = false;
    });
};

const quizEnd = () => {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <div class="col">
            <h3 class="w-100">Hi, you've scored ${correct} / ${total}</h3>
        </div>
    `;
};

loadQuestion();
