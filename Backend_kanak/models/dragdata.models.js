const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  workflow_id: String,
    csvdat: [{
      Name: String,
      Email: String
    }]
});

dragdtamodel = mongoose.model("data", modelSchema);
module.exports = { dragdtamodel };
