const element = document.querySelector("#my-button");
element.addEventListener("click", my_function);

function my_function(){
    const box = document.createElement("div");
    box.classList.add("color");
    const body = document.querySelector("body");
    body.appendChild(box);
}


