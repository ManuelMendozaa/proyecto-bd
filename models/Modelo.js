const Sequelize = require('sequelize');
const database = require('../config/database');
Sequelize.Promise = global.Promise;

// Modelo
const Modelo = database.define('Modelo',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    peso: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    cantAsientos: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = Modelo;