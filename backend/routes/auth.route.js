import express from "express";

import { verifyToken } from "../middleware/auth/verifyToken.js";

import {
  signup,
  login,
  logout,
  verifyEmail,
  checkAuth,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("auth route");
});

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);

router.post("/verify-email", verifyEmail);

router.post("/login", login);

router.post("/logout", logout);

export default router;
