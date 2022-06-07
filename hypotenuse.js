const sideTriangle = document.querySelectorAll(".sides-triangle");
const calculateHypotenuse = document.querySelector("#calculate-hypotenuse");
const output = document.querySelector("#output");

function totalSum(a, b) {
    const sumHypotenuse = (a * a) + (b * b)
    const ActualOutput = Math.sqrt(sumHypotenuse);
    output.innerText = "your Hypotenuse is " + ActualOutput;
}


function Hypotenuse() {

    var base = Number(sideTriangle[0].value);
    var height = Number(sideTriangle[1].value);
    if(base == "" || height == ""){
        output.innerText = "please enter both the value"
    }
    else if(base < 0 || height < 0){
        output.innerText = "please enter positive value"
    }
    else{
        totalSum(base,height)
    }

}


calculateHypotenuse.addEventListener("click", Hypotenuse);