const express = require('express');
const asyncHandler = require('express-async-handler');
const { default: GroupByIdPage } = require('../../../frontend/src/components/GroupByIdPage');
const { UserGroup } = require('../../db/models')

const router = express.Router()

// Join a group
router.post(
  '/',
  asyncHandler(async(req, res) => {
    const { userId, groupId } = req.body

    const newUserGroup = await UserGroup.create({
      groupId: groupId,
      userId: userId
    })

    return newUserGroup
  })
)



module.exports = router;
