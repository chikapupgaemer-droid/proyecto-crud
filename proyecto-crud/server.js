require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// rutas
const usuarioRoutes = require("./routes/usuarioRoutes");
app.use("/api/usuarios", usuarioRoutes);

// conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.log("Error MongoDB:", err));

// puerto (IMPORTANTE para Heroku)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});