const circle = document.querySelector(".circle");
circle.addEventListener('click' , func);
container.querySelector('container');

function func (){
    var x = (Math.random() * 800);
    var y = (Math.random() * 700);
    circle.style.left = x + "px";
    circle.style.top = y + "px";
}

