"use strict"
const Controller = require('./controllers/controller.js')

// Good luck ...
const argv = process.argv
// console.log(argv)

 switch(argv[2]) {
   case "help":
     Controller.help();
     break
   case "planeList":
     Controller.planeList();
     break
   case "passenggerList":
     Controller.passengerList(argv[3]);
     break
   case "checkSeats":
     Controller.checkSeats(argv[3]);
     break
   case "buyTicket":
     Controller.buyTicket(argv[3]);
     break
   case "ticketInfo":
     Controller.ticketInfo(argv[3]);
     break
   case "changeTicket":
     Controller.changeTicket(argv[3]);
     break
   case "cancelTicket":
     Controller.cancelTicket(argv[3]);
     break
   case "showPassenger":
     Controller.showPassenger(argv[3]);
     break
 }