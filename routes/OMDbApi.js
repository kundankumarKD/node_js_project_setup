const express = require("express")
const router = express.Router()

const OMDbApiController = require('../controllers/OMDbApiController')

router.route('/list-movies').get(OMDbApiController.listMovies)

exports.Router = router