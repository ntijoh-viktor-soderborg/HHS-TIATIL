let order = []
let test1 = document.querySelector("h2.test1")
let test2 = document.querySelector("h2.test2");
let test3 = document.querySelector("h2.test3");
let player1 = 'v'
let player2 = 'b'
let player3 = 'n'

document.body.addEventListener('keydown', (e) => {
    order.push(e.key);
    updateUI(order);
})

function updateUI(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === player1) {
            test1.style.backgroundColor = 'lightgreen'
        } else if (list[i] === player2) {
            test2.style.backgroundColor = 'lightgreen'
        } else if (list[i] === player3) {
            test3.style.backgroundColor = 'lightgreen'
        }
    }
}