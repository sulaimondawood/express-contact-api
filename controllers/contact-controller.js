// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

// @desc Get a contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Contact retrieved for ${req.params.id}` });
};

// @desc Create contact
// @route PosT /api/contacts/
// @access public
const createContact = (req, res) => {
  console.log(`The body content is, ${req.body}`);
  const { name, email, phoneNumber } = req.body;

  if (!name || !email || !phoneNumber) {
    res.status(400);
    throw new Error("All fields are required!");
  }
  res.status(201).json({ message: "Create contact" });
};

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Contact update for ${req.params.id}` });
};

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(203).json({ message: "Contact deleted for " + req.params.id });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
