// Activity 1 
const person = {
    name: "Ben",
    age: 20,
    sayHello() {
        return `Hi, I'm ${this.name}`
    }
}

// Activity 2

let pet = {
    name: "Alan",
    typeOfPet: "Cat",
    age: 6,
    colour: "black",
    eat() {
        return `${this.name} is eating.`
    },
    drink() {
        return `${this.name} is drinking.`
    }
}

console.log(pet.drink())

// Activity 3
