const { v4: uuidv4 } = require('uuid');
const Contacts = require('./Contacts.js');

const getContacts = (request, h) => {
    console.log(Contacts);

    return h.response({
        status: 'success',
        data: {
            contacts: Contacts
        }
    }).code(200);
};

const addContact = (request, h) => {
    const id = uuidv4();
    const {
        name,
        email,
        phone
    } = request.payload;

    Contacts.push({
        id,
        name,
        email,
        phone
    });

    const isSuccess = Contacts.filter(item => item.id === id)[0]

    if (!isSuccess) {
        console.log('Failed to add contact!');

        return h.response({
            status: 'fail',
            message: 'Failed to add contact!'
        }).code(500);
    }

    console.log('New contact created successfully!');
    console.log(`contactId: ${isSuccess.id}`);

    return h.response({
        status: 'success',
        message: 'New contact created successfully!',
        data: {
            contactId: isSuccess.id
        }
    }).code(201);
};

const deleteContact = (request, h) => {
    const { id } = request.params;
    const foundContact = Contacts.findIndex(item => item.id === id);
    console.log(foundContact);

    // index not found
    if (foundContact < 0) {
        return h.response({
            status: 'fail',
            message: 'Contact not found!'
        }).code(404);
    }

    // delete index[foundContact], 1 item
    Contacts.splice(foundContact, 1);

    console.log('Contact deleted successfully!');
    return h.response({
        status: 'success',
        message: 'Contact deleted successfully!'
    }).code(200);
};

module.exports = {
    getContacts,
    addContact,
    deleteContact
};