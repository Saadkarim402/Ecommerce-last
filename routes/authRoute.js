import express from "express";
import {
  registerController,
  loginController,
  testController,
  // forgotPasswordController,
  // updateProfileController,
  // getOrdersController,
  // getAllOrdersController,
  // orderStatusController,
} from "../controllers/authController.js";

import { isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", isAdmin, testController);

export default router;
