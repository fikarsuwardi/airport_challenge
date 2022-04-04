"use strict"
const Model = require('../models/model')
const View = require('../views/view')

// Tambahkan parameter sesuai kebutuhanmu

class Controller {
  // PART 1
  static help(){
    View.showCommandList()
  }

  static planeList(){
    Model.readPlanes((err, result) => {
      if(err) {
        View.showError(err)
      } else {
        View.showPlaneList(result)
      }
    })
  }

  static passengerList() {
    Model.readPassengers((err, result) => {
      if(err) {
        View.showError(err)
      } else {
        View.showPassengerList(result)
      }
    })
  }

  static checkSeats(flightNumber){
    Model.checkSeat(flightNumber,(err, result) => {
      if(err) {
        View.showError(err);
      } else {
        View.showCheckSeats(result);
      }
    })
  }

  // PART 2
  static buyTicket(buyTicket) {
    Model.addPassenger(buyTicket, (err, result) => {
      if(err) {
        View.showError(err);
      } else {
        View.showBuyTicket(result);
      }
    }) 
  }

  static ticketInfo() {
    Model.findPassenger(buyTicket, (err, result) => {
      if(err) {
        View.showError(err);
      } else {
        View.showTicketInfo(result);
      }
    }) 
  }

  static changeTicket() {
    Model.addPassenger(buyTicket, (err, result) => {
      if(err) {
        View.showError(err);
      } else {
        View.showBuyTicket(result);
      }
    }) 
  }

  static cancelTicket() {
    Model.addPassenger(buyTicket, (err, result) => {
      if(err) {
        View.showError(err);
      } else {
        View.showBuyTicket(result);
      }
    }) 
  }

  static showPassenger() {
    Model.addPassenger(buyTicket, (err, result) => {
      if(err) {
        View.showError(err);
      } else {
        View.showBuyTicket(result);
      }
    }) 
  }
}

module.exports = Controller