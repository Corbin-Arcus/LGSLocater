const express = require('express')
const asyncHandler = require('express-async-handler');
const { Event } = require('../../db/models')
const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')

const router = express.Router();


const validateCreation = [
  check('name')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid name.'),
  check('eventGame')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a event game.'),
  check('storeId')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid store.'),
  check('groupId')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid group.'),
    handleValidationErrors
];

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
  validateCreation,
  asyncHandler(async(req,res) => {
    const { name, eventGame, storeId } = req.body

    const newEvent = await Event.create({
      name: name,
      eventGame: eventGame,
      storeId: storeId
    })

    return newEvent
  })
)

// Get event by ID
router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const eventId = req.params.id
    const event = await Event.findByPk(eventId)
    res.json({
      event
    })
  })
)

// Edit event by ID
router.post(
  '/:id/editEvent',
  asyncHandler(async(req,res) => {
    const{
      eventId,
      storeId,
      name,
      eventGame,
      groupId
    } = req.body

    const event = await Event.findByPk(eventId)

    event.storeId = storeId;
    event.name = name;
    event.eventGame = eventGame;
    event.groupId = groupId

    event.save()

    res.json({
      event
    })
  })
)

// Delete event
router.delete(
  '/:id/deleteEvent',
  asyncHandler(async(req,res) => {
    const eventId = req.params.id

    const event = await Event.findByPk(eventId)

    await event.destroy()

    return res.json({})
  })
)


module.exports = router;
