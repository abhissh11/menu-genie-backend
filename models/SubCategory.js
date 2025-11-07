import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  taxApplicability: { type: Boolean },
  tax: { type: Number },
});

export default mongoose.model("SubCategory", subCategorySchema);
