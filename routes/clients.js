const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Client = require('../models/client');


// Add Client
router.post('/dashboard', (req, res, next) => {
  let newClient = new Client({
    firstname: req.body.firstname,
    lastname: req.body.lastname,    
    phone: req.body.phone,
    address : {
      street: req.body.street,
      city: req.body.city
    },
    policy: {
      describe: req.body.describe,
      value: req.body.value,
      payday: req.body.payday,
      warning: req.body.warning
    },       
    recommendation: req.body.recommendation,
    note: req.body.note
  });
  // console.log(firstname)
  Client.addClient(newClient, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed add Client'});
    } else {
      res.json({success: true, msg:'Client added'});
    }
  });
});

router.get('/api', (req, res, next) => { 

    const firstname = "Marija"
    Client.getClients(firstname, (err, client) => {
        if(err) throw err
        if(!client) {
            return res.json({success: false, msg:'User not found'})
        }       
        res.json({                              
            client: {                        
                firstname: client.firstname,
                lastname: client.lastname,
                street: client.address.street                
            }
        })   
    })  
})

module.exports = router;
