const express = require ("express");
const mongoose = require ("mongoose");

const app = express()
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb;//localhost/workout_db",{
    useNewUrlParser:true,
    useFindAndModify:false
});

// Routes
// app.use(require("./routes/api.js"));
// app.use(require("./routes/view.js"));

app.listen(PORT,()=>console.log(`app running on port http://localhost:${PORT}`)); 