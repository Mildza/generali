const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
var Client = require('../models/client');



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
      idpolicy: req.body.idpolicy,
      value: req.body.value,
      startdate: req.body.startdate,
      duration: req.body.duration,
      warning: req.body.warning
    },  
    additional:req.body.additional,     
    recommendation: req.body.recommendation,
    note: req.body.note,
    owner: req.body.owner
  });
 
  Client.addClient(newClient, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed add Client'});
    } else {
      res.json({success: true, msg:'Client added'});
    }
  });
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
      idpolicy: req.body.idpolicy,
      value: req.body.value,
      startdate: req.body.startdate,
      duration: req.body.duration,
      warning: req.body.warning
    },
    additional:req.body.additional,       
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
   const search = {
    firstname: req.body.firstname,
    user: req.body.user
  }
   
  Client.postFind(search, (err, client) => {
    if(err) throw err      
    if(client.length){
      res.json(client)  
    } else {
       res.json({success: true, msg:'Failed search'});
    } 
  });
});



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
      idpolicy: req.body.describe,
      value: req.body.value,
      startdate: req.body.startdate,
      duration: req.body.duration,
      warning: req.body.warning
    }, 
    addiotional:req.body.additional,      
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
