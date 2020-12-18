const express = require("express")
const path = require('path')
const app = express()
const port = 8000 || process.env.PORT

const staticPath = path.join(__dirname,"../public")

app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.send("This is quote App")
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}...`)
})


