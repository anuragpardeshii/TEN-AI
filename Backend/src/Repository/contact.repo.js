import ContactModel from "../Model/contact.schema.js";

export const contactInfo = async (data) => {
  return await ContactModel.create(data);
};
