function increase(){
    let paraG = document.getElementById("para")
    let paraText = paraG.textContent
    paraG.textContent = parseInt(paraText)+1
    paraG.style.color="green"
    document.getElementById("bgg1").style.backgroundColor="grey"
}

function reset(){
    let paraG = document.getElementById("para")
    paraText = paraG.textContent=0
    paraG.style.color="black"
    document.getElementById("bgg2").style.backgroundColor="grey"

    // black
    
}

function decrease(){
    let paraG = document.getElementById("para")
    let paraText = paraG.textContent
    paraG.textContent = parseInt(paraText)-1
    paraG.style.color="red"
    document.getElementById("bgg3").style.backgroundColor="grey"
    // red
}

// function sub (){
//     let input = document.getElementById("text")
//     // console.log(input.value)
//     if(input.value === ""){
//         let para = document.getElementById('p')
//         para.textContent = "please enter the detailes"
//     }else{let para = document.getElementById('p')
//     para.textContent = "congratulation! your registration is sucessfull"}
// }






// console.log(Math.random()*100);
// console.log(Math.ceil(88.32));
// console.log(Math.ceil(88.32));
// console.log(Math.ceil(Math.random()*100));