const user = {
    name: "max",
    age: 23,
    greet() {
        console.log("Hello " + this.name)
    },
}

console.log(user)
user.greet()

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log("Hello!")
    }
}

const user1 = new User("Manuel", 23)
console.log(user1)
