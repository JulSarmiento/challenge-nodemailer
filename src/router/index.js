const express = require('express');
const router = express.Router();

const templateRoute = require('./templates/index');
const contactRoute = require('./contact/index');

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is up and running',
    enviroment: process.env.NODE_ENV
  })
})
  .use('/', templateRoute)
  .use('/contact', contactRoute)

module.exports = router;