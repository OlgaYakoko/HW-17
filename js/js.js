let userNumb = prompt();
let userSquare = prompt();

function exponentiation (number, degree) {
    
    if(!isNaN(userNumb) && !isNaN(userSquare)){
       return number ** degree; 
    } else {return `some error`}
    
}

alert(exponentiation(userNumb, userSquare));