import { useEffect, useState } from 'react'
import './App.css'
import BtnContainer from './component/BtnContainer'
import JobInfo from './component/JobInfo'

const url = 'https://www.course-api.com/react-tabs-project';
function App() {
 
const [isLoading , setLoding]=useState(true);
const [jobs, setJobs]=useState([]);
const [currentIndex , setCurrentIndex] = useState(2);

const fetchData = async ()=>{


    const response= await fetch(url);
    const data = await response.json();
console.log( "responce : ", response);

    console.log( "data ", data);
    setJobs(data)
    setLoding(false);    
}

useEffect( ()=>{
fetchData();
}, [])

if(isLoading){

  return <div className="container-loading">
    <h3>loading</h3>
  </div>
}


  return (
    <>  
      <BtnContainer  jobs={jobs} />

      <JobInfo  jobs={jobs} currentIndex= {currentIndex}/>
    </>
  )
}

export default App
