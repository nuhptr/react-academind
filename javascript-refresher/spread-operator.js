const learn = ["JavaScript", "React", "Node.js"]
const learnMore = ["TypeScript", "GraphQL", "Deno"]

// Spread operator is used to expand an array into individual elements
const learnAll = [...learn, ...learnMore] // ["JavaScript", "React", "Node.js", "TypeScript", "GraphQL", "Deno"]
console.log(learnAll)

const user = {
    name: "John",
    age: 30,
}
const extendedUser = {
    isAdmin: true,
    ...user,
}
console.log(extendedUser) // { isAdmin: true, name: "John", age: 30 }
