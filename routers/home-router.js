const express = require('express');
const home = express.Router()
const reminder = require('../models/reminder-model').reminders;
const reminders = new reminder();


home.get('/', async function(req, res){
    console.log("From DB");
    const results = await reminders.getAllReminder();
    res.render('homepage',{'reminders': results });
})

module.exports = home;