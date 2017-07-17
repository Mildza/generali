const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const Schema = mongoose.Schema({

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
  owner: {
    type: String
  },
  id : {
    type: String
  }
});

var mlab = "Client" 
var Client = "Client"

var Client = module.exports = mongoose.model(mlab, Schema);

module.exports.addClient = function(newClient, callback){    
  newClient.save(callback);
}

module.exports.getSearch = function(firstname, callback) {
    const query = {firstname: firstname}
    Client.findOne(query, callback)
}

module.exports.postFind = function(client, callback) {
    Client.find({firstname: client.firstname} , callback)
}

module.exports.getAll = function(login, callback) {
    const query = {owner: login}
    Client.find(query, callback)
}
module.exports.getUpdate = function(client, callback) {
    const query = {_id: client.id}
    Client.find(query, callback)
}

module.exports.updateClient = function(id, newClient, callback) {
    const query = {_id: id}  
    Client.findByIdAndUpdate(query, newClient, {upsert:true}, callback)
    
}

module.exports.updateClient2 = function(id, newClient, callback) {
    const query = {_id: id}  
    Client.findByIdAndUpdate(query, newClient, {upsert:true}, callback)
    
}

module.exports.deleteClient = function(id, callback) {
    const query = {_id: id}  
    Client.remove(query, callback)
    
}