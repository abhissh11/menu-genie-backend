import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: String,
  description: String,
  taxApplicability: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
  taxType: { type: String, default: "percentage" },
});

export default mongoose.model("Category", categorySchema);
