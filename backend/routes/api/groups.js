const express = require('express')
const asyncHandler = require('express-async-handler');
const { Group } = require('../../db/models')
const { User } = require('../../db/models/user')

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
        models: User
      }
    })
    res.json({
      group
    })
  })
)




module.exports = router;
