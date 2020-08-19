const square = document.querySelectorAll('.grid div')
const start = document.querySelector('button')
const score = document.querySelector('span')

const width = 10
let direction = 1
let curr_score = 0
let interval = 0
let intervalTime = 1000
let speed = 0.9
let bait = 0
let snake = [0]
let tail = 0

function moveBait(){

    do{
        bait = Math.floor(Math.random()*100)
    }while(square[bait].classList.contains('snake'))
    square[bait].classList.add('bait')

}

function move(){

    if((snake[0]%width === width-1 && direction === 1)||
    (snake[0]%width === 0 && direction === -1)||
    ((snake[0]+direction) > (width*width-1))||
    ((snake[0]+direction) < 0) ||
    (square[snake[0]+direction].classList.contains['snake']) 
    ){
        alert('SNAKE DIED')
        return clearInterval(interval)
    }

    if(snake.length === 1){
        square[snake[0]].classList.remove('snake')
        snake[0] = snake[0]+direction

        if(square[snake[0]].classList.contains('bait')){
            square[snake[0]].classList.remove('bait')
            if(direction === 1){
                tail = snake[0]-1
            } else if(direction === -1){
                tail = snake[0]+1
            } else if(direction === width){
                tail = snake[0]-width
            } else if(direction === -width){
                tail = snake[0]+width
            }
            snake.push(tail)
            square[tail].classList.add('snake')
            moveBait()
            clearInterval(interval)
            curr_score++
            score.textContent = curr_score
            intervalTime = intervalTime*speed
            interval = setInterval(move, intervalTime)
    }

    } else{
        tail = snake.pop()
        snake.unshift(snake[0]+direction)
        square[tail].classList.remove('snake')

        if(square[snake[0]].classList.contains('bait')){
            square[snake[0]].classList.remove('bait')
            square[tail].classList.add('snake')
            snake.push(tail)
            moveBait()
            clearInterval(interval)
            curr_score++
            score.textContent = curr_score
            intervalTime = intervalTime*speed
            interval = setInterval(move, intervalTime)
    }
    }

    square[snake[0]].classList.add('snake')

}

function gameStart(){

    snake.forEach(index=>square[index].classList.remove('snake'))
    square[bait].classList.remove('bait')
    clearInterval(interval)
    direction = 1
    curr_score = 0
    score.textContent = curr_score
    intervalTime = 1000
    bait = 0
    moveBait()
    snake = [0]
    square[snake[0]].classList.add('snake')
    interval = setInterval(move, intervalTime)

}

function control(key){

    if(key.keyCode === 37){
        direction = -1
    }
    if(key.keyCode === 38){
        direction = -width
    }
    if(key.keyCode === 39){
        direction = 1
    }
    if(key.keyCode === 40){
        direction = width
    }

}

document.addEventListener('keydown', control)
start.addEventListener('click', gameStart)