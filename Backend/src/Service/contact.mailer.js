import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

export const sendContactConfirmation = async (userData) => {
  const { name, email, company } = userData;

  const mailOptions = {
    from: `"TEN AI" <tenai@gamil.com>`,
    to: email,
    subject: "Thanks for Contacting TEN AI!",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #0052cc;">Hi ${name},</h2>
        <p>Thank you for reaching out to <strong>TEN AI</strong>!</p>
        <p>We’ve received your details and someone from our team will get in touch with you shortly.</p>
        <p><strong>Company:</strong> ${company}</p>
        <p>Meanwhile, feel free to reply to this email if you have any questions.</p>
        <br />
          <p>Regards,</p>
          <p><strong>Team TEN AI</strong></p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};
