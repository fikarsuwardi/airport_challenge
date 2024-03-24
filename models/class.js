"use strict"
class Passenger {
    constructor (id, name, gender, ticket,) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.ticket = ticket;
    }
}

class Plane {
    constructor (flightNumber, airlineName, origin, destinantion, listPassenger) {
        this.flightNumber = flightNumber;
        this.airlineName = airlineName;
        this.origin = origin;
        this.destinantion = destinantion;
        this.listPassenger = listPassenger;
    }
}

class Ticket {
    #seatNumber;
    constructor (airlineName, type, origin, destinantion, seatNumber) {
        this.airlineName = airlineName;
        this.type = type;
        this.origin = origin;
        this.destinantion = destinantion;
        this.#seatNumber = seatNumber;
    } 
    get seatNumber () {
        return this.#seatNumber
    }
}

// Masalah 3 tiket menggunakan sifat OOP yaitu Inheritance/pewarisan
class VIP extends Ticket {
    constructor(airlineName, origin, destination, seatNumber) {
        super(airlineName, 'VIP', origin, destination, seatNumber)
    }
}
class Business extends Ticket {
    constructor(airlineName, origin, destination, seatNumber) {
        super(airlineName, 'Bussines', origin, destination, seatNumber)
    }
}
class Economy extends Ticket {
    constructor(airlineName, origin, destination, seatNumber) {
        super(airlineName, 'Economy', origin, destination, seatNumber)
    }
}

class Factory {
    static createPlane(flightNumber, airlineName, origin, destination) {
        return new Plane(flightNumber, airlineName, origin, destination)
    }

    static createPassenger(id, name, gender, ticket) {
        return new Passenger(id, name, gender, ticket)
    }
    
    static createTicket(airlineName, type, origin, destination, seatNumber) {
      if (type === "VIP") {
        return new VIP(airlineName, origin, destination, seatNumber)
      } else if (type === "Business") {
        return new Business(airlineName, origin, destination, seatNumber)
      } else if (type === "Economy") {
        return new Economy(airlineName, origin, destination, seatNumber)
      }
    }
}

module.exports = {Plane, 
    Passenger, 
    Factory
} 