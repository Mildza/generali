const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Client Schema
const ClientSchema = mongoose.Schema({

  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  phone: [],
  address : {
    street: String,
    city: String
  },
  policy : {
      describe: String,
      value: Number,
      payday: Date,
      warning: Date
  },  
  recommendation: {
    type: String
  },
  note: {
    type: String
  }
});

const Client = module.exports = mongoose.model('Client', ClientSchema);

module.exports.addClient = function(newClient, callback){    
  newClient.save(callback);
}

module.exports.getClients = function(firstname, callback) {
    const query = {firstname: firstname}
    Client.findOne(query, callback)
}