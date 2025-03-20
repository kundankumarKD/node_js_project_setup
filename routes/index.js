const express = require("express")
const router = express.Router()

const OMDbApi = require('./OMDbApi').Router

router.use('/omdbApi', OMDbApi)

exports.Router = router