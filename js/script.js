let order = [];
let songs = ['TheFatRat - Fly Away feat. Anjulie.mp3', 'TheFatRat - Monody (feat. Laura Brehm).mp3','TheFatRat - Unity.mp3', 'TheFatRat & RIELL - Hiding In The Blue [Chapter 1].mp3']
let delays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

let audio = document.querySelector('audio');

window.onload = (event) => {
    game();
}

function game() {
    if (amount > 1) {
        order = [];
        let playTime = setInterval(circkle, 10);
        let stopTime = Math.floor(Math.random() * delays.length + 1) * 2000;
        let songIndex = Math.floor(Math.random() * songs.length);
        let randomSong = new Audio(`./assets/${songs[songIndex]}`);
        document.querySelector('h1').innerText = `Currently playing: ${songs[songIndex].slice(0,-4)}`
        playSong(randomSong);
        console.log(`Song stop time = ${stopTime}`) //Ta bort när projektet är klart
        setTimeout(() => {
            clearInterval(playTime)
            stopSong(randomSong);
            document.body.addEventListener('keydown', (e) => {
                if (players.slice(0,amount+1).filter(el => el.key === `${e.key}`).length > 0 && !order.includes(e.key)) {
                    order.push(e.key);
                    updateUI(order);
                }
            })
        }, stopTime)
    } else if (amount === 1) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 500, 500); // clear canvas
        let component = `<h1>${players[0]["name"]} vann!</h1>
        <a href="http://192.168.193.32:5500/index.html">Go back`;
        document.querySelector('main').innerHTML = component;
    }
}

function updateUI(list) {
    if (list.length === amount) {
        let lastPlayer = list.pop()
        players = players.slice(0,amount+1).filter(el => {
            return el.key !== `${lastPlayer}`
        })
        amount--
        game();
    }
}
 
function playSong(song) {
    song.play();
}

function stopSong(song) {
    song.pause();
    song.currentTime = 0;
    document.querySelector('h1').innerText = 'Currently playing:'
}