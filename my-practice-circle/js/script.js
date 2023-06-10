const circle = document.querySelector(".circle");
circle.addEventListener('click' , func);
container.querySelector('container');

function func (){
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

