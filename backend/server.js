const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// 🔗 MongoDB
mongoose.connect("mongodb+srv://Jusef123:QfDu3lcocWZ5rXqG@cluster0.cz9qh0f.mongodb.net/test", {
    tls: true,
    tlsAllowInvalidCertificates: true
})
.then(() => console.log("✅ MongoDB connecté"))
.catch(err => console.log("❌ erreur :", err.message));

// route test
app.get("/", (req, res) => {
    res.send("API fonctionne 🚀");
});

app.listen(5000, () => {
    console.log("🚀 serveur sur http://localhost:5000");
});