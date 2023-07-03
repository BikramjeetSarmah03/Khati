const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then((data) =>
      console.log(`Database connected at HOST: ${data.connection.host}`)
    )
    .catch((err) =>
      console.log(`Error connecting to Database: ${err.message}`)
    );
};

module.exports = connectDatabase;
