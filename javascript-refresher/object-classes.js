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
    name = "max"
    age = 30

    greet() {
        console.log("Hi!")
        console.log(this.age, this.name)
    }
}

const user1 = new User("max", 30)
console.log(user1)
user1.greet()
