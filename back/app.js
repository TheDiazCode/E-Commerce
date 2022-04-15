'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const { application } = require('express');

var port = process.env.PORT  || 4201; 

mongoose.connect('mongodb://127.0.0.1/ECommerce',(err,res)=>{
    if(err){
        console.log(err);
    }else{
        app.listen(port,function(){
            console.log('conexion exitosa');
        });
    }
})

module.exports = app;