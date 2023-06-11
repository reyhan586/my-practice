const button = document.querySelector(".button1");
const zero = document.querySelector(".zero");
button.addEventListener("click" , clickfunc);

function clickfunc(){

 if (zero.innerHTML==0){
  zero.innerHTML='1';
 }
 else {
  zero.innerHTML +='1';
 }
}