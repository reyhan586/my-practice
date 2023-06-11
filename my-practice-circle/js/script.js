const circle = document.querySelector(".circle");
circle.addEventListener('click' , func ,getRandomLightColor );
container.querySelector('container');

function func (){
    var x = (Math.random() * 1100);
    var y = (Math.random() * 500);
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.style.backgroundColor=  getRandomLightColor();
}

function getRandomLightColor() {
    let r = 100 + Math.round(100 * Math.random());
    let g = 120 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

