const express = require('express')
const path = require('path');
const app = express()
const port = 3000
var counter = 0;
app.use('/css', express.static('css') );
//share folder
app.use('/public', express.static('public') );

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//copy file ma show
app.get('/', (req, res) => {
    counter++;
    console.log('counter', counter);
    console.log(path.join(__dirname + "/index.html"));
    return res.sendFile(path.join(__dirname + "/index.html"));
})


app.post('/sompop', (req,res)=> {
    return res.send(`<h1>K ${req.body.firstName} ${req.body.lastName} (POST) </h1>
    <p>Thank you for submiting form</p>
    `);
    //return res.json(req.body);
})

app.get('/sompop', (req, res) => {
    
    var str = "<h1> K " + req.query.firstName + "</h1>";
    str += "<p>Thank you for submiting form</p>"
    return res.send(str);
    /*return res.send(`<h1>K ${req.query.firstName}</h1>
    <p>Thank you for submiting form</p>
    `);*/
    //return res.json(req.query);
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))