const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/socialMediaDB');

connection.on('connected', () => {
	  console.log('Connected to socialMediaDB');
});

module.exports = connection;
