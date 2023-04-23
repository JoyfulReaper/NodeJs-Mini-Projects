const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get all contacts"});
});

//@desc Get contact
//@route GET /api/contact/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

//@desc Create new contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
    const {name, phone, email} = req.body;

    if(!name || !phone || !email) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    console.log("The request body is: ", req.body);
    res.status(201).json({message: "Create contact"});
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts
//@access Public
const deleteContact = async (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
};

module.exports = { getContacts, createContact, getContact, deleteContact, updateContact };