let player1 = 0;
let player2 = 0;
let draw = 0;

function check(){
    let a = Math.round(Math.random() * 5 +1);
let b = Math.round(Math.random() * 5 +1);
let newImage = './images/dice' + a + '.png';
let newImage2 = './images/dice'+ b + '.png';


document.getElementById('image').src = newImage;
document.getElementById('image2').src = newImage2;

    if(a === b){
       document.getElementById('header').innerHTML = "Draw!"
      
    }else if(a > b){
        document.getElementById('header').innerHTML = "🚩 Player 1 wins!"
        player1++;
        document.getElementById('p1').innerHTML = "Score: " + player1;
    }
    else if( a < b){
        document.getElementById('header').innerHTML = "Player 2 wins! 🚩"
        player2++;
        document.getElementById('p2').innerHTML = "Score: " + player2;
    }
    }
