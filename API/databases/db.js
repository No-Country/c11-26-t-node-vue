const mongoose = require('mongoose');

const db = async () => {
  try {
     let db =await mongoose.connect(process.env.MONGODB);
      if(process.env.SEED=="true"){
        const start=await require('./seed');
        await start();
      }

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  db,
};