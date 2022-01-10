const { Sequelize } = require('sequelize');

const transaccion_model = (conexion) => {
    let transaccion = conexion.define('transacciones',{
        transaccionId:{
            primaryKey: true,
            autoIncrement:true,
            type:Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            field:'transaccion_id'
        },
        transaccionUUID:{
            type: Sequelize.STRING(32),
            field: 'transaccion_uuid'
        },
        transaccionHash:{
            type: Sequelize.STRING(32),
            field: 'transaccion_hash'
        },
        transaccionAnswer:{
            type: Sequelize.TEXT,
            field: 'transaccion_answer'
        },
        transaccionValidacion:{
            type: Sequelize.STRING(32),
            field: 'transaccion_validacion'
        },
    })
    return transaccion;
}

module.exports = transaccion_model;