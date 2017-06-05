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
    address: {
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

router.post('/rewrite', (req, res, next) => {
  let newClient = new Client({
    firstname: req.body.firstname,
    lastname: req.body.lastname,    
    phone: req.body.phone,
    address: {
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
  console.log(newClient.firstname)
  // Client.addClient(newClient, (err, user) => {
  //   if(err){
  //     res.json({success: false, msg:'Failed add Client'});
  //   } else {
  //     res.json({success: true, msg:'Client added'});
  //   }
  // });
});

router.post('/update/:id', (req, res, next) => {

  const client = {
    id: req.params.id    
  }   
  
  let newClient = new Client({
    firstname: req.body.firstname,
    lastname: req.body.lastname,    
    phone: req.body.phone,
    address: {
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
  console.log(newClient.firstname)
  // Client.addClient(newClient, (err, user) => {
  //   if(err){
  //     res.json({success: false, msg:'Failed add Client'});
  //   } else {
  //     res.json({success: true, msg:'Client added'});
  //   }
  // });
});



router.post('/find', (req, res, next) => {
  
  // console.log(req.body.firstname)
  const client = {
    firstname: req.body.firstname
  }
   
  Client.postFind(client, (err, client) => {
    if(err){
      res.json({success: false, msg:'Failed search'});
      next()
    }
    res.json(client)
    
  });
});

router.get('/search', passport.authenticate('jwt', {session:false}),  (req, res) => { 
    
    const firstname = "Kalina"
    Client.getSearch(firstname, (err, client) => {
      if(err) throw err
      if(!client) {
          return res.json({success: false, msg:'User not found'})
      }       
      res.json({                              
          client: {                        
            firstname: client.firstname,
            lastname: client.lastname,
            street: client.address.street,
            city: client.address.city,
            phone: client.phone,
            describe: client.policy.describe,
            value: client.policy.value,
            payday: client.policy.payday,
            warning: client.policy.warning,
            recommendation: client.recommendation,
            note: client.note                                
          }
      })   
  })  
})

router.get('/all', passport.authenticate('jwt', {session:false}), function(req, res) {
  Client.getAll((err, client) => {
    if(err) {
      res.send('Something went wrong')
      next()
    }
    res.json(client) 
  })
})

router.get('/update/:id', function(req, res) {
  
  const client = {
    id: req.params.id    
  }  
 
   Client.getUpdate(client, (err, client) => {
      if(err){
      res.json({success: false, msg:'Failed search'})
      next()      
    }
    res.json(client)
     
  })
}) 
module.exports = router
