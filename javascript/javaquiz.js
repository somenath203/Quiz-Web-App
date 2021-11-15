const quizDB = [
    {
        question: "Q1: Javascript is a _____ side programming language",
        a: "Client",
        b: "Server",
        c: "Both",
        d: "None",
        ans: "ans3"

    },
    {
        question: "Q2: How do you find the minimum of x and y using Javascript?",
        a: "min(x,y)",
        b: "Math.min(x,y)",
        c: "Math.min(xy)",
        d: "min(xy)",
        ans: "ans2"

    },
    {
        question: "Q3: Which of the following CSS property is used to set the background image of an element?",
        a: "background-attachement",
        b: "background-image",
        c: "background-color",
        d: "none of the above",
        ans: "ans2"
    },
    
    {
        question: "Q4: Which CSS property is used to specify the transparency of an element?",
        a: "opacity",
        b: "filter",
        c: "visibility",
        d: "overlay",
        ans: "ans1"
    },
    {
        question: "Q5: Which of the following is used to specify the subscript of text using CSS?",
        a: "vertical-align: sub",
        b: "vertical-align: super",
        c: "vertical-align: subscript",
        d: "None of the above",
        ans: "ans1"

    },
    {
        question: "Q6: What type of tag is <input>?",
        a: "format tag",
        b: "empty tag",
        c: "All of the above",
        d: "None of the above",
        ans: "ans2"

    },
    {
        question: "Q7: HTML tags are enclosed in ___ ",
        a: "# and #",
        b: "{ and }",
        c: "! and ?",
        d: "< and >",
        ans: "ans4"

    },
    {
        question: "Q8: Which of the following attribute is used to provide a unique name to an element?",
        a: "class",
        b: "id",
        c: "type",
        d: "None of the above",
        ans: "ans2"

    },
    {
        question: "Q9: Which of the following is the correct way for calling the javascript code?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        ans: "ans4"

    },
    {
        question: "Q10: Which of the following type of a variable is volatile?",
        a: "Mutable Variable",
        b: "Dynamic Variable",
        c: "Volatile Variable",
        d: "Immutable Variable",
        ans: "ans1"

    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach(element => {
        if (element.checked) {
            answer = element.id;
            
        }
        
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((element) => element.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);


    if(checkedAnswer == quizDB[questionCount].ans)
    {
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }else{
        showScore.innerHTML = `
             <h3><center>Total Score :- ${score}/${quizDB.length}</center></h3>
             <center><button class="btn" onclick="location.reload()"> Play Again </button></center>
        `;

        showScore.classList.remove('scoreArea')
    }

});
 