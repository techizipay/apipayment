const { json } = require('body-parser');
const fetch = require("node-fetch");
var crypto = require('crypto');
const hmacSHA256 = require('crypto-js/hmac-sha256')
const Hex = require('crypto-js/enc-hex');
const { clearScreenDown } = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

// crear la preferencia de mercado pago
const CreatePayment = async(req, res)=>{
    var order = req.body;  
 
    let username = '37286286';
    let password = 'testpassword_gXFxkEiT3k0dDXcbqO7TxRxtGggVEX9vuFz2Xq2jFvbxj';
    var auth = 'Basic ' +  Buffer.from(username + ':' + password).toString('base64'); 

    var config = {
        method: 'POST',
        headers: {'Authorization': auth},
        body: JSON.stringify(order)
    };

    const response = await fetch("https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment", config);
    const content = await response.json(); 
 
    return res.json({
        ok:true,
        content: content.answer.formToken,
        message: null
    }) 
}


const CreatePaymentAut = async(req, res)=>{ 
    
    let username = '69264086';
    let password = 'testpassword_CJWmWQS96JE4GOxbRxhjeGV6BcrabVxYQGwc3nGkaHJ6w';
    var auth = 'Basic ' +  Buffer.from(username + ':' + password).toString('base64'); 
     
    for (var i = 21; i <= 40; i++) {

        monto = Math.floor(Math.random() * ((500+1)-50)+50);
        monto = monto * 100;
        order = {
            amount: monto,
            currency: "PEN",
            customer: {
                email: "cliente@comercio.pe"
            },
            formAction: "SILENT",
            orderId: "Orden-" + i.toString(),
            paymentMethodToken: "771a0402996f4a78851cf5cb0198d1a4"
        } 

        var config = {
            method: 'POST',
            headers: {'Authorization': auth},
            body: JSON.stringify(order)
        };
        
        const response = await fetch("https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment", config);
        const content = await response.json(); 
        console.log(content);
     }
 
    return res.json({
        ok:true
    }) 
}
  
const CreateToken = async(req, res)=>{
    var order = req.body; 

    let username = '38342371';
    let password = 'testpassword_qiQdV3sMAehP0eivzcvQmnf2QklUtnky7seALPTfov9BM';
    var auth = 'Basic ' +  Buffer.from(username + ':' + password).toString('base64'); 

    var config = {
        method: 'POST',
        headers: {'Authorization': auth},
        body: JSON.stringify(order)
    };

    const response = await fetch("https://api.micuentaweb.pe/api-payment/V4/Charge/CreateToken", config);
    const content = await response.json(); 
 
    return res.json({
        ok:true,
        content: content.answer.formToken,
        message: null
    })
 
}
 
module.exports = {
    CreatePayment,
    CreatePaymentAut
}