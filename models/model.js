"use strict"
const { log } = require("console")
const {Plane, 
  Passenger, 
  VIP,
  Business,
  Economy,
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
        let result = [];
        for (let i = 0; i < data.length; i++) {
          let instance = new Passenger(data[i].id, data[i].name, data[i].gender, data[i].ticket)
          result.push(instance)
        }
        callback (null, result);
      }
    })
  }

  static checkSeat(fligthtNumber, callback) {
    let listPassengerInFlightNumber = [];
    let result;
    let selectedPlane;

    fs.readFile("./data/plane.json", 'utf8', (err, listPlane) => {
      if (err) {
        callback (err, null)
      } else {
        listPlane = JSON.parse(listPlane)
        for (let i = 0; i < listPlane.length; i++) {
          if (listPlane[i].flightNumber == fligthtNumber ) {
            selectedPlane = listPlane[i];
          }
        }
      }
    })

    fs.readFile("./data/passanger.json", 'utf8', (err, listPassenger) => {
      if (err) {
        callback (err, null)
      } else {
        listPassenger = JSON.parse(listPassenger)
        for (let j = 0; j < listPassenger.length; j++) {
          if (
            selectedPlane.airlineName == listPassenger[j].ticket.airlineName &&
            selectedPlane.origin == listPassenger[j].ticket.origin &&
            selectedPlane.destination == listPassenger[j].ticket.destination 
          ) {
            const newTicket = new Factory.Economy();
            console.log(newTicket, "dsdasdasd");

            // if (listPassenger[j].ticket.type == "Economy") {
            //   newTicket = new Economy(listPassenger[j].ticket.airlineName, "Economy", listPassenger[j].ticket.origin, listPassenger[j].ticket.destination, listPassenger[j].ticket.seatNumber)
            // } else if (listPassenger[j].ticket.type == "Business") {
            //   newTicket = new Business(listPassenger[j].ticket.airlineName, "Business", listPassenger[j].ticket.origin, listPassenger[j].ticket.destination, listPassenger[j].ticket.seatNumber)
            // } else {
            //   newTicket = new VIP(listPassenger[j].ticket.airlineName, "VIP", listPassenger[j].ticket.origin, listPassenger[j].ticket.destination, listPassenger[j].ticket.seatNumber)
            // }
            let newPassenger = new Passenger(listPassenger[j].id, listPassenger[j].name, listPassenger[j].gender, newTicket)
            listPassengerInFlightNumber.push(newPassenger);
          }
        }
        result = new Plane(selectedPlane.flightNumber, selectedPlane.airlineName, selectedPlane.origin, selectedPlane.destination, listPassengerInFlightNumber)
        callback (null, result);
      }
    })
  }

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