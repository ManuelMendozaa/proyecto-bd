const sequelize = require('sequelize');
const Avion = require('../models/Avion');
const database = require('../config/database');

const controller = {};

// Create
controller.createAvion = async (avion, callback) => {
    if(!!avion){
        try{
            let response = await Avion.create({
                id: avion.id,
                moduleID: avion.moduleID
            })
            callback(null);
        }catch(err){
            callback(err);
        }
    }
    callback(err);
};

// Read
controller.readAvion = async (id, callback) => {
    try {
        let response = await Avion.findAll({
            where: {
                id
            }
        })
        let avion = response.map(result => result.dataValues);
        callback(avion[0], null);
    } catch(err){
        callback(null, err);
    }
};

controller.readEveryAvion = async (callback) => {
    try {
        let response = await Avion.findAll({
            where: {
                moduleID: {
                    gt: -1
                }
            }
        })
        
        console.log("Response" + response + "\n");
        let avion = response.map(result => result.dataValues);
        callback(avion,null,avion.length);
    } catch(err){
        callback(err);
    }
};

// Update
controller.updateAvion = async (avion,id,callback) => {
    try {
        console.log('Entro '+ avion + ' y ' + id);
        let response = await Avion.update({
            moduleID: avion.moduleID
        },{
            where:{
                id
            }
        })
        callback(null);
    } catch(err){
        console.log('Error ocurrido: ' + err);
        callback(err);
    }
}


// Delete
controller.deleteAvion = async (id,callback) => {
    try {
        console.log("Esto medio camina");
        let response = await Avion.update({
            moduleID: -1
        },{
            where:{
                id
            }
        })
        callback(null);
        console.log("AVION BORRADO EXITOSAMENTE");
    } catch(err){
        console.log("HUBO UN ERROR EN LA ELIMINACION: " + err);
        callback(err);
    }
}

module.exports = controller;