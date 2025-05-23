import Contacts from "../model/contact.Schema.js";

export const newContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const createContact = new Contacts({
      name,
      email,
      subject,
      message,
    });

    await createContact.save();

    res.status(201).json({ message: `Contact Submited`, createContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contacts.find();

    if (!contacts) return res.status(404).json({ message: "Not Found" });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getContact = async (req, res) => {
  try {
    const contact = await Contacts.findOne({ _id: req.params.id });

    if (!contact) return res.status(404).json({ message: "Not Found" });

    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contacts.findOneAndDelete({ _id: req.params.id });

    if (!contact) return res.status(404).json({ message: "Not Found" });
    res.status(200).json({ message: "Contact Delete", contact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contacts.findOneAndUpdate(
      { _id: req.params.id },
      { name, email, subject, message }
    );

    if (!contact) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Contact Update", contact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
