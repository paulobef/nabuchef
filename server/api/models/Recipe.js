const mongoose = require('mongoose');
const ingredientSchema = require('./Ingredient');

const recipeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    ingredients: [ { 
        quantity: String,
        name: String // todo: integrate Ingredient as a subdocuments
    } ], 
    instructions: { type: String, required: true },
    persons: { type: Number, default: 4 }
});

module.exports = mongoose.model('Recipe', recipeSchema)