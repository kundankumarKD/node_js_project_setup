const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

// Define your naming pattern (e.g., *.model.js)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
