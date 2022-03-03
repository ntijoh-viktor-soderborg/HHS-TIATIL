

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
    var second = now.getSeconds();
    console.log(second)

    deg = (2*Math.PI/players)+(second/100)
    console.log(deg)
    for (let i = 0; i < players; i++) {
        x=200+100*Math.sin(deg*(i+1))
        y=200+100*Math.cos(deg*(i+1))  
        
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, 2 * Math.PI);
        ctx.fillStyle = getRndColor();
        ctx.fill();
    }
    ctx.save()
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


setInterval(circkle, 1000);




// player(200,20)