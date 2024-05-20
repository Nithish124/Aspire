// function myDisplayer(some) {
//     console.log(some);
// }
// function myFirst() {
//     myDisplayer("Hello");
// }
// function mySecond() {
//     myDisplayer("Goodbye");
// }
// myFirst();
// mySecond();
// function myDisplayer(some) {
//     console.log(some);
// }  
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer);
function myfunc(callfunc){
    console.log("hi javascript")
    callfunc();
    console.log("i need to master about you")
}
function callfunc(){
    console.log("hi how can i help you")
}
myfunc(callfunc)