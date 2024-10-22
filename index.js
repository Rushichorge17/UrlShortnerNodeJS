 const express = require('express');
 const path = require('path')
const urlRoute = require("./routes/url")
const URl = require('./models/url')
const staticRoute = require("./routes/staticRouter")
const {connectToMongoDB} =require('./connect')
 const app = express();
 const PORT = 8001


 connectToMongoDB('mongodb://localhost:27017/url-shortner').then(()=>{
   console.log("Mongoodb Connected")
 })


 app.set("view engine", "ejs")
app.set("views" ,path.resolve("./views"))
 app.use(express.json())
 app.use(express.urlencoded({extended:false}))

 app.use("/url",urlRoute)

 app.use('/',staticRoute)

//  app.get("/homes",(req,res)=>{
//    return res.render("home")
//  })
//  app.get('/:shortId',async (req,res)=>{
//          const shortId = req.params.shortId;
//        const entry =  await URl.findOneAndUpdate({
//             shortId
            
//          },{ $push:{
//             visiteHistory:{
//                 timestamp:  Date.now(),
 
//             }
//          }});
//           res.redirect(entry.redirectURL);
//  })
 app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
 });