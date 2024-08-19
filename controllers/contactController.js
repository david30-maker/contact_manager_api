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

exports.updateContact = async (req, res) => {
    const { name, email, phone } = req.body;

    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;

    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) return res.status(404).json({ message: 'Contact not found' });

        contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactFields }, { new: true });

        res.json(contact);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error'});
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) return res.status(404).json({ message: 'Contact not found' });

        await Contact.findByIdAndRemove(req.params.id);

        res.json({ message: 'Contact removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error'});
    }
}

