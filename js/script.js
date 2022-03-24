let order = [];
let songs = ['TheFatRat - Fly Away feat. Anjulie.mp3', 'TheFatRat - Monody (feat. Laura Brehm).mp3','TheFatRat - Unity.mp3', 'TheFatRat & RIELL - Hiding In The Blue [Chapter 1].mp3']
let delays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

let audio = document.querySelector('audio');

window.onload = (event) => {
    game();
}

function game() {
    if (players > 1) {
        order = [];
        let playTime = setInterval(circkle, 10);
        let stopTime = Math.floor(Math.random() * delays.length + 1) * 2000;
        let songIndex = Math.floor(Math.random() * songs.length);
        let randomSong = new Audio(`./assets/${songs[songIndex]}`);
        document.querySelector('h1').innerText = `Currently playing: ${songs[songIndex].slice(0,-4)}`
        playSong(randomSong);
        console.log(`Song stop time = ${stopTime}`)
        setTimeout(() => {
            clearInterval(playTime)
            stopSong(randomSong);
            document.body.addEventListener('keydown', (e) => {
                if (keys.includes(e.key) && !order.includes(e.key)) {
                    order.push(e.key);
                    updateUI(order);
                }
            })
        }, stopTime)
    } else if (players === 1) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 500, 500); // clear canvas
        let component = `<h1>Player ${players} vann!</h1>`;
        document.querySelector('main').innerHTML = component;
    }
}


function updateUI(list) {
    if (list.length === players) {
        let listDup = [...list]
        let lastPlayer = listDup.pop()
        //Remove lastPlayer by their key which is recived by function above
        players--
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