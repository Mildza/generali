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
      payday: String,
      warning: String
  },  
  recommendation: {
    type: String
  },
  note: {
    type: String
  },
  _id : {
    type: String
  }
});

const Client = module.exports = mongoose.model('Client', ClientSchema);

module.exports.addClient = function(newClient, callback){    
  newClient.save(callback);
}

// module.exports.getClients = function(param, callback) {
//     const query = {param: param}
//     Client.find({query}, callback)
// }
module.exports.getSearch = function(firstname, callback) {
    const query = {firstname: firstname}
    Client.findOne(query, callback)
}

module.exports.postFind = function(client, callback) {
    Client.find({firstname: client.firstname} , callback)
}

module.exports.getAll = function(callback) {
    Client.find({}, callback)
}
module.exports.getUpdate = function(client, callback) {
    const query = {_id: client._id}
    Client.findById(query, callback)
}