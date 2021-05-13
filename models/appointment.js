const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  barber: {type: Schema.Types.ObjectId,ref:'Barber'}, 
  startTime: {type: Date}, 
  user: {type: Schema.Types.ObjectId,ref:'User'}, 
});

module.exports = mongoose.model('Appointment', appointmentSchema);