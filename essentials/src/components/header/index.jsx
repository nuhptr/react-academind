// Dummy data for dynamic content
import ListConcept from "./list-concept.jsx"

import { CORE_CONCEPTS } from "../../constant/data.js"

const Header = () => {
    return (
        <header className="my-8 text-center sm:mx-4 sm:my-8 md:mx-8 lg:mx-12">
            <h2 className="mb-4 text-center font-roboto-condensed text-xl font-bold text-heading sm:mb-6 sm:text-2xl">
                Core Concepts
            </h2>
            <section className="grid grid-cols-1 gap-x-4 gap-y-8 rounded-md bg-concept-panel p-4 shadow-concept-panel sm:grid-cols-2 sm:p-6 lg:grid-cols-4 lg:gap-x-6 lg:p-8">
                {CORE_CONCEPTS.map((concept, index) => (
                    <ul key={index} className="m-0 list-none p-0">
                        <ListConcept
                            img={concept.image}
                            title={concept.title}
                            description={concept.description}
                        />
                    </ul>
                ))}
            </section>
        </header>
    )
}

export default Header
