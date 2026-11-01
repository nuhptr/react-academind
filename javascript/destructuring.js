const userNameDate = ["Jhon Doe", "2023-10-01"]

const [name, date] = userNameDate
console.log(name) // Jhon Doe
console.log(date) // 2023-10-01

console.log("=====================================")

const userObject = {
    name: "Jhon Doe",
    date: "2023-10-01",
    occupation: "Software Engineer",
}

const { name: userName, date: userDate, occupation } = userObject
console.log(userName) // Jhon Doe
console.log(userDate) // 2023-10-01
console.log(occupation) // Software Engineer
