import ContactModel from "../Model/contact.schema.js";

export const contactInfo = async (data) => {
  try {
    return await ContactModel.create(data);
  } catch (err) {
    throw new ApplicationError("Database error while saving contact info.", 500);
  }
};
