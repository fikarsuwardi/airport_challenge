"use strict"
const { passengerList } = require('./controllers/controller.js')
const Controller = require('./controllers/controller.js')

// Good luck ...

const command = process.argv[2]
const input = process.argv.slice(3)
// console.log(argv)

 switch(command) {
   case "help":
     Controller.help();
     break
   case "planeList":
     Controller.planeList();
     break
   case "passengerList":
     Controller.passengerList();
     break
   case "checkSeats":
     Controller.checkSeats(input[0]);
     break
   case "buyTicket":
     Controller.buyTicket(input[0], input[1], input[2], input[3], input[4]);
     break
   case "ticketInfo":
     Controller.ticketInfo(input[0]);
     break
   case "changeTicket":
     Controller.changeTicket(input[0], input[1], input[2]);
     break
   case "cancelTicket":
     Controller.cancelTicket(input[0]);
     break
   case "showPassenger":
     Controller.showPassenger(input[0]);
     break
 }