const express=require('express')
const logger=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const dat=new Date().getFullYear()
    console.log(method,url,dat)
    next()
}
module.exports=logger;