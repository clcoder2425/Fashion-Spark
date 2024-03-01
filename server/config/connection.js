const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://APIuser:ZoQdtJrHTRVoMFK7@cluster0.gtxvbu3.mongodb.net/Fashion-Spark-DB");

module.exports = mongoose.connection;