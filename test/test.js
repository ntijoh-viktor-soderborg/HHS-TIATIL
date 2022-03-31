let playerNumb = 0;
let keys = ['a', 's', 'd', 'f'];
// ^ Vilka knappar som en spelare har tillgång till
let keyNumb = -1;

function getRndColor() {
    playerNumb++
    keyNumb++
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return {name: `Player ${playerNumb}`, color:'rgb(' + r + ',' + g + ',' + b + ')', key:keys[keyNumb]};
}

function chair(players) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    let chairs = players - 1
    let degbetwen = (2*Math.PI/chairs)
    // degstart = (2*Math.PI/chairs)+count
    // console.log(count)

    for (let i = 0; i < players; i++) {


        if (i == 0) {
            // console.log(degstart)

            // a=200+50*Math.sin(degstart)
            // b=200+50*Math.cos(degstart)  
            // // console.log(a,b)
            // ctx.beginPath();

            // ctx.arc(a, b, 15, 0, 2 * Math.PI);

            // ctx.fillStyle = black;
            // ctx.fill();

        } else {
            // console.log(degstart+1)
            x=200+50*Math.sin(degbetwen*(i))
            y=200+50*Math.cos(degbetwen*(i)) 
            console.log(x,y)
            ctx.beginPath();

            ctx.arc(x, y, 15, 0, 2 * Math.PI);

            ctx.fillStyle = "brown";
            ctx.fill();

        }


    }
    count = count + 0.01
    ctx.save()
}

function circkle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 500, 500); // clear canvas

    var now = new Date();
    var milisecond = now.getMilliseconds();
    // console.log(milisecond)
    // console.log(colors)oki

    degbetwen = (2*Math.PI/players)
    degstart = (2*Math.PI/players)+count
    // console.log(count)
     
    for (let i = 0; i < players; i++) {
        
      
        if (i == 0) {
            // console.log(degstart)

            a=250+180*Math.sin(degstart)
            b=250+180*Math.cos(degstart)  
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
            x=250+180*Math.sin(degstart+degbetwen*(i))
            y=250+180*Math.cos(degstart+degbetwen*(i)) 
            // console.log(x,y)
            ctx.beginPath();

            ctx.arc(x, y, 15, 0, 2 * Math.PI);
            // ctx.arc(250+50*Math.sin(degbetwen*(i)),250+50*Math.cos(degbetwen*(i)) , 15, 0, 2 * Math.PI);
            ctx.fillStyle = colors[i]["color"];
            ctx.font = '20px Arial';
            ctx.fillText(`${colors[i]["name"]}`, x-35, y-20);
            ctx.fill();
        }

        
        
        // ctx.moveTo(200+30*Math.cos(i*degbetwen), 200+30*Math.sin(i*degbetwen));
        // ctx.lineTo(200+60*Math.cos(i*degbetwen), 200+60*Math.sin(i*degbetwen));
        // ctx.lineWidth = 35;
        // ctx.stroke();
        
    }
    count = count + 0.01
    ctx.save()

    chair(players)

}

let colors = [];
let players= parseInt(document.location["href"].split("=")[1]);

console.log(players)
for (let i = 0; i < players; i++) {
    colors.push(getRndColor())
}

// console.log(colors)
let count = 0.01
// setInterval(circkle, 10);
// player(200,20)
