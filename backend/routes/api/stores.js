const express = require('express')
const asyncHandler = require('express-async-handler');
const { Store } = require('../../db/models')


const router = express.Router();

// Get all stores
router.get(
  '/',
  asyncHandler(async(req,res) => {
    const stores = await Store.findAll()

    res.json({
      stores
    })
  })
)

// Get store by ID
router.get(
  '/:id(\\d+)',
  asyncHandler(async(req,res) => {
    const storeId = req.params.id
    const store = await Store.findByPk(storeId)

    res.json({
      store
    })
  })
)


module.exports = router;
