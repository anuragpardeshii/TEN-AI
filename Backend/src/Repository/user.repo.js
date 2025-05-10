import ApplicationError from "../utils/ApplicationError.js";
import { UserModel } from "../Model/user.schema.js";
import mongoose from "mongoose";
import { generateOTP } from "../utils/otp.generate.js";
import { sendOTPMail } from "../Service/otp.mailer.js";

export const registerUser = async (name, email, password) => {
  try {
    const newUser = UserModel({
      name,
      email,
      password
    });
    const result = await newUser.save();
    return result;
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      throw err;
    } else {
      console.log(err);
      throw new ApplicationError("Something went wrong with database", 500);
    }
  }
};

export const findByEmail = async (email) => {
  try {
    return await UserModel.findOne({ email });
  } catch (err) {
    console.log(err);
    throw new ApplicationError("Error while checking email in database", 500);
  }
};

export const loginUser = async (email, password) => {
  try {
    return await UserModel.findOne({ email, password });
  } catch (err) {
    console.log(err);
    throw new ApplicationError("Error while signIn", 500);
  }
};
export const sendOtpUser = async (email) => {
  try {
    const user = await UserModel.findOne({ emailId: email });
    if (!user) {
      throw new Error("User not exists in database!");
    }

    const otp = await generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 3600000;

    await user.save();

    const sendOtp = await sendOTPMail(
      email,
      "Otp For Password Reset",
      `Here below is the Otp send. Your Otp is ${otp}`
    );
    return user.otp;
  } catch (error) {
    throw new ApplicationError(error.message, 500);
  }
};
export const verifyOtpUser = async (id, otp) => {
  try {
    const user = await UserModel.findOne({
      id,
      otp,
      otpExpires: { $gt: Date.now() }
    }).select("-email -password");
    if (!user) {
      throw new ApplicationError("Invalid OTP or OTP expired", 400);
    }
    user.otpVerify = "verified";
    return await user.save();
  } catch (error) {
    throw new ApplicationError(error.message, 500);
  }
};
export const resetPasswordUser = async (id, password) => {
  try {
    let user = await UserModel.findById({ id }).select("-email -password");
    if (user.otpVerify == "verified") {
      user.otp = undefined;
      user.otpExpires = undefined;
      user.otpVerify = undefined;
      user.password = password;
      return user.save();
    } else {
      throw new ApplicationError("Otp not verified!", 400);
    }
  } catch (error) {
    console.log(error);
    throw new ApplicationError(error.message, error.code);
  }
};
