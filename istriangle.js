const inputTriangle = document.querySelectorAll(".input-triangle");
const checkTriangle = document.querySelector("#check-triangle")
const outputTriangle = document.querySelector("#output-triangle");

function calculateSumOfAngles(a, b, c) {
  const sumOfAngles = a + b + c;
  if (sumOfAngles === 180) {
    outputTriangle.innerText = "yay,The angle from 🔺";
  } else {
    outputTriangle.innerText = "oh oh! the angles don't from a triangle 😔 ";
  }

}


function isTriangle() {
  var angle1 = Number(inputTriangle[0].value);
  var angle2 = Number(inputTriangle[1].value);
  var angle3 = Number(inputTriangle[2].value);
  if(angle1=="" || angle2=="" || angle3==""){
    outputTriangle.innerText = "please enter all the output";
  }
  else if(angle1 < 0 || angle2 < 0 || angle3 < 0){
    outputTriangle.innerText = "Please enter positive value"
  }
  else{
    calculateSumOfAngles(angle1,angle2,angle3);
  }
  
}


checkTriangle.addEventListener("click", isTriangle);