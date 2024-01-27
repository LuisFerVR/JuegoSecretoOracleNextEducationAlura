let listDrawnNumbers = [];
let maxNumb = 10;
// ctrl + F find some
function asignElementText(label,text){
    let laabelHTML = document.querySelector(label);
    laabelHTML.innerHTML = text;
    return;
}

function initialConditions(){
    asignElementText('h1','Bienvenidos al juego del número secreto');
    asignElementText('p',`Ingrese un número del 1 al ${maxNumb}`);
    secretNumber = generetSecretNumber();
    attempt=1;
}

//generet a secret number
function generetSecretNumber () {
    let generatedNumber = Math.floor(Math.random()*maxNumb)+1;
    //if we already draw all the numbers
    if (listDrawnNumbers.length()==maxNumb) {
        asignElementText('p',`Los número disponibles ya han sido sorteados`);
    } else {
        //if the generated number is in the list, call the funcition  again until generate a unique number
        if (listDrawnNumbers.includes(generatedNumber)) {
            generatedNumber();
        } else {
            listDrawnNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }
}


function verifyAttempt(){
    //add event listener to input
    let inputNumber = parseInt(document.getElementById('inputNumber').value);
    //evaluated the number
    if (inputNumber=== secretNumber) {
        asignElementText('p',`Felicidades, acertaste el número en ${attempt} ${attempt==1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //help the user
        if(inputNumber > secretNumber){
            asignElementText('p','El número secreto es menor');
        }else {
            asignElementText('p','El número secreto es mayor');
        }
        attempt++;
        clearInput();
    }
    return ;
}
//clear the input
function clearInput(){
    document.querySelector('#inputNumber').value='';
}
//reset Game
function resetGame () {
    //clear input
        clearInput();
    //request a number into range 1 to maxNumb, reset number attempt,generate random number
        initialConditions();
    //disabled button reset game
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}
initialConditions();