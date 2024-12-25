import { useState } from "react";
import menu from "./data";
import Items from "./Items";
import Catagory from "./Catagory";
import Menus from "./Menus";
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
const App = () => {
 const [menuItems , setMenuItems ] =useState(menu);
 const [categories, setCategories] = useState(allCategories);
console.log(categories);

const FilterMenus = (category)=>{
// console.log("catagory : ", category);
 const newMenus =  category ? menu.filter( (item) => {
  return item.category == category;
  }) : menu;

  setMenuItems(newMenus);
}

  return (<main>
<div className='title'>
<h2>Menu Starter</h2>
</div>

<Catagory    categories = {categories} FilterMenus ={FilterMenus}/>
<Menus menuItems ={menuItems} />
   

  </main>)

};
export default App;
