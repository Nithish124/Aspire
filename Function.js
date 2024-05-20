//function
function myfunction(val1,val2){
    return val1*val2;
}
myfunction(5,4);
//Arrow function
let myfunc=(val1,val2)=>val1*val2;
myfunc(5,4);
//callback function
function myfunc1(myfunc2){
    console.log("hello");
}
function myfunc2(){
    console.log("hi");
}