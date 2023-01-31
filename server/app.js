const express = require("express")
const app = express()
require("dotenv").config({ path: '.env'})
require("./db/connection")
const cors = require("cors")
const router = require("./routes/router")
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use(router)
app.use("/uploads", express.static("./uploads"))

app.get("/",(req,res)=>{
    res.status(201).json("srever start")
})

app.listen(PORT, ()=>{
    console.log("srever startd at 5000")
})