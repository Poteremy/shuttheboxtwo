let numbers = document.querySelectorAll('.num')
let btns = document.querySelectorAll('.btn')

let diceDiv = document.getElementById('diceDiv');
let dOne = document.getElementById('diceOne')
let dTwo = document.getElementById('diceTwo')

let finalScore = document.getElementById('finalScore');

let btnplay = document.getElementById('btnplay')
let start = document.getElementById('start')
let replay = document.getElementById('replay');
let check = document.getElementById('check')

let nums = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
let used 
let avail
let scores = []
let thisRound = []

// Start Game

function startGame() {
    start.classList.add('dNone')
    check.classList.remove('dNone')
    dOne.innerText = nums[Math.floor(Math.random() * nums.length)];
    dTwo.innerText = nums[Math.floor(Math.random() * nums.length)];
}

start.addEventListener('click', startGame)

// Roll New Numbers

function roll () {
    thisRound = []
    dOne.innerText = nums[Math.floor(Math.random() * nums.length)];
    dTwo.innerText = nums[Math.floor(Math.random() * nums.length)];
    btnplay.classList.add('dNone')
    check.classList.remove('dNone')
}

btnplay.addEventListener('click', roll)

// Handle Number Closing

function close() {
    this.previousElementSibling.classList.add('dNone')
    this.classList.add('dNone')
    this.parentNode.classList.add('hidden')
    this.parentNode.used = true
    this.parentNode.avail = true
    thisRound.push(parseInt(this.parentNode.children[0].innerText))
}

btns.forEach((btn) => {
    btn.addEventListener('click', close)
})

// Check Answers

function checkAnswer() {
    if(thisRound.length == 0 ) {
        endGame()
    } else {
        let one = parseInt(dOne.innerText)
        let two = parseInt(dTwo.innerText)
        if ((thisRound.reduce((a,b) => a+b)) == (one+two) ) {
            goodAnswer()
        } else {
            badAnswer()
        }
        
    
    }
    
}

function goodAnswer() {
    numbers.forEach((num) => {
        if(num.avail) {
            num.avail=false
        }
    })
    dOne.innerText = ''
    dTwo.innerText = ''
    check.classList.add('dNone')
        btnplay.classList.remove('dNone')
}

function badAnswer() {
    thisRound = []
    numbers.forEach((num) => {
        if(num.avail) {
            num.classList.remove('hidden');
            num.children[0].classList.remove('dNone')
            num.children[1].classList.remove('dNone')
            num.used = false
        }
    })

}

check.addEventListener('click', checkAnswer)

// Win/Lose Conditions

function endGame() {
    numbers.forEach((num) => {
        if(!num.used) {
            scores.push(parseInt(num.children[0].innerText))
        }
    })
    console.log(scores)
    btnplay.classList.add('dNone')
    check.classList.add('dNone')
    replay.classList.remove('dNone')
    diceDiv.classList.add('dNone')
    finalScore.innerHTML = `Your score is ${scores.reduce((a,b) => a+b)}`
}

function checkForLose() {
    if(thisRound.length == 0) {
        endGame()
    }
}

// Restart

function restart () {
    numbers.forEach((number) => {
        number.children[1].avail = false
        number.classList.remove('hidden')
        number.children[0].classList.remove('dNone')
        number.children[1].classList.remove('dNone')
        number.used = false
    })

    finalScore.innerHTML = ""
    diceDiv.classList.remove('dNone')
    replay.classList.add('dNone')
    start.classList.remove('dNone')
    btnplay.classList.add('dNone')
    dOne.innerText = ''
    dTwo.innerText = ''
    scores = []
    thisRound=[]
}

replay.addEventListener('click', restart)



























































// numbers.forEach((number) => {
//     number.children[1].avail = false
//     number.used = false
// })

// function roll() {
//     dOne.innerText = nums[Math.floor(Math.random() * nums.length)];
//     dTwo.innerText = nums[Math.floor(Math.random() * nums.length)];
//     changeNums()
//     btnplay.classList.add('dNone')
//     check.classList.remove('dNone')
// }

// start.addEventListener('click', function() {
//     roll()
//     start.classList.add('dNone')
//     btnplay.classList.remove('dNone')
// })

// btnplay.addEventListener('click', roll)

// function close() {
//     this.previousElementSibling.classList.add('dNone')
//     this.classList.add('dNone')
//     this.parentNode.classList.add('hidden')
//     this.parentNode.used = true
//     disregard()
//     checkForWin()
// }

