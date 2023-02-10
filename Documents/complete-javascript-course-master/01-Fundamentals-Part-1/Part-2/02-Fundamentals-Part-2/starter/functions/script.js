function logger() {
console.log("My name is asha");
}
logger();//Invoking //calling/running the function
logger();
logger();

//Instead of resuing the function it can return and receive data.
//Parameters are like variables specific only to this function they will get define once we then call the function
function fruitProcessor(apples,oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
     return juice;
}
const appleJuice = fruitProcessor(5,4);//these are arguments
console.log(appleJuice);
const newJuice = fruitProcessor(6,7);
console.log(newJuice);

function number(num){
    const bottle = (`I have ${num} bottles`);
    return bottle;
}
const bottleNumber = number(3);
console.log(bottleNumber);