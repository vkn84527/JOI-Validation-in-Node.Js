
const express = require('express');
const app=express()
const {registervalidation}  = require('./validation')
app.use(express.json())

app.get('/',(req,res) =>{
    res.json({'Message ':' a server for express validation '});
})

app.post('/register',async(req,res) =>{
      const{error} = registervalidation(req.body)
if(error){
  return res.send(error.details[0].message)
}else{
    console.log('data is being send')
    res.json({message :'data saved'})
}
    
})

app.listen(1000, () =>{ 
    console.log('Server listen on port 1000')})

