const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('que-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const Beginner = document.getElementById('beginner')
const PreIntermediate = document.getElementById('pre-interm')
const Elementary = document.getElementById('elemantary')

let shuffledQuestions, currentQuiestionsIndex



function ChooseTask() {
    document.getElementById("choice").onclick()
   
   }

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuiestionsIndex++
    setNextQue()
})

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuiestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQue()
}

function setNextQue () {
    resetState()
    showQuestion(shuffledQuestions[currentQuiestionsIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuiestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
} 

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'Choose the right answer:Yesterday we ______ to the cinema',
        answers: [
            { text: 'went', correct: true},
            {text: 'want', correct:false},
            {text: 'been', correct: false}
        ]
    },
    {
        question: 'The story usually____from the fisrt page',
        answers: [
            { text: 'start', correct: false},
            {text: 'begins', correct:true},
            {text: 'begin', correct: false}
       ]
    },
    {
        question: 'I have never______ my relatives in Guatemala',
        answers: [
            { text: 'done', correct: false},
            {text: 'work', correct:false},
            {text: 'visited', correct: true}
        ]  
    }
]

