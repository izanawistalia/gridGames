document.addEventListener('DOMContentLoaded',()=>{
    const time_left = document.querySelector('#time-left')
    const result = document.querySelector('#result')
    const square = document.querySelectorAll('.grid div')
    const button = document.querySelector('button')

    const width = 9
    let position = 77
    let direction = 1
    let time=20
    let riverInterval
    let roadInterval
    let timeLeft

    function lost(){

        if(square[position].classList.contains('db1')||
        square[position].classList.contains('db3')||
        square[position].classList.contains('db5')||
        square[position].classList.contains('db7')||
        square[position].classList.contains('db9')||
        square[position].classList.contains('ub1')||
        square[position].classList.contains('ub9')||
        square[position].classList.contains('ub5')||
        square[position].classList.contains('ub7')||
        square[position].classList.contains('ub9')){
            result.textContent = "YOU LOST!!!"
            clearInterval(riverInterval)
            clearInterval(roadInterval)
            clearInterval(timeLeft)
            document.removeEventListener('keydown',movefrog)
        }
    

    
        if(square[position].classList.contains('al1')||
        square[position].classList.contains('al5')||
        square[position].classList.contains('al9')||
        square[position].classList.contains('bl3')||
        square[position].classList.contains('bl6')||
        square[position].classList.contains('bl7')){
            result.textContent = "YOU LOST!!!"
            clearInterval(riverInterval)
            clearInterval(roadInterval)
            clearInterval(timeLeft)
            document.removeEventListener('keydown',movefrog)
        }
    }

    function movefrog(e){
        square[position].classList.remove('frog')
        switch(e.keyCode){
            case 37: if(position%width!==0){
                position -= 1
            }
            break;
            case 38: if(position>width-1){
                position -= width
            }
            break;
            case 39: if(position%width!==(width-1)){
                position += 1
            }
            break;
            case 40: if(position<((width*width-1)-width)){
                position += width
            }
            break;
        }
        
        square[position].classList.add('frog')
        

        //win
        if(square[position].classList.contains('home')){
            result.textContent = "YOU WON!!!"
            clearInterval(riverInterval)
            clearInterval(roadInterval)
            clearInterval(timeLeft)
            document.removeEventListener('keydown',movefrog)
        }   
        
        lost()
            
        
        
    }

    function time_(){
        --time;
        time_left.textContent = time;
        
        if(time===0){
            result.textContent = "YOU LOST!!!"
            clearInterval(riverInterval)
            clearInterval(roadInterval)
            clearInterval(timeLeft)
        }
        
    }
 
    function movelog(){

        lost()
        
        const abovel = document.querySelectorAll('.a') 
        const below = document.querySelectorAll('.b')
        abovel.forEach(block => {
            switch(true){
                case block.classList.contains('al1'):
                    block.classList.remove('al1')
                    block.classList.add('al2')
                    break;
                case block.classList.contains('al2'):
                    block.classList.remove('al2')
                    block.classList.add('al3')
                    break;
                case block.classList.contains('al3'):
                    block.classList.remove('al3')
                    block.classList.add('al4')
                    break;
                case block.classList.contains('al4'):
                    block.classList.remove('al4')
                    block.classList.add('al5')
                    break;
                case block.classList.contains('al5'):
                    block.classList.remove('al5')
                    block.classList.add('al6')
                    break;
                case block.classList.contains('al6'):
                    block.classList.remove('al6')
                    block.classList.add('al7')
                    break;
                case block.classList.contains('al7'):
                    block.classList.remove('al7')
                    block.classList.add('al8')
                    break;
                case block.classList.contains('al8'):
                    block.classList.remove('al8')
                    block.classList.add('al9')
                    break;
                case block.classList.contains('al9'):
                    block.classList.remove('al9')
                    block.classList.add('al1')
                    break;
            }             
        })
        below.forEach(block => {
            switch(true){
                case block.classList.contains('bl1'):
                    block.classList.remove('bl1')
                    block.classList.add('bl9')
                    break;
                case block.classList.contains('bl2'):
                    block.classList.remove('bl2')
                    block.classList.add('bl1')
                    break;
                case block.classList.contains('bl3'):
                    block.classList.remove('bl3')
                    block.classList.add('bl2')
                    break;
                case block.classList.contains('bl4'):
                    block.classList.remove('bl4')
                    block.classList.add('bl3')
                    break;
                case block.classList.contains('bl5'):
                    block.classList.remove('bl5')
                    block.classList.add('bl4')
                    break;
                case block.classList.contains('bl6'):
                    block.classList.remove('bl6')
                    block.classList.add('bl5')
                    break;
                case block.classList.contains('bl7'):
                    block.classList.remove('bl7')
                    block.classList.add('bl6')
                    break;
                case block.classList.contains('bl8'):
                    block.classList.remove('bl8')
                    block.classList.add('bl7')
                    break;
                case block.classList.contains('bl9'):
                    block.classList.remove('bl9')
                    block.classList.add('bl8')
                    break;
            }             
        }) 
             
        lost()
             
        movewithlog()  
    
    }
    
    //moveBus
    function movebus(){
        lost()
        const up = document.querySelectorAll('.u')
        const down = document.querySelectorAll('.d')

        up.forEach(bus => {
            switch(true){
                case bus.classList.contains('ub1'):
                    bus.classList.remove('ub1')
                    bus.classList.add('ub2')
                    break;
                case bus.classList.contains('ub2'):
                    bus.classList.remove('ub2')
                    bus.classList.add('ub3')
                    break;
                case bus.classList.contains('ub3'):
                    bus.classList.remove('ub3')
                    bus.classList.add('ub4')
                    break;
                case bus.classList.contains('ub4'):
                    bus.classList.remove('ub4')
                    bus.classList.add('ub5')
                    break;
                case bus.classList.contains('ub5'):
                    bus.classList.remove('ub5')
                    bus.classList.add('ub6')
                    break;
                case bus.classList.contains('ub6'):
                    bus.classList.remove('ub6')
                    bus.classList.add('ub7')
                    break;
                case bus.classList.contains('ub7'):
                    bus.classList.remove('ub7')
                    bus.classList.add('ub8')
                    break;
                case bus.classList.contains('ub8'):
                    bus.classList.remove('ub8')
                    bus.classList.add('ub9')
                    break;
                case bus.classList.contains('ub9'):
                    bus.classList.remove('ub9')
                    bus.classList.add('ub1')
                    break;
            }
        })
        down.forEach(bus => {
            switch(true){
                case bus.classList.contains('db1'):
                    bus.classList.remove('db1')
                    bus.classList.add('db9')
                    break;
                case bus.classList.contains('db2'):
                    bus.classList.remove('db2')
                    bus.classList.add('db1')
                    break;
                case bus.classList.contains('db3'):
                    bus.classList.remove('db3')
                    bus.classList.add('db2')
                    break;
                case bus.classList.contains('db4'):
                    bus.classList.remove('db4')
                    bus.classList.add('db3')
                    break;
                case bus.classList.contains('db5'):
                    bus.classList.remove('db5')
                    bus.classList.add('db4')
                    break;
                case bus.classList.contains('db6'):
                    bus.classList.remove('db6')
                    bus.classList.add('db5')
                    break;
                case bus.classList.contains('db7'):
                    bus.classList.remove('db7')
                    bus.classList.add('db6')
                    break;
                case bus.classList.contains('db8'):
                    bus.classList.remove('db8')
                    bus.classList.add('db7')
                    break;
                case bus.classList.contains('db9'):
                    bus.classList.remove('db9')
                    bus.classList.add('db8')
                    break;
            }
        })

        lost()
           
        
    }

    function movewithlog(){
        square[position].classList.remove('frog')
        if(position>=18 && position<27){
            position -=1
        }
        if(position>=27 && position<36){
            position +=1
        }
        square[position].classList.add('frog')
    }
    function start(){
        clearInterval(riverInterval)
        clearInterval(roadInterval)
        clearInterval(timeLeft)
        square[position].classList.remove('frog')
        position = 77
        direction = 1
        time = 20
        time_left.textContent = time
        result.textContent = ''
        
        square[position].classList.add('frog')
        timeLeft = setInterval(time_, 1000)
        riverInterval = setInterval(movelog,700)
        roadInterval = setInterval(movebus,700)
        document.addEventListener('keydown',movefrog)
    }
    button.addEventListener('click',start)
})