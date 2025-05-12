const hobbies = ["sports", "cooking", "reading"]
console.log(hobbies[0]) // sports

hobbies.push("coding")
console.log(hobbies) // [ 'sports', 'cooking', 'reading', 'coding' ]

const findIndex = hobbies.findIndex((hobby) => hobby === "sports")
console.log(findIndex) // 0

const map = hobbies.map((hobby) => {
    return { hobby: hobby }
})
console.log(map) // [ 'Hobby: sports', 'Hobby: cooking', 'Hobby: reading', 'Hobby: coding' ]
