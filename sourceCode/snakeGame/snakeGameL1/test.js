const square = document.querySelectorAll(".grid div")
const score = document.querySelector("span")
const start = document.querySelector("button")

let initpos = 0
let bait = 0
var direction = 1
const width = 10
var curr_score = 0
var intervalTime = 0
var interval = 0
var snake = [0]
var poop = []
const speed = 0.9

function moveBait(){
    
        do{
            bait = Math.floor(Math.random()*100)
        }while(square[bait].classList.contains('snake'))
        square[bait].classList.add('bait')
        
    
}

function move(){

    if(
        ((snake[0])%width === width-1 && direction === 1)||
        ((snake[0])%width === 0 && direction === -1)||
        ((snake[0])>=(width*width))||
        ((snake[0])<0)||
        (square[snake[0]+direction].classList.contains('snake'))
    ){ alert('snake dead')
        return clearInterval(interval)
    }

    if(snake.length === 1){
        snake.unshift(snake[0]+direction)
        
        if(square[snake[0]+direction].classList.contains('bait')){
            square[snake[0]+direction].classList.remove('bait')
            snake.unshift(snake[0]+direction)
            curr_score++
            score.textContent = curr_score
            intervalTime *= speed
            interval = setInterval(move, intervalTime)
        }
    } else{
        let tail = snake.pop()
        square[tail].classList.remove('snake')
        snake.unshift(snake[0]+direction)
        
        if(square[snake[0]].classList.contains('bait')){
            square[snake[0]].classList.remove('bait')
            square[tail].classList.add('snake')
            snake.push(tail)
            moveBait()
            curr_score++
            score.textContent = curr_score
            clearInterval(interval)
            intervalTime = intervalTime*speed
            interval = setInterval(move, intervalTime)
            
        }

        square[snake[0]].classList.add('snake')
    }

    square[snake[0]].classList.add('snake')

}

function startGame(){


    poop.forEach(index => square[index].classList.remove('snake'))
    snake.forEach(index => square[index].classList.remove('snake'))
    square[bait].classList.remove('bait')
    clearInterval(interval)
    square[initpos].classList.add('snake')
    
    bait = 0
    moveBait()
    snake = [0]
    direction = 1
    curr_score = 0
    intervalTime = 1000
    score.textContent = curr_score
    snake.forEach(index => square[index].classList.add('snake'))
    interval = setInterval(move, intervalTime)
    
}

function control(key){

    if(key.keyCode === 37){
        direction = -1
    } else if(key.keyCode === 38){
        direction = -width
    } else if(key.keyCode === 39){
        direction = 1
    } else if(key.keyCode === 40){
        direction = width
    }

}

document.addEventListener('keydown',control)
start.addEventListener('click',startGame)