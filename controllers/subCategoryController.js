import SubCategory from "../models/SubCategory.js";
import Category from "../models/Category.js";

// Create SubCategory
export const createSubCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.body.category);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const subCategory = await SubCategory.create({
      ...req.body,
      taxApplicability: req.body.taxApplicability ?? category.taxApplicability,
      tax: req.body.tax ?? category.tax,
    });

    res.status(201).json(subCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all subcategories
export const getSubCategories = async (req, res) => {
  const subs = await SubCategory.find().populate("category");
  res.json(subs);
};

// Get subcategories by category
export const getSubCategoriesByCategory = async (req, res) => {
  const subs = await SubCategory.find({ category: req.params.categoryId });
  res.json(subs);
};

// Edit SubCategory
export const updateSubCategory = async (req, res) => {
  const updated = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
