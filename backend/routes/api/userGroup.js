const express = require('express');
const asyncHandler = require('express-async-handler');
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

// Find all matching user groups
// router.get(
//   '/:id(\\d+)',
//   asyncHandler(async(req,res) => {
//     const groupId = req.params.id
//     const userGroups = await UserGroup.findAll({
//       where: {
//         groupId: groupId
//       }
//     })
//     res.json({
//       userGroups
//     })
//   })
// )



module.exports = router;
