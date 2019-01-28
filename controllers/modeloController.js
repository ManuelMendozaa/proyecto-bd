const sequelize = require('sequelize');
const Modelo = require('../models/Modelo');
const database = require('../config/database');

const controller = {};

// Create
controller.createModelo = async (modelo, callback) => {
    if(!!modelo){
        try{
            let response = await Modelo.create({
                ModeloID: Modelo.ModeloID,
                Nombre: Modelo.Nombre,
                Peso: Modelo.Peso,
                CantAsientos: Modelo.CantAsientos,
                DistanciaDespegue: Modelo.DistanciaDespegue,
                CapacidadEquipaje: Modelo.DistanciaDespegue,
                VelocidadMax: Modelo.VelocidadMax,
                VelocidadCrucero: Modelo.VelocidadCrucero
            })
            callback(null);
        }catch(err){
            callback(err);
        }
    }
    callback(err);
};

// Read
controller.readModelo = async (callback) => {
    try {
        let response = await Modelo.findAll();
        let modelo = response.map(result => result.dataValues);
        callback(modelo, null,modelo.length);
    } catch(err){
        callback(err);
    }
};

// Update
controller.updateModelo = async (Modelo,ModeloID,callback) => {
    try {
        let response = await Modelo.update({
            ModeloID: Modelo.ModeloID,
                Nombre: Modelo.Nombre,
                Peso: Modelo.Peso,
                CantAsientos: Modelo.CantAsientos,
                DistanciaDespegue: Modelo.DistanciaDespegue,
                CapacidadEquipaje: Modelo.DistanciaDespegue,
                VelocidadMax: Modelo.VelocidadMax,
                VelocidadCrucero: Modelo.VelocidadCrucero
        },{
            where:{
                ModeloID
            }
        })
        callback(null);
    } catch(err){
        callback(err);
    }
}

// Delete
controller.deleteModelo = async (ModeloID,callback) => {
    try {
        let response = await Modelo.delete({
            ModeloID: -1
        },{
            where:{
                ModeloID
            }
        })
        callback(null);
    } catch(err){
        callback(err);
    }
}

module.exports = controller;