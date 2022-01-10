const Sequelize = require('sequelize');
const transaccion_model = require('../models/Transaccion');

const conexion = new Sequelize(
    "u105882607_prueba","u105882607_prueba","5~3Umo4sk*Bi",{
        host: "31.170.167.52",
        dialect: "mysql",
        timezone: "-05:00",
        logging: false,
        dialectOptions:{
            dateStrings: true,
        }
    }
)

const Transaccion = transaccion_model(conexion);

module.exports={
    conexion,
    Transaccion
}