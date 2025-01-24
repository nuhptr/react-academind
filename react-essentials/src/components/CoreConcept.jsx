import "./CoreConcept.css"

export default function CoreConcept({ concept }) {
    return (
        <li>
            <img src={concept.img} alt={concept.title} />
            <h3>{concept.title ?? "Default Title"}</h3>
            <p>{concept.description}</p>
        </li>
    )
}
