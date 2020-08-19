var len=0;
var cards = []

//function to initialize the cards to be shown when DOM content is loaded
function set(){
    cards = [
        {
            id: 'bulbasaur',
            img: 'image/bulbasaur.jpg'
        },
        {
            id: 'charmender',
            img: 'image/charmender.png'
        },
        {
            id: 'chikorita',
            img: 'image/chikorita.jpg'
        },
        {
            id: 'haunter',
            img: 'image/haunter.png'
        },
        {
            id: 'jigglypuff',
            img: 'image/jigglypuff.png'
        },
        {
            id: 'kakuna',
            img: 'image/kakuna.jpg'
        },
        {
            id: 'meowth',
            img: 'image/meowth.png'
        },
       
        {
            id: 'squirtle',
            img: 'image/squirtle.jpeg'
        },
        {
            id: 'bulbasaur',
            img: 'image/bulbasaur.jpg'
        },
        {
            id: 'charmender',
            img: 'image/charmender.png'
        },
        {
            id: 'chikorita',
            img: 'image/chikorita.jpg'
        },
        {
            id: 'haunter',
            img: 'image/haunter.png'
        },
        {
            id: 'jigglypuff',
            img: 'image/jigglypuff.png'
        },
        {
            id: 'kakuna',
            img: 'image/kakuna.jpg'
        },
        {
            id: 'meowth',
            img: 'image/meowth.png'
        },
        
        {
            id: 'squirtle',
            img: 'image/squirtle.jpeg'
        }
    ]
    len = cards.length;
   
}

window.addEventListener('DOMContentLoaded',set())

cards.sort(function(a,b){
    return 0.5-Math.random()
});

var result = document.getElementById('result')
var score=0;

const grid = document.querySelector('.grid')
cardsChosen = []
cardsChosenId = []


//checks if the flipped cards are equal or not
function checkForMatch(){
    var card = document.querySelectorAll('img')
    const op1 = cardsChosenId[0]
    const op2 = cardsChosenId[1]
    if(cardsChosen[0]===cardsChosen[1] && op1 != op2){
        score++;
        alert("You found a match")
        card[op1].setAttribute('src','image/white.jpg')
        card[op2].setAttribute('src','image/white.jpg')
    }
    else{
        card[op1].setAttribute('src','image/pokemon.jpg')
        card[op2].setAttribute('src','image/pokemon.jpg')
    }
    cardsChosen = []
    cardsChosenId = []
    result.textContent = score
    if(score===len/2){
        alert("YOU WON!!!")
        result.textContent = "Congratulations you found them all"
    }
}

//flip the cards
function flip(){
    
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].id)
    cardsChosenId.push(cardId)

    
    
    this.setAttribute('src',cards[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch, 500)
    }
}

//prepares the board
function board(){
    for(i=0; i<len; ++i){
        
        var image = document.createElement('img')
        image.setAttribute('src','image/pokemon.jpg')
        image.setAttribute('data-id',i)
        image.addEventListener('click',flip)
        grid.appendChild(image);
    }
}
board();