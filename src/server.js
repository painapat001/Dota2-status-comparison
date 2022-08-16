const { response } = require('express');
const express = require('express');
const https = require('https');
const { useState } = require('react');
const app = express();


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/express_backend', (req, res) => {

    
    const url = "https://api.opendota.com/api/heroStats";
    https.get(url,(response)=>{
        console.log(response.statusCode);
        if(response.statusCode === 200){
            const chunks = []
            response.on('data', function (chunk) {
                chunks.push(chunk)
              })
    
            response.on('end', function () {
                const data = Buffer.concat(chunks)
                var heroStats = JSON.parse(data)
                // Try this one out as well
                // res.json(got)
                // console.log(heroStats[0].localized_name)
                res.send(heroStats);
            })
        }else {
            console.log(response.statusCode);
            res.send(null);
        }

    })
});

app.post('/', (req, res) => {
    res.send('POST request');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});