// function clicked() {
//     let resultElement = document.getElementById("result") ;
// // console.log(resultElement);
// let input = document.getElementById("userInput") ;
// // console.log(input.value);
// }



let resultElement = document.getElementById("result") ;
// console.log(resultElement);
let input = document.getElementById("userInput") ;
// console.log(input.value);
let random = Math.ceil(Math.random()*100);
console.log(random);
// console.log(random);


function clicked(){
    let value = parseInt(input.value);
    if(value === random){
        resultElement.textContent = "Congratulations"
        resultElement.style.backgroundColor = "red";
    }
    else if (value < random){
        resultElement.textContent = "your number is low"
        resultElement.style.backgroundColor = "green";
    }
    else{
        resultElement.textContent = "your number is larger"
        resultElement.style.backgroundColor = "blue";
    }
}


/** DOM tree
 * did three project
 * event 
 * binary search
*/