const express = require('express');
const { createItem, getItemsBySubCategory, searchItems, updateItem ,getItems,getItemById,getItemsByCategory} = require('../controllers/itemController');

const router = express.Router();

router.post('/', createItem);
router.get('/', getItems);
router.get('/:id', getItemById);
router.get('/category/:categoryId/items', getItemsByCategory);  // Get items under a specific sub-category by category ID
router.get('/subcategory/:subCategoryId', getItemsBySubCategory);
router.get('/search', searchItems);
router.put('/:id', updateItem);

module.exports = router;

