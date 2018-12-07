const express = require('express');
// creating new instance of express server
const path= require('path')
const app = express();
app.use(express.static(path.join(__dirname,'/public')))
app.set('view engine','pug')

//make a route for the about page of the website( app.get(): makes route )

//  app.get("/", (req, res) => {
//         res.render("index.pug");
        
//  });

// app.get('/maps', (req, res) => {
//     res.send("maps!");

// });

app.get('/maps',(req,res)=>{
        // res.send("this is home page!");
        res.render("maps",{})
     });
     app.get('/shortener',(req,res)=>{
        res.render("shortener",{})
     });
     app.get('/youtube',(req,res)=>{
        res.render("youtube",{})
     });


     

// res.send("this is home page!");

        // res.sendFile(path.join(__dirname + '/views/maps.pug'))

// specifies port that server is listening on
app.listen(3000)


//anonymus function is a function with no name