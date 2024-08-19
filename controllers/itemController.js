const Item = require('../models/Item');

// Create an item
exports.createItem = async (req, res) => {
  try {
    const { name, image, description, taxApplicability, tax, baseAmount, discount, subCategory, category } = req.body;

    const totalAmount = baseAmount - discount;

    const newItem = new Item({
        name,
        image,
        description,
        taxApplicability,
        tax,
        baseAmount,
        discount,
        totalAmount,
        subCategory: subCategory || null,
        category: category || null
    });

    await newItem.save();
    res.status(201).json(newItem);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

// Get all items under a sub-category
exports.getItemsBySubCategory = async (req, res) => {
  try {
    const items = await Item.find({ subCategory: req.params.subCategoryId });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get all items under a specific category
exports.getItemsByCategory = async (req, res) => {
  try {
    const items = await Item.find({ category: req.params.categoryId });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Search items by name
exports.searchItems = async (req, res) => {
  try {
    const items = await Item.find({ name: { $regex: req.query.name, $options: 'i' } });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
