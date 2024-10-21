const express = require("express");
const app = express();
const PORT = 5000;

app.get("/",(res,req)=>{
    return res.json({message:`Hello from Express Server ${process.pid}`});
});

app.listen(PORT,()=>console.log(`Server started at the port:${PORT}`));