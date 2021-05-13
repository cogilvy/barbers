const Appointment = require('../../models/appointment');

module.exports = {
    index,
    createAppointment
};

async function index(req, res) {
    const appointments = await Appointment.find({ user:req.user._id })
    res.json(appointments)
}

async function createAppointment(req, res) {
    req.body.user = req.user._id
    const newAppointment = await Appointment.create(req.body)
    console.log(newAppointment)
    const appointments = await Appointment.find({ user:req.user._id })
    res.json(appointments)
}
