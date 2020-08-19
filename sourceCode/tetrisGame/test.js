const start = document.querySelector('button')
const square = document.querySelectorAll('.grid div')
const result = document.querySelector('span')
const demo = document.querySelectorAll('.demo div')

const width = 10
const height = 20
let currentPosition = 4
let timerid

const l_tetromino = [[1, width+1, width*2+1, 2],
                         [width, width+1, width+2, width*2+2],
                         [1, width+1, width*2+1, width*2],
                         [width, width*2, width*2+1, width*2+2]
                        ]

    const z_tetromino = [ [0, width, width+1, width*2+1],
                          [width+1, width+2, width*2, width*2+1],
                          [0, width, width+1, width*2+1],
                          [width+1, width+2, width*2, width*2+1]
                        ]

    const t_tetromino = [ [1,width, width+1, width+2],
                          [1,width+1,width+2,width*2+1],
                          [width, width+1,width+2,width*2+1],
                          [1, width, width+1, width*2+1]
                        ]

    const o_tetromino = [ [0,1, width, width+1],
                         [0,1, width, width+1],
                         [0,1, width, width+1],
                         [0,1, width, width+1]]

    const i_tetromino = [[1, width+1, width*2+1, width*3+1],
                        [width, width+1, width+2, width+3],
                        [1, width+1, width*2+1, width*3+1],
                        [width, width+1, width+2, width+3]]

const tetromino = [l_tetromino,z_tetromino,t_tetromino,o_tetromino,i_tetromino]
let currentRotation = 0
let nextrandom = Math.floor(Math.random()*tetromino.length)
let random = nextrandom
let current = tetromino[random][currentRotation]

const dwidth = 5
const dpos = 1
let score = 0

const l = [1, dwidth+1, dwidth*2+1, 2]
const z = [0, dwidth, dwidth+1, dwidth*2+1]
const t = [1,dwidth, dwidth+1, dwidth+2]
const o = [0,1, dwidth, dwidth+1]
const i = [1, dwidth+1, dwidth*2+1, dwidth*3+1]
const small_tetromino = [l,z,t,o,i]

function freeze(){
    if(current.some(index=> square[index+currentPosition+width].classList.contains('base'))||
    current.some(index => square[index+currentPosition+width].classList.contains('set'))) {
      current.forEach(index => square[index+currentPosition].classList.add('set'))
      random = nextrandom
      nextrandom = Math.floor(Math.random()*tetromino.length)
      current = tetromino[random][currentRotation]
      currentPosition = 4
      //undraw()
      draw()
      display()
      gameover()
      addscore()
    }
    
    
    
}

function movedown(){
    undraw()
    currentPosition = currentPosition+width
    draw()
    freeze()
}

function moveright(){
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition+index)%width===width-1)
    if(!isAtRightEdge) currentPosition +=1
    if(current.some(index=> square[index].classList.contains('set'))) currentPosition -=1
    draw()
}

function moveleft(){
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition+index)%width===0)
    if(!isAtLeftEdge) currentPosition -= 1
    if(current.some(index=> square[index].classList.contains('set'))) currentPosition -=1
    draw()
}

function rotate(){
    undraw()
    currentRotation += 1
    if(currentRotation === 4) {
        currentRotation=0
    }
    current = tetromino[random][currentRotation]
    draw()
}

function control(e){
    switch(e.keyCode){
      case 37: moveleft();
               break;
      case 38: rotate();
               break;
      case 39: moveright();
               break;
      case 40: movedown();
               break;
    }
  }


function draw(){
    current.forEach(index => square[currentPosition+index].classList.add('tetromino'))
}

function undraw(){
    current.forEach(index=>square[currentPosition+index].classList.remove('tetromino'))
}

function display(){
    random = nextrandom
    demo.forEach(index => index.classList.remove('tetromino'))
    small_tetromino[nextrandom].forEach(index=>demo[dpos+index].classList.add('tetromino'))
    
    setTimeout(draw, 1000)
    nextrandom = Math.floor(Math.random()*tetromino.length)

}

function game(){

    //nextrandom = Math.floor(Math.random()*tetromino.length)
    //random = nextrandom
    //location.reload()
    timerid = setInterval(movedown, 1000)
    nextrandom = Math.floor(Math.random()*tetromino.length)
    square.forEach(index => index.classList.remove('tetromino'))
    currentPosition = 4
    display()
    document.addEventListener('keydown',control)
  
}

start.addEventListener('click',()=>{
    if(timerid){
        clearInterval(timerid)
        timerid = null
    } else{
        game()
    }
})

function gameover(){
        if(current.some(index => square[currentPosition+index].classList.contains('set'))){
          result.textContent = "GAME OVER with score "+score
          clearInterval(timerid)
        }
      }

let currentindex = 0

function addscore(){
        for (currentindex = 0;currentindex<199; currentindex +=width){
          const row = [currentindex,currentindex+1,currentindex+2,currentindex+3,currentindex+4,currentindex+5,currentindex+6,currentindex+7,currentindex+8,currentindex+9]
          if(row.every(index => square[index].classList.contains('set'))){
            score +=10
            result.textContent = score
            row.forEach(index => {
              square[index].classList.remove('set') || square[index].classList.remove('block')
            })
            /*const squareremoved = square.splice(currentindex,width)
            square = squareremoved.concat(square)
            square.forEach(cell => grid.app)*/
          }
        }
      }

