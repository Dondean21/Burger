const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger, function (result) {
        res.redirect('/');
    })
});

router.put('/api/burgers/:id', function (req, res) {
    let condition = req.params.id;

    burger.update(condition, function (result) {
        res.status(200).end();
    })
})

module.exports = router;