import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  taxApplicability: { type: Boolean },
  tax: { type: Number },
  baseAmount: Number,
  discount: Number,
  totalAmount: Number,
});

export default mongoose.model("Item", itemSchema);
