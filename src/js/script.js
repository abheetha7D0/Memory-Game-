const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')

suffleImage()
clicking()
function suffleImage(){
    card.forEach(c=>{
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)
        c.style.order = num[random]
    })
}


function clicking(){

    for(let i =0; i<card.length; i++){
        front[i].classList.add('show')

        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        card[i].addEventListener('click' ,()=>{
            front[i].classList.add('flip')
           const filppedCard = document.querySelectorAll('.flip')

            if(filppedCard.length == 2){
                match(filppedCard[0] , filppedCard[1])
            }

        })
    }
}

function math(cardOne, cardTwo) {
    if(cardOne.dataset.index == cardTwo.dataset.index){
       
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 

        cardOne.classList.add('match')
        cardTwo.classList.add('match')

    }else{

       setTimeout(() => {
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
}