const { DataTypes } = require('sequelize');
const sequelize = require('../database/database')

const Todo = sequelize.define('todos', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
}, {
  timestamps: false,
});

module.exports = Todo