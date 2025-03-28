const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../configs/database.js');

const db = {};

// Define your naming pattern (e.g., *.model.js)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Product = require("./product.model.js")(sequelize, Sequelize.DataTypes);

module.exports = db;
