let color;
const pintar = document.getElementById("key");

document.addEventListener("keydown", function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color = "pink";
        pintar.style.backgroundColor = color;
    } else if (event.key === 's' || event.key === 'S') {
        color = "orange";
        pintar.style.backgroundColor = color;
    } else if (event.key === 'd' || event.key === 'D') {
        color = "skyblue";
        pintar.style.backgroundColor = color;
    }
})

let color2;
const pintar2 = document.getElementById("key2");

document.addEventListener("keydown", function (event) {
    if (event.key === 'q' || event.key === 'Q') {
        color2 = "purple";
        pintar2.style.backgroundColor = color2;
    } else if (event.key === 'w' || event.key === 'W') {
        color2 = "grey";
        pintar2.style.backgroundColor = color2;
    } else if (event.key === 'e' || event.key === 'E') {
        color2 = "chocolate";
        pintar2.style.backgroundColor = color2;
    }
})

