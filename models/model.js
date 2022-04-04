"use strict"
const {Plane, 
  Passenger, 
  Factory
} = require("./class.js")

const fs = require('fs')
const { type } = require("os")

// Tambahkan parameter sesuai kebutuhanmu
class Model {
  // PART 1
  static readPlanes(callback) {
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

  static readPassengers(callback) {
    fs.readFile("./data/passanger.json", 'utf8', (err, data) => {
      if (err) {
        callback (err, null)
      } else {
        data = JSON.parse(data)

        let result = []

        for (let i = 0; i < data.length; i++) {
          let instance = new Passenger(data[i].id, data[i].name, data[i].gender, data[i].ticket)
        
          result.push(instance)
          //console.log(result)
        }
        callback (null, result);
      }
    })
  }

  // static checkSeat(fligthtNumber, callback){
  //   fs.readFile("./data/plane.json", 'utf8', (err, data) => {
  //     if (err) {
  //       callback (err, null)
  //     } else {
  //       data = JSON.parse(data)
  //       for (let i = 0; i < data.length; i++) {
  //         // console.log(data[i].flightNumber);
  //         if (data[i].flightNumber !== fligthtNumber ) {
  //           callback (err, null)
  //         } else {
  //           fs.readFile("./data/passanger.json", 'utf8', (err, data) => {
  //             if (err) {
  //               callback (err, null)
  //             } else {
  //               data = JSON.parse(data)
  //               for (letj = 0; j < data.length; j++) {
  //                 let ticket = data[j]
  //                 //console.log(ticket)  
  //               }
  //             }
  //           })
  //         }
  //       }
  //     }
  //   })

  // }

  // PART 2
  static save(data, cb){ 
    // note jika ingin diganti atau mau menambahkan method boleh untuk method save ini
    // yang digunakan untuk writeFile
    data = data.map( el => {
      let data2 = { 
        flightNumber: el.flightNumber,
        airlineName: el.airlineName,
        origin: el.origin,
        destination: el.destination,
        

      }
    })
    fs.writeFile("./data/passanger.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        cb (err)
      } else {
        cb (null)
      }
    })
  }

  static addPassenger(flightNumber, name, gender, seatNumber, createTicket, cb) { // buyTicket
    Model.readPlanes((err, data, cb) => {
      if (err) {
        cb (err, null)
      } else {
        let id = data[data.length-1].id + 1
        let newPassenger = Factory.createPassenger(id, name, gender, ticket)
        data.push(newPassenger)
        Model.saveJSON(data, (err) => {
          if (err) {
            cb (err)
          } else {
            cb (null, newPassenger)
          }
        })
      }
    })
  }

  static findPassenger() { // ticketInfo

  }
  static updateTicket() {

  }
  static deleteTicket() {

  }
  static showPassenger() {

  }
}

module.exports = Model