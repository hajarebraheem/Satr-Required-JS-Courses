class Vehicle {
    constructor(name, manufactory, id) {
        this.name = name
        this.manufactory = manufactory
        this.id = id
    }
}

class Car extends Vehicle {
    constructor(energyType, ...args) {
        super(...args)
        this.energyType = energyType
    }
}

class AirPlane extends Vehicle {
    constructor(model, ...args) {
        super(...args)
        this.model = model
    }
}

class Employee {
    constructor(name, dateOfBirth, id) {
        this.name = name
        this.dateOfBirth = dateOfBirth
        this.id = id
    }
}

class Driver extends Employee {
    constructor(licenseID, ...args) {
        super(...args)
        this.licenseID = licenseID
    }
}

class Pilot extends Employee {
    constructor(licenseID, ...args) {
        super(...args)
        this.licenseID = licenseID
    }
}

class Reserved {
    constructor(reservationID, vehicleID, employeeID, reservationDate) {
        this.reservationID = reservationID
        this.vehicleID = vehicleID
        this.employeeID = employeeID
        this.reservationDate = reservationDate
    }
}

let reservationID = 1

checkCompatibility = (vehicle, employee) => {
    let reservations = []
    
    if ((vehicle instanceof Car && employee instanceof Driver) 
    || (vehicle instanceof AirPlane && employee instanceof Pilot)) {
        let reservationDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
        let reservation = new Reserved(reservationID, vehicle.id, employee.id, reservationDate)
        reservations.push(reservation)
        reservationID++
    }
    else {
        console.log("There is no compatibility between the employee and the vehicle.");
    }

    const showReservations = reservations.map(element => element)
    console.log(showReservations);
}

let car1 = new Car("Gaz", "A4", "Audi", 11)
let car2 = new Car("Gaz", "Tahoe", "Chevrolet", 12)
let car3 = new Car("Electric", "I-Pace", "Jaguar", 13)

let airPlane1 = new AirPlane("Aircraft", "A321", "Airbus", 21)
let airPlane2 = new AirPlane("Aircraft", "B787", "Boeing", 22)

let driver = new Driver(1111, "Mohammad", "1990/06/14", 11)
let pilot = new Pilot(2211, "Ahmad", "1985/11/18", 21)

checkCompatibility(airPlane1, pilot)
checkCompatibility(car2, driver)