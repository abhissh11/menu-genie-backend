import Item from "../models/Item.js";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";

// Create Item
export const createItem = async (req, res) => {
  try {
    const { category, subCategory, baseAmount, discount } = req.body;

    const totalAmount = baseAmount - (discount || 0);

    const item = await Item.create({ ...req.body, totalAmount });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all items
export const getItems = async (req, res) => {
  const items = await Item.find().populate("category subCategory");
  res.json(items);
};

// Get items under a category
export const getItemsByCategory = async (req, res) => {
  const items = await Item.find({ category: req.params.categoryId });
  res.json(items);
};

// Get items under sub-category
export const getItemsBySubCategory = async (req, res) => {
  const items = await Item.find({ subCategory: req.params.subCategoryId });
  res.json(items);
};

// Get item by name or ID
export const getItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id) || await Item.findOne({ name: id });
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
};

// Edit item
export const updateItem = async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Search items by name
export const searchItem = async (req, res) => {
  const query = req.query.name;
  const items = await Item.find({ name: { $regex: query, $options: "i" } });
  res.json(items);
};
