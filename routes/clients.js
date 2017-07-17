const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
var Client = require('../models/client');
// var Client = require('./datausers.js')


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
    note: req.body.note,
    owner: req.body.owner
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
      value: req.body.values,
      payday: req.body.payday,
      warning: req.body.warning
    },       
    recommendation: req.body.recommendation,
    note: req.body.note,
    _id: client.id
  });
  
  Client.updateClient(client.id, newClient, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed add Client'});
    } else {
       newClient.save
      res.json({success: true, msg:'Client added'});
    }
  });
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

router.get('/all/:login', passport.authenticate('jwt', {session:false}), function(req, res) {
    
  const user =  req.params.login    
  

  Client.getAll(user, (err, client) => {
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
         
    }
    res.json(client)
     
  })
}) 

router.post('/updated', function(req, res) {
       const client = {
    id: req.body._id    
  }
  console.log(client.id)
     
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
      value: req.body.values,
      payday: req.body.payday,
      warning: req.body.warning
    },       
    recommendation: req.body.recommendation,
    note: req.body.note,
    _id: client.id
    
  });
     
    Client.updateClient(client.id, newClient, (err, user) => {
    if(err){
      console.error(err.stack)
      res.json({success: false, msg:'Failed add Client'});
    } else {
       newClient.save
      res.json({success: true, msg:'Client added'});
    }
  })
})


router.delete('/update/:id', function(req, res) {
  const id = req.params.id       
  Client.deleteClient(id, (err) => {
    if(err){
      res.json({success: false, msg:'Delete failed'})
      next()      
    }
    res.json({success: true, msg:'Client deleted'})
    
  })
}) 


module.exports = router
