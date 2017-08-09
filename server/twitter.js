const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

router.get('/nasa/:nasa', (req, res) => {
  request
    .get(`https://api.nasa.gov/planetary/apod`)
    .query({api_key: "RfiS7oVXJF2afO09v2gcMEKmRw6VKlsHSI86HnoQ"})
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else if (result.body.data.children.length == 0) {
        res.status(404).send('Not Found')
      } else {
        res.json(result.body.data.children)
      }
    })
})

module.exports = router
