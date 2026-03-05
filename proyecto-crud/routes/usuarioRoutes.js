const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// crear usuario
router.post("/", async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const guardado = await usuario.save();
    res.json(guardado);
  } catch (error) {
    res.status(500).json(error);
  }
});

// obtener usuarios
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json(error);
  }
});

// actualizar usuario
router.put("/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(usuario);
  } catch (error) {
    res.status(500).json(error);
  }
});

// eliminar usuario
router.delete("/:id", async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;