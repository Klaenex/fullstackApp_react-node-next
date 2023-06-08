const Contact = require("../models/Contact");
const mongoose = require("mongoose");

const getContact = async (req, res) => {
  const contact = await Contact.find({});
  res.status(200).json(contact);
};

module.exports = {
  getContact,
};
