import express from "express"

let route = express.Router();

route.use("*",(req,res) => {
  res.status(500).json({status:500,message:"Endpoint not found"})
});

export default route