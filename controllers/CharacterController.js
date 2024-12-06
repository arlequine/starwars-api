const Character = require('../models/CharacterModel');

// Obtener todos los personajes
exports.getCharacters = async (req, res) => {
    const characters = await Character.find();
    res.json(characters);
};

// Obtener un personaje por ID
exports.getCharacterById = async (req, res) => {
    const character = await Character.findById(req.params.id);
    res.json(character);
};

// Crear un nuevo personaje
exports.createCharacter = async (req, res) => {
    const newCharacter = new Character(req.body);
    await newCharacter.save();
    res.status(201).json(newCharacter);
};

// Actualizar un personaje
exports.updateCharacter = async (req, res) => {
    const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(character);
};

// Eliminar un personaje
exports.deleteCharacter = async (req, res) => {
    await Character.findByIdAndDelete(req.params.id);
    res.status(204).send();
};