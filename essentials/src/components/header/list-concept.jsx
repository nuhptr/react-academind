import "./list-concept.css"

const ListConcept = ({ img, title, description }) => {
   return (
      <li className="list-concept">
         <img src={img} alt={title} />
         <h3>{title}</h3>
         <p>{description}</p>
      </li>
   )
}

export default ListConcept
