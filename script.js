var gameLevel = 0;
const array = [];

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function animate() {
    for (var i = 0; i < gameLevel; i++) {
        var element = document.getElementById(array[i].toString());
        element.style.backgroundColor = 'white';
        await sleep(600);
        element.style.backgroundColor = '';
        await sleep(600);
    }
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener('click', function() {
        checkOrder(i);
    });
}

let numbersChecked = 0;

function checkOrder(buttonValue) {
    if (numbersChecked < array.length) {
        if (buttonValue === array[numbersChecked]) {
            numbersChecked++;
            if (numbersChecked === array.length) {
                numbersChecked = 0;
                gameStart();
            } else {

            }
        } else {
            document.getElementById('startButton').disabled=false;
            array.length = 0;
            gameLevel = 0;
            numbersChecked = 0;
            document.getElementById('gameLevel').textContent = "";
        }
    }
}

async function gameStart() {    
   document.getElementById('startButton').disabled=true;
   array[gameLevel] = Math.floor(Math.random() * 9) + 1;
   gameLevel++;
   document.getElementById('gameLevel').textContent = "LEVEL : " + gameLevel;
   animate();

}

document.getElementById('startButton').addEventListener('click', gameStart);
