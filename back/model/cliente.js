'use strict'

var mongoose = require('mongoose'); //variable para mongoose
var Schema = mongoose.Schema;//

//creo una variable para que albergue todo el esquema cliente
var ClienteSchema = Schema({
    nombres:{type: String, required:true},
    apellido:{type: String, required:true},
    pais:{type: String, required:true},
    email:{type: String, required:true},
    password:{type: String, required:true},
    perfil:{type: String,default:'perfil.png', required:true},
    telefono:{type: String, required:false},
    genero:{type: String, required:false},
    f_nac:{type: String, required:false},
    dni:{type: String, required:true},
});

module.exports = mongoose.model('cliente',ClienteSchema);