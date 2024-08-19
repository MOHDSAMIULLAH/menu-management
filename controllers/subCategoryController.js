const SubCategory = require('../models/SubCategory');

// Create a sub-category
exports.createSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.create({ ...req.body, category: req.params.categoryId });
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all sub-categories under a category
exports.getSubCategoriesByCategory = async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ category: req.params.categoryId });
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSubCategoryBysubCategoryId = async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ _id: req.params.subcategoryId });
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update a sub-category
exports.updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subCategory) return res.status(404).json({ message: 'Sub-category not found' });
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


