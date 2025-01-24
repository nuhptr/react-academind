import "./Header.css"

const reactDescriptions = ["Declarative", "Component-Based", "Learn Once, Write Anywhere"]

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1))
}

export default function Header({ img }) {
    const description = reactDescriptions[getRandomInt(2)]

    return (
        <header>
            <img src={img} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{description} concepts you will need for almost any app you are going to build!</p>
        </header>
    )
}
