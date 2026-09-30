let currentQuestion = 0;

const questions = {
    "Data Analyst": [
        "What is the difference between WHERE and HAVING in SQL?",
        "What is a Pandas DataFrame?",
        "What is the difference between mean and median?"
    ],

    "Python Developer": [
        "What is the difference between a list and a tuple in Python?",
        "What are functions in Python?",
        "What is exception handling in Python?"
    ],

    "AIML Engineer": [
        "What is Machine Learning?",
        "What is the difference between supervised and unsupervised learning?",
        "What is overfitting?"
    ],

    "Django Developer": [
        "What is Django?",
        "What is a Django model?",
        "What is the purpose of urls.py in Django?"
    ],

    "Software Developer": [
        "What is OOP?",
        "What is inheritance?",
        "What is the difference between compiler and interpreter?"
    ]
};


function startInterview() {

    const role = document.getElementById("role").value;

    if (role === "") {
        alert("Please select a job role.");
        return;
    }

    currentQuestion = 0;

    document.getElementById("selected-role").textContent = role;

    document.getElementById("start-section")
        .classList.add("hidden");

    document.getElementById("interview-section")
        .classList.remove("hidden");

    document.getElementById("feedback-section")
        .classList.add("hidden");

    showQuestion();
}


function showQuestion() {

    const role = document.getElementById("role").value;

    const questionList = questions[role];

    document.getElementById("question").textContent =
        questionList[currentQuestion];

    document.getElementById("answer").value = "";
}


function submitAnswer() {

    const answer = document.getElementById("answer").value.trim();

    if (answer === "") {
        alert("Please enter your answer.");
        return;
    }

    document.getElementById("score").textContent = "8";

    document.getElementById("feedback").textContent =
        "Good answer! Your response shows that you understand the basic concept. Try adding a practical example to make your answer stronger.";

    document.getElementById("feedback-section")
        .classList.remove("hidden");
}


function nextQuestion() {

    const role = document.getElementById("role").value;

    currentQuestion++;

    if (currentQuestion >= questions[role].length) {

        alert("Interview completed! 🎉");

        location.reload();

        return;
    }

    document.getElementById("feedback-section")
        .classList.add("hidden");

    showQuestion();
}