const express= require("express");

const { workflowdata } = require("./routes/workflow.route");
const { csvdata } = require("./routes/dragdata.route");
const { connection } = require("./config/db");
require("dotenv").config();
const cors=require("cors");


app=express()


app.use(cors({
    origin:"*"
}))

app.use(express.json());

app.use("/", csvdata)
app.use("/", workflowdata);


app.listen(process.env.port, async()=>{
    try{
await connection;
console.log(`port is running on ${process.env.port}`);
    }
    catch(err){
        console.log(err)
    }
})