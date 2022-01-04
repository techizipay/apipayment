const {Router} = require('express');
const lyraController = require('../controller/Lyra');

var lyra_router = Router();
lyra_router.post('/createpayment', lyraController.CreatePayment); 
lyra_router.post('/createpaymentaut', lyraController.CreatePaymentAut); 
lyra_router.post('/validarhash', lyraController.validarHash); 
lyra_router.post('/obteneripn', lyraController.ReceiveIpn); 
module.exports = lyra_router;