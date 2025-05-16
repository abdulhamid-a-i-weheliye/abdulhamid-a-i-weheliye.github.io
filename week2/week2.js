//Ex one
let age = 17;
if (age >= 21){
    console.log("you can drink");
}
else{
    console.log("sorry kid");
}

//Ex two
let num = 7;
if (num%5 ==0){
    console.log("divisible by 5");
}
else{
    console.log("not divisible by 5");
}

//Ex three
let age2 = "22";
//if(age2 > 65){
//  console.log("senior");
//}
//else if(age2 <= 13){
//    console.log("child");
//}
//else if(age2 > 13 || age2 < 18){
//    console.log("Teenager");
//}
//else if(age2 >= 18){
//    console.log("adult");
//}

console.log(age2 > 65 ? "senior" : age2 <= 13 ? "child" : age2 > 13 && age2 < 18 ? "Teenager" : "adult");