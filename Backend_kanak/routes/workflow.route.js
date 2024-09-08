const express = require("express");
const { Workflowmodel } = require("../models/workflow.models");
const workflowdata = express.Router();

workflowdata.post("/workflow", async (req, res) => {
  try {
    const payload = req.body;
    const id = new Workflowmodel(payload);
    id.save();
    res.send(id);
  } catch (err) {
    console.log(err);
  }
});


workflowdata.get("/workflowid", async(req,res)=>{
try{
let data=await Workflowmodel.find();
res.send(data);
}
catch(err){
    console.log(err)
}
})



module.exports = { workflowdata };
