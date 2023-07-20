import express from "express";
import {
    registerController,
    // loginController,
    // testController,
    // forgotPasswordController,
    // updateProfileController,
    // getOrdersController,
    // getAllOrdersController,
    // orderStatusController,
  } from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);
export default router;
