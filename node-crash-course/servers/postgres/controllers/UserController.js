// UserController.js

// Assuming there's a 'User' model imported or defined to interact with the database
const User = require('../models/User'); // Adjust the path as needed

module.exports = {
  async register(name, email, password) {
    try {
      // Your logic for user registration here
      // For example, creating a new user in the database
      const newUser = await User.create({
        name,
        email,
        password,
      });
      return newUser;
    } catch (error) {
      throw new Error(`User registration failed: ${error.message}`);
    }
  },
};
