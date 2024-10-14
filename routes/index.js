var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  req.session.bann = true;
  res.send("Check")
})

router.get('/checkban', (req, res) => {
  if(req.session.bann == true){
    res.send("You are banned for some reasons")
  }
  else{
    res.send("Welcome home")
  }
})

router.get('/removeban', (req, res) => {
  req.session.destroy((err) =>{
    if(err) throw err;
    res.send("Ban removed");
  })
})

router.get('/cookieset', (req, res) => {
  res.cookie("name" , "rapunzel");
  res.send("set");
})

router.get('/cookieread', (req, res) => {
  res.send(req.cookies.name);
})

router.get('/cookiedelete', (req, res) => {
  res.clearCookie("name");
  res.send("deleted")
})

module.exports = router;
