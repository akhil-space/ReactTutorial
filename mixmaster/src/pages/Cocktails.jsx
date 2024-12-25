import { useLoaderData, Navigate  } from "react-router-dom";
import axios from "axios";
export const loader = async () => {
    const searchTerm = 'margarita';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  console.log("fetching cocktails :" , response);
   
  
  return { drinks: response.data.drinks, searchTerm };
  };


const Cocktails = ()=>{
    return <h1>Cocktails page</h1>
}

export default Cocktails;