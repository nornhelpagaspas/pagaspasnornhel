function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
const texts = [
    "Aspiring Gamer",
    "Popular Gamer",
    "Game Creator",
    "Content Creator",
    "youtuber"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;