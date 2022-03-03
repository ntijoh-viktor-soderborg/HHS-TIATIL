

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

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function circkle(players=5) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var now = new Date();
    var milisecond = now.getMilliseconds();
    // console.log(milisecond)

    colors=["red","green","black","pink","blue"]

    deg = (2*Math.PI/players)+count
    console.log(deg)
    console.log(count)
    for (let i = 0; i < players; i++) {
        x=200+100*Math.sin(deg*(i+1))
        y=200+100*Math.cos(deg*(i+1))  
        // console.log(x,y)
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, 2 * Math.PI);
        ctx.fillStyle = colors[i];
        ctx.fill();
    }
    count = count + 0.01
    ctx.save()
    
}

console.log("hej")
let count = 0.01
setInterval(circkle, 100);

// player(200,20)