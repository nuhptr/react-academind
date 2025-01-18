function greetUser(userName, message = "Hello") {
    console.log(`Hello ${userName}, ${message}`)
}

function add(a, b) {
    return a + b // return the result of the operation
}

greetUser("John", "How are you?") // Hello John, How are you?
greetUser("Jane") // Hello Jane, Hello

console.log(add(1, 2)) // 3
