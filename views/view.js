"use strict"
class View {
  static showCommandList(){
    console.log(`Command List`)
    console.log(`===========`)
    console.log(`node app.js`)
    console.log(`node app.js help`)
    console.log(`node app.js planeList`)
    console.log(`node app.js passengerList <flight_number>`)
    console.log(`node app.js checkSeats <flight_number>`)
    console.log(`node app.js buyTicket <flight_number> <passenger_name> <passenger_gender> <seat_number> <ticket_type>`)
    console.log(`node app.js <passenger_id`)
    console.log(`node app.js <passenger_id> <flight_number> <seat_number>`)
    console.log(`node app.js <passenger_id>`)
    console.log(`node app.js <flight_number>`)
  }

  static showPlaneList(data) {
    console.table(data)
  }
  static showError(err) {
    console.log(err)
  }

  // Tambahkan sendiri method yang kamu butuhkan
}

module.exports = View