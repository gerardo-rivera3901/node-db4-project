const express = require('express');
const Recipe = require('./recipe-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Recipe.getRecipes();
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Recipe.getRecipeById(id);
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id/shoppingList', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Recipe.getShoppingList(id);
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id/instructions', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Recipe.getInstructions(id);
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;