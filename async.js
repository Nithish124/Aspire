const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("Promise Resolved value");
    },5000)
});
const p2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise Resolved value")
    },10000)
});
async function handlepromise(){
    console.log("hello")
    const val1=await p1;
    console.log("hi nithish");
    console.log(val1);
    const val2=await p2;
    console.log("hello javasript");
    console.log(val2);
}
handlepromise();