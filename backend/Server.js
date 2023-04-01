const express = require("express");


const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

 
const routes = require("./routes/ToDoRoute");
 
const app = express();
const PORT = 3001

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

// Routes
app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));