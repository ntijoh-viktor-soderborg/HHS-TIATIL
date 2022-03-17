let playerNumb = 0;
let keys = ['a', 's', 'd', 'f'];
// ^ Vilka knappar som en spelare har tillgång till
let keyNumb = -1;

// function player(x,y) {
//     ctx.beginPath();
//     ctx.arc(x, y, 15, 0, 2 * Math.PI);
//     ctx.fillStyle = getRndColor();
//     ctx.fill();
// }

// function Drawcirckle() {
//     var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     ctx.beginPath();
//     ctx.arc(200, 200, 180, 0, 2 * Math.PI);
//     ctx.stroke();
// }

// function drawHand(ctx, pos, length, width) {
//     ctx.beginPath();
//     ctx.lineWidth = width;
//     ctx.lineCap = "round";
//     ctx.moveTo(0,0);
//     ctx.rotate(pos);
//     ctx.lineTo(0, -length);
//     ctx.stroke();
//     ctx.rotate(-pos);
//   }

function getRndColor() {
    playerNumb++
    keyNumb++
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return {name: `Player ${playerNumb}`, color:'rgb(' + r + ',' + g + ',' + b + ')', key:keys[keyNumb]};
}

function circkle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 500, 500); // clear canvas

    var now = new Date();
    var milisecond = now.getMilliseconds();
    // console.log(milisecond)
    // console.log(colors)

    degbetwen = (2*Math.PI/players)
    degstart = (2*Math.PI/players)+count
    // console.log(count)
    for (let i = 0; i < players; i++) {
        if (i == 0) {
            // console.log(degstart)
            
            a=200+150*Math.sin(degstart)
            b=200+150*Math.cos(degstart)  
            // console.log(a,b)
            ctx.beginPath();
            ctx.arc(a, b, 15, 0, 2 * Math.PI);
            // console.log(colors[i])
            ctx.fillStyle = colors[i]["color"];
            ctx.font = "20px Arial";
            ctx.fillText(`${colors[i]["name"]}`, a-35, b-20);
            ctx.fill();
        } else {
            // console.log(degstart+1)
            x=200+150*Math.sin(degstart+degbetwen*(i))
            y=200+150*Math.cos(degstart+degbetwen*(i)) 
            // console.log(x,y)
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, 2 * Math.PI);
            ctx.fillStyle = colors[i]["color"];
            ctx.font = '20px Arial';
            ctx.fillText(`${colors[i]["name"]}`, x-35, y-20);
            ctx.fill();
        }
    }
    count = count + 0.01
    ctx.save()
}

let colors = [];
let players= parseInt(document.location["href"].split("=")[1]);

// console.log(formData)
for (let i = 0; i < players; i++) {
    colors.push(getRndColor())
}
// console.log(colors)
let count = 0.01
// player(200,20)