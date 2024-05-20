//sets
const nums=new Set();
//add method
nums.add(1);
nums.add(2);
nums.add(6);
nums.add(4);
nums.add(8);
//has method
console.log(nums.has(4));
//iterator methods
nums.forEach((value)=>{
    console.log(value)
})
const array=nums.entries()
for(index of array){
    console.log(index)
}
const collect=nums.keys();
for(index of collect){
    console.log(index);
}
//maps
const arr= new Map()
arr.set(1,"nithish")
arr.set(2,"raj")
arr.set(3,"prag")
//get method
console.log(arr.get(1))