document.addEventListener("DOMContentLoaded", ()=>{

    let score = document.querySelector("span")
    let square = document.querySelectorAll(".grid div")
    let width = 15
    let invaders = [0,1,2,3,4,5,6,7,8,9,15,16,17,18,19,20,21,22,23,24,30,31,32,33,34,35,36,37,38,39]
    let warrior = 202
    let interval = 0
    let direction = 1
    let flag = 0
    let invaderDead = []
    let result = 0

    invaders.forEach(index => square[index].classList.add('invader'))
    square[warrior].classList.add('warrior')

    function attack(e){
        let bulletInterval = 0
        let bulletDirection = warrior
        function moveBullet(){
            square[bulletDirection].classList.remove('bullet')
            bulletDirection -= width
            square[bulletDirection].classList.add('bullet')
            bulletInterval = setInterval(moveBullet,100)
            if(square[bulletDirection].classList.contains('invader')){
                square[bulletDirection].classList.remove('invader')
                square[bulletDirection].classList.remove('bullet')
                square[bulletDirection].classList.add('boom')

                setTimeout(()=> square[bulletDirection].classList.remove('boom'),250)
                clearInterval(bulletInterval)
                invaderDead.push(invaders.indexOf(bulletDirection))
                result++
                score.textContent = result
                
            }
        if(bulletDirection<width){
            clearInterval(bulletInterval)
            setTimeout(()=>square[bulletDirection].classList.remove('bullet'),100)
        }
        }

    }

    function moveWarrior(e){
        
        square[warrior].classList.remove('warrior')
        switch(e.keyCode){
            case 37: if(warrior%width !== 0)
                         warrior = warrior-1
                    break;

            case 39: if(warrior % width < width-1)
                         warrior = warrior+1
                    break;
            case 32: if(flag===0){
                interval = setInterval(moveInvader, 500)
                flag=1
            }
                    break;
            case 38: attack();
                     break;
        }
        square[warrior].classList.add('warrior')

    }

    document.addEventListener('keydown',moveWarrior)
    
    function moveInvader(){

        if((invaders[0]%width===0 && direction === -1) || (invaders[invaders.length-1]%width >= width-1 && direction===1)){
            direction = width
         } else if(invaders[0]%width !==0 && direction === -1){
            direction = -1
         } else if(invaders[invaders.length-1]%width < width-1 && direction===1){
            direction = 1
         } else if(invaders[invaders.length-1]%width >= width-1 && direction===width){
            direction = -1
         } else if(invaders[0]%width===0 && direction === width){
             direction = 1
         }

        invaders.forEach(index => square[index].classList.remove('invader'))
        for(i=0; i<invaders.length; ++i){
            invaders[i] = invaders[i]+direction
        }
        for(i=0; i<invaders.length;++i){
            if(!invaderDead.includes(i)){
                square[invaders[i]].classList.add('invader')
            }
        }


        //for loosing
        if(square[warrior].classList.contains('invader','warrior')){
            square[warrior].classList.remove('invader')
            square[warrior].classList.remove('warrior')
            square[warrior].classList.add('boom')
            score.textContent = "GAME OVER"
            clearInterval(interval)
            flag = 0
        }
        for(i = 0; i<invaders.length; ++i){
            if(invaders[i]>(sqaure.length-1)-width){
                score.textContent = "GAME OVER"
                clearInterval(interval)
                flag = 0
                break;
            }
        }

    }
    
    


})


