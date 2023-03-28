const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:Parth123@cluster0.c6dldev.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongoDB;
