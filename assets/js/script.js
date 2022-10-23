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

clickstart.onclick = timer;
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

    questioncontainer.appendChild(qheader);
    questioncontainer.appendChild(ansA);
    questioncontainer.appendChild(ansB);
    questioncontainer.appendChild(ansC);
    questioncontainer.appendChild(ansD);
}



