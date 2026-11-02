// Dummy data for dynamic content
import ListConcept from "./list-concept.jsx"

import "./index.css"
import { CORE_CONCEPTS } from "../../constant/data.js"

const Header = () => {
   return (
      <header>
         <h2>Core Concepts</h2>
         <section id="core-concepts">
            {CORE_CONCEPTS.map((concept, index) => (
               <ul>
                  <ListConcept
                     key={index}
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
