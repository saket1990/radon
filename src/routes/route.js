const express = require('express');
const { abc } = require('../logger/logger');
const externalModule = require('../logger/logger.js');
const {info} = require('../util/helper');
const {format}= require('../validator/formatter');
//const externalModule = require('./validator/formatter.js');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    console.log(abc)
    externalModule.abc
    res.send('hi first assignment')
});

router.get('/test-me2', function (req, res) {
    console.log('date'+externalModule.date)
    console.log('month'+externalModule.month)
    console.log(info)
    externalModule.info
    res.send('current date,current month,info')
});

router.get('/test-me3', function (req, res) {
    console.log(format)
    externalModule.a
    externalModule.b
    externalModule.c
    res.send('hi we r formtting string')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason