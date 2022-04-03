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
    
  }

  static checkSeats(){

  }

  // PART 2
  static buyTicket(){

  }
  static ticketInfo(){

  }
  static changeTicket(){

  }
  static cancelTicket(){

  }
  static showPassenger(){

  }
}

module.exports = Controller