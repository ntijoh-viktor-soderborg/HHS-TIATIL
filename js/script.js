let order = [];
let songs = ['TheFatRat - Fly Away feat. Anjulie.mp3', 'TheFatRat - Monody (feat. Laura Brehm).mp3','TheFatRat - Unity.mp3', 'TheFatRat & RIELL - Hiding In The Blue [Chapter 1].mp3']
let delays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

let audio = document.querySelector('audio');

window.onload = (event) => {
    game();
}

function game() {
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
}


function updateUI(list) {
    console.log(list)
    if (list.length === players) {
        if (list.length === 1) {
            console.log("hej")
        } else {
            let listDup = [...list]
            let lastPlayer = listDup.pop()
            //Remove lastPlayer by their key which is recived by function above
            players--
            game();
        }
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