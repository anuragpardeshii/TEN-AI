import bcrypt from "bcrypt";
import {
  findByEmail,
  loginUser,
  registerUser,
  resetPasswordUser,
  sendOtpUser,
  verifyOtpUser
} from "../Repository/user.repo.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered."
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const userCreated = await registerUser(name, email, hashPassword);

    if (userCreated.id) {
      res.status(201).json({
        success: true,
        message: "User has been registered successfully!",
        data: {
          id: userCreated.id,
          name: userCreated.name,
          email: userCreated.email
        }
      });
    } else {
      res.status(400).json({
        success: false,
        message: "User has not been registered!"
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await findByEmail(email);
    if (!user) {
      res.status(400).send({ success: false, message: "Email not exits!" });
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const userResult = await loginUser(email, user.password);
      const token = jwt.sign(
        {
          user: {
            id: userResult.id,
            email: userResult.email
          }
        },
        process.env.JWT_SECRET,
        { expiresIn: "6h" }
      );
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          maxAge: 7 * 24 * 60 * 60 * 1000
        })
        .status(200)
        .json({
          success: true,
          message: "User has been logged In!",
          data: userResult,
          token
        });
    } else {
      res.status(400).send({ success: false, message: "Invalid Crediential" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!"
  });
};
export const sendOtp = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }
    const userOtp = await sendOtpUser(email);
    if (userOtp) {
      return res.status(200).json({
        success: true,
        message: "OTP sent successfully!",
        otp: userOtp
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to send OTP."
      });
    }
  } catch (error) {
    next(error);
  }
};
export const verifyOtp = async (req, res, next) => {
  try {
    const { otp } = req.body;
    const id = req.user;
    const isOtpVerified = await verifyOtpUser(id, otp);
    if (isOtpVerified)
      res
        .status(200)
        .send({ success: true, message: "Otp verified successfully!" });
    else res.status(400).send({ success: false, message: "Otp not verified!" });
  } catch (error) {
    next(error);
  }
};
 export const resetPassword = async(req,res,next)=>{
  try {
      const { newPassword } = req.body;
      const id = req.user;
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      const isPasswordReset = await resetPasswordUser(
        id,
        hashedPassword
      );
      if (isPasswordReset)
        res
          .status(200)
          .send({ success: true, message: "Password reset successfully!" });
      else
        res
          .status(400)
          .send({ success: false, message: "Password not reset!" });
    } catch (error) {
      next(error);
    }
 }
