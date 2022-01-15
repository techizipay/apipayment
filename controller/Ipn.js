const { json } = require('body-parser');
const fetch = require("node-fetch");
var crypto = require('crypto');
const hmacSHA256 = require('crypto-js/hmac-sha256')
const Hex = require('crypto-js/enc-hex');

const {Transaccion} = require('../config/Sequelize');

const ReceiveIpn = async(req, res) => {
 
    const utf8 = require('utf8');
 
    var answer = req.body['kr-answer'];  
 
    const answerHash = Hex.stringify(
        hmacSHA256(answer, 'testpassword_gXFxkEiT3k0dDXcbqO7TxRxtGggVEX9vuFz2Xq2jFvbxj')
    )  
  
    let validacion = answerHash == req.body['kr-hash'] ? 'Validación Correcta' : 'Validación Incorrecta';
  
    let nuevaTransaccion = await Transaccion.create({
        transaccionUUID: JSON.parse(req.body['kr-answer'])['transactions'][0]['uuid'],
        transaccionHash: req.body['kr-hash'],
        transaccionAnswer: req.body['kr-answer'],
        transaccionValidacion: validacion
    })
    .then(transaccion => {
        return res.status(200).json({
            ok:true,
            message: "Registrado Correctamente",
            data: answerHash
        });
    })
    .catch(error => {
        return res.status(500).json({
            ok:false,
            message: "Hubo un error al registrar la transacción",
            data: null
        });
    })
}


const ShowIpn = async(req,res) => {
    try{
        let resultado = await Transaccion.findAll();
        return res.status(200).json({
            ok:true,
            message: null,
            data: resultado
        });
    }catch(error){
        return res.status(500).json({
            ok:false,
            message: "Hubo un error al obtener las transacciones: " + error,
            data: null
        });
    }

}

module.exports = { 
    ReceiveIpn,
    ShowIpn
}