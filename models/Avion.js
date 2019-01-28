const Sequelize = require('sequelize');
const database = require('../config/database');
Sequelize.Promise = global.Promise;

// Modelo
const Avion = database.define('avion',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    moduleID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = Avion;