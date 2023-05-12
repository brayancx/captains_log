const express = require('express')
const router = express.Router()
const Log = require('../models/logs')

// Seed Route //
router.get("/seed", async (req, res) => {
    console.log('seeding database')
    try {
      await Log.create([
        {
            title:'grapefruit',
            entry:'wowwie',
            shipIsBroken:true
        },
        {
            title:'bad landing',
            entry:'NOT GOOOOOD',
            shipIsBroken:false
        },
        {
            title:'dear diary',
            entry:'i need help',
            shipIsBroken:true
        },
    ])
        res.redirect("./")
    } catch (err) {
        res.status(400).send(err)
    }  
})

  // Index
router.get('/', async (req, res) => {
    console.log('Index Controller Func. running...');
    try {
      const foundLog = await Log.find({}) 
      res.status(200).render('Index', { logs:
      foundLog });
    } catch (err) {
      res.status(400).send(err)
    }
});

  // New 
router.get('/new', (req, res) => {
    res.render('New');
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await Log.findByIdAndDelete(req.params.id);
        res.redirect('./')
    } catch (err) {
        res.status(400).send(err)
    }
})

// Update 
router.put('/:id', async (req,res) => {
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === "on";
        const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {new: true})
        // console.log(updatedLog)
        res.redirect('/logs')
    } catch (err) {
        res.status(400).send(err)
    }
})

// Create
router.post('/', async (req, res) => {
    console.log('we hittin it')
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === 'on';
        const newLog = await Log.create(req.body);
        console.log(newLog)
        res.redirect('/logs')
    } catch (err) {
        res.status(400).send(err)
    }
})

  // Edit 
router.get('/:id/edit', async (req, res) => {
    try {
      
      const foundLog = await Log.findById(req.params.id)
      res.render("Edit", {
        log: foundLog
      })
    } catch(err) {
      res.status(400).send(err)
  
    }
})

// Show
router.get('/:id', async (req, res) => {
    try {
        const foundLog = await Log.findById(req.params.id)
        res.render('Show', {
            log: foundLog,
        })
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router