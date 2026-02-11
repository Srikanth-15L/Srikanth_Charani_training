console.log("Example of conditional statements");
var a=40;
console.log("Val of a ",a);
if(a < 30){
    console.log("a is > 30");
}
else{
    console.log("a is < 30");
}

// the Assignment 1 in Day2  
var a = 'BMI';
console.log(a);
console.log("The BMI program ")
var h=1.72;
var w=70;
var bmi=w/(h*h);
console.log("The BMI value is ",bmi);
if(bmi < 18.5){
    console.log("under weight");
}else if(bmi >=18.5 && bmi <= 24.9){
    console.log("Healthy weight");
}else if(bmi >= 25 && bmi <= 29.9){
    console.log("Over weight")
}else{
    console.log("Bmi Obesity");
}
// Switch statements 
console.log("By using the switch statemnts");
let weight = 70;   
let height = 1.75;

let bmi1 = weight / (height * height);
let category = "";

switch (true) {
  case bmi < 18.5:
    category = "Underweight";
    break;

  case bmi >= 18.5 && bmi < 25:
    category = "Normal weight";
    break;

  case bmi >= 25 && bmi < 30:
    category = "Overweight";
    break;

  case bmi >= 30:
    category = "Obesity";
    break;

  default:
    category = "Invalid BMI";
}

console.log("BMI:", bmi.toFixed(2), "-", category);

