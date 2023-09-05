import { Link } from "react-router-dom"
import { getBgColor } from "../utilities/getBgColor"

export function PokemonDisplay({ img, name, types, id }) {
  return (
    <Link to={`PokemonDetails/${id}`}>
      <article className="card" style={{backgroundColor: getBgColor(types[0])}}>
      <h3 className="cap">{name}</h3>
      <img width='250' src={img} 
      alt="photo of the pokemon recieved from api" />
      <span>#{id}</span>
    </article>
    </Link>
  )
  
}
