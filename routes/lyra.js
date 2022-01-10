const {Router} = require('express');
const lyraController = require('../controller/Lyra');
const IpnController = require('../controller/Ipn');

var lyra_router = Router();
lyra_router.post('/createpayment', lyraController.CreatePayment); 
lyra_router.post('/createpaymentaut', lyraController.CreatePaymentAut);  
lyra_router.post('/paymentipn', IpnController.ReceiveIpn); 
module.exports = lyra_router;