const inputArea = document.querySelectorAll(".input-area");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output");

function triangleValue(a, b) {
    sumOfTriangle = 0.5 * (a * b);
    output.innerText = "Area of triangle is " + sumOfTriangle;}



function triangleCalculation() {
   var base = Number(inputArea[0].value);
   var height = Number(inputArea[1].value);

   if(base == "" || height == ""){
       output.innerText = "please enter both the value first";
   }
   else if(base < 0 || height < 0){
       output.innerText = "please enter positive value";
   }
   else{
       triangleValue(base,height);
   }
   
}

btnCheck.addEventListener("click",triangleCalculation);




