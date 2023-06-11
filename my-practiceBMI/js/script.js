
const calculateButton = document.querySelector(".button-calculate");
calculateButton.addEventListener("click", calculate);

function calculate(){
   
   const height = document.querySelector(".height").value / 100;
   const weight = document.querySelector(".weight").value;
   const bmi= (weight / (height*height)).toFixed(3);
   const result= document.querySelector(".result");
   document.querySelector(".modal").style.display= "flex";


   if (bmi <18.5){
    result.innerHTML = bmi+"<br/> underweight";
   }
   else if( bmi > 18.5 && bmi <= 24.5 ){
    result.innerHTML = bmi+ "<br/> healthy weight";
   }
   else if(bmi > 24.5 && bmi<30){
    result.innerHTML = bmi+"<br/> overweight";
   }
   else if(bmi>30){
    result.innerHTML = bmi+"<br/> fat";
   }
   else {
    result.innerHTML = "wrong number";
   }
}


const close = document.querySelector(".close");
close.addEventListener("click" , ()=>{ document.querySelector(".modal").style.display= "none";});

