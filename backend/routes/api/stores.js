const express = require('express')
const asyncHandler = require('express-async-handler');
const { Store } = require('../../db/models')


const router = express.Router();

router.get(
  '/',
  asyncHandler(async(req,res) => {
    const stores = await Store.findAll()

    res.json({
      stores
    })
  })
)


module.exports = router;
