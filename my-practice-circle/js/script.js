const circle = document.querySelector(".circle");
circle.addEventListener('click' , func);
container.querySelector('container');

function func (){
    var x = Math.floor(Math.random() * 800);
    var y = Math.floor(Math.random() * 700);
    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

