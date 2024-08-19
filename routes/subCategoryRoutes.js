const express = require('express');
const { createSubCategory, getSubCategoriesByCategory, updateSubCategory ,getSubCategories, getSubCategoryBysubCategoryId} = require('../controllers/subCategoryController');

const router = express.Router();

router.post('/:categoryId', createSubCategory);
router.get('/', getSubCategories);
router.get('/:categoryId/subcategories', getSubCategoriesByCategory);
router.get('/:subcategoryId', getSubCategoryBysubCategoryId);

router.put('/:id', updateSubCategory);

module.exports = router;
