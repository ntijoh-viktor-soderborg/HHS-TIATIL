// document.querySelector(".map").addEventListener("click",stoploping)

// function stoploping(){
//     console.log("kommer stanna");
//     let player = document.querySelectorAll("div.player");
//     player.forEach(element => {
//         element.classList.toggle("loping");
//     });
// }

// function addPlayers(playeramount) {
//     for (let i = 0; i < playeramount; i++) {
//         let element = `<div class="player loping" style="animation-delay:${i*100}ms;"></div>`;
//         document.querySelector(".map").insertAdjacentHTML('afterbegin', element);
//     }
// }

// addPlayers(5)

function player(x,y) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
}

function circkle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(200, 200, 180, 0, 2 * Math.PI);
    ctx.stroke();
}

circkle()
player(200,20)