import React from 'react';
import { data } from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearList = () =>{
    setPeople([]);
  }
  const resetList = () =>{
    setPeople(data);
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
     {
      people.length < 1 ? ( <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={resetList}
      >
       reset
      </button>) : <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearList}
      >
        clear items
      </button>
     }

      
      
      

    </div>
  );
};

export default UseStateArray;
