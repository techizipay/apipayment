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

const ReceiveIpn = async(req, res) => {


    const utf8 = require('utf8');

    var answer2 = '{\"shopId\":\"37286286\",\"orderCycle\":\"CLOSED\",\"orderStatus\":\"PAID\",\"serverDate\":\"2022-01-07T19:41:11+00:00\",\"orderDetails\":{\"orderTotalAmount\":18000,\"orderEffectiveAmount\":18000,\"orderCurrency\":\"PEN\",\"mode\":\"TEST\",\"orderId\":\"myOrderId-8888\",\"metadata\":null,\"_type\":\"V4\/OrderDetails\"},\"customer\":{\"billingDetails\":{\"address\":null,\"category\":null,\"cellPhoneNumber\":null,\"city\":null,\"country\":null,\"district\":null,\"firstName\":null,\"identityCode\":null,\"language\":\"ES\",\"lastName\":null,\"phoneNumber\":null,\"state\":null,\"streetNumber\":null,\"title\":null,\"zipCode\":null,\"legalName\":null,\"_type\":\"V4\/Customer\/BillingDetails\"},\"email\":\"sample@example.com\",\"reference\":null,\"shippingDetails\":{\"address\":null,\"address2\":null,\"category\":null,\"city\":null,\"country\":null,\"deliveryCompanyName\":null,\"district\":null,\"firstName\":null,\"identityCode\":null,\"lastName\":null,\"legalName\":null,\"phoneNumber\":null,\"shippingMethod\":null,\"shippingSpeed\":null,\"state\":null,\"streetNumber\":null,\"zipCode\":null,\"_type\":\"V4\/Customer\/ShippingDetails\"},\"extraDetails\":{\"browserAccept\":null,\"fingerPrintId\":null,\"ipAddress\":\"161.69.121.37\",\"browserUserAgent\":\"Mozilla\/5.0+(Windows+NT+10.0;+Win64;+x64)+AppleWebKit\/537.36+(KHTML,+like+Gecko)+Chrome\/96.0.4664.110+Safari\/537.36\",\"_type\":\"V4\/Customer\/ExtraDetails\"},\"shoppingCart\":{\"insuranceAmount\":null,\"shippingAmount\":null,\"taxAmount\":null,\"cartItemInfo\":null,\"_type\":\"V4\/Customer\/ShoppingCart\"},\"_type\":\"V4\/Customer\/Customer\"},\"transactions\":[{\"shopId\":\"37286286\",\"uuid\":\"7f9c8c2d130646b29f5dd5198af932ed\",\"amount\":18000,\"currency\":\"PEN\",\"paymentMethodType\":\"CARD\",\"paymentMethodToken\":null,\"status\":\"PAID\",\"detailedStatus\":\"AUTHORISED\",\"operationType\":\"DEBIT\",\"effectiveStrongAuthentication\":\"DISABLED\",\"creationDate\":\"2022-01-07T19:41:09+00:00\",\"errorCode\":null,\"errorMessage\":null,\"detailedErrorCode\":null,\"detailedErrorMessage\":null,\"metadata\":null,\"transactionDetails\":{\"liabilityShift\":\"NO\",\"effectiveAmount\":18000,\"effectiveCurrency\":\"PEN\",\"creationContext\":\"CHARGE\",\"cardDetails\":{\"paymentSource\":\"EC\",\"manualValidation\":\"NO\",\"expectedCaptureDate\":\"2022-01-07T19:41:09+00:00\",\"effectiveBrand\":\"VISA\",\"pan\":\"497010XXXXXX0055\",\"expiryMonth\":12,\"expiryYear\":2025,\"country\":\"PE\",\"issuerCode\":null,\"issuerName\":null,\"effectiveProductCode\":\"F\",\"legacyTransId\":\"913019\",\"legacyTransDate\":\"2022-01-07T19:41:09+00:00\",\"paymentMethodSource\":\"NEW\",\"authorizationResponse\":{\"amount\":18000,\"currency\":\"PEN\",\"authorizationDate\":\"2022-01-07T19:41:10+00:00\",\"authorizationNumber\":\"3fe678\",\"authorizationResult\":\"0\",\"authorizationMode\":\"FULL\",\"_type\":\"V4\/PaymentMethod\/Details\/Cards\/CardAuthorizationResponse\"},\"captureResponse\":{\"refundAmount\":null,\"refundCurrency\":null,\"captureDate\":null,\"captureFileNumber\":null,\"effectiveRefundAmount\":null,\"effectiveRefundCurrency\":null,\"_type\":\"V4\/PaymentMethod\/Details\/Cards\/CardCaptureResponse\"},\"threeDSResponse\":{\"authenticationResultData\":{\"transactionCondition\":null,\"enrolled\":null,\"status\":null,\"eci\":null,\"xid\":null,\"cavvAlgorithm\":null,\"cavv\":null,\"signValid\":null,\"brand\":null,\"_type\":\"V4\/PaymentMethod\/Details\/Cards\/CardAuthenticationResponse\"},\"_type\":\"V4\/PaymentMethod\/Details\/Cards\/ThreeDSResponse\"},\"authenticationResponse\":null,\"installmentNumber\":0,\"installmentCode\":\"0\",\"markAuthorizationResponse\":{\"amount\":null,\"currency\":null,\"authorizationDate\":null,\"authorizationNumber\":null,\"authorizationResult\":null,\"_type\":\"V4\/PaymentMethod\/Details\/Cards\/MarkAuthorizationResponse\"},\"cardHolderName\":null,\"identityDocumentNumber\":null,\"identityDocumentType\":null,\"_type\":\"V4\/PaymentMethod\/Details\/CardDetails\"},\"acquirerDetails\":null,\"fraudManagement\":{\"riskControl\":[],\"riskAnalysis\":[{\"score\":\"22.0\",\"resultCode\":\"ACCEPT\",\"status\":\"P_SEND_OK\",\"requestId\":\"6415844701466345804009\",\"extraInfo\":[{\"key\":\"analysisProfile\",\"value\":\"izipay_high\",\"_type\":\"V4\/PaymentMethod\/Details\/Risk\/ExtInfo\"},{\"key\":\"mddSubProduct\",\"value\":\"03\",\"_type\":\"V4\/PaymentMethod\/Details\/Risk\/ExtInfo\"}],\"fingerPrintId\":null,\"_type\":\"V4\/PaymentMethod\/Details\/Risk\/RiskAnalysis\"}],\"riskAssessments\":null,\"_type\":\"V4\/PaymentMethod\/Details\/FraudManagement\"},\"subscriptionDetails\":{\"subscriptionId\":null,\"_type\":\"V4\/PaymentMethod\/Details\/SubscriptionDetails\"},\"parentTransactionUuid\":null,\"mid\":\"3728628\",\"sequenceNumber\":1,\"taxAmount\":null,\"preTaxAmount\":null,\"taxRate\":null,\"externalTransactionId\":\"156732\",\"dcc\":null,\"nsu\":null,\"tid\":null,\"acquirerNetwork\":\"PROCESOS_ISO\",\"taxRefundAmount\":null,\"userInfo\":\"JS+Client\",\"paymentMethodTokenPreviouslyRegistered\":null,\"occurrenceType\":\"UNITAIRE\",\"_type\":\"V4\/TransactionDetails\"},\"_type\":\"V4\/PaymentTransaction\"}],\"subMerchantDetails\":null,\"_type\":\"V4\/Payment\"}';

    
    var answer = utf8.encode(req.body['kr-answer']); 
    console.log(answer);
    answer = answer.replace('/','\/');

    const answerHash = Hex.stringify(
        hmacSHA256(JSON.stringify(answer), 'GetvgxK3Vs4jXirU')
    )

    const answerHash2 = Hex.stringify(
        hmacSHA256(JSON.stringify(answer), 'YrU5Juy4elNZSwkQjPpiu8fJn3Pj0sILno1vruGzasX8P')
    )  

    const answerHash3 = Hex.stringify(
        hmacSHA256(JSON.stringify(answer), 'testpassword_gXFxkEiT3k0dDXcbqO7TxRxtGggVEX9vuFz2Xq2jFvbxj')
    )  
 
    const answerHashE = Hex.stringify(
        hmacSHA256(JSON.stringify(answer2), 'GetvgxK3Vs4jXirU')
    )

    const answerHashE2 = Hex.stringify(
        hmacSHA256(JSON.stringify(answer2), 'YrU5Juy4elNZSwkQjPpiu8fJn3Pj0sILno1vruGzasX8P')
    )  

    const answerHashE3 = Hex.stringify(
        hmacSHA256(JSON.stringify(answer2), 'testpassword_gXFxkEiT3k0dDXcbqO7TxRxtGggVEX9vuFz2Xq2jFvbxj')
    )  

    console.log(req.body['kr-hash']);  
    console.log(answerHash);  
    console.log(answerHash2);   
    console.log(answerHash3);    

    console.log(answerHashE);  
    console.log(answerHashE2);   
    console.log(answerHashE3);   

    return res.status(200).json({
        ok:true,
        message: "Registrado Correctamente",
        data: answerHash
    });
}


module.exports = {
    CreatePayment,
    CreatePaymentAut, 
    ReceiveIpn
}