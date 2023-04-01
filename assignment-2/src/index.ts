abstract class Vehicle {
    protected make: string
    protected model: string
    protected year: number
    protected rented: boolean

    constructor(make: string, model: string, year: number, rented = false) {
        this.make = make
        this.model = model
        this.year = year
        this.rented = rented
    }

    getMake(): string {
        return this.make
    }

    getModel(): string {
        return this.model
    }

    getYear(): number {
        return this.year
    }

    isRented(): boolean {
        return this.rented
    }

    setRented(rented: boolean): void {
        this.rented = rented
    }

    abstract rentalRate(): number

    rent(): void {
        if (this.rented) {
            console.log(`${this.make} ${this.model} ${this.year} is already rented.`)
        } else {
            this.rented = true
            console.log(`${this.make} ${this.model} ${this.year} has been rented.`)
        }
    }

    return(): void {
        if (this.rented) {
            this.rented = false
            console.log(`${this.make} ${this.model} ${this.year} has been returned.`)
        } else {
            console.log(`${this.make} ${this.model} ${this.year} was not rented.`)
        }
    }
}

class Car extends Vehicle {
    private numDoors: number
    private numSeats: number

    constructor(make: string, model: string, year: number, numDoors: number, numSeats: number, rented = false) {
        super(make, model, year, rented)
        this.numDoors = numDoors
        this.numSeats = numSeats
    }

    rentalRate(): number {
        // Implement rental rate calculation for cars here
        return 500
    }

    getNumDoors(): number {
        return this.numDoors
    }

    getNumSeats(): number {
        return this.numSeats
    }
}

class Truck extends Vehicle {
    private cargoCapacity: number

    constructor(make: string, model: string, year: number, cargoCapacity: number, rented = false) {
        super(make, model, year, rented)
        this.cargoCapacity = cargoCapacity
    }

    rentalRate(): number {
        return 1200
    }

    getCargoCapacity(): number {
        return this.cargoCapacity
    }
}

class Motorcycle extends Vehicle {
    private engineSize: number

    constructor(make: string, model: string, year: number, engineSize: number, rented = false) {
        super(make, model, year, rented)
        this.engineSize = engineSize
    }

    rentalRate(): number {
        return 200
    }

    getEngineSize(): number {
        return this.engineSize
    }
}

const car1 = new Car('Suzuki', 'Swift', 2016, 4, 5, false)
console.log('CAR ==>', car1.rent()) // You have successfully rented Honda Civic.
console.log('CAR ==>', car1.rent()) // Honda Civic is already rented.
console.log('CAR ==>', car1.return()) // You have successfully returned Honda Civic.

const truck1 = new Truck('Ford', 'F-150', 2018, 1000, false)
console.log('TRUCK ==>', truck1.rent()) // You have successfully rented Ford F-150.
console.log('TRUCK ==>', truck1.return()) // Ford F-150 2018 has been returned

const motorcycle1 = new Motorcycle('Honda', 'CG-125', 2019, 125, false)
console.log('CAR ==>', motorcycle1.rent()) // You have successfully rented Honda CG-125.
console.log('CAR ==>', motorcycle1.rent()) // Honda CG-125 is already rented.
console.log('CAR ==>', motorcycle1.return()) // You have successfully returned Honda CG-125.