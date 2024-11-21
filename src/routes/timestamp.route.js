const express = require('express');
const processInputDate = require('../services/timestamp.service');

const router = express.Router();

const timeLog = (_, __, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
};

router.use(timeLog);

router.get('', (req, res) => {
    const response = processInputDate(req);
    res.status(200).send(response);
});

module.exports = router;
