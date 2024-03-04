const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Personalbudget_schema = require('./models/personal_budget')
let url='mongodb://127.0.0.1:27017/mybudget'
app.use(bodyParser.json());
app.use('/',express.static('public'));

app.get('/budget', (req, res) => {
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
        Personalbudget_schema.find({}).then((data) => {
            console.log("Database Connected")
            res.json(data)
            mongoose.connection.close()
        }).catch((connectionError) => {
            console.error(connectionError);
        })
    }).catch((conerr) => {
        console.error(connectionError)
    })
});

app.post('/updatebudget', (req, res) => {
    mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
        console.log("Database Connected")
        const n=req.body
        console.log(n)
        Personalbudget_schema.insertMany(n).then((data) => {
            res.status(200).json({message: 'updated', data: data});
            mongoose.connection.close()

        }).catch((conerr) => {
            console.log(conerr)
        })
    }).catch((conerr) => {
        console.log(conerr)
    })
});

app.listen(port, () => {
console.log(`API served at http://localhost:${port}`);
});