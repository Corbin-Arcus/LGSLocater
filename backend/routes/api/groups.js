const express = require('express')
const asyncHandler = require('express-async-handler');
const { Group } = require('../../db/models')

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


module.exports = router;
