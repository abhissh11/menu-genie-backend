import express from "express";
import { createSubCategory, getSubCategories, getSubCategoriesByCategory, updateSubCategory } from "../controllers/subCategoryController.js";
const router = express.Router();

router.post("/", createSubCategory);
router.get("/", getSubCategories);
router.get("/category/:categoryId", getSubCategoriesByCategory);
router.put("/:id", updateSubCategory);

export default router;
