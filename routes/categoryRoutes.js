import express from "express"
import { isAdmin, requireSignIn } from './../middelwares/authMiddleware.js';
import { categoryController,
     createCategoryController, 
     deletecategoryController, 
     singlecategoryController, 
     updateCategory } from "../controllers/categoryController.js";

const router = express.Router()

router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

router.put("/update-category/:id", requireSignIn, isAdmin, updateCategory)

router.get("/get-category", categoryController);

router.get("/single-category/:slug", singlecategoryController);

router.delete("/delete-category/:id", requireSignIn, isAdmin, deletecategoryController)

export default router