import ContactModel from "../Model/contact.schema.js";
import { contactInfo } from "../Repository/contact.repo.js";
import { sendContactConfirmation } from "../Service/mailer.js";

export const submitContactForm = async (req, res) => {
  try {
    const data = req.body;

    const savedContact = await contactInfo(data);
    if (!savedContact) {
        return res
          .status(400)
          .json({ success: false, message: "Failed to save contact information." });
      }
    await sendContactConfirmation(data);

    res
      .status(200)
      .json({
        success: true,
        message: "Contact form submitted successfully.",
        data: savedContact
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit contact form." });
  }
};
