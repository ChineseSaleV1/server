const express = require('express')
const router = express.Router()

// http://localhost:4500/items/1
router.get('/items/:id', async function (req, res) {
    // put here get items from mongo db
    res.send("hello")
})

router.post('/items', async function (req, res) {

})

module.exports = router;
