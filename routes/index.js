const express = require('express');
const router  = express.Router();
const  mailer = require('../helpers/mailer');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/',(req,res) => {
    let options = req.body;
    options.filename = 'verify';
    mailer.send(options)
        .then(() => {
            res.status(200).send("El correo se mando correctamente")
        })
        .catch(err => {
            res.status(500).json({err, "msg":"El correo NO se mando correctamente"});
        })
});

module.exports = router;
