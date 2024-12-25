import  {createBrowserRouter, RouterProvider}from 'react-router-dom';

import { Landing , HomeLayout , About, NewsLetter, Cocktails} from './pages';
import { loader as landingLoader } from './pages/Landing.jsx'
import { loader as singleCocktailLoader } from './pages/Cocktails.jsx';
const router =createBrowserRouter([ {
  path:'/',
  element :<HomeLayout/>,
  errorElement:<Error/>,
  children: [
    {
      index: true, 
      loader: landingLoader,
      errorElement: <h2>There was an error...</h2>,
      element :<Landing/>,
      
   
    },
    {
      path:'about',
      loader: () => {
        // do stuff here
      },
      element :<About/>
    },
    {
      path:'newsletter', 
      element :<NewsLetter/>
    },
    {
      path:'cocktails',
      element :<Cocktails/>
    },
    {
      path:'newsletter',
      element :<About/>
    },

  ]
},



])
const App = () => {
  return <RouterProvider  router={router}/>
};
export default App;
