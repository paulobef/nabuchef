const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Recipe = require('../models/Recipe')
// const Ingredient = require('../models/Ingredient') // require Ingredient to link recipes and ingredients


// GET all recipes

router.get('/', (req, res, next) => {
    Recipe.find()
    .select('name ingredients instructions persons _id')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            recipes: docs.map(doc => {
                return {
                    name: doc.name,
                    ingredients: doc.ingredients,
                    /* ingredients: doc.ingredients.map(doc => {
                        return {
                            name: doc.name
                        }
                    }), */
                    instructions: doc.instructions,
                    persons: doc.persons,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3001/api/recipes/' + doc._id
                    }
                }
            })
        }
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});

// POST a new recipe

router.post('/', (req, res, next) => {
    const recipe = new Recipe({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        persons: req.body.persons
    });
    recipe.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Recipe was created',
            createdRecipe: {
                name: result.name,
                ingredients: result.ingredients,
                instructions: result.instructions,
                persons: result.persons,
                _id: result._id,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3001/api/recipes/' + result._id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
 
});

// GET a specific recipe

router.get('/:recipeId', (req, res, next) => {
    const id = req.params.recipeId;
    Recipe.findById(id)
    .select('name ingredients instructions persons _id')
    .exec()
    .then(doc => {
        console.log(doc);
        if (doc) {
            res.status(200).json({
                recipe: doc,
                request: {
                    type: 'GET',
                    description: 'Get all products',
                    url: 'http://localhost:3001/api/recipes'
                }
            });
        } else {
            res.status(404).json({message: "No entry found for provided ID"})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    })
});

// PATCH a specific recipe

router.patch('/:recipeId', (req, res, next) => {
    const id = req.params.recipeId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Recipe.update({_id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Recipe updated!',
            request: {
                type: 'GET',
                url: 'http://localhost:3001/api/recipes/' + id
            }
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
    
});

// DELETE a specific recipe

router.delete('/:recipeId', (req, res, next) => {
    const id = req.params.recipeId;
    Recipe.remove({_id: id})
    .exec()
    .then(result => {
        console.log(result)
        res.status(200).json({
            message: 'Deleted recipe n°' + id + '!',
            request: {
                type: 'POST',
                description: 'Post a new recipe',
                body: { 
                    name: { type: String, required: true },
                    ingredients: [ { 
                        quantity: String,
                        name: String // todo: integrate Ingredient as a subdocuments
                    } ], 
                    instructions: { type: String, required: true },
                    persons: { type: Number, default: 4 } 
                }
            }
        })
    })
    .catch(err => {
        console.log(err);  
        res.status(500).json({error: err});
    })
    
});

module.exports = router;