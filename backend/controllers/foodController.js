import foodModel from "../models/foodModel.js";
import { v2 as cloudinary } from "cloudinary"; // ✅ Import Cloudinary
import dotenv from "dotenv";

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Add food item
const addFood = async (req, res) => {
  try {
    // Ensure file was uploaded
    if (!req.file || !req.file.path) {
      return res.status(400).json({
        success: false,
        message: "Image upload failed",
      });
    }

    // Save food item with Cloudinary image URL
    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file.path, // Cloudinary image URL
    });

    await food.save();
    res.json({
      success: true,
      message: "Food Added Successfully",
      food,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error adding food item",
    });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove food item
// ✅ Remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: "Food not found" });
    }

    // ✅ Extract Cloudinary public_id
    const imagePublicId = food.image.split("/").pop().split(".")[0];

    // ✅ Delete the image from Cloudinary
    await cloudinary.uploader.destroy(`food_images/${imagePublicId}`);

    // ✅ Remove food item from MongoDB
    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error removing food item" });
  }
};

export { addFood, listFood, removeFood };
