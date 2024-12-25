import { useState } from "react";
const SearchForm = ()=>{
const [search, setSearch] =useState();

const handleSubmit = ()=>{
    console.log(search);
    
}
return <>
<input type="text" placeholder="search cocktails "  onChange={(e)=> setSearch(e.target.value)}/>
<button onClick={handleSubmit}> search</button>

</>

}

export default SearchForm;