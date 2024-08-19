const Contact = require('../models/contact');

exports.getContacts =  async (req, res) => {
    try {
        const contact = await Contact.find();
        res.json(contact);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};