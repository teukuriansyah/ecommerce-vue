import express from "express"
import { parameter } from "../utils/parameter.js"
import snap from "../utils/midtrans.js"

const route = express.Router();

route.post("/payment",(req,res) => {
  let { id, amount } = req.body
  snap.createTransaction(parameter(id,amount))
  .then(response => res.status(200).json({status:200,data:response,message:"Data berhasil didapatkan"}))
  //.catch(err => res.status(404).json({status:404,message:"Data gagal didapatkan"}))
});

export default route