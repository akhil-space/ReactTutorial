import Duties from "./Duties";

const JobInfo = ({ jobs, currentIndex }) => {

    const { id, company, dates, title, duties } = jobs[currentIndex];
    console.log("jobs : ", jobs[currentIndex]);



    return  <div className="job-info">
    <h3>{title}</h3>
    <span className='job-company'>{company}</span>
    <p className='job-date'>{dates}</p>
    <Duties  duties={duties}/>

   </div>
   
}

export default JobInfo;