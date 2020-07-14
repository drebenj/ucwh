const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

exports.connect = () => {
  mongoose.connect(
    db,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        console.log(err.message);
        process.exit(1);
      } else {
        console.log("MongoDB connected...");
      }
    }
  );
};
