import nodemailer from "nodemailer";
import ApplicationError from "../utils/ApplicationError.js";

export const sendOTPMail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: to,
    subject: subject,
    text: text
  };

  try {
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    throw new ApplicationError(error.message, 500);
  }
};
