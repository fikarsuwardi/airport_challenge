"use strict"

class Plane {
    constructor (flightNumber, airlineName, origin, destinantion) {
        this.flightNumber = flightNumber;
        this.airlineName = airlineName;
        this.origin = origin;
        this.destinantion = destinantion;
    }
}

class Passenger {
    constructor (id, name, gender, ticket,) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.ticket = ticket;
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
}

class Factory {
    static 
}