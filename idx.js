// (document.getElementById('main_heading').textContent = "navgurukul");

// console.log(document.getElementById('main_heading').style.color = "blue ");

// function changeStyle(){
//     let head = document.getElementById('main_heading')
//     head.textContent = "navgurukul"
//     head.style.color="red"
// }


function switchOff(){
    document.getElementById('bulb').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById('cat').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById('main').textContent="Switched Off"
    document.getElementById('bgg2').style.backgroundColor="green"
    document.getElementById('bgg1').style.backgroundColor="#cbd2d9"
}

function switchOn(){
   document.getElementById('bulb').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
   document.getElementById('cat').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
   document.getElementById('main').textContent="Switched On"
   document.getElementById('bgg1').style.backgroundColor="#e12d39"
   document.getElementById('bgg2').style.backgroundColor="#cbd2d9"
}