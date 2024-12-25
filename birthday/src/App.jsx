import { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
       {
        people.length <1 ? <button
        type='button'
        className='btn btn-block'
        onClick={() => setPeople(data)}
      >
       reset
      </button>: <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
       }
      </section>
    </main>
  );
}

export default App;