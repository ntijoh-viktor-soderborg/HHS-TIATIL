let order = [];
let test1 = document.querySelector("main h2.test1");
let test2 = document.querySelector("main h2.test2");
let test3 = document.querySelector("main h2.test3");
let player1 = 'v';
let player2 = 'b';
let player3 = 'n';

let songs = ['TheFatRat - Fly Away feat. Anjulie.mp3', 'TheFatRat - Monody (feat. Laura Brehm).mp3','TheFatRat - Unity.mp3', 'TheFatRat & RIELL - Hiding In The Blue [Chapter 1].mp3']
let delays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

let audio = document.querySelector('audio');

document.body.addEventListener('keydown', (e) => {
    // order.push(e.key);
    // updateUI(order);
    if (e.key === 'p') {
        let uwu = setInterval(circkle, 10);
        let stopTime = Math.floor(Math.random() * delays.length + 1) * 2000;
        let songIndex = Math.floor(Math.random() * songs.length);
        let randomSong = new Audio(`./assets/${songs[songIndex]}`);
        document.querySelector('h1').innerText = `Currently playing: ${songs[songIndex].slice(0,-4)}`
        playSong(randomSong);
        console.log(`Song stop time = ${stopTime}`)
        setTimeout(() => {
            players--
            clearInterval(uwu)
            stopSong(randomSong);
        }, stopTime)
    }
})

function updateUI(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
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