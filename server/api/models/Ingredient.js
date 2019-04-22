const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    informations: { type: String }
});

module.exports = mongoose.model('Ingredient', ingredientSchema)