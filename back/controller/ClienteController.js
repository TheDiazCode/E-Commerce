'use strict'

var Cliente = require('../model/cliente');//inicializamos el modelo cliente

const registro_cliente = async function(req,res){
    //
    res.status(200).send({message:'hola exe'});
}

module.exports = {
    registro_cliente
}