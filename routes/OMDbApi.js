const express = require("express")
const router = express.Router()

const OMDbApiController = require('../controllers/OMDbApiController')

router.route('/list-movies').get(OMDbApiController.listMovies)
router.route('/test-connection').get(OMDbApiController.testConnection)


exports.Router = router
