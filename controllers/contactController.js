const Contact = require('../models/contact');

exports.getContacts =  async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createContact = async (req, res) => {
    const { name, email, phone } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type
        });

        const contact = await newContact.save();
        res.json(contact);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error'});
    }
};