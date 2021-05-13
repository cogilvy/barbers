require('dotenv').config();
require('./config/database');

const barberArray = [
    {
      name: "Carmel Vickers",
      startTime: "10am",
      endTime: "9pm",
    },
    {
        name: "Nia Paul",
        startTime: "10am",
        endTime: "9pm",
      },
      {
        name: "Jack Dale",
        startTime: "10am",
        endTime: "9pm",
      }];

const Barber = require('./models/barber');
(async function() {
    await Barber.deleteMany({});
    const barbers = await Barber.create(barberArray)
    console.log(barbers);
    process.exit()
})();
