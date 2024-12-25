const Catagory = ({catagory , FilterMenus}) =>{

    
console.log("catagory :", catagory);


    return (
        <div className="btn-container"> 
        {
   catagory.map((cat) =>{

    return <button className="btn"  key={cat} onClick={FilterMenus(cat)}> {cat}</button>
   } )
        }
        </div>
    )
}


export default Catagory;