const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Crear usuario
router.post("/", async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        res.json(usuarioGuardado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener todos los usuarios
router.get("/", async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
});

// Obtener usuario por ID
router.get("/:id", async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
});

// Actualizar usuario
router.put("/:id", async (req, res) => {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(usuarioActualizado);
});

// Eliminar usuario
router.delete("/:id", async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Usuario eliminado" });
});

module.exports = router;