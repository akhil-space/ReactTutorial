import { useState } from 'react';
import questions from './data'

const App = () => {




  return <div className="main-container">
    <h2>Questions</h2>
     <div className="questions">
     {
      questions.map((question) =>{
        return <Quest  key={question.id} {...question} />
      })
     }

     </div>


  </div>;
};
export default App;


const Quest  = ({id , title , info})=>{
   const [anser , setAnser] =useState(false);

  return <><div className='single-question' id={id}>
    <h2 className='title'> {title}</h2> 
    <button className='btn' onClick={ ()=>{ setAnser(!anser) }}> {anser? "--" : "+"} </button>

    <p className="question-info"> {anser ? info : ""}</p>
    </div></>
}
