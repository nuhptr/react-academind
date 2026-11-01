const hobbies = ["sports", "cooking", "reading"]
const user = { name: "Max", age: 30 }

const newHobbies = [...hobbies, "gaming"]
const copiedUser = { ...user, age: 31 }

console.log(newHobbies)
console.log(copiedUser)

console.log("--------------------------------")

const extendedUser = {
    isAdmin: true,
    ...user,
    hobbies: [...hobbies, "gaming"],
}
console.log(extendedUser)
