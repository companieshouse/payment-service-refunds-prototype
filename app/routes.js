const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/no-error', function (req, res) {
    res.redirect('overview?upload=succesful')
})

router.get('/overview', function (req, res) {
    // Render the confirm company page
    res.render('overview', {
      // To use the company data on that page use the following
      upload: req.query.upload,
    })
  })

module.exports = router
