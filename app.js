const cors = require("cors")
const express = require("express")

const index = express()
const PORT = process.env.PORT || 3000

index.use('/healthcheck', require('/routes/healthcheck.routes'));
index.use(express.urlencoded({ extended: true }));
index.use(cors())

index.get("/", (req, res)=>{
    headers={"http_status":200, "cache-control": "no-cache"}
    body={"status": "available"}
    res.status(200).send(body)
})

index.listen(PORT , ()=>{
    console.log('STARTED LISTENING ON PORT ${PORT}')
});