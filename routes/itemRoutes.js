import express from "express";
import { createItem, getItems, getItemsByCategory, getItemsBySubCategory, getItem, updateItem, searchItem } from "../controllers/itemController.js";
const router = express.Router();

router.post("/", createItem);
router.get("/", getItems);
router.get("/category/:categoryId", getItemsByCategory);
router.get("/subcategory/:subCategoryId", getItemsBySubCategory);
router.get("/search", searchItem);
router.get("/:id", getItem);
router.put("/:id", updateItem);

export default router;
