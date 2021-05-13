const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barberSchema = new Schema({
  name: {type: String}, 
  startTime: {type: String}, 
  endTime: {type: String}, 
});

module.exports = mongoose.model('Barber', barberSchema);