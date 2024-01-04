const mongoose = require("mongoose");
exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log(`Database Connected`.bgCyan.black))
    .catch((err) => console.log(err.message));
};
