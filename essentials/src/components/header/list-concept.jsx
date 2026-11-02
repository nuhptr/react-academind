const ListConcept = ({ img, title, description }) => {
   return (
      <li className="mx-auto w-full max-w-40 text-center">
         <img
            className="inline-block h-16 w-24 align-baseline object-cover"
            src={img}
            alt={title}
         />
         <h3 className="my-2 text-concept-title font-bold">{title}</h3>
         <p className="m-0 font-roboto-condensed text-concept-description">{description}</p>
      </li>
   )
}

export default ListConcept
