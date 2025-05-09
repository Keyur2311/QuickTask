const mongoose = require("mongoose");
const connectToMongo = () => {
  const uri = process.env.MONGO_DB_URI;
  if (!uri) {
    console.error("MONGO_DB_URI is not defined in the .env file");
    return;
  }

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // increases timeout to 30s
    })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));
};
module.exports = connectToMongo;
