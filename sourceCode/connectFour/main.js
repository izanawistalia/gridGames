var grid
var player
var spot
var p1='player1'
var p2 ='player2'

//check for winner
function checkWinner(index){


    if((spot[index]&& spot[index+8] && spot[index+16] && spot[index+24])===undefined){
        }
    else{
        if(spot[index].classList.contains(player.textContent)&&spot[index+8].classList.contains(player.textContent)&&spot[index+16].classList.contains(player.textContent)&&spot[index+24].classList.contains(player.textContent)){
            alert(player.textContent+' WON!!!')
            setTimeout(location.reload(),1000)
        }
    }

    if((spot[index]&& spot[index-8] && spot[index-16] && spot[index-24])===undefined){
        
    }
    else{
        if(spot[index].classList.contains(player.textContent)&&spot[index-8].classList.contains(player.textContent)&&spot[index-16].classList.contains(player.textContent)&&spot[index-24].classList.contains(player.textContent)){
            alert(player.textContent+' WON!!!')
            setTimeout(location.reload(),1000)
        }
    }

    if((spot[index]&& spot[index+6] && spot[index+12] && spot[index+18])===undefined){

    }
    else{
        if(spot[index].classList.contains(player.textContent)&&spot[index+6].classList.contains(player.textContent)&&spot[index+12].classList.contains(player.textContent)&&spot[index+18].classList.contains(player.textContent)){
            alert(player.textContent+' WON!!!')
            setTimeout(location.reload(),1000)
        }
    }

    if((spot[index]&& spot[index-6] && spot[index-12] && spot[index-18])===undefined){
        
    }
    else{
        if(spot[index].classList.contains(player.textContent)&&spot[index-6].classList.contains(player.textContent)&&spot[index-12].classList.contains(player.textContent)&&spot[index-18].classList.contains(player.textContent)){
            alert(player.textContent+' WON!!!')
            setTimeout(location.reload(),1000)
        }
    }

    if((spot[index]&& spot[index+1] && spot[index+2] && spot[index+3])===undefined){

    }
    else{
        if(spot[index].classList.contains(player.textContent)&&spot[index+1].classList.contains(player.textContent)&&spot[index+2].classList.contains(player.textContent)&&spot[index+3].classList.contains(player.textContent)){
            alert(player.textContent+' WON!!!')
            setTimeout(location.reload(),1000)
        }
    }

    if((spot[index]&& spot[index-1] && spot[index-2] && spot[index-3])===undefined){
        
    }
    else{
        if(spot[index].classList.contains(player.textContent)&&spot[index-1].classList.contains(player.textContent)&&spot[index-2].classList.contains(player.textContent)&&spot[index-3].classList.contains(player.textContent)){
            alert(player.textContent+' WON!!!')
            setTimeout(location.reload(),1000)
        }
    }

    if((spot[index]&& spot[index+7] && spot[index+14] && spot[index+21])===undefined){

    }
    else{
        if(spot[index].classList.contains(player.textContent)&&spot[index+7].classList.contains(player.textContent)&&spot[index+14].classList.contains(player.textContent)&&spot[index+21].classList.contains(player.textContent)){
            alert(player.textContent+' WON!!!')
            setTimeout(location.reload(),1000)
        }
    }

    if((spot[index]&& spot[index-7] && spot[index-14] && spot[index-21])===undefined){
        
    }
    else{
        if(spot[index].classList.contains(player.textContent)&&spot[index-7].classList.contains(player.textContent)&&spot[index-14].classList.contains(player.textContent)&&spot[index-21].classList.contains(player.textContent)){
            alert(player.textContent+' WON!!!')
            setTimeout(location.reload(),1000)
        }
    }



}

window.addEventListener('DOMContentLoaded',()=>{

//loading necessary classes and IDs from the HTML page    
grid = document.querySelector('.grid')
player = document.querySelector('#current-player')
spot = document.querySelectorAll('.spot')

//startGame()
spot.forEach(id=>{
    id.addEventListener('mousedown',()=>{
        if(id.classList.contains('player1') || id.classList.contains('player2'))
        {
            alert('spot already occupied')

        }
        else
        { 
            id.classList.add(player.textContent)
            checkWinner(id.id-1)
            
            if(player.textContent===p1){
                player.textContent = p2
                var col = document.getElementById('current-player')
                col.classList.remove('player1')
                col.classList.add('player2')
            }
            else if(player.textContent===p2){
                player.textContent = p1
                var col = document.getElementById('current-player')
                col.classList.remove('player2')
                col.classList.add('player1')
            }
        }
        
    })
})
})