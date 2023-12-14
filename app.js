const h1 = document.querySelector("h1");
const button = document.querySelector("button");

document.body.style.textAlign = "center";

const randomColor = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return newColor = `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", function () {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerHTML = newColor;
    
})
