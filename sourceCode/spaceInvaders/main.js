document.addEventListener('DOMContentLoaded',()=>{
    const square = document.querySelectorAll('.grid div')
    const score = document.querySelector('span')

    let invaders = [0,1,2,3,4,5,6,7,8,9
                    ,15,16,17,18,19,20,21,22,23,24,
                    30,31,32,33,34,35,36,37,38,39]
    const width = 15
    let warrior = 202
    let direction =1
    let interval = 0
    let invaderDead = []
    let flag = 0
    let result = 0
    
    


    invaders.forEach(index => square[index].classList.add('invader'))
    square[warrior].classList.add('warrior')

    function moveWarrior(e){
        square[warrior].classList.remove('warrior')
        switch(e.keyCode){
            case 37: if(warrior%width!==0)
                         warrior -=1
                         break;
            case 39: if(warrior%width < (width-1))
                         warrior +=1
                         break;
        }

        square[warrior].classList.add('warrior')
        if(square[warrior].classList.contains('invader')){
            square[warrior].classList.remove('invader')
            square[warrior].classList.remove('warrior')
            square[warrior].classList.add('boom')
            setTimeout(() => square[warrior].classList.remove('boom'), 200);
            flag = 0
            clearInterval(interval)
            clearInterval(bulletInterval)
        }
        
    }

    document.addEventListener('keydown',moveWarrior)

    function moveInvader(){

        if((invaders[0]%width===0 && direction===-1)||(invaders[invaders.length-1]%width>=(width-1) && direction===1)){
            direction = width
        }else if(invaders[0]%width===0 && direction===width){
            direction = 1
        }else if(invaders[invaders.length-1]%width>=(width-1) && direction===width){
            direction = -1
        }
         
        invaders.forEach(index => square[index].classList.remove('invader'))
        for(i=0;i<invaders.length;++i){
            invaders[i] = invaders[i]+direction
        }
        
        for(i =0 ;i<invaders.length;++i){
            if(!invaderDead.includes(i)){
                square[invaders[i]].classList.add('invader')
            }
        }

        
        if(invaders[invaders.length-1]>(warrior)){
            score.textContent = "GAME OVER, YOU LOST!!!"
            flag = 0
            clearInterval(interval)
            clearInterval(bulletInterval)
        }

        if(invaderDead.length === invaders.length){
            score.textContent = "YOU WON!!!"
            flag = 0
            clearInterval(interval)
            clearInterval(bulletInterval)
        }

    }

    document.addEventListener('keydown',e => {
        switch(e.keyCode){
            case 32: if(flag===0){flag = 1
                     interval = setInterval(moveInvader, 500)
                     break;}
        }
    })


    function attack(e){
        let bulletDirection = warrior
        let bulletInterval
        
        function moveBullet(){
            square[bulletDirection].classList.remove('bullet')
            bulletDirection -= width
            square[bulletDirection].classList.add('bullet')
            if(square[bulletDirection].classList.contains('invader','bullet')){
                square[bulletDirection].classList.remove('invader')
                square[bulletDirection].classList.remove('bullet')
                dead = invaders.indexOf(bulletDirection)
                invaderDead.push(dead)
                square[bulletDirection].classList.add('boom')
                setTimeout(()=>square[bulletDirection].classList.remove('boom'), 200)
                clearInterval(bulletInterval)
                result++
                score.textContent = result
            }
            if(bulletDirection<0){
                square[bulletDirection].classList.remove('bullet')
                clearInterval(bulletInterval)
            }
        }

        
        switch(e.keyCode){
            case 38: if(flag===1){bulletInterval = setInterval(moveBullet, 100)
                     break;}
        }

    }

    document.addEventListener('keydown',attack)
       
    



})