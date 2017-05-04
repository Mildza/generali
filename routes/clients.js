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

router.get('/clients', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json();
})

module.exports = router;
