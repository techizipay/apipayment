const { json } = require('body-parser');
const fetch = require("node-fetch");

const {Producto} = require('../config/Sequelize');

const ShowProduct = async(req,res) => {
    try{
        let resultado = await Producto.findAll();
        return res.status(200).json({
            ok:true,
            message: null,
            data: resultado
        });
    }catch(error){
        return res.status(500).json({
            ok:false,
            message: "Hubo un error al obtener los Productos",
            data: null
        });
    }

}

module.exports = {  
    ShowProduct
}