const express = require('express');
const bodyParser = require('body-parser');
const lyra_router = require('../routes/lyra');

class Server{
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT || 5000;
        this.habilitarCORS();
        this.configurarBodyParser();
        this.definirRutas();
    }

    habilitarCORS(){
        this.app.use((req, res, next)=>{
            res.header('Access-Control-Allow-Origin','*');
            res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Access-Content-Type, Accept')
            res.header('Access-Control-Allow-Methods', 'GET, POST');
            next();
        });
    }
    configurarBodyParser(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    }
    definirRutas(){
        this.app.get('/',(req, res)=>{
            res.status(200).json({
                ok:true,
                message:'La API Funciona! 😊🎃😎🎉'
            });
        });
        this.app.use('', lyra_router);
    }    
    start(){
        this.app.listen(this.puerto,()=>{
            console.log("Servidor corriendo exitosamente");
        })
    } 

}

module.exports = Server // export default class Server {....}