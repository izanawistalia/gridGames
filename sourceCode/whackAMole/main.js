const square = document.querySelectorAll('.square')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
const mole = document.querySelector('.mole')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare(){
    square.forEach(sq=>{
        sq.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')
    hittingPos = randomPosition.id
}

square.forEach(id=>{
    id.addEventListener('mousedown',()=>{
        if(id.id===hittingPos){
            result = result+1
            score.textContent = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare,700)
}
moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime===0){
        clearInterval(timerId)
        alert('GAME OVER!!! Your score is... '+result)
        location.reload()
    }
}

let timerId = setInterval(countDown,1000)