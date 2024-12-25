import { Link } from "react-router-dom";

const CocktailCard =(drink)=>{

    const { image, name, id, info, glass } = drink;

return <>
 <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>

        <Link to={`/cocktail/${id}`} className='btn'>
          details
        </Link>
      </div> 
</>
}

export default CocktailCard;