require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Mongo
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB connecté"))
.catch(err => console.log("❌ erreur :", err.message));

// route test
app.get("/", (req, res) => {
    res.send("API fonctionne 🚀");
});

// PORT depuis .env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 serveur sur http://localhost:${PORT}`);
});