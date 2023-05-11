const mongoose = require('mongoose');

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log('db Online');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  db,
};