import { User } from "../models/user.model.js";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

import bcryptjs from "bcryptjs";
import { sendVerificationEmail } from "../middleware/nodemailer/emails.js";
// import { sendVerificationEmail } from "../resend/emails.js";
import { sendWelcomeEmail } from "../middleware/nodemailer/emails.js";

export const signup = async (req, res) => {
  console.log("Signup endpoint hit");

  const { fullname, email, password } = req.body;

  try {
    // Validate input
    if (!fullname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // console.log("Step 1: Input validation passed");

    // Check if user already exists
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // console.log("Step 2: User does not already exist");

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);
    // console.log("Step 3: Password hashed");

    // Generate verification token
    const verificationToken = generateVerificationToken();
    // console.log("Step 4: Verification token generated", verificationToken);

    // Create new user
    const user = new User({
      fullname,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    // Save user to the database
    await user.save();
    // console.log("Step 5: User saved to database");

    console.log("User created successfully:", user);

    // Generate and set JWT token in cookies
    const jwtToken = generateTokenAndSetCookie(res, user._id);
    // console.log("Step 6: JWT token generated and set");

    // Send verification email
    await sendVerificationEmail(user.email, verificationToken);

    // Respond with success
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during signup:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message, // For debugging, will remove it  in production
    });
  }
};

export const verifyEmail = async (req, res) => {
  console.log("Email verification endpoint hit");
  const { code } = req.body; // code is the verification token
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: "false",
        message: "Invalid or expired verification token",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    console.log("User verified:", user);
    await user.save();

    try {
      await sendWelcomeEmail(user.email, user.fullname);
    } catch (error) {
      console.error("Error sending welcome email:", error.message);
      return res.status(500).json({
        success: false,
        message: "Error sending welcome email",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User verified successfully",
    });
  } catch (error) {
    console.error("Error during email verification:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message, // For debugging, will remove it  in production
    });
  }
};

export const login = async (req, res) => {
  console.log("Login endpoint hit");
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("Invalid email or password");
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid email or password");
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    generateTokenAndSetCookie(res, user._id);

    await user.save();

    console.log("User logged in successfully", user);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    return res.status(400).json({
      success: false,
      message: "Internal server error",
      error: error.message, // For debugging, will remove it  in production
    });
  }
};

export const logout = async (req, res) => {
  console.log("Logout endpoint hit");
  res.clearCookie("token");
  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

export const checkAuth = async (req, res) => {
  console.log("Check auth endpoint hit");
  try {
    const user= await User.findById(req.userId);
    if(!user){
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User found",
      user: {
        ...user._doc,
        password: undefined,
      },
    });


    
  } catch (error) {
    console.error("Error during check auth:", error.message);
    return exports.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
}