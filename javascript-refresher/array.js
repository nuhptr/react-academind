const hobbies = ["Sports", "Cooking", "Reading"]
console.log(hobbies)
console.log(hobbies[0]) // Sports

hobbies.push("Programming")
console.log(hobbies) // ["Sports", "Cooking", "Reading", "Programming"]

const index = hobbies.findIndex((hobby) => hobby === "Cooking")
console.log(index) // 1

hobbies.map((hobby) => hobby.toUpperCase() + "!") // ["SPORTS!", "COOKING!", "READING!", "PROGRAMMING!"]
