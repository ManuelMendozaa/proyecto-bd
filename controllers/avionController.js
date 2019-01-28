const sequelize = require('sequelize');
const Avion = require('../models/Avion');
const database = require('../config/database');

const controller = {};

// Create
controller.createAvion = async (avion, callback) => {
    if(!!avion){
        try{
            let response = await Avion.create({
                AvionID: avion.AvionID,
                ModeloID: avion.ModeloID
            })
            callback(null);
        }catch(err){
            callback(err);
        }
    }
    callback(err);
};

// Read
controller.readAvion = async (AvionID, callback) => {
    try {
        let response = await Avion.findAll({
            where: {
                AvionID
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
        let response = await Avion.findAll();
        console.log("Response" + response + "\n");
        let avion = response.map(result => result.dataValues);
        callback(avion,null,avion.length);
    } catch(err){
        callback(err);
    }
};

// Update
controller.updateAvion = async (Avion,AvionID,callback) => {
    try {
        let response = await Avion.update({
            AvionID: Avion.AvionID,
            ModeloID: Avion.ModeloID
        },{
            where:{
                AvionID
            }
        })
        callback(null);
    } catch(err){
        callback(err);
    }
}


// Delete
controller.deleteAvion = async (AvionID,callback) => {
    try {
        let response = await Avion.delete({
            AvionID: -1
        },{
            where:{
                AvionID
            }
        })
        callback(null);
    } catch(err){
        callback(err);
    }
}

module.exports = controller;