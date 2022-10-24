// 1. build questionaire
// 2. give a var then state
// 3. build timer
// 4. build an active click for button
// 5. building a json to store information

// questions with correspoding answer

var question = [{
    q: "commonly used data types DO NOT include:",
    a: "1. Strings",
    b: "2. Booleans",
    c: "3. Alerts",
    d: "4. Numbers",
    correct: "3. Alerts",
},
{
    q: "The condition in an if/else statement is enclosed with ____.",
    a: "1. Quotes",
    b: "2. Curly brackets",
    c: "3. Parentheses",
    d: "4. Square brackets",
    correct: "3. Parentheses",
},
{
    q: "Arrays in JavaScript can be used to store ____.",
    a: "1. Numbers and strings",
    b: "2. Other arrays",
    c: "3. Booleans",
    d: "4. All of the above",
    correct: "4. All of the above",
},
{
    q: "String values must be encosed within ____ when being assigned to variables.",
    a: "1. Quotes",
    b: "2. Curly brackets",
    c: "3. Parentheses",
    d: "4. Square brackets",
    correct: "1. Quotes",
},
{
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "1. Javascript",
    b: "2. Terminal/Bash",
    c: "3. for loops",
    d: "4. console.log",
    correct: "4. console.log",
},
{
    q: "What is the correct syntax for referring to an external script called 'code.js'?",
    a: "1. <script src='code.js'>",
    b: "2. <script href='code.js'>",
    c: "3. <script ref='code.js'>",
    d: "4. <script name='code.js'>",
    correct: "1. <script src='code.js'>",
}
];

// stating my variables 
var startclicker = document.getElementById("start");
var timeEl = document.getElementById("counter");
var rtime = 60;
var quiztime;
var questioncontainer = document.querySelector("#qcbtn");

// Add function for timer

function timer() {
    timeEl.textContent = "Remaining time: "+ rtime + "s";
    quiztime = setInterval(function (){
        if (rtime > 0) {
            adjustTime(-1);
        }
        else {
            endquiz();
        }
    }, 1000);
}
function adjustTime(amount) {
    rtime += amount;
    if (rtime < 0) {
        rtime = 0;
    }
    timeEl.textContent = "Remaining time:" + rtime + "s";
}

// adding an click event

startclicker.onclick = timer;
var Qselection = function (question) {
    questioncontainer.innerHTML = "";

    var qheader =document.createElement("h2");
    qheader.textContent = question.q;

    var ansA = document.createElement("button");
    ansA.textContent = question.a;
    ansA.addEventListener("click", answerClick);

    var ansB = document.createElement("button");
    ansB.textContent = question.b;
    ansB.addEventListener("click", answerClick);

    var ansC = document.createElement("button");
    ansC.textContent = question.c;
    ansC.addEventListener("click", answerClick);

    var ansD = document.createElement("button");
    ansD.textContent = question.d;
    ansD.addEventListener("click", answerClick);


// appending the container to the questioner
    questioncontainer.appendChild(qheader);
    questioncontainer.appendChild(ansA);
    questioncontainer.appendChild(ansB);
    questioncontainer.appendChild(ansC);
    questioncontainer.appendChild(ansD);
}

// answering the click of stated event to start quiz

var currentqq = 0;
var userscore = 0;
var rightans = question[currentqq].correct;
var views = document.getElementById("vscore");

// giving the determination of the correct answer
var answerClick = function(event) {
    event.preventDefault();
    var userans = event.target.textContent;
    rightans = question[currentqq].correct;

    var anschoice = document.querySelector("#corans");
    if (userans !== rightans) {
        adjustTime(-10);
        anschoice.textContent = "wrong answer!";
        currentqq++;
        if (currentqq >= question.length) {
            endquiz();
        }
        else {Qselection(question[currentqq])};
    }
        else if (userans === rightans) {
            currentqq++;
            anschoice.textContent = "correct answer!";
            userscore++;
            if (currentqq >= question.length) {
                endquiz();
            }
            else (Qselection(question[currentqq]))
        };
};

// stating quz questionair event

var quiz = function (event) {
    event.preventDefault();
    resetDisplay();
    Qselection(question[currentqq]);
};

// Reset of page when submit and play again

function resetDisplay() {
    questioncontainer.innerHTML="";
    document.querySelector("#page").style.dispaly = "none";
}


// json to store information into the browser

function highscore() {
    let data = localStorage.getItem("object");
    let getData = JSON.parse(data);
    let name = getData.name;
    let score = getData.score;
    questioncontainer.innerHTML = "";
    questioncontainer.innerHTML = `${name} ${score}`;

}

views.addEventListener("click", () => {
    highscore();
})

var initials;
function endquiz() {
    resetDisplay();
    timeEl.textContent = "";
    clearInterval(quiztime);
    var endpage = document.createElement("h2");
    questioncontainer.appendChild(endpage);

    let blank = document.querySelector("#corans");
    blank.innerHTML = " ";

endpage.innerHTML = "Finished! your score is " + userscore + ". Enter initial and submit";

var intbox = document.createElement("input");
blank.appendChild(intbox);

var submitintbtn = document.createElement("button");
submitintbtn.textContent = "Submit";
blank.appendChild(submitintbtn);

submitintbtn.addEventListener("click", () => {
    if (intbox.value.length === 0) return false;

    let storeInitials = (...input) => {
        let data = JSON.stringify({ "name":input[0], "score":input[1]})
        localStorage.setItem("object", data)
    }
    storeInitials(intbox.value, userscore);

    var playAgain = document.createElement("button");
    playAgain.textContent= "Play Again!";
    blank.appendChild(playAgain);

    playAgain.addEventListener("click", () => {
        location.reload();
    })
});

    document.querySelector("input").value = "";

    intbox.addEventListener("submit", endquiz);

};
function renderInitials() {
    submitintbtn.addEventListener('click', function(event) {
        event.preventDefault;
}
)};

startclicker.addEventListener('click', quiz);

