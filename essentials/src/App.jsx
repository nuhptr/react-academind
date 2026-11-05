// Importing image using name alias
// import coreImage from "./assets/core-concept.png"

import Header from "./components/header"
import Example from "./components/main"

const App = () => {
    return (
        <main className="mx-auto w-content max-w-app">
            <Header />
            <Example />
        </main>
    )
}

export default App