///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded',()=>{
    
    const square = document.querySelectorAll('.grid div')
    const score = document.querySelector('span')

    let width = 15
    let invaders = [0,1,2,3,4,5,6,7,8,9,15,16,17,18,19,20,21,22,23,24,30,31,32,33,34,35,36,37,38,39]
    let warrior = 202
    let interval = 0
    let direction = 1
    let invaderDead = []
    let result = 0

    invaders.forEach(index => square[index].classList.add('invader'))
    square[warrior].classList.add('warrior')

    function moveWarrior(e){
        
        square[warrior].classList.remove('warrior')
        switch(e.keyCode){
            case 37: if(warrior%width !== 0)
                         warrior = warrior-1
                    break;

            case 39: if(warrior % width < width-1)
                         warrior = warrior+1
                    break;
        }
        square[warrior].classList.add('warrior')

    }

    document.addEventListener('keydown',moveWarrior)

    function moveInvader(){

        if((invaders[0]%width===0 && direction === -1) || (invaders[invaders.length-1]%width >= width-1 && direction===1)){
            direction = width
         } else if(invaders[0]%width !==0 && direction === -1){
            direction = -1
         } else if(invaders[invaders.length-1]%width < width-1 && direction===1){
            direction = 1
         } else if(invaders[invaders.length-1]%width >= width-1 && direction===width){
            direction = -1
         } else if(invaders[0]%width===0 && direction === width){
             direction = 1
         }

        invaders.forEach(index => square[index].classList.remove('invader'))
        for(i=0; i<invaders.length; ++i){
            invaders[i] = invaders[i]+direction
        }
        for(i=0; i<invaders.length;++i){
            if(!invaderDead.includes(i)){
                square[invaders[i]].classList.add('invader')
            }
        }


        //for loosing
        if(square[warrior].classList.contains('invader','warrior')){
            square[warrior].classList.remove('invader')
            square[warrior].classList.remove('warrior')
            square[warrior].classList.add('boom')
            score.textContent = "GAME OVER"
            clearInterval(interval)
            clearInterval(bulletInterval)
        }
        for(i = 0; i<invaders.length; ++i){
            if(invaders[i]<(square.length-1)-width){
                score.textContent = "GAME OVER"
                clearInterval(interval)
                clearInterval(bulletInterval)
                break;
            }
        }

        if(result == 30){
            score.textContent = 'YOU WON'
            clearInterval(interval)
            clearInterval(bulletInterval)
        }

    }

    interval = setInterval(moveInvader, 500)

    function attack(e){

        var bulletInterval
        var bulletDirection = warrior

        function moveBullet(){
            console.log(square[bulletDirection])
            square[bulletDirection].classList.remove('bullet')
            bulletDirection -= width
            square[bulletDirection].classList.add('bullet')
            if(square[bulletDirection].classList.contains('invader')){
                square[bulletDirection].classList.remove('invader')
                square[bulletDirection].classList.remove('bullet')
                square[bulletDirection].classList.add('boom')

                setTimeout(()=>square[bulletDirection].classList.remove('boom'), 250 )
                clearInterval(bulletInterval)
                const dead = invaders.indexOf(bulletDirection)
                invaderDead.push(dead)
                
                result++
                score.textContent = result


            }
            if(bulletDirection<0){
                clearInterval(bulletInterval)
                setTimeout(()=>square[bulletInterval].classList.remove('bullet'),100)
            }
        }

        switch(e.keyCode){
            case 32: bulletInterval = setInterval(moveBullet,100)
                        break;
        }
    }

    document.addEventListener('keyup',attack)


})


///////////////////////////////////////
////////////////////////////////////
/////////////////////////////////
/////////////////////////////////

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
    let bulletInterval = 0
    


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


    function attack(){
        let bulletDirection = warrior
        
        function moveBullet(){
            square[bulletDirection].classList.remove('bullet')
            bulletDirection -= width
            square[bulletDirection].classList.add('bullet')
            if(square[bulletDirection].classList.contains('invader')){
                result++
                score.textContent = result
                
                square[bulletDirection].classList.remove('invader')
                square[bulletDirection].classList.remove('bullet')
                invaderDead.push(invaders.indexOf(bulletDirection))
                square[bulletDirection].classList.add('boom')
                setTimeout(()=>square[bulletDirection].classList.remove('boom'), 250)
                clearInterval(bulletInterval)
            }
            if(square[bulletDirection]<=width){
                setTimeout(square[bulletDirection].classList.remove('bullet'),100)
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