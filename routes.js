const express = require('express');
const router = express.Router();

router.get('/public',(req,res) => {
  res.sendFile(__dirname + "/public");
})


module.exports = router
