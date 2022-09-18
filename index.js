function createCategory() {

    for (let i = 0; i < myApp.length; i++) {
    
    const categoryList = document.createElement("div");
    
    categoryList.innerHTML = myApp[i].category;
    
    categoryList.setAttribute("data-id", i);
    
    categoryList.setAttribute("onclick", "selectedCategory(this)");
    
    categoryBox.appendChild(categoryList);
    
    }
    
    
    
    }
    
    function selectedCategory(ele) {
    
    categoryIndex = ele.getAttribute("data-id");
    
    categoryText.innerHTML = myApp[categoryIndex].category;
    
    quizHomeBox.classList.remove("show");
    
    quizBox.classList.add("show");
    
    startTimer();
    
    startEveryQuestionTimer()
    
    nextQuestion();
    
    }
    
    
    function check(ele) {
    
    const id = ele.id;
    
    if (id == myApp[categoryIndex].quizWrap[questionIndex].answer) {
    
    ele.classList.add("correct");
    
    score++;
    
    scoreBoard();
    
    } else {
    
    ele.classList.add("wrong");
    
    for (let i = 0; i < optionBox.children.length; i++) {
    
    if (
    
    optionBox.children[i].id ==
    
    myApp[categoryIndex].quizWrap[questionIndex].answer
    
    ) {
    
    optionBox.children[i].classList.add("show-correct");
    
    }
    
    }
    
    }
    
    attempt++;
    
    disableOptions();
    
    // showAnswerDescription();
    
    showNextQuestionBtn();
    
    if (number == myApp[categoryIndex].quizWrap.length) {
    
    quizOver();
    
    }
    
    }
    
    
    
    
    
    /// Function to Render the Next Question.
    
    nextQuestionBtn.addEventListener("click", nextQuestion);
    
    function nextQuestion() {
    
    generateRandomQuestion();
    
    hideNextQuestionBtn();
    
    hideAnswerDescription();
    
    clearInterval(everyQuestionInterval);
    
    startEveryQuestionTimer();
    
    hideTimeUpText();
    
    }
    
    // Function to select the random question from the selected category.
    
    function generateRandomQuestion() {
    
    const randomNumber = Math.floor(
    
    Math.random() * myApp[categoryIndex].quizWrap.length
    
    );
    
    let hitDuplicate = 0;
    
    if (myArray.length == 0) {
    
    questionIndex = randomNumber;
    
    } else {
    
    for (let i = 0; i < myArray.length; i++) {
    
    if (randomNumber == myArray[i]) {
    
    hitDuplicate = 1;
    
    }
    
    }
    
    if (hitDuplicate == 1) {
    
    generateRandomQuestion();
    
    return;
    
    } else {
    
    questionIndex = randomNumber;
    
    }
    
    }
    
    myArray.push(randomNumber);
    
    console.log(myArray);
    
    }
    
    
    
   
    
    function quizResult() {
    
    // console.log(300 - timeLimitGlobal);
    
    let calcTime = timeLimitGlobal - value;
    
    document.querySelector(".username-value").innerHTML =
    
    sessionStorage.getItem("username");
    
    takenTime.innerHTML = calcTime;
    
    document.querySelector(".total-questions").innerHTML =
    
    myApp[categoryIndex].quizWrap.length;
    
    document.querySelector(".total-attempt").innerHTML = attempt;
    
    document.querySelector(".total-correct").innerHTML = score;
    
    document.querySelector(".total-wrong").innerHTML = attempt - score;
    
    const percentage = (score / myApp[categoryIndex].quizWrap.length) * 100;
    
    document.querySelector(".percentage").innerHTML = percentage.toFixed(2)
    
    + "%";
    
    console.log("ans",perQuestionTimeStamps)
    
    let count = 1
    
    perQuestionResult.innerHTML = perQuestionTimeStamps.map(
    
    (data)=>(
    
    `<div class = "res-data">Q${count++} - ${data} secs</div>` )
    
    )
    
    }
    
    myApp = [
    
    {
    
    category: "Pipes and Cisterns",
    
    quizWrap: [
    
    {
    
    question:
    
    "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
    
    options: [
    
    "10 min. 20 sec.",
    
    
    
    "11 min. 45 sec.",
    
    "11 min. 45 sec.",
    
    "14 min. 40 sec.",
    
    ],
    
    answer: 3,
    
    },
    
    {
    
    question:
    
    "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
    
    options: [
    
    "3 hrs 15 min",
    
    "3 hrs 45 min",
    
    "4 hrs 15 min",
    
    "4 hrs 1 min",
    
    ],
    
    answer: 1,
    
    },
    
    {
    
    question:
    
    "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2(1/3) hours to fill the tank. The leak can drain all the water of the tank in:",
    
    options: ["7 hours", "8 hours", "12 hours", "14 hours"],
    
    answer: 3,
    
    },
    
    {
    
    question:
    
    "A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in ?",
    
    options: ["20 hrs", "28 hrs", "36 hrs", "40 hrs"],
    
    answer: 0,
    
    },
    
    {
    
    question:
    
    "Three taps A,B and C can fill a tank in 12,15 and 20 hours respectively. If A is open all the time and B ,C are open for one hour each alternatively, the tank will be full in:",
    
    
    
    options: ["6 hrs", "20/3 hrs", "7 hrs", "15/2 hrs"],
    
    answer: 2,
    
    },
    
    {
    
    question:
    
    "12 buckets of water fill a tank when the capacity of each tank is 13.5 liters. How many buckets will be needed to fill the same tank,if the capacity of each bucket is 9 liters?",
    
    options: ["8", "15", "16", "18"],
    
    answer: 3,
    
    },
    
    {
    
    question:
    
    "One pipe can fill a tank  three times as fast as another pipe. If together the two pipes can fill the tank in 36 min, then the slower alone will be able to fill the tank in:",
    
    options: ["81 min", "108 min", "144 min", "192 min"],
    
    answer: 2,
    
    },
    
    {
    
    question:
    
    "Water flows into a tank which is 200 m long and 150 m wide, through a pipe of cross-section (0.3m x 0.2m) at 20 km/h. In what time will the water level be 12m ?",
    
    options: ["200 hrs", "240 hrs", "300 hrs", "270 hrs"],
    
    answer: 2,
    
    },
    
    {
    
    question:
    
    "A cistern has a leak which would empty the cistern in 20 minutes. A tap is turned on which admits 4 liters a minute into thecistern, and it is emptied in 24 minutes. How many liters does the cistern hold ?",
    
    options: ["360 lit", "480 lit", " 320 lit", "460 lit"],
    
    answer: 1,
    
    },
    
    {
    
    question:
    
    
    
    "Two pipes A and B can fill a tank in 15 min and 20 min respectively. Both the pipes are opened together but after 4 min, pipe A is turned off. What is the total time required to fill the tank ?",
    
    options: [
    
    "15 min 20 sec.",
    
    "16 min 40 sec.",
    
    "13 min 10 sec.",
    
    "14 min 40 sec.",
    
    ],
    
    answer: 3,
    
    },
    
    ],
    
    }]
    
    
    