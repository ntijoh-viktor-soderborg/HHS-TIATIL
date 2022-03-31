let controls = document.querySelector('h2.controls');

function chair(players) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let chairs = players - 1
    let degbetwen = (2*Math.PI/chairs)
    if (players === 2) {
            let x=250;
            let y=250;
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, 2 * Math.PI);
            ctx.fillStyle = "brown";
            ctx.fill();
    } else {
        for (let i = 0; i < players; i++) {

            if (i > 0) {
                x=250+50*Math.sin(degbetwen*(i))
                y=250+50*Math.cos(degbetwen*(i)) 
                ctx.beginPath();
                ctx.arc(x, y, 15, 0, 2 * Math.PI);
                ctx.fillStyle = "brown";
                ctx.fill();
            }
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

    let degbetwen = (2*Math.PI/amount)
    let degstart = (2*Math.PI/amount)+count
    
    for (let i = 0; i < amount; i++) {
        if (i === 0) {
            a=250+180*Math.sin(degstart)
            b=250+180*Math.cos(degstart)  
            ctx.beginPath();
            ctx.arc(a, b, 15, 0, 2 * Math.PI);
            ctx.fillStyle = players[i]["color"];
            ctx.font = "20px Arial";
            ctx.fillText(`${players[i]["name"]}`, a-35, b-20);
            ctx.fill();

        } else {
            x=250+180*Math.sin(degstart+degbetwen*(i))
            y=250+180*Math.cos(degstart+degbetwen*(i)) 
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, 2 * Math.PI);
            ctx.fillStyle = players[i]["color"];
            ctx.font = '20px Arial';
            ctx.fillText(`${players[i]["name"]}`, x-35, y-20);
            ctx.fill();
        }    
    }
    count = count + 0.01
    ctx.save()

    chair(amount)
}

let players = [
{name: "Player Q", color: "hotpink", key:"q"},
{name: "Player P", color: "black", key:"p"},
{name: "Player X", color: "lightseagreen", key:"x"},
{name: "Player N", color: "brown", key:"n"},
{name: "Player T", color: "green", key:"t"},
{name: "Player K", color: "red", key:"k"},
{name: "Player G", color: "blue", key:"g"},
{name: "Player F", color: "purple", key:"f"}];
let amount = parseInt(document.location["href"].split("=")[1]);

let count = 0.01

controls.innerText = 'Controls: '
for (let i = 0; i < players.length; i++) {
    controls.innerText += ` ${players[i]["key"]}`
}