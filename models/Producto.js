const { Sequelize } = require('sequelize');

const producto_model = (conexion) => {
    let producto = conexion.define('productos',{
        productoId:{
            primaryKey: true,
            autoIncrement:true,
            type:Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            field:'producto_id'
        },
        productoNombre:{
            type: Sequelize.STRING(100),
            field: 'producto_nombre'
        },
        productoDescripcion:{
            type: Sequelize.STRING(200),
            field: 'producto_descripcion'
        },
        productoImagen:{
            type: Sequelize.STRING(500),
            field: 'producto_imagen'
        },
        productoPrecio:{
            type: Sequelize.FLOAT,
            field: 'producto_precio'
        },
        productoStock:{
            type: Sequelize.INTEGER,
            field: 'producto_stock'
        },
    })
    return producto;
}

module.exports = producto_model;