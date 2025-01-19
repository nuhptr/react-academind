function handleTimeout() {
    console.log("Timeout!")
}

function handleTimeoutWithParameter(message) {
    console.log(message)
}

setTimeout(handleTimeout, 1000)
setTimeout(handleTimeoutWithParameter, 2000, "Timeout with parameter!")
setTimeout(() => console.log("Timeout with arrow function!"), 3000)

const greeter = (greetFn) => {
    greetFn()
}

greeter(() => console.log("Hello!"))
