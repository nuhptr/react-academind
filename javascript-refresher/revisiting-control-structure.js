const password = prompt("Enter your password: ")

if (password === "hello") console.log("Hello works!")
else if (password === "world") console.log("World works!")
else alert("Access denied!")

const math = [1, 2, 3, 4, 5]
for (const number of math) {
    console.log(number) // 1, 2, 3, 4, 5
}
