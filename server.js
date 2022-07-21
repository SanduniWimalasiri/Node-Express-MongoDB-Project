const express= require('express'); //use express module
const dotenv = require('dotenv'); //use dotenv
const morgan = require('morgan'); //use morgan
const bodyparser = require('body-parser')//use body-parser
const path = require('path');

const app=express(); //initialize the app varible as express application

//Specify the path of config file and need to inform the express server to use the varible of that file.
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//parse request to body-parcer
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//specify root route.When URL match to the root route,going to execute the function
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/add-user',(req,res)=>{
    res.render('add_user');
})

app.get('/update-user',(req,res)=>{
    res.render('update_user');
})

app.listen(PORT,()=>{console.log(`Server is runnign on http://localhost:${PORT}`)});

