import { useState } from "react"

import reactImg from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS, EXAMPLES } from "./constant"

import CoreConcept from "./components/CoreConcept"
import Header from "./components/Header"
import TabButton from "./components/TabButton"

function App() {
    const [selectedTopic, setSelectedTopic] = useState("")

    const handleSelect = (selectedButton) => {
        setSelectedTopic(selectedButton)
    }

    return (
        <div>
            <Header img={reactImg} />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((concept) => (
                            <CoreConcept concept={concept} key={concept.title} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onSelect={() => handleSelect("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "jsx"}
                            onSelect={() => handleSelect("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "props"}
                            onSelect={() => handleSelect("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "state"}
                            onSelect={() => handleSelect("state")}
                        >
                            State
                        </TabButton>
                    </menu>
                    {!selectedTopic && <p>Click on the tabs to see the examples.</p>}
                    {selectedTopic && (
                        <article>
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </article>
                    )}
                </section>
            </main>
        </div>
    )
}

export default App
