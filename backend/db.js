const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:Parth123@cluster0.c6dldev.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mobgodb = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mobgodb");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    // console.log(data);
  } catch (error) {
    console.error("Error connecting to mobgodb:", error.message);
  }
};

module.exports = mobgodb;
