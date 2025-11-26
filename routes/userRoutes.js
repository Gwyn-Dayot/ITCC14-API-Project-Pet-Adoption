import express from "express";
import {
  getUsers,
  addUser,
  getUserById
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.get("/:userId", getUserById);

export default router;