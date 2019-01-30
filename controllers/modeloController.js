const sequelize = require('sequelize');
const Modelo = require('../models/Modelo');
const database = require('../config/database');

const controller = {};

// Create
controller.createModelo = async (modelo, callback) => {
    if(!!modelo){
        console.log("Entró")
        try{
            let response = await Modelo.create({
                id: modelo.id,
                nombre: modelo.nombre,
                peso: modelo.peso,
                cantAsientos: modelo.cantAsientos,
            })
            callback(null);
        }catch(err){
            console.log(err)
            callback(err);
        }
    }
    callback(err);
};

// Read
controller.readEveryModelo = async (callback) => {
    try {
        let response = await Modelo.findAll({
            where:{
                nombre: {
                    $gt: ""
                }
            }
        });
        let modelo = response.map(result => result.dataValues);
        callback(modelo, null,modelo.length);
    } catch(err){
        callback(err);
    }
};

controller.readModelo = async (id,callback) => {
    try {
        let response = await Modelo.findAll({
            where: {
                id
            }
        })
        let modelo = response.map(result => result.dataValues);
        callback(modelo[0], null);
    } catch(err) {
        callback(err);
    }
}

// Update
controller.updateModelo = async (modelo,id,callback) => {
    try {
        let response = await Modelo.update({
                nombre: modelo.nombre,
                peso: modelo.peso,
                cantAsientos: modelo.cantAsientos,
        },{
            where:{
                id
            }
        })
        callback(null);
    } catch(err){
        callback(err);
    }
}

// Delete
controller.deleteModelo = async (id,callback) => {
    try {
        console.log("Esto medio camina");
        let response = await Modelo.update({
            nombre: ""
        },{
            where:{
                id
            }
        })
        callback(null);
    } catch(err){
        console.log(err);
        callback(err);
    }
}

module.exports = controller;