// function changeNums() {
//     if(parseInt(dOne.innerText) == parseInt(dTwo.innerText)) {
//         textOne.innerText = dOne.innerText
//     } else textOne.innerText = `${dOne.innerText} and ${dTwo.innerText}`
//     mathProblem.innerText = `${dOne.innerText} + ${dTwo.innerText} = `
//     textTwo.classList.add('dNone')
//     answerInput.classList.remove('dNone')
//     check.classList.remove('dNone')
//     answerInput.value = ''
// }

// function resetNums() {
//     btns.forEach((btn) => {
//         if(btn.classList.contains('noClick')) {
//             btn.classList.remove('noClick')
//         }
//     })
// }

// function endGame() {
//     numbers.forEach((number) => {
//         if(!number.used) {
//             scores.push(parseInt(number.children[0].innerText))
//         }
//     })
//     btnplay.classList.add('dNone')
//     replay.classList.remove('dNone')
//     diceDiv.classList.add('dNone')
//    finalScore.innerHTML = `Your score is ${scores.reduce((a,b) => a+b)}`
//    textOne.innerText = ''
//    textTwo.innerText = ''
// }

// function winGame() {
//     btnplay.classList.add('dNone')
//     replay.classList.remove('dNone')
//     diceDiv.classList.add('dNone')
//    finalScore.innerHTML = `Congratulations! You Win! Play Again?`
//    textOne.innerText = ''
//    textTwo.innerText = ''
// }

// function checkForLose() {
//     let testing = (parseInt(dOne.innerText)-1)
//     let testingTwo = (parseInt(textTwo.innerText)-1)
//     let testingThree = (parseInt(dTwo.innerText)-1)
//    if(numbers[testing].used && numbers[testingTwo].used) {
//        endGame()
//    } else if (numbers[testingThree].used && numbers[testingTwo].used) {
//        endGame()
//    }
// }

// function checkForWin() {
//     let isUsed = []
//     numbers.forEach((number) => {
//         if(number.used) {
//             isUsed.push(number)
//         }
//     })
//     if(isUsed.length == 12) {
//         winGame()
//     }
    
// }

// function checkNums() {
//     if(answerInput.value == parseInt(dOne.innerText)+parseInt(dTwo.innerText)) {
//         textTwo.innerText = answerInput.value;
//         textTwo.classList.remove('dNone')
//         answerInput.classList.add('dNone')
//         check.classList.add('dNone')
//         problem.classList.add('dNone')
//     } else if(answerInput.value != parseInt(dOne.innerText)+parseInt(dTwo.innerText)) {
//         answerInput.value=""
//     }
//     resetNums()
//     disregard()
//     disableClicks()
//     disable()
//     checkForLose()
//     checkForWin()
// }

// function disallow(e) {
//     let clicked = parseInt(e.target.parentNode.children[0].innerText)
//     let testing = (parseInt(dOne.innerText)-1)
//     let testingTwo = (parseInt(dTwo.innerText)-1)
//     let testingThree = (parseInt(textTwo.innerText))
//     if(clicked === parseInt(numbers[testing].children[0].innerText)) {
//         btns.forEach((btn) => {
//             btn.avail=false
//         })
//         numbers[testingTwo].children[1].avail = true
//     } else if (clicked === testingThree)  {
//         btns.forEach((btn) => {
//             btn.avail=false
//         })
//     } else if (clicked === parseInt(numbers[testingTwo].children[0].innerText))  {
//         btns.forEach((btn) => {
//             btn.avail=false
//         })
//         numbers[testing].children[1].avail=true
//     } 

//     disregard()
//     disable()
// }

// check.addEventListener('click', checkNums)

// btns.forEach(btn => btn.addEventListener('click', close))
// btns.forEach(btn => btn.addEventListener('click', disallow))

// function restart () {
//     numbers.forEach((number) => {
//         number.children[1].avail = false
//         number.classList.remove('hidden')
//         number.children[0].classList.remove('dNone')
//         number.children[1].classList.remove('dNone')
//         number.used = false
//     })

//     disregard()
//     disable()

//     finalScore.innerHTML = ""
//     problem.innerText = ''
//     diceDiv.classList.remove('dNone')
//     replay.classList.add('dNone')
//     start.classList.remove('dNone')
//     btnplay.classList.add('dNone')
//     dOne.innerText = ''
//     dTwo.innerText = ''
//     scores = []
// }

// answerInput.addEventListener('keyup', function(e) {
//     if(e.key === 'Enter') {
//         answerInput.nextElementSibling.click()
//     }
// })

// replay.addEventListener('click', restart)
