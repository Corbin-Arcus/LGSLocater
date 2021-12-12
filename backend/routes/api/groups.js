const express = require('express')
const asyncHandler = require('express-async-handler');
const { Group, User } = require('../../db/models')

const router = express.Router();

// Get all groups
router.get(
  '/',
  asyncHandler(async(req,res) => {
    const groups = await Group.findAll()
    res.json({
      groups
    })
  })
)

// Get group by ID
router.get(
  '/:id(\\d+)',
  asyncHandler(async(req, res) => {
    const groupId = req.params.id
    const group = await Group.findByPk(groupId, {
      include: {
        model: User
      }
    })
    res.json({
      group
    })
  })
)

// Edit group by ID
router.post(
  '/:id/editGroup',
  asyncHandler(async(req,res) => {
    const {
      groupId,
      groupName
    } = req.body

    const group = await Group.findByPk(groupId)

    group.groupName = groupName;

    group.save()

    res.json({
      group
    })
  })
)

// Create new group
router.post(
  '/',
  asyncHandler(async(req,res) => {
    const { groupName } = req.body

    const newGroup = await Group.create({
      groupName: groupName
    })

    return newGroup
  })
)

// Delete group
router.delete(
  '/:id/deleteGroup',
  asyncHandler(async(req, res) => {
    const groupId = req.params.id

    const group = await Group.findByPk(groupId)

    await group.destroy()

    return res.json({})
  })
)




module.exports = router;
