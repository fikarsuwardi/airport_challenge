"use strict"
const {Plane, 
  Passenger, 
  Ticket, 
  VIP, 
  Business, 
  Economy, 
  Factory
} = require("./class.js")

const fs = require('fs')

// Tambahkan parameter sesuai kebutuhanmu
class Model {
  // PART 1
  static readPlanes(callback){
    fs.readFile("./data/plane.json", 'utf8', (err, data) => {
      if (err) {
        callback (err, null)
      } else {
        data = JSON.parse(data)

        let result = []

        for (let i = 0; i < data.length; i++) {
          let instance = new Plane(data[i].flightNumber, data[i].airlineName, data[i].origin, data[i].destination)
        
          result.push(instance)
        }
        callback (null, result);
      }
    })
  }
  static readPassengers(){

  }
  static checkSeat(){

  }

  // PART 2
  static save(data, pathFile, cb){ 
    // note jika ingin diganti atau mau menambahkan method boleh untuk method save ini
    // yang digunakan untuk writeFile
  }
  static addPassenger(){ // buyTicket

  }
  static findPassenger(){ // ticketInfo

  }
  static updateTicket(){

  }
  static deleteTicket(){

  }
  static showPassenger(){

  }
}

module.exports = Model