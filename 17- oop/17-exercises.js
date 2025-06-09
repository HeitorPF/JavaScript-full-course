class Car {
  #brand
  #model
  speed
  isTrunkOpen

  constructor(carDetails) {
    this.#brand = carDetails.brand
    this.#model = carDetails.model
    this.speed = 0
    this.isTrunkOpen = false
  }

  go() {
    if(!this.isTrunkOpen){
      this.speed += 5
      console.log(`speed up: ${this.speed}`)
    }
      
    else
      console.log(`You can't go, the trunk is open`)
  }

  brake() {
    this.speed -= 5
    console.log(`braking: ${this.speed}`)
  }

  openTrunk() {
    if(this.speed === 0){
      this.isTrunkOpen = true
      console.log('opening trunk')
    }
    else
      console.log(`the car is moving, you can't open the trunk`)
  }

  closeTrunk() {
    this.isTrunkOpen = false
    console.log('closing trunk')
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, ${this.speed} km/h | is trunk open? ${this.isTrunkOpen}`)
  }
}

class RaceCar extends Car{
  acceleration

  constructor(carDetails) {
    super(carDetails)
    this.acceleration = carDetails.acceleration
  }

  go() {
    this.speed += this.acceleration
  }

  openTrunk() {
    console.log('do not have trunk')
  }

  closeTrunk() {
    console.log('do not have trunk')
  }
}

const car1 = new Car({brand: 'toyota',model: 'Corolla'})
const car2 = new RaceCar({brand: 'Tesla',model: 'Model', acceleration: 20})

car1.openTrunk()
car1.go()
car1.closeTrunk()
car1.go()
car1.openTrunk()


car2.openTrunk()
car2.go()
car2.closeTrunk()
car2.go()
car2.openTrunk()

car1.displayInfo()
car2.displayInfo()

