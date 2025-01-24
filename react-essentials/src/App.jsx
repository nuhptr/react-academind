import reactImg from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS } from "./constant"

import CoreConcept from "./components/CoreConcept"
import Header from "./components/Header"
import TabButton from "./components/TabButton"

export default function App() {
    return (
        <div>
            <Header img={reactImg} />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept concept={CORE_CONCEPTS[0]} />
                        <CoreConcept concept={CORE_CONCEPTS[1]} />
                        <CoreConcept concept={CORE_CONCEPTS[2]} />
                        <CoreConcept concept={CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton>Components</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    )
}
