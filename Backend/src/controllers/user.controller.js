import bcrypt from "bcrypt";
import {
  findByEmail,
  loginUser,
  registerUser
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
        .cookie("token", token, { httpOnly: true, secure: false })
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
