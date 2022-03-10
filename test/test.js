

function player(x,y) {

    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    console.log()
    ctx.fillStyle = getRndColor();
    ctx.fill();
}

function Drawcirckle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(200, 200, 180, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}





function circkle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 400); // clear canvas

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
            ctx.fillStyle = colors[i];
            ctx.fill();
        } else {
            // console.log(degstart+1)
            x=200+150*Math.sin(degstart+degbetwen*(i))
            y=200+150*Math.cos(degstart+degbetwen*(i)) 
            // console.log(x,y)
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, 2 * Math.PI);
            ctx.fillStyle = colors[i];
            ctx.fill();  
        }
    }
    count = count + 0.01
    // console.log(count)

    
    ctx.save()
    
}



console.log("hej")
let colors = []
let players= document.location["href"].split("=")[1]

// console.log(formData)
for (let i = 0; i < players; i++) {
    colors.push(getRndColor())
}
// console.log(colors)
let count = 0.01

setInterval(circkle, 10);
// player(200,20)