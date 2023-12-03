// User.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  // Your database configuration
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  username: 'postgres',
  password: 'postgres123',
});

const User = sequelize.define('User', {
  // Define the User model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
(async () => {
  await sequelize.sync();
  console.log('User model synced with database');
})();

module.exports = User;
