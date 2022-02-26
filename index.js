

function check(){
    let a = Math.round(Math.random() * 5 +1);
let b = Math.round(Math.random() * 5 +1);
let newImage = './images/dice' + a + '.png';
let newImage2 = './images/dice'+ b + '.png';
console.log(newImage);

document.getElementById('image').src = newImage;
document.getElementById('image2').src = newImage2;

    if(a === b){
       document.getElementById('header').innerHTML = "Draw!"
    }else if(a > b){
        document.getElementById('header').innerHTML = "🚩 Player 1 wins!"
    }
    else if( a < b){
        document.getElementById('header').innerHTML = "Player 2 wins! 🚩"
    }
    }

