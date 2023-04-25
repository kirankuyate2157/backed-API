import express from "express";
import {
  getAllUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;
