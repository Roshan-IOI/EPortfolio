var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Portfolio' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me'})
})

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects'})
})

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact me'})
})


module.exports = router;
