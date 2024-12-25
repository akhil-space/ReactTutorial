import Items from "./Items";
const Menus = ({menuItems })=>{

    console.log("menu items : ", menuItems);
    
  
  return (<div className='menus'>
   {/* <button className="menu-btn" onClick={() =>{FilterMenus()}}> All</button>
   <button className="menu-btn" onClick={()=>{FilterMenus('breakfast')}}> Break Fast</button>
   <button className="menu-btn" onClick={()  =>{ FilterMenus('lunch')}}> lunch</button>
   <button className="menu-btn" onClick={()=> FilterMenus('shakes')}> shakes</button> */}
  <div className="section-center"> 
  {
   menuItems.map((item) =>{ return <Items key={item.id} {...item} />} )
  }
  </div>
  
  
  </div>)
  
  }
  
  export default Menus;