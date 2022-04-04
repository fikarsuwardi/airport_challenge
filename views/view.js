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

  static showError(msg) {
    console.log(msg)
  }
  static showPlaneList(data) {
    console.table(data)
  }
  static showPassengerList(data) {
    const dataAirLine = [];
    for (let i = 0; i < data.length; i++) {
      const id = data[i].id;
      const name = data[i].name;
      const gender = data[i].gender;
      const airlineName = data[i].ticket.airlineName
      dataAirLine.push({id, name, gender, airlineName})
    }
    console.table(dataAirLine)
  }

  // static showCheckSeats(data) {
  //   const {airlineName, origin, destination} = data;
  //   console.log(`====================`);
  //   console.log(`Fligth Number: ${flightNumber}`);
  //   console.log(`Airline name: ${airlineName}`);
  //   console.log(`Origin: ${origin}`)
  //   console.log(`Destination: ${destination}`);
  //   console.log(`====================`);
  //   console.log(`Seating Plan`);

  //   let seats = [
  //   ['A', 'B', 'C', 'D'],
  //   ['', '', '', ''],
  //   ['', '', '', ''],
  //   ['', '', '', ''],
  //   ['', '', '', ''],
  //   ['', '', '', ''],
  //   ['', '', '', ''],
  //   ['', '', '', ''],
  //   ['', '', '', '']
  //   ]

  //   console.table(seats)

  static showBuyTicket(data) {
    console.log(data)
  }

  static showTicketInfo(data) {
    console.log(data)
  }

  static 


  // }





  // Tambahkan sendiri method yang kamu butuhkan
}

module.exports = View