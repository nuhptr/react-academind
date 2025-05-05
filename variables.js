let userMessage = "Hello World"
const userName = "John Doe"

// If you change the value of userMessage, it will throw an error
userMessage = "Hello Universe" // This will work because userMessage is declared with let
// userName = "Jane Doe" // This will throw an error because userName is declared with const

console.log(userName) // This will work because userName is declared with const
console.log(userMessage)
