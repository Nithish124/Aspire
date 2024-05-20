// const express = require('express')
// const app = express()
// app.locals.email="nithish@gmail.com"
// console.log(app.locals)
//app.mountpath()
// const express = require('express');
// const app = express();  
// const user = express();
// const PORT = 3000;
// user.get('/', function (req, res) {
//       console.log(user.mountpath); 
//       res.send('User Homepage');
// });
// app.use('/user', user); 
// app.listen(PORT, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });
// const express=require('express');
// const app=express()
// app.get('/',function(req,res){
//     console.log(app.mountpath)
//     res.send("ok")
// })
// app.listen(5000,function(err){
//     if(err){
//         console.log(err)
//     }
//     console.log("server running on port",5000);
// })
//app.router
// const express = require('express')
// const app = express()
// const rout = app.Router
// app.get('/', (req, res) => {
//   res.send('hello world')
// })
// app.listen(5000)
//Events
// const express=require('express')
// const admin=express()
// const app=express()
// admin.on('mount',(par)=>{
//     console.log("admin mounted")
//     console.log(par);

// })
// admin.get('/',(req,res)=>{
//     res.send("hi boy")
// })
// app.use('/admin',admin);
// app.listen(5000)
// const express=require('express')
// const app=express()
// app.get('/api/v1/query',(req,res)=>{
//     console.log(req.query)
//     res.json({nithish:'sucess'})
// })
// app.listen('5000',()=>{
//     console.log("server listen on port",5000);
// })
// const express=require('express')
// const app=express()
//const morgan=require('morgan')
//const log=require('./mdware')
// app.use(morgan('tiny'))
// app.get('/',(req,res)=>{
//   res.send('Home')
  
// })
// app.get('/about',(req,res)=>{
//   res.send('About')
  
// })
// app.get('/products/list',(req,res)=>{
//   res.send('prolist')
 
// })
// app.get('/products/price',(req,res)=>{
//   res.send('proprice')
  
// })
// app.listen(5000,()=>{
//   console.log("Server port running at the:",5000);
// })
const express=require('express')
let people=require('./data');
const app=express()
app.use(express.static('./navbar-app'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/api/people',(req,res)=>{
  res.status(200).json({sucess:true,data:people})
})
app.post('/api/people',(req,res)=>{
  const{name}=req.body
  if(!name){
    res.status(404).json({sucess:false,msg:'please provide your credential'})
  }
  else{
    res.status(201).json({sucess:true,person:name})
  }
})
app.post('/api/postman/people',(req,res)=>{
  const {name}=req.body
  if(!name){
    return res.status(404).json({sucess:false,msg:'please provide your credentials'});
  }
  res.status(201).json({sucess:true,data:[...people,name]})
})
app.post('/login',(req,res)=>{
  const {name}=req.body
  if(name){
    return res.status(200).send(`welcome ${name}`);
  }
  res.status(404).json({sucess:false,msg:'please provide your credentials'})
})
app.put('/api/people/:id',(req,res)=>{
  const {id}=req.params
  const {name}=req.body
  const person=people.find((person)=>person.id===Number(id))
  if(!person){
    return res.status(404).json({sucess:false,msg:`no person with id ${id}`})
  }
  const newPerson=people.map((person)=>{
      if(person.id===Number(id)){
        person.name=name
      }
      return person;
  })
  res.json({sucess:true,data:newPerson})
})
app.delete('/api/people/:id',(req,res)=>{
  const person=people.find((person)=>
    person.id===Number(req.params.id)
  )
  if(!person){
    return res.status(404).json({sucess:false,msg:`noperson with id${req.params.id}`})
  }
  const newpeop=people.filter((person)=>person.id!==Number(req.params.id))
  return res.status(200).json({success:true,data:newpeop})
})
app.listen(5000,()=>{
  console.log("server running on port:",5000);
})