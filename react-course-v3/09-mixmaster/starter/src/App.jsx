import  {createBrowserRouter, RouterProvider}from 'react-router-dom';

import { Landing , HomeLayout , About} from './pages';
const router =createBrowserRouter([ {
  path:'/',
  element :<Landing/>
},
{
  path:'/about',
  element :<About/>
},


])
const App = () => {
  return <RouterProvider  router={router}/>
};
export default App;
