// import { Outlet } from "react-router-dom"

import axios from "axios"
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const loader = async () => {
    const searchTerm = 'margarita';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  console.log("fetching cocktails :" , response);
   
  
  return { drinks: response.data.drinks, searchTerm };
  };


const Landing = ()=>{

 const {drinks , searchTerm} =   useLoaderData();
 console.log(drinks);
    const fetchSomething = ()=>{
        try{

            const response =axios.get('/someurl');
            console.log(response.data);
        }catch(err){
console.error(err);

        }
    }

    // useEffect(()=>fetchSomething() ,[])
     
    return <div>
       
        {/*  <h1>I am landing page</h1><Outlet/> */}
        <SearchForm />
        <CocktailList drinks ={drinks}/>
    </div>
}

export default Landing