var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Portfolio' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About'})
})

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects'})
})

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact'});
});

router.post("/contact", async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  try {
    await mainMail(name, email, subject, message);
    res.send("Message Successfully Sent!");
    
  } catch (error) {
    res.send(error);
  }
});




module.exports = router;
