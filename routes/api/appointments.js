const express = require('express');
const router = express.Router();
const appointmentsController = require('../../controllers/api/appointments');

const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, appointmentsController.index )

router.post('/', ensureLoggedIn, appointmentsController.createAppointment)

