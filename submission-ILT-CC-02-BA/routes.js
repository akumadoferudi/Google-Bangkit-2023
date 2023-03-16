const {
    getContacts,
    addContact,
    deleteContact
} = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/contacts',
        handler: getContacts
    },
    {
        method: 'POST',
        path: '/contacts',
        handler: addContact
    },
    {
        method: 'DELETE',
        path: '/contacts/{id}',
        handler: deleteContact
    }
];

module.exports = routes;