require('dotenv').config()
const express = require('express'),
bodyParser = require('body-parser'),
massive = require('massive'),
session = require('express-session'),
cors = require('cors'),
nodemailer = require('nodemailer'),
axios = require('axios')


const app = express();
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(bodyParser.json()) 
app.use(cors())
app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db)
}).catch(err=>{
    console.log(err)
})

var transporter = nodemailer.createTransport({
    service: 'goldmedia',
    auth: {
        user: 'kev@goldmedia.biz',
        pass: process.env.EMAIL_PASSWORD
    }
});


app.post('/submitform',(req,res)=>{
    let {name, email, phone, company, subject, emailList, task}=req.body;
    req.app.get('db').submitForm([name, phone, email, company, task, emailList, subject]).then(()=>{
        var mailOptions = {
            from: 'kev@goldmedia.biz',
            to: email,
            subject: 'Gold Media',
            html:`<div>Yellow</div>`
        }
    })
})


const port = 3232;
app.listen(port, ()=>{
    console.log("Listening on port " + port)
})