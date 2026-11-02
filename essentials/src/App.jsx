// Importing image using name alias
import coreImage from "./assets/core-concept.png"

const data = ["fundamentals", "concepts", "basics", "essentials"]

// Outputing dynamic content value
const getRandomDescription = () => {
   const randomIndex = Math.floor(Math.random() * data.length)
   return data[randomIndex]
}

const Header = () => {
   const description = getRandomDescription()

   return (
      <header>
         <img src={coreImage} alt="Stylized atom" />
         <h1>React Essentials</h1>
         <p>
            {/* Outputing dynamic content value */}
            {description} React concepts you will need for almost any app you are going to build!
         </p>
      </header>
   )
}

const App = () => {
   return (
      <div>
         <Header />
         <main>
            <h2>Time to get started!</h2>
         </main>
      </div>
   )
}

export default App
