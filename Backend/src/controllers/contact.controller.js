import { contactInfo } from "../Repository/contact.repo.js";
import { sendContactConfirmation } from "../Service/mailer.js";
import ApplicationError from "../utils/ApplicationError.js";

export const submitContactForm = async (req, res, next) => {
  try {
    const data = req.body;

    const savedContact = await contactInfo(data);
    if (!savedContact) {
      throw new ApplicationError("Failed to save contact information.", 400);
    }

    await sendContactConfirmation(data);

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully.",
      data: savedContact
    });
  } catch (err) {
    next(err);
  }
};
