import Category from "../models/Category.js";

// Create Category
export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all categories
export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

// Get category by ID or name
export const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id) || await Category.findOne({ name: id });
  if (!category) return res.status(404).json({ message: "Category not found" });
  res.json(category);
};

// Edit Category
export const updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
