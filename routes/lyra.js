const {Router} = require('express');
const lyraController = require('../controller/Lyra');
const IpnController = require('../controller/Ipn');
const ProductoController = require('../controller/Producto');

var lyra_router = Router();
lyra_router.post('/createpayment', lyraController.CreatePayment); 
lyra_router.post('/createpaymentaut', lyraController.CreatePaymentAut);  
lyra_router.post('/getipn', IpnController.ReceiveIpn); 
lyra_router.get('/showipn', IpnController.ShowIpn); 
lyra_router.get('/showproduct', ProductoController.ShowProduct); 
module.exports = lyra_router;