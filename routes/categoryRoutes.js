import express from "express";
import { createCategory, getCategories, getCategory, updateCategory } from "../controllers/categoryController.js";
const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);
router.put("/:id", updateCategory);

export default router;
