const express = require('express');
const router = express.Router();

const notiifation = require('../../../functions/notification');

router.post('/', (req, res) => {
    let { name, email } = req.body;

    notiifation(0, name, email);
    res.render("thanks", { name })
    console.log(name, email);
});



module.exports = router;