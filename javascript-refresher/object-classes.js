const user = {
    name: "max",
    age: 34,
    greet() {
        console.log("Hello")
        console.log(this.name, this.age)
    },
}

console.log(user.age)
user.greet()

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log("Hi!")
        console.log(this.age)
    }
}

const user1 = new User("max", 30)
console.log(user1)
