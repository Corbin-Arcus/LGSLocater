const express = require('express')
const asyncHandler = require('express-async-handler');
const { Event } = require('../../db/models')

const router = express.Router();


// Get all events
router.get(
  '/',
  asyncHandler(async(req,res) => {
    const events = await Event.findAll()
    console.log(events)
    res.json({
      events
    })
  })
)

// Create new event
router.post(
  '/',
  asyncHandler(async(req,res) => {
    const { name, eventGame } = req.body

    const newEvent = await Event.create({
      name: name,
      eventGame: eventGame
    })

    return newEvent
  })
)


module.exports = router;
