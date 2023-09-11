const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', (req,res)=>{
    fs.readdir(path.join(__dirname, '/files/'), (err, files)=>{
        if(err){
            return res.status(500).json({error: 'Failed to retrieve files'});
        }
        res.json(files);
    })
})

app.get('/file/:fileName', (req, res)=>{
    const filePath = path.join(__dirname, '/files', req.params.fileName);
    fs.readFile(filePath, 'utf8', (err,data)=>{
        if(err){
            return res.status(404).send("File not found");
        }
        res.send(data);;
    })
})

app.use('*', (req,res)=>{
    res.status(404).send("Route not found");
})

module.exports = app;