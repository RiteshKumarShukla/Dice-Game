let score1 = 0;
let score2 = 0;
updateTable();

document.querySelector(".img1").setAttribute("src", "./images/6.png");
document.querySelector(".img2").setAttribute("src", "./images/6.png");

document.addEventListener('keydown', function () {
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    let src1 = "./images/" + dice1 + ".png";
    let src2 = "./images/" + dice2 + ".png";
    document.querySelector(".img1").setAttribute("src", src1);
    document.querySelector(".img2").setAttribute("src", src2);
    if (dice1 === dice2) {
        document.querySelector("h2").textContent = "Draw!";
    } else if (dice1 > dice2) {
        document.querySelector("h2").textContent = "Player 1 Wins!";
        let temp = JSON.parse(localStorage.getItem('score1')) || 0;
        temp++;
        localStorage.setItem('score1', JSON.stringify(temp));
        updateTable();
    } else {
        document.querySelector("h2").textContent = "Player 2 Wins!";
        let temp = JSON.parse(localStorage.getItem('score2')) || 0;
        temp++;
        localStorage.setItem('score2', JSON.stringify(temp));
        updateTable();
    }
})

function updateTable() {
    document.querySelector('#score2').innerText = JSON.parse(localStorage.getItem('score2')) || 0;
    document.querySelector('#score1').innerText = JSON.parse(localStorage.getItem('score1')) || 0;
}
document.querySelector('table+p').addEventListener('click', function () {
    localStorage.setItem('score1', 0);
    localStorage.setItem('score2', 0);
    document.querySelector('h2').textContent = "Start!"
    updateTable();
})