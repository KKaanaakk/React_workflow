const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  workflow_id: String,
});

Workflowmodel = mongoose.model("workflow", modelSchema);
module.exports = { Workflowmodel };
