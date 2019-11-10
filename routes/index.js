const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');



// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>

  res.render('dashboard', {
    user : req.user
  })
);

router.get('/archive',ensureAuthenticated , (req,res)=>{

    res.render('archive', {user: req.user});

})

router.post('/dashboard', ensureAuthenticated, (req, res) =>{
     
 
    req.user.content.push(req.body);
    req.user.save();
    console.log(req.body);
    res.render('dashboard', {
        user: req.user  
    })
});

router.post('/update',ensureAuthenticated,(req,res)=> {

  var id = req.body.num;
  req.user.content[id].heading = req.body.heading;
  
  req.user.content[id].content = req.body.content;
  
  req.user.content[id].bgcolor = req.body.bgcolor;
  req.user.save();
  console.log(req.user.content[id]);
  res.redirect('/dashboard');
})

router.post('/delete',ensureAuthenticated,(req,res)=> {

  var id = req.body.num;
  var newcont = req.user.content;
  newcont.splice(id,1);
  req.user.content =  newcont; 
  req.user.save();
  res.redirect('/dashboard');
})

router.post('/archive',ensureAuthenticated, (req,res) => {

  var id = req.body.num;
  req.user.content[id].archive = 1;
  req.user.save();
  res.redirect('/dashboard');

})

router.post('/unarchive',ensureAuthenticated, (req,res) => {

  var id = req.body.num;
  req.user.content[id].archive = 0;
  req.user.save();
  res.redirect('/archive')

})
module.exports = router;
