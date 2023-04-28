const element = document.getElementById("my-button");
element.addEventListener("click", click);


function click() {
       const body = document.querySelector("body");

       if(body.classList.contains("default")){
              body.classList.remove("default");
              body.classList.add("pink");
       } else if(body.classList.contains("pink")){
              body.classList.remove("pink");
              body.classList.add("green");
       }
       else if(body.classList.contains("green")){
              body.classList.remove("green");
              body.classList.add("yellow");
       }
       else {
              body.classList.remove("yellow");
              body.classList.add("default");
       }
}
